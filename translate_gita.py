import json
import requests
import time

INPUT_FILE = "bhagavad-gita/data/gita_base.json"
OUTPUT_FILE = "bhagavd-gita/data/gita_base_hindi.json"

OLLAMA_URL = "http://localhost:11434/api/generate"
MODEL = "mistral"

def translate_to_hindi(text):
    prompt = f"Translate this into simple, natural Hindi:\n{text}"

    response = requests.post(
        OLLAMA_URL,
        json={
            "model": MODEL,
            "prompt": prompt,
            "stream": False,
        },
    )

    return response.json()["response"].strip()


# Load JSON
with open(INPUT_FILE, "r", encoding="utf-8") as f:
    data = json.load(f)

print("Starting translation...")

for chapter in data:
    for shlok in data[chapter]:
        english = data[chapter][shlok]["translation"]["english"]

        print(f"Translating Chapter {chapter}, Shlok {shlok}...")

        hindi = translate_to_hindi(english)
        data[chapter][shlok]["translation"]["hindi"] = hindi

        time.sleep(0.5)  # prevent overload

# Save new JSON
with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("Translation completed.")
print(f"Saved to: {OUTPUT_FILE}")
