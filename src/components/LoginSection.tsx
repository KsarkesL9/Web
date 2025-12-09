'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Github, Mail } from 'lucide-react';

export function LoginSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full max-w-md px-4"
      >
        <Card className="shadow-lg border-muted-foreground/10 bg-white/60 dark:bg-black/60 backdrop-blur-md">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl font-bold tracking-tight">
              Witaj ponownie
            </CardTitle>
            <CardDescription>
              Wprowadź swoje dane, aby uzyskać dostęp do panelu
            </CardDescription>
          </CardHeader>
          
          <CardContent className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="bg-background/50">
                <Github className="mr-2 h-4 w-4" />
                Github
              </Button>
              <Button variant="outline" className="bg-background/50">
                <Mail className="mr-2 h-4 w-4" />
                Google
              </Button>
            </div>
            <div className="flex items-center gap-4 py-2">
              <span className="h-px flex-1 bg-border" />
              <span className="text-xs uppercase text-muted-foreground">
                Lub kontynuuj emailem
              </span>
              <span className="h-px flex-1 bg-border" />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="imie@przyklad.com" className="bg-background/50" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Hasło</Label>
              <Input id="password" type="password" className="bg-background/50" />
            </div>
          </CardContent>

          <CardFooter className="flex flex-col gap-4">
            <Button className="w-full">Zaloguj się</Button>
            <p className="text-center text-sm text-muted-foreground">
              Nie masz konta?{" "}
              <span className="underline underline-offset-4 hover:text-primary cursor-pointer">
                Zarejestruj się
              </span>
            </p>
          </CardFooter>
        </Card>
      </motion.div>
    </section>
  );
}