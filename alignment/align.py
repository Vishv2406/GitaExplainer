import whisperx
import json
import os
import torch

AUDIO_DIR = "alignment/ch1"
OUTPUT_DIR = "alignment/output"

os.makedirs(OUTPUT_DIR, exist_ok=True)

device = "cpu"

# Load model
model = whisperx.load_model("small", device)

for file in os.listdir(AUDIO_DIR):
    if not file.endswith(".ogg"):
        continue

    audio_path = os.path.join(AUDIO_DIR, file)
    print(f"Processing {audio_path}")

    audio = whisperx.load_audio(audio_path)
    result = model.transcribe(audio, language="sa")

    model_a, metadata = whisperx.load_align_model(
        language_code="sa",
        device=device
    )

    result_aligned = whisperx.align(
        result["segments"],
        model_a,
        metadata,
        audio,
        device
    )

    words = []
    for seg in result_aligned["segments"]:
        for w in seg["words"]:
            words.append({
                "word": w["word"],
                "start": w["start"],
                "end": w["end"]
            })

    out_file = os.path.join(
        OUTPUT_DIR,
        file.replace(".ogg", ".json")
    )

    with open(out_file, "w", encoding="utf-8") as f:
        json.dump(words, f, ensure_ascii=False, indent=2)

print("Alignment complete.")
