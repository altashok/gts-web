
"use client";

import React from 'react';
import Link from 'next/link';
import { GraduationCap } from 'lucide-react';

export default function EnrollFloatButton() {
  return (
    <Link
      href="/enroll"
      className="fixed bottom-24 right-6 z-50 bg-primary text-primary-foreground p-4 rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95 flex items-center justify-center border-2 border-white/20"
      aria-label="Enroll Now"
    >
      <GraduationCap className="h-8 w-8" />
      <span className="sr-only">Enroll Now</span>
    </Link>
  );
}
