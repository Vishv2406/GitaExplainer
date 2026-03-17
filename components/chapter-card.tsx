"use client"

import React from "react"

import Link from "next/link"
import { cn } from "@/lib/utils"
import { Flame, Book, Lightbulb, Leaf, Heart, Star, Sun, Eye, Crown, Sword, User, Scale, Triangle, Feather } from "lucide-react"

interface ChapterCardProps {
  number: number
  name: string
  icon?: string
  delay?: number
  className?: string
}

const iconMap: Record<string, React.ElementType> = {
  sword: Sword,
  book: Book,
  flame: Flame,
  lightbulb: Lightbulb,
  leaf: Leaf,
  lotus: Flower,
  infinity: Infinity,
  star: Star,
  crown: Crown,
  sun: Sun,
  eye: Eye,
  heart: Heart,
  tree: Tree,
  circle: Circle,
  person: User,
  balance: Scale,
  triangle: Triangle,
  wings: Feather,
}

// Simple icon components for missing ones
function Flower(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2a4 4 0 0 1 0 8 4 4 0 0 1 0-8" />
      <path d="M12 14a4 4 0 0 1 0 8 4 4 0 0 1 0-8" />
      <path d="M2 12a4 4 0 0 1 8 0 4 4 0 0 1-8 0" />
      <path d="M14 12a4 4 0 0 1 8 0 4 4 0 0 1-8 0" />
    </svg>
  )
}

function Infinity(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M18.178 8c5.096 0 5.096 8 0 8-5.095 0-7.133-8-12.739-8-4.781 0-4.781 8 0 8 5.606 0 7.644-8 12.74-8z" />
    </svg>
  )
}

function Tree(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 22v-8" />
      <path d="M12 14L7 9a5 5 0 0 1 10 0l-5 5" />
      <path d="M12 8L9 4a3 3 0 0 1 6 0l-3 4" />
    </svg>
  )
}

function Circle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  )
}

export function ChapterCard({ number, name, icon, delay = 0, className }: ChapterCardProps) {
  const IconComponent = icon ? iconMap[icon] : null

  return (
    <Link
      href={`/chapter/${number}`}
      className={cn(
        "group relative flex flex-col items-center justify-center p-5 md:p-6 rounded-xl bg-card border border-border/30 transition-all duration-500 ease-out",
        "hover:border-primary/40 hover:bg-gradient-to-b hover:from-card hover:to-primary/5",
        "hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1",
        "focus:outline-none focus:ring-2 focus:ring-primary/40 focus:ring-offset-2 focus:ring-offset-background",
        "animate-in fade-in slide-in-from-bottom-4",
        className
      )}
      style={{ animationDelay: `${delay}ms`, animationFillMode: "both" }}
      aria-label={`Read Chapter ${number}: ${name}`}
    >
      {/* Subtle glow on hover */}
      <div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" aria-hidden="true" />
      
      {/* Icon */}
      {IconComponent && (
        <div className="mb-2 text-primary/40 group-hover:text-primary/60 transition-colors duration-300">
          <IconComponent className="h-5 w-5" />
        </div>
      )}

      {/* Number */}
      <span className="relative text-3xl md:text-4xl font-serif font-light text-primary mb-2 transition-transform duration-500 group-hover:scale-110">
        {number}
      </span>

      {/* Name */}
      <h3 className="relative text-center font-serif text-foreground/90 text-xs md:text-sm leading-relaxed group-hover:text-foreground transition-colors duration-300">
        {name}
      </h3>
    </Link>
  )
}
