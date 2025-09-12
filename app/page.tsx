"use client";
import { Button } from "@noahwright/design";

export default function Page() {
  return (
    <main>
      <h1>Dev Site</h1>
      <ul>
        <li><a href="/about">About Me</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/projects">Projects</a></li>
      </ul>
      <Button onClick={() => console.log("hi")}>Ping</Button>
    </main>
  );
}
