import React from 'react';

export default function LivePreview({ data, settings }) {
  const bgStyle = settings.background?.startsWith('http')
    ? { backgroundImage: `url(${settings.background})`, backgroundSize: 'cover', backgroundPosition: 'center' }
    : settings.background
      ? { background: settings.background }
      : { background: `radial-gradient(80% 100% at 0% 0%, ${settings.primaryColor}22 0%, transparent 60%), radial-gradient(80% 100% at 100% 0%, ${settings.accentColor}22 0%, transparent 60%), white` };

  const cardClasses = settings.glass
    ? 'bg-white/30 backdrop-blur-xl border-white/40'
    : 'bg-white border-slate-200';

  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white/60 p-4 shadow-sm backdrop-blur">
      <div
        className="relative grid min-h-[520px] grid-cols-1 gap-6 rounded-xl p-6 md:grid-cols-2"
        style={bgStyle}
      >
        {/* Left: Invite Card Preview */}
        <div className="flex items-center justify-center p-4">
          <div
            className={`w-full max-w-md rounded-2xl border p-8 shadow-xl ${cardClasses}`}
            style={{
              borderRadius: settings.radius,
              color: '#0f172a',
              fontFamily: settings.fontFamily,
            }}
          >
            <div className="text-center">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-700/70">You are invited to</p>
              <h2
                className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl"
                style={{ color: settings.primaryColor }}
              >
                {data.partnerA} & {data.partnerB}
              </h2>
              <div className="mt-3 h-px w-16 mx-auto" style={{ background: settings.accentColor }} />

              <p className="mt-6 text-sm text-slate-700/80">{data.message}</p>

              <div className="mt-6 grid grid-cols-2 gap-4 text-left text-sm text-slate-700/90">
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-600">Date</p>
                  <p className="font-medium">{data.date || '—'}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-600">Time</p>
                  <p className="font-medium">{data.time || '—'}</p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-xs uppercase tracking-wider text-slate-600">Venue</p>
                  <p className="font-medium">{data.venue || '—'}</p>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-center gap-3">
                <span
                  className="inline-block rounded-full px-3 py-1 text-xs font-medium"
                  style={{ background: `${settings.primaryColor}22`, color: settings.primaryColor }}
                >
                  RSVP
                </span>
                <span
                  className="inline-block rounded-full px-3 py-1 text-xs font-medium"
                  style={{ background: `${settings.accentColor}22`, color: settings.accentColor }}
                >
                  Share
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Accent panel / Tips */}
        <div className="flex flex-col justify-between rounded-xl bg-white/50 p-6 backdrop-blur-md">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">Live Preview</h3>
            <p className="mt-2 text-sm text-slate-600">
              Your invitation updates in real-time as you customize the details and style.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <Swatch color={settings.primaryColor} label="Primary" />
            <Swatch color={settings.accentColor} label="Accent" />
          </div>

          <div className="mt-6 rounded-lg border border-slate-200 bg-white p-4 text-xs text-slate-600">
            Tip: Try pasting a wallpaper or photo URL into the background field, or use a CSS gradient like
            "linear-gradient(135deg, #fff 0%, #f7f7ff 100%)" for a soft look.
          </div>
        </div>
      </div>
    </div>
  );
}

function Swatch({ color, label }) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-3">
      <div className="h-6 w-6 rounded-full border" style={{ background: color }} />
      <div>
        <p className="text-xs text-slate-500">{label}</p>
        <p className="text-sm font-medium" style={{ color }}>{color}</p>
      </div>
    </div>
  );
}
