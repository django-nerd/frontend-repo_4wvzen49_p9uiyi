import { ShieldCheck, Phone, Mail } from "lucide-react";

export default function FooterInfo() {
  return (
    <footer className="mt-10 border-t border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8 text-sm text-slate-600">
        <div>
          <div className="font-semibold text-slate-900">About Turf Booker</div>
          <p className="mt-2">Book turfs across Andhra Pradesh with OTP login, transparent pricing, and secure UPI payments.</p>
        </div>
        <div>
          <div className="font-semibold text-slate-900">Trust & Safety</div>
          <p className="mt-2 inline-flex items-start gap-2"><ShieldCheck className="size-4 mt-0.5" /> Payments are routed securely. Managers get instant notifications on confirmed bookings.</p>
        </div>
        <div>
          <div className="font-semibold text-slate-900">Help Center</div>
          <div className="mt-2 space-y-1">
            <div className="inline-flex items-center gap-2"><Phone className="size-4" /> +91-90000-00000</div>
            <div className="inline-flex items-center gap-2"><Mail className="size-4" /> support@turfbooker.app</div>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-slate-500 py-4">© {new Date().getFullYear()} Turf Booker. All rights reserved.</div>
    </footer>
  );
}
