import { motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  Bell,
  Coffee,
  Heart,
  HeartHandshake,
  Lock,
  Moon,
  Share2,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import EmailForm from "@/components/EmailForm";
import { SOCIALS, STATS } from "@/config";
import remiraLogo from "@/assets/remira-logo.png";
import mockHero from "@/assets/mock-hero.png";
import mockHome from "@/assets/mock-home.png";
import mockStats from "@/assets/mock-stats.png";
import mockReport from "@/assets/mock-report.png";

// ── small helpers ────────────────────────────────────────────────────────────
const Reveal = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ y: 28, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.6, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

const Eyebrow = ({ children, tone = "mint" }: { children: React.ReactNode; tone?: "mint" | "violet" }) => (
  <p
    className={`mb-4 text-sm font-semibold uppercase tracking-[0.2em] ${
      tone === "mint" ? "text-mint" : "text-violet"
    }`}
  >
    {children}
  </p>
);

// ── nav ──────────────────────────────────────────────────────────────────────
const Nav = () => (
  <motion.nav
    initial={{ y: -20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6 }}
    className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-background/70 backdrop-blur-xl"
  >
    <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-8">
      <img src={remiraLogo} alt="Remira" className="h-7 md:h-8" />
      <div className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
        <a href="#how" className="transition-colors hover:text-foreground">How it works</a>
        <a href="#together" className="transition-colors hover:text-foreground">Community</a>
        <a href="#privacy" className="transition-colors hover:text-foreground">Privacy</a>
        <a href="#pricing" className="transition-colors hover:text-foreground">Pricing</a>
      </div>
      <a
        href="#join"
        className="rounded-full bg-mint px-5 py-2.5 text-sm font-semibold text-mint-foreground transition-transform hover:scale-[1.04]"
      >
        Join the waitlist
      </a>
    </div>
  </motion.nav>
);

// ── hero ─────────────────────────────────────────────────────────────────────
const Hero = () => (
  <section id="join" className="relative overflow-hidden px-6 pb-20 pt-32 md:px-8 md:pt-40">
    <div className="pointer-events-none absolute inset-0 bg-grid opacity-70" />
    <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-mint/10 blur-[130px]" />
    <div className="pointer-events-none absolute right-0 top-40 h-[420px] w-[420px] rounded-full bg-violet/10 blur-[130px]" />

    <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
      <div className="text-center lg:text-left">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-sm text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-mint" />
            </span>
            Now in private beta · Premium launching soon
          </span>
        </Reveal>

        <Reveal delay={0.05}>
          <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
            See the highs and lows
            <br className="hidden sm:block" /> coming{" "}
            <span className="mint-gradient">before they happen.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground lg:mx-0">
            Remira{"™"} turns your CGM data into real-time predictions and gentle
            warnings — so you can prevent the scary moments, sleep better at
            night, and finally understand what's really driving your numbers.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mx-auto mt-8 max-w-lg lg:mx-0">
            <EmailForm source="hero" />
            <p className="mt-3 text-sm text-muted-foreground/80">
              Be first in line for early access. No spam, ever — just one email when we launch.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-muted-foreground lg:justify-start">
            <span className="inline-flex items-center gap-1.5">
              <span className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber text-amber" />
                ))}
              </span>
              {STATS.rating} rating
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Users className="h-4 w-4 text-mint" /> Trusted by {STATS.members} T1Ds
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-mint" /> HIPAA-compliant
            </span>
          </div>
        </Reveal>
      </div>

      {/* phone */}
      <Reveal delay={0.15} className="relative mx-auto w-full max-w-md">
        <div className="pointer-events-none absolute inset-0 rounded-[2.5rem] bg-mint/10 blur-3xl" />
        <img
          src={mockHero}
          alt="Remira app showing a live glucose reading of 118 mg/dL, steady and in range"
          className="relative w-full drop-shadow-2xl"
        />
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="absolute -left-2 top-6 hidden rounded-2xl surface glow-mint px-4 py-3 backdrop-blur-md sm:block"
        >
          <p className="text-xs text-muted-foreground">Predicted next 3 hrs</p>
          <p className="text-lg font-bold text-mint">Steady · in range</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="absolute -right-2 bottom-16 hidden rounded-2xl surface glow-violet px-4 py-3 backdrop-blur-md sm:block"
        >
          <p className="text-xs text-muted-foreground">Heads up in ~40 min</p>
          <p className="text-lg font-bold text-amber">Rise likely ↗</p>
        </motion.div>
      </Reveal>
    </div>
  </section>
);

// ── marquee trust strip ──────────────────────────────────────────────────────
const trustItems = [
  "Trusted by 1,000+ Type 1 Diabetics",
  "4.9★ app rating",
  "HIPAA-compliant",
  "Privacy-first by design",
  "No data selling. Ever.",
  "Built by the T1D community",
];
const TrustStrip = () => (
  <div className="relative overflow-hidden border-y border-white/[0.06] py-5">
    <div className="flex w-max animate-marquee gap-10 pr-10">
      {[...trustItems, ...trustItems].map((t, i) => (
        <span key={i} className="flex items-center gap-3 whitespace-nowrap text-sm text-muted-foreground">
          <Sparkles className="h-4 w-4 text-mint" />
          {t}
        </span>
      ))}
    </div>
  </div>
);

// ── how it works / value pillars ─────────────────────────────────────────────
const pillars = [
  {
    tag: "Prevent",
    icon: Bell,
    title: "Catch highs and lows before they hit",
    body:
      "Remira learns your patterns and routine, then predicts where your glucose is headed — and warns you in real time while there's still time to act. Fewer surprises. Fewer 3am spikes.",
    points: ["Real-time forecasts, hour by hour", "Personalized to your body & habits", "Gentle nudges, not alarm fatigue"],
    image: mockHome,
    tone: "mint" as const,
  },
  {
    tag: "Understand",
    icon: TrendingUp,
    title: "Finally know the what, when, and why",
    body:
      "Decision Zones show you exactly which choices move your numbers — so tracking every pattern becomes effortless. See your biggest areas to improve and the steps to fix them, with predicted A1C and Time in Range you can actually move.",
    points: ["Decision Zones connect cause → effect", "Predicted A1C & Time in Range", "Reminders you set for yourself"],
    image: mockStats,
    tone: "violet" as const,
  },
  {
    tag: "Together",
    icon: HeartHandshake,
    title: "Face T1D with someone in your corner",
    body:
      "Add a DiaBuddy and share the journey — the crazy days, the wins, the insights. Keep a streak going, check in on each other, and turn diabetes from something you carry alone into something you carry together.",
    points: ["Keep a DiaBuddy accountable", "Share good days, bad days & insights", "Streaks that keep you both going"],
    image: mockReport,
    tone: "mint" as const,
  },
];

const HowItWorks = () => (
  <section id="how" className="mx-auto max-w-6xl px-6 py-24 md:px-8 md:py-32">
    <Reveal className="mx-auto max-w-2xl text-center">
      <Eyebrow>What Remira does for you</Eyebrow>
      <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
        Not reflective. <span className="mint-gradient">Predictive.</span>
      </h2>
      <p className="mt-4 text-lg text-muted-foreground">
        Most apps show you what already happened. Remira tells you what's coming
        next — and helps you get a little better every day.
      </p>
    </Reveal>

    <div className="mt-20 space-y-24">
      {pillars.map((p, i) => (
        <div
          key={p.title}
          className={`grid items-center gap-10 lg:grid-cols-2 ${i % 2 === 1 ? "" : ""}`}
        >
          <Reveal className={i % 2 === 1 ? "lg:order-2" : ""}>
            <span
              className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wider ${
                p.tone === "mint"
                  ? "border-mint/30 bg-mint/10 text-mint"
                  : "border-violet/30 bg-violet/10 text-violet"
              }`}
            >
              <p.icon className="h-3.5 w-3.5" /> {p.tag}
            </span>
            <h3 className="mt-5 text-2xl font-bold md:text-3xl">{p.title}</h3>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{p.body}</p>
            <ul className="mt-6 space-y-3">
              {p.points.map((pt) => (
                <li key={pt} className="flex items-center gap-3 text-foreground/90">
                  <span
                    className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                      p.tone === "mint" ? "bg-mint/15 text-mint" : "bg-violet/15 text-violet"
                    }`}
                  >
                    <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {pt}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1} className={`relative ${i % 2 === 1 ? "lg:order-1" : ""}`}>
            <div
              className={`pointer-events-none absolute inset-6 rounded-[2rem] blur-3xl ${
                p.tone === "mint" ? "bg-mint/10" : "bg-violet/10"
              }`}
            />
            <img
              src={p.image}
              alt={p.title}
              className="relative mx-auto w-full max-w-sm rounded-3xl"
              loading="lazy"
            />
          </Reveal>
        </div>
      ))}
    </div>
  </section>
);

// ── audience split ───────────────────────────────────────────────────────────
const AudienceSplit = () => (
  <section className="mx-auto max-w-6xl px-6 py-8 md:px-8">
    <div className="grid gap-6 md:grid-cols-2">
      <Reveal className="surface surface-hover rounded-3xl p-8 md:p-10">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-mint/15 text-mint">
          <Heart className="h-6 w-6" />
        </span>
        <h3 className="mt-6 text-2xl font-bold">For parents</h3>
        <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
          See the scary moments coming and step in before they happen. Get
          reassurance during the day, and rest a little easier at night knowing
          Remira is watching the trends with you.
        </p>
        <p className="mt-4 font-medium text-mint">Peace of mind, not another thing to worry about.</p>
      </Reveal>

      <Reveal delay={0.1} className="surface surface-hover rounded-3xl p-8 md:p-10">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet/15 text-violet">
          <Activity className="h-6 w-6" />
        </span>
        <h3 className="mt-6 text-2xl font-bold">For independent diabetics</h3>
        <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
          Save the time and mental energy T1D quietly takes every day. Let Remira
          do the pattern-spotting so you can make one confident decision instead
          of a hundred anxious guesses.
        </p>
        <p className="mt-4 font-medium text-violet">Ease of mind, hour after hour.</p>
      </Reveal>
    </div>
  </section>
);

// ── community / DiaBuddy quote strip ─────────────────────────────────────────
const Together = () => (
  <section id="together" className="mx-auto max-w-4xl px-6 py-24 text-center md:px-8">
    <Reveal>
      <Eyebrow tone="violet">T1D is easier together</Eyebrow>
      <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
        A safe place for support, check-ins, and{" "}
        <span className="violet-gradient">real connection.</span>
      </h2>
      <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
        No one should manage Type 1 alone. Remira is built to bring your people
        in — the parent checking in, the friend on the same journey, the DiaBuddy
        who just gets it.
      </p>
    </Reveal>
  </section>
);

// ── privacy ──────────────────────────────────────────────────────────────────
const privacyItems = [
  { icon: ShieldCheck, title: "HIPAA-compliant", body: "Your health data is handled to healthcare-grade standards." },
  { icon: Lock, title: "Encrypted end to end", body: "Protected in transit and at rest — always." },
  { icon: Users, title: "No data selling. Ever.", body: "We never sell or share your data with third parties." },
  { icon: Moon, title: "Privacy-first by design", body: "You own your data. Delete it any time you choose." },
];
const Privacy = () => (
  <section id="privacy" className="mx-auto max-w-6xl px-6 py-24 md:px-8">
    <Reveal className="mx-auto max-w-2xl text-center">
      <Eyebrow>Built on trust</Eyebrow>
      <h2 className="text-3xl font-bold tracking-tight md:text-5xl">Your family's data stays yours</h2>
      <p className="mt-4 text-lg text-muted-foreground">
        The most personal data there is deserves the most serious protection.
        Privacy isn't a setting in Remira — it's the foundation.
      </p>
    </Reveal>
    <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {privacyItems.map((item, i) => (
        <Reveal key={item.title} delay={i * 0.05} className="surface rounded-2xl p-6">
          <item.icon className="h-7 w-7 text-mint" />
          <h3 className="mt-4 font-semibold">{item.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
        </Reveal>
      ))}
    </div>
  </section>
);

// ── founder story ────────────────────────────────────────────────────────────
const Founder = () => (
  <section className="mx-auto max-w-4xl px-6 py-20 md:px-8">
    <Reveal className="surface overflow-hidden rounded-3xl p-8 md:p-12">
      <span className="inline-flex items-center gap-2 rounded-full bg-rose/10 px-3 py-1 text-sm font-semibold text-rose">
        <Heart className="h-4 w-4 fill-rose" /> Our story
      </span>
      <h2 className="mt-5 text-2xl font-bold md:text-4xl">Why Remira exists</h2>
      <div className="mt-5 space-y-4 text-lg leading-relaxed text-muted-foreground">
        <p>
          Remira was built by people who live with Type 1 Diabetes — who know the
          3am lows, the guesswork, and the quiet exhaustion of managing a number
          that never stops moving.
        </p>
        <p>
          We wanted something that didn't just record the past, but helped us get
          ahead of it — and made the whole thing feel a little less lonely. That's
          what we're building, and we're still improving it with every person who joins.
        </p>
        <p className="font-medium text-foreground">
          We're always open to chat — about the app, about T1D, or anything at all.
          We're here for our users first.
        </p>
      </div>
      <a
        href={`mailto:${SOCIALS.email}`}
        className="mt-6 inline-flex items-center gap-2 font-semibold text-mint transition-colors hover:text-foreground"
      >
        Reach the founders <ArrowRight className="h-4 w-4" />
      </a>
    </Reveal>
  </section>
);

// ── pricing ──────────────────────────────────────────────────────────────────
const Pricing = () => (
  <section id="pricing" className="mx-auto max-w-4xl px-6 py-24 md:px-8">
    <Reveal className="mx-auto max-w-2xl text-center">
      <Eyebrow>Honest pricing</Eyebrow>
      <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
        Less than a coffee a month
      </h2>
      <p className="mt-4 text-lg text-muted-foreground">
        Remira Premium runs on genuinely sophisticated technology — and keeping it
        accurate, private, and improving takes real resources. Your subscription
        keeps it alive and helps the whole T1D community it serves.
      </p>
    </Reveal>

    <Reveal delay={0.1} className="mt-12">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="surface rounded-3xl p-8 text-center">
          <p className="text-sm uppercase tracking-widest text-muted-foreground">Monthly</p>
          <p className="mt-3 text-4xl font-bold">
            {STATS.priceMonthly}
            <span className="text-lg font-normal text-muted-foreground">/mo</span>
          </p>
          <p className="mt-2 text-sm text-muted-foreground">Cancel anytime</p>
        </div>
        <div className="relative rounded-3xl border border-mint/40 bg-mint/[0.06] p-8 text-center glow-mint">
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-mint px-3 py-1 text-xs font-bold text-mint-foreground">
            Best value · save 16%
          </span>
          <p className="text-sm uppercase tracking-widest text-muted-foreground">Yearly</p>
          <p className="mt-3 text-4xl font-bold">
            {STATS.priceYearly}
            <span className="text-lg font-normal text-muted-foreground">/yr</span>
          </p>
          <p className="mt-2 text-sm text-muted-foreground">Just over $4/month</p>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-center gap-3 text-center text-sm text-muted-foreground">
        <Coffee className="h-4 w-4 text-amber" />
        Sleep better and prevent highs and lows for less than one coffee a month.
      </div>
      <p className="mt-6 text-center text-muted-foreground">
        Waitlist members get first access — and we'll always tell you the price
        before you ever pay a cent.
      </p>
    </Reveal>
  </section>
);

// ── final CTA ────────────────────────────────────────────────────────────────
const FinalCTA = () => (
  <section className="px-6 py-24 md:px-8">
    <Reveal className="relative mx-auto max-w-4xl overflow-hidden rounded-[2.5rem] border border-white/[0.08] bg-gradient-to-b from-mint/[0.08] to-violet/[0.06] p-10 text-center md:p-16">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-mint/20 blur-[100px]" />
      <div className="relative">
        <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
          Be first to know when Remira launches
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
          Join {STATS.members} people getting ahead of their highs and lows.
          Drop your email and we'll reach out the moment early access opens.
        </p>
        <div className="mx-auto mt-8 max-w-lg">
          <EmailForm source="final-cta" />
        </div>
        <p className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground">
          <Share2 className="h-4 w-4 text-mint" />
          Know someone who'd benefit? Sharing Remira makes your community — and your journey — stronger.
        </p>
      </div>
    </Reveal>
  </section>
);

// ── footer ───────────────────────────────────────────────────────────────────
const socialLinks = [
  {
    href: SOCIALS.tiktok,
    label: "TikTok",
    path: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z",
  },
  {
    href: SOCIALS.instagram,
    label: "Instagram",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
  },
  {
    href: SOCIALS.x,
    label: "X",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
];

const Footer = () => (
  <footer className="border-t border-white/[0.06] px-6 py-14 md:px-8">
    <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
      <div>
        <img src={remiraLogo} alt="Remira" className="mx-auto h-7 md:mx-0" />
        <p className="mt-3 max-w-xs text-sm text-muted-foreground">
          Predictive, private, and built with the Type 1 community.
        </p>
      </div>

      <div className="flex flex-col items-center gap-5 md:items-end">
        <div className="flex items-center gap-5">
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="text-muted-foreground transition-colors hover:text-mint"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d={s.path} />
              </svg>
            </a>
          ))}
        </div>
        <a href={`mailto:${SOCIALS.email}`} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
          {SOCIALS.email}
        </a>
      </div>
    </div>
    <p className="mx-auto mt-10 max-w-6xl text-center text-xs text-muted-foreground/70 md:text-left">
      © {new Date().getFullYear()} Remira LLC. All rights reserved. Remira{"™"} is a trademark of Remira LLC.
      Remira is a management tool and does not provide medical advice.
    </p>
  </footer>
);

// ── page ─────────────────────────────────────────────────────────────────────
const PreLaunch = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Nav />
    <Hero />
    <TrustStrip />
    <HowItWorks />
    <AudienceSplit />
    <Together />
    <Privacy />
    <Founder />
    <Pricing />
    <FinalCTA />
    <Footer />
  </div>
);

export default PreLaunch;
