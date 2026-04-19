"use client";
import { cn } from "@/lib/utils";
import React from "react";

export const Dialog = ({ open, onClose, children, className }: { open: boolean; onClose: () => void; children: React.ReactNode; className?: string }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4" onClick={onClose}>
      <div className={cn("w-full max-w-md rounded-xl bg-white shadow-lg p-6 relative animate-in fade-in zoom-in-95 duration-200", className)} onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition">✕</button>
        {children}
      </div>
    </div>
  );
};