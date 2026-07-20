"use client";

import { useState } from "react";
import { Copy, Mail } from "lucide-react";
import { Button } from "./ui";

const encodedAddress = "c3RldmU1MDAwQGdteC5kZQ==";

function decodeAddress() {
  return window.atob(encodedAddress);
}

export function EmailReveal() {
  const [address, setAddress] = useState("");
  const [copied, setCopied] = useState(false);

  if (!address) {
    return (
      <div>
        <Button type="button" onClick={() => setAddress(decodeAddress())}>
          <Mail className="size-4" aria-hidden="true" />
          E-Mail-Adresse anzeigen
        </Button>
        <p className="mt-2 text-xs leading-5 text-forest/55">
          Die Adresse wird zum Schutz vor einfachem automatischem Auslesen erst
          nach einem Klick angezeigt.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap items-center gap-3" data-nosnippet>
      <a
        className="font-bold text-moss underline decoration-moss/30 underline-offset-4"
        href={`mailto:${address}`}
      >
        {address}
      </a>
      <button
        type="button"
        className="inline-flex min-h-10 items-center gap-2 rounded-full border border-forest/15 px-3 text-sm font-bold transition hover:bg-sage/10"
        onClick={async () => {
          await navigator.clipboard.writeText(address);
          setCopied(true);
        }}
      >
        <Copy className="size-4" aria-hidden="true" />
        {copied ? "Kopiert" : "Kopieren"}
      </button>
    </div>
  );
}
