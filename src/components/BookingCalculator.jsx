import { useMemo, useState } from "react";
import { Clock, IndianRupee, CalendarDays, Download, CreditCard } from "lucide-react";

function formatAmount(a) {
  return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(a);
}

export default function BookingCalculator() {
  const [hours, setHours] = useState(1);
  const [date, setDate] = useState(() => new Date().toISOString().slice(0, 10));
  const [time, setTime] = useState("17:00");
  const base = 600; // per hour

  const amount = useMemo(() => Math.max(1, hours) * base, [hours]);

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Quick Booking</h3>
          <div className="grid grid-cols-2 gap-4">
            <label className="space-y-1">
              <span className="text-sm text-slate-600 inline-flex items-center gap-2"><CalendarDays className="size-4" /> Date</span>
              <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full px-3 py-2 rounded-lg border border-slate-200" />
            </label>
            <label className="space-y-1">
              <span className="text-sm text-slate-600 inline-flex items-center gap-2"><Clock className="size-4" /> Start time</span>
              <input type="time" value={time} onChange={(e) => setTime(e.target.value)} min="05:00" max="02:00" className="w-full px-3 py-2 rounded-lg border border-slate-200" />
            </label>
          </div>
          <label className="space-y-1 block">
            <span className="text-sm text-slate-600">Duration (hours)</span>
            <input type="range" min={1} max={6} value={hours} onChange={(e) => setHours(parseInt(e.target.value))} className="w-full" />
            <div className="text-sm text-slate-600">{hours} hour(s)</div>
          </label>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Summary</h3>
          <div className="rounded-xl border border-slate-200 p-4">
            <div className="flex items-center justify-between text-slate-700">
              <span className="inline-flex items-center gap-2"><IndianRupee className="size-4" /> Price</span>
              <span className="font-semibold">{formatAmount(amount)}</span>
            </div>
            <div className="text-xs text-slate-500 mt-1">Base price ₹600/hr. Taxes included.</div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <button className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 text-white font-medium hover:bg-emerald-700">
              <CreditCard className="size-4" /> Pay with UPI
            </button>
            <button className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-slate-900 text-white font-medium hover:bg-slate-800">
              <Download className="size-4" /> Download Receipt
            </button>
          </div>
          <div className="text-sm text-slate-600">Or choose cash at location or pre-book now and pay later.</div>
        </div>
      </div>
    </section>
  );
}
