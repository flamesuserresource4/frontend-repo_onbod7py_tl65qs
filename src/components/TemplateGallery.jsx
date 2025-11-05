import React from 'react';

const presets = [
  {
    id: 'modern-glass',
    name: 'Modern Glass',
    data: {
      partnerA: 'Alex',
      partnerB: 'Taylor',
      date: '2025-06-21',
      time: '16:00',
      venue: 'Sunset Garden, 123 Ocean Drive',
      message: 'We joyfully invite you to celebrate our wedding.'
    },
    settings: {
      primaryColor: '#6b5cff',
      accentColor: '#00d4ff',
      background: 'linear-gradient(135deg, #eef2ff 0%, #fdf2f8 100%)',
      fontFamily: 'Inter, ui-sans-serif, system-ui',
      radius: 20,
      glass: true,
    }
  },
  {
    id: 'romantic-blush',
    name: 'Romantic Blush',
    data: {
      partnerA: 'Emma',
      partnerB: 'Liam',
      date: '2025-09-14',
      time: '17:30',
      venue: 'Rosewood Hall, 45 Maple Ave',
      message: 'Together with their families, invite you to share in their joy.'
    },
    settings: {
      primaryColor: '#d946ef',
      accentColor: '#fb7185',
      background: 'linear-gradient(135deg, #fff1f2 0%, #ffe4e6 100%)',
      fontFamily: 'Manrope, ui-sans-serif, system-ui',
      radius: 28,
      glass: false,
    }
  },
  {
    id: 'botanical',
    name: 'Botanical',
    data: {
      partnerA: 'Noah',
      partnerB: 'Olivia',
      date: '2025-04-12',
      time: '15:00',
      venue: 'Greenhouse Terrace, 9 Meadow Lane',
      message: 'Join us beneath the palms for vows and celebration.'
    },
    settings: {
      primaryColor: '#16a34a',
      accentColor: '#22c55e',
      background: 'linear-gradient(135deg, #ecfdf5 0%, #f0fdf4 100%)',
      fontFamily: 'IBM Plex Sans, ui-sans-serif, system-ui',
      radius: 16,
      glass: true,
    }
  }
];

export default function TemplateGallery({ onSelect }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 shadow-sm backdrop-blur md:p-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-slate-900">Templates</h3>
        <a href="#" className="text-sm text-slate-600 hover:text-slate-900">Browse more</a>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {presets.map((preset) => (
          <button
            key={preset.id}
            onClick={() => onSelect(preset)}
            className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-4 text-left shadow-sm transition hover:shadow-md"
          >
            <div
              className="h-20 w-full rounded-lg border"
              style={{
                background: preset.settings.background,
                borderRadius: 12,
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.4)'
              }}
            />
            <div className="mt-3 flex items-center justify-between">
              <div>
                <p className="font-medium text-slate-900">{preset.name}</p>
                <p className="text-xs text-slate-500">{preset.data.partnerA} & {preset.data.partnerB}</p>
              </div>
              <span
                className="rounded-full px-2 py-1 text-xs font-medium text-white"
                style={{ background: preset.settings.primaryColor }}
              >
                Apply
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
