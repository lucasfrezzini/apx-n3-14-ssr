"use client";

import Logo from "@/components/Logo";
import Link from "next/link";
const base_url = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <Logo />
        <p className="text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          This is a <strong>Next.js</strong> Server Side Rendering Project for
          Level 3 in{" "}
          <a className="underline" target="_blank" href="https://apx.school/">
            <strong>APX.school Academy</strong>
          </a>
        </p>
        <p className="flex flex-col justify-between gap-4 text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <Link
            className="underline bg-[#ff0] text-black py-2 px-4"
            href={`${base_url}/products/5/ssr`}
          >
            <strong>SSR Fetching</strong>
          </Link>
          <Link
            className="underline bg-[#ff0] text-black py-2 px-4"
            href={`${base_url}/products/10/ssg`}
          >
            <strong>SSG Fetching</strong>
          </Link>
          <Link
            className="underline bg-[#ff0] text-black py-2 px-4"
            href={`${base_url}/products/8/isg`}
          >
            <strong>ISG Fetching</strong>
          </Link>
        </p>

        <p className="text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          Check the repo in{" "}
          <a
            className="underline"
            target="_blank"
            href="https://github.com/lucasfrezzini/apx-n3-14-ssr"
          >
            <strong>Github here</strong>
          </a>{" "}
          ◁
        </p>
      </main>
    </div>
  );
}
