import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Loader2 } from "lucide-react";
import { isFormLive, formspreeEndpoint } from "@/config";

type Props = {
  /** Extra context stored with the signup, e.g. which section it was submitted from */
  source?: string;
  /** Compact single-line layout for footers / secondary spots */
  compact?: boolean;
  className?: string;
};

const EmailForm = ({ source = "landing", compact = false, className = "" }: Props) => {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("parent");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email || status === "loading") return;
    setStatus("loading");

    // Demo mode: no Formspree id set yet → just show success so the page is clickable.
    if (!isFormLive()) {
      await new Promise((r) => setTimeout(r, 650));
      setStatus("done");
      return;
    }

    try {
      const res = await fetch(formspreeEndpoint(), {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({ email, role, source }),
      });
      setStatus(res.ok ? "done" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className={className}>
      <AnimatePresence mode="wait">
        {status === "done" ? (
          <motion.div
            key="done"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 rounded-2xl surface glow-mint px-5 py-4 text-left"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-mint text-mint-foreground">
              <Check className="h-5 w-5" strokeWidth={3} />
            </span>
            <div>
              <p className="font-semibold text-foreground">You're on the list.</p>
              <p className="text-sm text-muted-foreground">
                We'll email you the moment early access opens. Watch your inbox.
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full"
          >
            <div
              className={`flex w-full gap-2.5 ${
                compact ? "flex-row" : "flex-col sm:flex-row"
              }`}
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                aria-label="Email address"
                className="min-w-0 flex-1 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3.5 text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-mint/60 focus:bg-white/[0.06]"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-mint px-6 py-3.5 font-semibold text-mint-foreground transition-transform hover:scale-[1.03] active:scale-100 disabled:opacity-70"
              >
                {status === "loading" ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <>Join the waitlist</>
                )}
              </button>
            </div>

            {!compact && (
              <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
                <span>I'm a…</span>
                {[
                  { id: "parent", label: "Parent / caregiver" },
                  { id: "adult", label: "Living with T1D" },
                  { id: "other", label: "Someone who cares" },
                ].map((opt) => (
                  <label key={opt.id} className="flex cursor-pointer items-center gap-1.5">
                    <input
                      type="radio"
                      name="role"
                      value={opt.id}
                      checked={role === opt.id}
                      onChange={() => setRole(opt.id)}
                      className="peer sr-only"
                    />
                    <span className="h-3.5 w-3.5 rounded-full border border-white/25 peer-checked:border-mint peer-checked:bg-mint transition-colors" />
                    <span className="peer-checked:text-foreground">{opt.label}</span>
                  </label>
                ))}
              </div>
            )}

            {status === "error" && (
              <p className="mt-2 text-sm text-rose">
                Something went wrong — please try again or email us directly.
              </p>
            )}
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EmailForm;
