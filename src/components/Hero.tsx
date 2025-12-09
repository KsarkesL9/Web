'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Terminal } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative flex min-h-[80vh] w-full flex-col items-center justify-center overflow-hidden bg-background px-4 py-24 md:py-32">
      {/* Tło z delikatnym gradientem */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)] opacity-20 dark:bg-black dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]" />

      <div className="container relative z-10 flex flex-col items-center text-center">
        
        {/* Animowany badge na górze */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium text-muted-foreground backdrop-blur-sm"
        >
          <span className="mr-2 flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          System gotowy do działania v1.0
        </motion.div>

        {/* Główny nagłówek z gradientem */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl text-5xl font-bold tracking-tight text-foreground sm:text-7xl"
        >
          Buduj duże aplikacje z <br />
          <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
            Gemini & Next.js
          </span>
        </motion.h1>

        {/* Podtytuł */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl"
        >
          To jest Twój punkt startowy. Nowoczesny stack technologiczny, 
          pełna typizacja TypeScript i baza danych PostgreSQL w kontenerze.
        </motion.p>

        {/* Przyciski */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-10 flex gap-4"
        >
          <Button size="lg" className="gap-2">
            Rozpocznij tutaj <ArrowRight className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg" className="gap-2">
            <Terminal className="h-4 w-4" />
            Dokumentacja
          </Button>
        </motion.div>
      </div>
    </section>
  );
}