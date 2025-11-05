import React from 'react';

export default function TemplateControls({ data, setData, settings, setSettings }) {
  const handleData = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSettings = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 shadow-sm backdrop-blur md:p-6">
      <h3 className="text-lg font-semibold text-slate-900">Details</h3>
      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label className="text-sm text-slate-600">Partner A</label>
          <input
            type="text"
            name="partnerA"
            value={data.partnerA}
            onChange={handleData}
            className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 outline-none ring-blue-200 focus:ring"
            placeholder="Alex"
          />
        </div>
        <div>
          <label className="text-sm text-slate-600">Partner B</label>
          <input
            type="text"
            name="partnerB"
            value={data.partnerB}
            onChange={handleData}
            className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 outline-none ring-blue-200 focus:ring"
            placeholder="Taylor"
          />
        </div>
        <div>
          <label className="text-sm text-slate-600">Date</label>
          <input
            type="date"
            name="date"
            value={data.date}
            onChange={handleData}
            className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 outline-none ring-blue-200 focus:ring"
          />
        </div>
        <div>
          <label className="text-sm text-slate-600">Time</label>
          <input
            type="time"
            name="time"
            value={data.time}
            onChange={handleData}
            className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 outline-none ring-blue-200 focus:ring"
          />
        </div>
        <div className="md:col-span-2">
          <label className="text-sm text-slate-600">Venue</label>
          <input
            type="text"
            name="venue"
            value={data.venue}
            onChange={handleData}
            className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 outline-none ring-blue-200 focus:ring"
            placeholder="Sunset Garden, 123 Ocean Drive"
          />
        </div>
        <div className="md:col-span-2">
          <label className="text-sm text-slate-600">Message</label>
          <textarea
            name="message"
            value={data.message}
            onChange={handleData}
            rows={3}
            className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 outline-none ring-blue-200 focus:ring"
            placeholder="We joyfully invite you to celebrate our wedding..."
          />
        </div>
      </div>

      <h3 className="mt-6 text-lg font-semibold text-slate-900">Style</h3>
      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label className="text-sm text-slate-600">Primary color</label>
          <input
            type="color"
            name="primaryColor"
            value={settings.primaryColor}
            onChange={handleSettings}
            className="mt-1 h-10 w-full cursor-pointer rounded-xl border border-slate-200"
          />
        </div>
        <div>
          <label className="text-sm text-slate-600">Accent color</label>
          <input
            type="color"
            name="accentColor"
            value={settings.accentColor}
            onChange={handleSettings}
            className="mt-1 h-10 w-full cursor-pointer rounded-xl border border-slate-200"
          />
        </div>
        <div>
          <label className="text-sm text-slate-600">Background</label>
          <input
            type="text"
            name="background"
            value={settings.background}
            onChange={handleSettings}
            className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 outline-none ring-blue-200 focus:ring"
            placeholder="e.g. linear-gradient(...) or image URL"
          />
        </div>
        <div>
          <label className="text-sm text-slate-600">Font family</label>
          <select
            name="fontFamily"
            value={settings.fontFamily}
            onChange={handleSettings}
            className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 outline-none ring-blue-200 focus:ring"
          >
            <option value="Inter, ui-sans-serif, system-ui">Inter</option>
            <option value="Manrope, ui-sans-serif, system-ui">Manrope</option>
            <option value="Geist, ui-sans-serif, system-ui">Geist</option>
            <option value="Mona Sans, ui-sans-serif, system-ui">Mona Sans</option>
            <option value="IBM Plex Sans, ui-sans-serif, system-ui">IBM Plex Sans</option>
            <option value="serif">Serif</option>
          </select>
        </div>
        <div>
          <label className="text-sm text-slate-600">Corner radius</label>
          <input
            type="range"
            name="radius"
            min={0}
            max={32}
            value={settings.radius}
            onChange={handleSettings}
            className="mt-2 w-full"
          />
        </div>
        <div className="flex items-center gap-3 pt-6">
          <input
            id="glass"
            type="checkbox"
            name="glass"
            checked={settings.glass}
            onChange={handleSettings}
            className="h-4 w-4 rounded border-slate-300 text-slate-900"
          />
          <label htmlFor="glass" className="text-sm text-slate-700">
            Glass effect
          </label>
        </div>
      </div>
    </div>
  );
}
