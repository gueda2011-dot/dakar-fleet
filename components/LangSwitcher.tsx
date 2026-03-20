import Link from "next/link";

export function LangSwitcher({ lang }: { lang: "fr" | "en" }) {
  return (
    <div className="flex items-center gap-1 rounded-full border border-white/15 p-0.5 text-[0.72rem] uppercase tracking-[0.1em]">
      {lang === "fr" ? (
        <span className="rounded-full bg-[#C9A84C] px-3 py-1.5 font-medium text-black">FR</span>
      ) : (
        <Link href="/" className="px-3 py-1.5 text-white/50 transition hover:text-white">FR</Link>
      )}
      {lang === "en" ? (
        <span className="rounded-full bg-[#C9A84C] px-3 py-1.5 font-medium text-black">EN</span>
      ) : (
        <Link href="/en" className="px-3 py-1.5 text-white/50 transition hover:text-white">EN</Link>
      )}
    </div>
  );
}
