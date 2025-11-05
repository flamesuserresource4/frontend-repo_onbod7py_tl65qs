import React from 'react';
import Spline from '@splinetool/react-spline';

export default function HeroCover({ onCreateNew }) {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/ESO6PnMadasO0hU3/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlay for contrast (doesn't block interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/40" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center text-white">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
          Wedding Invitation Builder
        </h1>
        <p className="mt-4 max-w-2xl text-balance text-white/80">
          Design modern, elegant wedding invitations with live preview. Choose a template, personalize details, and share instantly.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={onCreateNew}
            className="rounded-xl bg-white/90 px-5 py-3 font-medium text-slate-900 shadow-lg shadow-black/20 backdrop-blur transition hover:bg-white"
          >
            Start a new design
          </button>
          <a
            href="#builder"
            className="rounded-xl border border-white/30 bg-white/10 px-5 py-3 font-medium text-white backdrop-blur transition hover:bg-white/20"
          >
            Explore templates
          </a>
        </div>
      </div>
    </section>
  );
}
