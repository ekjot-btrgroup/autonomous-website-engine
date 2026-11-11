"use client";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface AuroraHeroProps { title: string; subtitle: string; className?: string }

export function AuroraHero({ title, subtitle, className }: AuroraHeroProps) {
  return (
    <section className={cn("relative overflow-hidden bg-zinc-950 text-white py-32 px-6", className)}>
      <div className="absolute inset-0 bg-gradient-to-br from-violet-600/30 via-transparent to-cyan-500/20 blur-3xl" />
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative mx-auto max-w-4xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-1 text-sm text-violet-300">
          <Sparkles className="h-4 w-4" /> New: launch week
        </span>
        <h1 className="mt-6 text-5xl font-bold tracking-tight md:text-7xl">{title}</h1>
        <p className="mt-6 text-lg text-zinc-400">{subtitle}</p>
        <div className="mt-10 flex justify-center gap-4">
          <Button size="lg" className="bg-violet-600 hover:bg-violet-500">Get started <ArrowRight className="ml-2 h-4 w-4" /></Button>
          <Button size="lg" variant="outline" className="border-white/20 bg-transparent text-white">Book a demo</Button>
        </div>
      </motion.div>
    </section>
  );
}
