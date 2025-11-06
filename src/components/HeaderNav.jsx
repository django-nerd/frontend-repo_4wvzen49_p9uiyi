import { Home, MapPin, CreditCard, User, Info, HelpCircle } from "lucide-react";

export default function HeaderNav({ onNavigate }) {
  const items = [
    { key: "dashboard", label: "Dashboard", icon: Home },
    { key: "map", label: "Map", icon: MapPin },
    { key: "payments", label: "Payments", icon: CreditCard },
    { key: "profile", label: "Profile", icon: User },
    { key: "about", label: "About", icon: Info },
    { key: "help", label: "Help", icon: HelpCircle },
  ];

  return (
    <header className="sticky top-0 z-30 w-full backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="size-9 rounded-lg bg-emerald-500 text-white grid place-items-center font-bold">TB</div>
          <span className="font-semibold text-slate-800">Turf Booker</span>
        </div>
        <nav className="hidden md:flex items-center gap-2">
          {items.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => onNavigate?.(key)}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm text-slate-700 hover:bg-slate-100 transition"
            >
              <Icon className="size-4" />
              {label}
            </button>
          ))}
        </nav>
        <div className="md:hidden">
          <button className="px-3 py-2 rounded-md bg-slate-900 text-white text-sm" onClick={() => onNavigate?.("map")}>Explore</button>
        </div>
      </div>
    </header>
  );
}
