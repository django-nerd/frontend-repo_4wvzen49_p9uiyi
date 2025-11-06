import { useEffect, useMemo, useState } from "react";
import { MapPin, Clock, IndianRupee, Star } from "lucide-react";

// Static demo data scoped to Andhra Pradesh while backend is being integrated
const AP_TURFS = [
  {
    id: "vizag-bay-turf",
    name: "Vizag Bay Turf",
    city: "Visakhapatnam",
    location: "Beach Road, Vizag",
    lat: 17.726,
    lng: 83.304,
    pricePerHour: 600,
    rating: 4.6,
    photos: [
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1600&auto=format&fit=crop",
    ],
  },
  {
    id: "vijayawada-riverside-turf",
    name: "Vijayawada Riverside Turf",
    city: "Vijayawada",
    location: "Kanaka Durga Varadhi",
    lat: 16.519,
    lng: 80.630,
    pricePerHour: 600,
    rating: 4.5,
    photos: [
      "https://images.unsplash.com/photo-1552072092-7f89ab3f0e95?q=80&w=1600&auto=format&fit=crop",
    ],
  },
  {
    id: "tirupati-hillside-turf",
    name: "Tirupati Hillside Turf",
    city: "Tirupati",
    location: "Alipiri Bypass",
    lat: 13.628,
    lng: 79.419,
    pricePerHour: 600,
    rating: 4.4,
    photos: [
      "https://images.unsplash.com/photo-1529958108907-62022a72c4f5?q=80&w=1600&auto=format&fit=crop",
    ],
  },
];

export default function MapAndList() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return AP_TURFS;
    return AP_TURFS.filter(
      (t) => t.city.toLowerCase().includes(q) || t.name.toLowerCase().includes(q) || t.location.toLowerCase().includes(q)
    );
  }, [query]);

  useEffect(() => {
    if (filtered.length) setSelected(filtered[0]);
  }, [query]);

  return (
    <section className="max-w-6xl mx-auto px-4 py-10 grid lg:grid-cols-2 gap-6">
      <div className="order-2 lg:order-1 space-y-3">
        <div className="flex gap-2">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 px-3 py-2 rounded-lg border border-slate-200 outline-none"
            placeholder="Search Andhra Pradesh cities or areas"
          />
          <div className="px-3 py-2 rounded-lg bg-slate-100 text-slate-600 text-sm inline-flex items-center gap-2">
            <MapPin className="size-4" /> Andhra Pradesh
          </div>
        </div>
        <div className="grid gap-3">
          {filtered.map((t) => (
            <button
              key={t.id}
              onClick={() => setSelected(t)}
              className={`text-left rounded-xl border p-3 hover:shadow-sm transition ${
                selected?.id === t.id ? "border-emerald-400 bg-emerald-50" : "border-slate-200 bg-white"
              }`}
            >
              <div className="flex gap-3">
                <img src={t.photos[0]} alt={t.name} className="size-20 rounded-lg object-cover" />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-slate-900">{t.name}</h3>
                    <span className="inline-flex items-center gap-1 text-amber-600 text-sm"><Star className="size-4" /> {t.rating}</span>
                  </div>
                  <div className="text-sm text-slate-600 inline-flex items-center gap-2">
                    <MapPin className="size-4" /> {t.location}
                  </div>
                  <div className="text-sm text-slate-700 inline-flex items-center gap-2 mt-1">
                    <Clock className="size-4" /> 5:00 AM - 2:00 AM
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
      <div className="order-1 lg:order-2 rounded-2xl border border-slate-200 overflow-hidden">
        <div className="aspect-[4/3] w-full">
          <iframe
            title="AP Map"
            className="w-full h-full"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps?q=${encodeURIComponent(
              selected ? `${selected.lat},${selected.lng}` : "andhra%20pradesh"
            )}&z=${selected ? 14 : 7}&output=embed`}
          />
        </div>
        {selected && (
          <div className="p-4 bg-white border-t border-slate-200">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-slate-900">{selected.name}</h3>
                <div className="text-sm text-slate-600 inline-flex items-center gap-2">
                  <MapPin className="size-4" /> {selected.location}
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-slate-600">Starting</div>
                <div className="font-semibold inline-flex items-center gap-1"><IndianRupee className="size-4" /> {selected.pricePerHour}/hr</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
