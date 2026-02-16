"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-white text-black">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold mb-8">Quiz App</h1>
      </div>

      <div className="relative flex place-items-center mb-12">
        <p className="text-xl text-center max-w-2xl">
          Test your knowledge with our interactive quizzes.
          JavaScript, Web Fundamentals, and more!
        </p>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-1 lg:text-left">
        <div className="flex justify-center gap-4">
          <Link href="/quizzes">
            <Button size="lg">Get Started</Button>
          </Link>
          <Link href="/login">
            <Button variant="outline" size="lg">Login</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
