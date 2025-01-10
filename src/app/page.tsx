'use client'
import { useState } from "react";

export default function Home() {
  const [phrase, setPhrase] = useState<string>("Click the button to generate a phrase!");

  const fetchPhrase = async () => {
    try {
      const response = await fetch("/api/phrase");
      const data = await response.json();
      setPhrase(data.phrase);
    } catch (error) {
      console.error("Error fetching phrase:", error);
      setPhrase("An error occurred. Please try again.");
    }
  };

  return (
    <div className="container flex flex-col items-center justify-center min-h-screen py-2 gap-4">
      <h1 className="font-bold text-2xl">Random Phrase Generator</h1>
      <div className="border-2 py-2 px-4">
        <p>{phrase}</p>

      </div>
      <button className="bg-purple-500 rounded py-4 px-6" onClick={fetchPhrase}>
          Generate Phrase
      </button>

    </div>
  );
}