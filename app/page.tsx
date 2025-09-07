"use client";
import { Button } from "@noahwright/design";

export default function Page() {
  return (
    <main>
      <h1>Dev Site</h1>
      <Button onClick={() => console.log("hi")}>Ping</Button>
    </main>
  );
}
