import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <Image
          src="/brand/logo-emerald.png"
          alt="RV Studio"
          width={137}
          height={36}
          className="h-6 w-auto"
        />
        <p className="text-xs text-muted">
          © {new Date().getFullYear()} RV Studio — Diseño & desarrollo web front-end.
        </p>
      </div>
    </footer>
  );
}
