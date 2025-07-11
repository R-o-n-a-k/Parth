// components/SkillsCodeBlock.js
"use client";
import { useState } from "react";
import { FiCopy } from "react-icons/fi";

export default function SkillsCodeBlock() {
  const [copied, setCopied] = useState(false);

  const skillsCode = `const skills = {
  "Languages & Frameworks": ["Kotlin", "Java", "XML", "Android SDK"],
  "Architecture & Patterns": ["MVVM", "MVP", "Coroutines", "LiveData", "Dependency Injection", "Data Binding", "Clean Architecture"],
  "Testing": ["Espresso", "JUnit", "Mockito"],
  "Tools & Platforms": ["Android Studio", "Firebase", "Retrofit", "Room Database"],
  "Libraries & SDKs": ["Google APIs (Crashlytics, Maps, Push)", "Facebook SDK", "YouTube SDK", "ZXing (Barcode)", "Glide/Picasso"],
  "Security": ["OWASP", "App-level encryption & decryption", "HTTPS", "ProGuard"],
  "Other": ["Deep Linking", "Localization", "QR/Barcode integration", "Accessibility (TalkBack)"]
};`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(skillsCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="relative bg-[#0f172a] text-gray-100 rounded-md p-4 overflow-auto text-sm font-mono leading-relaxed border border-[#9B5DE5] max-h-[400px] custom-scrollbar">
      <pre>
        <code>{skillsCode}</code>
      </pre>
      <button
        onClick={handleCopy}
        className="absolute z top-2 right-2 p-2 rounded hover:bg-[#1e1b2f] transition"
        title="Copy code"
      >
        <FiCopy className="w-5 h-5 text-[#9B5DE5]" />
      </button>
      {copied && (
        <div className="absolute top-2 right-12 text-xs text-[#9B5DE5]">
          Copied!
        </div>
      )}
    </div>
  );
}
