"use client";

import { useState } from "react";
import { WA_NUMBER } from "@/lib/constants";

interface FormStrings {
  label: string;
  name: string;
  phone: string;
  pickup: string;
  type: string;
  submit: string;
  successTitle: string;
  successText: string;
  newRequest: string;
  types: readonly string[];
  introMessage: string;
  fieldLabels: {
    name: string;
    phone: string;
    date: string;
    type: string;
    pickup: string;
  };
}

export function ContactForm({ strings }: { strings: FormStrings }) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ nom: "", phone: "", date: "", type: "", pickup: "" });
  const today = new Date().toISOString().split("T")[0];

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const lines = [
      strings.introMessage,
      "",
      `${strings.fieldLabels.name} ${form.nom}`,
      `${strings.fieldLabels.phone} ${form.phone}`,
      `${strings.fieldLabels.date} ${form.date}`,
      `${strings.fieldLabels.type} ${form.type}`,
      `${strings.fieldLabels.pickup} ${form.pickup}`,
    ];
    const msg = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, "_blank");
    setSent(true);
  }

  if (sent) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-3 rounded-[1.6rem] border border-[#C9A84C]/30 bg-white/5 p-8 text-center">
        <svg viewBox="0 0 24 24" fill="none" stroke="#4CAF7D" strokeWidth="1.5" className="h-10 w-10">
          <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
        <p className="font-title text-2xl text-[#F7F3EE]">{strings.successTitle}</p>
        <p className="text-sm text-white/60">{strings.successText}</p>
        <button onClick={() => setSent(false)} className="mt-2 text-xs text-white/40 underline underline-offset-4">
          {strings.newRequest}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 rounded-[1.6rem] border border-white/10 bg-white/5 p-6">
      <p className="text-[11px] uppercase tracking-[0.18em] text-[#C9A84C]">{strings.label}</p>

      <div className="flex flex-col gap-1">
        <label htmlFor="form-nom" className="text-[11px] uppercase tracking-[0.12em] text-white/40">
          {strings.fieldLabels.name}
        </label>
        <input
          id="form-nom"
          type="text"
          placeholder={strings.name}
          required
          value={form.nom}
          onChange={e => setForm(f => ({ ...f, nom: e.target.value }))}
          className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-[#F7F3EE] placeholder-white/30 outline-none transition focus:border-[#C9A84C]/50"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="form-phone" className="text-[11px] uppercase tracking-[0.12em] text-white/40">
          {strings.fieldLabels.phone}
        </label>
        <input
          id="form-phone"
          type="tel"
          placeholder={strings.phone}
          required
          value={form.phone}
          onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
          className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-[#F7F3EE] placeholder-white/30 outline-none transition focus:border-[#C9A84C]/50"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="form-date" className="text-[11px] uppercase tracking-[0.12em] text-white/40">
          {strings.fieldLabels.date}
        </label>
        <input
          id="form-date"
          type="date"
          required
          min={today}
          value={form.date}
          onChange={e => setForm(f => ({ ...f, date: e.target.value }))}
          className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/70 outline-none transition focus:border-[#C9A84C]/50 [color-scheme:dark]"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="form-type" className="text-[11px] uppercase tracking-[0.12em] text-white/40">
          {strings.fieldLabels.type}
        </label>
        <select
          id="form-type"
          required
          value={form.type}
          onChange={e => setForm(f => ({ ...f, type: e.target.value }))}
          className="rounded-xl border border-white/10 bg-[#1a1a1a] px-4 py-3 text-sm text-white/70 outline-none transition focus:border-[#C9A84C]/50"
        >
          <option value="">{strings.type}</option>
          {strings.types.map(t => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="form-pickup" className="text-[11px] uppercase tracking-[0.12em] text-white/40">
          {strings.fieldLabels.pickup}
        </label>
        <input
          id="form-pickup"
          type="text"
          placeholder={strings.pickup}
          required
          value={form.pickup}
          onChange={e => setForm(f => ({ ...f, pickup: e.target.value }))}
          className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-[#F7F3EE] placeholder-white/30 outline-none transition focus:border-[#C9A84C]/50"
        />
      </div>

      <button
        type="submit"
        className="rounded-full bg-[#C9A84C] px-6 py-3 text-sm font-medium uppercase tracking-[0.1em] text-black transition hover:scale-[1.02] hover:bg-[#E8C97A]"
      >
        {strings.submit}
      </button>
    </form>
  );
}
