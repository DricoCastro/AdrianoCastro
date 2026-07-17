'use client';

import { usePathname } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';

// --- SVG Flag Components (inline) ---

function FlagUS({ size = 22 }: { size?: number }) {
  const h = Math.round(size * 0.6);
  return (
    <svg width={size} height={h} viewBox="0 0 28 20" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: 2, flexShrink: 0, display: 'block' }}>
      <rect width="28" height="20" fill="#B22234"/>
      <rect y="1.54" width="28" height="1.54" fill="#fff"/>
      <rect y="4.62" width="28" height="1.54" fill="#fff"/>
      <rect y="7.69" width="28" height="1.54" fill="#fff"/>
      <rect y="10.77" width="28" height="1.54" fill="#fff"/>
      <rect y="13.85" width="28" height="1.54" fill="#fff"/>
      <rect y="16.92" width="28" height="1.54" fill="#fff"/>
      <rect width="11.2" height="10.77" fill="#3C3B6E"/>
      <g fill="#fff">
        <circle cx="1.4" cy="1.6" r="0.6"/><circle cx="3.36" cy="1.6" r="0.6"/><circle cx="5.32" cy="1.6" r="0.6"/>
        <circle cx="7.28" cy="1.6" r="0.6"/><circle cx="9.24" cy="1.6" r="0.6"/>
        <circle cx="2.38" cy="3.2" r="0.6"/><circle cx="4.34" cy="3.2" r="0.6"/>
        <circle cx="6.3" cy="3.2" r="0.6"/><circle cx="8.26" cy="3.2" r="0.6"/>
        <circle cx="1.4" cy="4.8" r="0.6"/><circle cx="3.36" cy="4.8" r="0.6"/>
        <circle cx="5.32" cy="4.8" r="0.6"/><circle cx="7.28" cy="4.8" r="0.6"/><circle cx="9.24" cy="4.8" r="0.6"/>
        <circle cx="2.38" cy="6.4" r="0.6"/><circle cx="4.34" cy="6.4" r="0.6"/>
        <circle cx="6.3" cy="6.4" r="0.6"/><circle cx="8.26" cy="6.4" r="0.6"/>
        <circle cx="1.4" cy="8.0" r="0.6"/><circle cx="3.36" cy="8.0" r="0.6"/>
        <circle cx="5.32" cy="8.0" r="0.6"/><circle cx="7.28" cy="8.0" r="0.6"/><circle cx="9.24" cy="8.0" r="0.6"/>
        <circle cx="2.38" cy="9.6" r="0.6"/><circle cx="4.34" cy="9.6" r="0.6"/>
        <circle cx="6.3" cy="9.6" r="0.6"/><circle cx="8.26" cy="9.6" r="0.6"/>
      </g>
    </svg>
  );
}

function FlagBR({ size = 22 }: { size?: number }) {
  const h = Math.round(size * 0.6);
  return (
    <svg width={size} height={h} viewBox="0 0 28 20" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: 2, flexShrink: 0, display: 'block' }}>
      <rect width="28" height="20" fill="#009C3B"/>
      <polygon points="14,1.5 26.5,10 14,18.5 1.5,10" fill="#FFDF00"/>
      <circle cx="14" cy="10" r="4.5" fill="#002776"/>
      <rect x="9.6" y="9.2" width="8.8" height="1.2" fill="#fff"/>
      <text x="14" y="10.32" fontSize="1.05" fill="#009C3B" textAnchor="middle" fontFamily="Arial,sans-serif" fontWeight="bold" letterSpacing="0.1">ORDEM E PROGRESSO</text>
    </svg>
  );
}

function FlagES({ size = 22 }: { size?: number }) {
  const h = Math.round(size * 0.6);
  return (
    <svg width={size} height={h} viewBox="0 0 28 20" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: 2, flexShrink: 0, display: 'block' }}>
      <rect width="28" height="20" fill="#AA151B"/>
      <rect y="5" width="28" height="10" fill="#F1BF00"/>
    </svg>
  );
}

function FlagIT({ size = 22 }: { size?: number }) {
  const h = Math.round(size * 0.6);
  return (
    <svg width={size} height={h} viewBox="0 0 28 20" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: 2, flexShrink: 0, display: 'block' }}>
      <rect width="28" height="20" fill="#CE2B37"/>
      <rect width="18.67" height="20" fill="#fff"/>
      <rect width="9.33" height="20" fill="#009246"/>
    </svg>
  );
}

// --- Locale Config ---

const SUPPORTED = ['en', 'pt', 'es', 'it'];

const locales = [
  { code: 'en', label: 'EN', name: 'English',   Flag: FlagUS },
  { code: 'pt', label: 'PT', name: 'Português', Flag: FlagBR },
  { code: 'es', label: 'ES', name: 'Español',   Flag: FlagES },
  { code: 'it', label: 'IT', name: 'Italiano',  Flag: FlagIT },
];

/** Extract locale directly from the URL pathname — always accurate */
function getLocaleFromPath(pathname: string): string {
  const seg = pathname.split('/')[1];
  return SUPPORTED.includes(seg) ? seg : 'en';
}

// --- Component ---

export default function LanguageSwitcher({ direction = 'down' }: { direction?: 'up' | 'down' }) {
  const pathname = usePathname();
  const currentLocale = getLocaleFromPath(pathname);
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const current = locales.find((l) => l.code === currentLocale) ?? locales[0];

  const switchLocale = (nextLocale: string) => {
    setOpen(false);
    if (nextLocale === currentLocale) return;

    const segments = pathname.split('/');
    if (SUPPORTED.includes(segments[1])) {
      segments[1] = nextLocale;
    } else {
      segments.splice(1, 0, nextLocale);
    }
    const newPath = segments.join('/') || '/';
    // Full page reload so server re-renders with correct locale and messages
    window.location.href = newPath;
  };

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div ref={containerRef} className="relative" style={{ zIndex: 200 }}>
      {/* Trigger button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 border rounded-lg px-2.5 py-1.5 text-sm font-semibold tracking-wide text-white cursor-pointer transition-all duration-200 border-white/30 hover:border-royalBlue focus:border-royalBlue focus:outline-none"
        style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <current.Flag size={22} />
        <span>{current.label}</span>
        <svg
          width="11" height="11" viewBox="0 0 12 12" fill="none"
          style={{ transition: 'transform 0.2s', transform: open ? 'rotate(180deg)' : 'rotate(0deg)', flexShrink: 0 }}
        >
          <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Dropdown */}
      {open && (
        <ul
          role="listbox"
          className={`absolute min-w-[160px] rounded-xl overflow-hidden shadow-2xl border border-white/10 ${
            direction === 'up' ? 'bottom-full mb-2 left-1/2 -translate-x-1/2' : 'top-full mt-2 left-1/2 -translate-x-1/2'
          }`}
          style={{ backgroundColor: 'rgba(8,8,18,0.96)', backdropFilter: 'blur(16px)' }}
        >
          {locales.map(({ code, label, name, Flag }) => {
            const isActive = code === currentLocale;
            return (
              <li
                key={code}
                role="option"
                aria-selected={isActive}
                onClick={() => switchLocale(code)}
                className={`flex items-center gap-3 px-4 py-2.5 text-sm cursor-pointer select-none transition-colors duration-150 ${
                  isActive
                    ? 'text-white font-semibold'
                    : 'text-white/75 hover:text-white'
                }`}
                style={isActive ? { backgroundColor: 'rgba(65,105,225,0.25)' } : undefined}
                onMouseEnter={e => { if (!isActive) (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(255,255,255,0.07)'; }}
                onMouseLeave={e => { if (!isActive) (e.currentTarget as HTMLElement).style.backgroundColor = ''; }}
              >
                <Flag size={22} />
                <span className="font-semibold">{label}</span>
                <span className="ml-auto text-white/40 text-xs">{name}</span>
                {isActive && (
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6L5 9L10 3" stroke="#60a5fa" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
