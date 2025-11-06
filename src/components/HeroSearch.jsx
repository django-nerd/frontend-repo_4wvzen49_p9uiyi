import { MapPin, Search } from "lucide-react";

export default function HeroSearch({ onExplore }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-sky-50" />
      <div className="relative max-w-6xl mx-auto px-4 py-14 lg:py-20 grid lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h1 className="text-3xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            Book premium turf slots across Andhra Pradesh
          </h1>
          <p className="text-slate-600 text-lg">
            Simple mobile OTP login, transparent pricing, and secure payments. Explore
            nearby turfs, pick a time, and play.
          </p>
          <div className="flex items-stretch gap-3 p-2 bg-white rounded-xl border border-slate-200 shadow-sm">
            <div className="inline-flex items-center gap-2 px-3 rounded-lg bg-slate-100 text-slate-600 text-sm">
              <MapPin className="size-4" /> Andhra Pradesh
            </div>
            <input
              className="flex-1 outline-none px-3 text-slate-900 placeholder:text-slate-400"
              placeholder="Search city or area (e.g., Vijayawada, Vizag)"
            />
            <button onClick={onExplore} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 text-white font-medium hover:bg-emerald-700">
              <Search className="size-4" /> Explore
            </button>
          </div>
          <div className="flex items-center gap-4 text-sm text-slate-600">
            <span className="inline-flex items-center gap-2"><span className="size-2 rounded-full bg-emerald-500" /> OTP Login</span>
            <span className="inline-flex items-center gap-2"><span className="size-2 rounded-full bg-emerald-500" /> UPI/PhonePe</span>
            <span className="inline-flex items-center gap-2"><span className="size-2 rounded-full bg-emerald-500" /> Cash at location</span>
          </div>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <img src="https://images.unsplash.com/photo-1544914379-806667cd9489?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxUdXJmfGVufDB8MHx8fDE3NjI0NDMyMDl8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Turf" className="w-full h-72 object-cover rounded-xl" />
          <div className="mt-4 grid grid-cols-3 gap-3 text-center">
            {[
              { label: "1 hr", price: "₹600" },
              { label: "2 hr", price: "₹1,200" },
              { label: "3 hr", price: "₹1,800" },
            ].map((p) => (
              <div key={p.label} className="rounded-lg border border-slate-200 p-3">
                <div className="text-sm text-slate-500">{p.label}</div>
                <div className="text-lg font-semibold">{p.price}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
