import Image from 'next/image';
import Link from 'next/link';

export default function Logo({ size = 40, withText = true }: { size?: number; withText?: boolean }) {
  return (
    <Link href="/" aria-label="JU Djeca Sarajeva - Početna" className="flex items-center gap-3 group">
      <span className="relative inline-block" style={{ width: size, height: size }}>
        <Image
          src="/images/logo.png"
          alt=""
          width={size * 2}
          height={size * 2}
          className="object-contain rounded-full ring-2 ring-ink/10 transition-transform group-hover:rotate-[8deg]"
          priority
        />
      </span>
      {withText && (
        <span className="leading-tight">
          <span className="block font-display font-black tracking-super-tight text-base text-ink">
            JU Djeca <span className="text-clay">Sarajeva</span>
          </span>
          <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-ink/55">
            Javna ustanova · est. 1979
          </span>
        </span>
      )}
    </Link>
  );
}
