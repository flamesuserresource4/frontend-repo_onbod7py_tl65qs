import React, { useMemo, useState } from 'react';
import HeroCover from './components/HeroCover.jsx';
import TemplateControls from './components/TemplateControls.jsx';
import LivePreview from './components/LivePreview.jsx';
import TemplateGallery from './components/TemplateGallery.jsx';

export default function App() {
  const [data, setData] = useState({
    partnerA: 'Alex',
    partnerB: 'Taylor',
    date: '',
    time: '',
    venue: '',
    message: 'We joyfully invite you to celebrate our wedding.',
  });

  const [settings, setSettings] = useState({
    primaryColor: '#6b5cff',
    accentColor: '#00d4ff',
    background: '',
    fontFamily: 'Inter, ui-sans-serif, system-ui',
    radius: 20,
    glass: true,
  });

  const onSelectPreset = (preset) => {
    setData(preset.data);
    setSettings(preset.settings);
  };

  const onCreateNew = () => {
    setData({ partnerA: '', partnerB: '', date: '', time: '', venue: '', message: '' });
  };

  const gradientFrame = useMemo(() => ({
    background: `radial-gradient(140% 100% at 0% 0%, ${settings.primaryColor}15 0%, transparent 60%), radial-gradient(140% 100% at 100% 0%, ${settings.accentColor}15 0%, transparent 60%)`
  }), [settings.primaryColor, settings.accentColor]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <HeroCover onCreateNew={onCreateNew} />

      <main id="builder" className="mx-auto -mt-12 max-w-6xl space-y-8 px-4 pb-20">
        {/* Frame */}
        <div className="rounded-3xl border border-slate-200 p-4 md:p-6" style={gradientFrame}>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <LivePreview data={data} settings={settings} />
            </div>
            <div className="space-y-6">
              <TemplateControls
                data={data}
                setData={setData}
                settings={settings}
                setSettings={setSettings}
              />
              <TemplateGallery onSelect={onSelectPreset} />
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-2xl text-center text-sm text-slate-500">
          Built for modern celebrations — customize, preview, and export your wedding invitation in minutes.
        </div>
      </main>
    </div>
  );
}
