import { useEffect, useState } from "react";
import pipelinePreview from "../../assets/images/image-v2.png";
import aiPreview from "../../assets/images/image-v3.png";
import kpiPreview from "../../assets/images/image-v6.png";
import automationPreview from "../../assets/images/image-v4.png";
import brittaniImg from "../../assets/images/Brittani.png";
import byronImg from "../../assets/images/Byron.png";
import demarcusImg from "../../assets/images/mckinny.png";
import amicusProLogo from "../../assets/images/amicus pro.svg";
import { trackPageView } from "../../utils/analytics";

const serviceTiers = [
  {
    id: "core",
    name: "CORE Tier",
    price: "$13,500",
    ideal: "Firms that want to maintain their systems and handle implementation internally with guidance.",
    featured: false,
    services: [
      "Access to Amicus Pro platform and existing automations",
      "Ongoing automation updates, as needed",
      "One (1) Monthly Intake Review",
      "One (1) Monthly Growth Check-In",
      "One (1) Monthly Automation Review",
      "DIY monthly marketing templates and creative assets",
      "Biweekly ad reporting and performance calls"
    ]
  },
  {
    id: "grow",
    name: "GROW Tier",
    price: "$27,000",
    ideal: "Firms that prefer a done-with-you approach while retaining oversight and control.",
    featured: true,
    services: [
      "Access to Amicus Pro platform and automations",
      "Automation updates and two (2) DWY builds per month",
      "One (1) Monthly Intake Review",
      "One (1) Monthly Growth Check-In",
      "One (1) Monthly Automation Review",
      "Monthly updated marketing templates & two (2) DFY ads",
      "Biweekly ad performance reviews and optimization",
      "One (1) additional marketing channel (e.g., Google Ads or similar)"
    ],
    responsibilities: [
      "Approve DWY assets within 72 hours to maintain campaign timelines",
      "Provide clear feedback on automation needs for effective deployment",
      "Ensure intake team attends reviews and integrates updates",
      "Allocate and approve ad spend and scaling recommendations",
      "Arrive at strategy check-ins with updated KPIs (signed cases, revenue, etc.)"
    ]
  }
];

const TierComparison = (): JSX.Element => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h3 className="font-serif text-3xl font-bold text-white lg:text-4xl">
          Full AI-Powered Client Acquisition Machine
        </h3>
        <p className="text-lg leading-relaxed text-slate-200 max-w-3xl mx-auto">
          Choose the service tier that best fits your firm's growth goals and operational preferences.
        </p>
      </div>

      {/* Tier Comparison */}
      <div className="grid gap-8 lg:grid-cols-2">
        {serviceTiers.map((tier) => (
          <div
            key={tier.id}
            className={`relative rounded-3xl border p-8 transition-all hover:scale-105 ${
              tier.featured
                ? "border-green-400/50 bg-gradient-to-br from-green-500/10 to-green-600/5 shadow-xl shadow-green-500/20"
                : "border-white/20 bg-slate-900/40"
            }`}
          >
            {tier.featured && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="rounded-full bg-green-500 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-white">
                  Recommended
                </span>
              </div>
            )}

            <div className="space-y-6">
              <div className="space-y-3">
                <h4 className="font-serif text-2xl font-bold text-white">{tier.name}</h4>
                <p className="text-lg font-bold text-green-300">Investment: Contact for Pricing</p>
                <p className="text-base text-slate-200 leading-relaxed">{tier.ideal}</p>
              </div>

              <div className="space-y-4">
                <h5 className="text-lg font-bold text-white">Included Services:</h5>
                <ul className="space-y-3">
                  {tier.services.map((service, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-green-500/25 text-xs font-bold text-green-300">
                        ✓
                      </span>
                      <span className="flex-1 text-base text-slate-200">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {tier.responsibilities && (
                <div className="space-y-4">
                  <h5 className="text-lg font-bold text-white">Client Responsibilities:</h5>
                  <ul className="space-y-3">
                    {tier.responsibilities.map((responsibility, index) => (
                      <li key={index} className="flex gap-3">
                        <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-500/25 text-xs font-bold text-slate-300">
                          •
                        </span>
                        <span className="flex-1 text-sm text-slate-300">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm italic text-green-300 mt-4">
                    Expectation: You provide approvals and direction; we execute and optimize.
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const CaseStudiesCarousel = (): JSX.Element => {
  const [activeCase, setActiveCase] = useState(0);
  const currentCase = caseStudies[activeCase];

  const nextCase = () => {
    setActiveCase((prev) => (prev + 1) % caseStudies.length);
  };

  const prevCase = () => {
    setActiveCase((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  return (
    <div className="space-y-10">
      {/* Navigation Dots */}
      <div className="flex flex-wrap justify-center gap-3">
        {caseStudies.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveCase(index)}
            className={`h-3 w-3 rounded-full transition ${
              activeCase === index
                ? "bg-green-500 shadow-lg shadow-green-500/50"
                : "bg-white/20 hover:bg-green-400/50"
            }`}
          />
        ))}
      </div>

      {/* Case Study Content */}
      <div className="relative max-w-6xl mx-auto">
        {/* Navigation Arrows */}
        <button
          onClick={prevCase}
          className="absolute -left-6 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/20 bg-slate-900/80 p-4 text-white backdrop-blur transition hover:border-green-400/50 hover:bg-green-600/20 lg:-left-12"
        >
          <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={nextCase}
          className="absolute -right-6 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/20 bg-slate-900/80 p-4 text-white backdrop-blur transition hover:border-green-400/50 hover:bg-green-600/20 lg:-right-12"
        >
          <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Main Content Card */}
        <div className="rounded-3xl border border-green-400/30 bg-gradient-to-br from-green-500/10 to-slate-900/80 p-4 sm:p-8 lg:p-12 shadow-2xl">
          <div className="text-center space-y-6 lg:space-y-10">
            <div className="space-y-4 lg:space-y-6">
              <div className="flex flex-wrap justify-center items-center gap-3 lg:gap-6">
                <span className="rounded-full border border-green-400/30 bg-green-500/15 px-3 py-1.5 text-xs sm:px-6 sm:py-3 sm:text-base font-bold uppercase tracking-[0.2em] text-green-300">
                  {currentCase.practice}
                </span>
                <span className="text-sm sm:text-xl font-medium text-slate-400">
                  {currentCase.location}
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white">
                {currentCase.name}
              </h3>
              <p className="text-lg sm:text-2xl lg:text-3xl font-bold text-green-300">
                {currentCase.headline}
              </p>
            </div>

            <div className="relative rounded-2xl lg:rounded-3xl border border-green-400/30 bg-gradient-to-br from-green-500/10 to-green-600/5 p-4 sm:p-6 lg:p-10 mx-auto max-w-4xl">
              <div className="absolute -top-3 left-4 text-4xl sm:-top-6 sm:left-10 sm:text-8xl text-green-400/30">"</div>
              <blockquote className="relative text-base sm:text-lg lg:text-2xl font-medium italic leading-relaxed text-slate-100">
                {currentCase.quote}
              </blockquote>
              <div className="mt-4 sm:mt-8 flex items-center justify-center gap-3 sm:gap-6">
                <div className="h-10 w-10 sm:h-16 sm:w-16 rounded-full bg-green-500/20 flex items-center justify-center">
                  <span className="text-sm sm:text-2xl font-bold text-green-300">
                    {currentCase.name.split(' ').map(n => n[0]).join('').slice(0,2)}
                  </span>
                </div>
                <div className="text-left">
                  <p className="text-sm sm:text-xl font-bold text-white">{currentCase.name}</p>
                  <p className="text-xs sm:text-lg text-slate-300">{currentCase.practice} • {currentCase.location}</p>
                </div>
              </div>
            </div>

            <div className="grid gap-3 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
              {currentCase.metrics.map((metric, index) => (
                <div key={index} className="flex flex-col items-center gap-2 sm:gap-4 rounded-xl sm:rounded-2xl border border-green-400/20 bg-green-500/5 p-4 sm:p-8">
                  <div className="flex h-8 w-8 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-green-500/20">
                    <svg className="h-5 w-5 sm:h-8 sm:w-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-sm sm:text-lg font-medium text-slate-200 text-center">{metric}</p>
                </div>
              ))}
            </div>

            {/* Case Navigation */}
            <div className="text-center space-y-4 lg:space-y-6">
              <p className="text-sm sm:text-lg text-slate-400">
                Case {activeCase + 1} of {caseStudies.length}
              </p>
              <div className="flex justify-center gap-2 sm:gap-4">
                <button
                  onClick={prevCase}
                  className="rounded-lg border border-white/20 px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base font-medium text-slate-300 transition hover:border-green-400/50 hover:text-green-200"
                >
                  Previous
                </button>
                <button
                  onClick={nextCase}
                  className="rounded-lg border border-green-400/40 bg-green-500/10 px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base font-medium text-green-300 transition hover:bg-green-500/20"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DiscoveryCallPopup = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }): JSX.Element => {
  if (!isOpen) return <></>;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/80 p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl rounded-3xl border border-white/10 bg-slate-950 p-4 sm:p-6 shadow-xl my-4 sm:my-8 min-h-fit max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-20 text-2xl text-slate-400 hover:text-white bg-slate-800/80 rounded-full w-8 h-8 flex items-center justify-center"
        >
          ✕
        </button>
        
        <div className="space-y-4">
          <div className="text-center">
            <h3 className="font-serif text-2xl lg:text-3xl font-bold text-white">
              Book Your Discovery Call
            </h3>
            <p className="mt-2 text-lg text-slate-200">
              Schedule a 30-minute call to discuss how Amicus Pro can transform your law firm's client acquisition.
            </p>
          </div>
          
          <div className="rounded-2xl border border-white/10 bg-white overflow-hidden">
            {/* Calendar embed */}
            <div className="w-full h-[500px] sm:h-[600px]">
              <iframe 
                src="https://link.legalfunnel.com/widget/booking/2pvKZYafk73gkuCvyoMx" 
                className="w-full h-full border-none"
                title="Book Discovery Call"
                allow="camera; microphone; geolocation"
                scrolling="yes"
                style={{overflow: 'auto'}}
              />
            </div>
          </div>
          
          <div className="grid gap-6 text-center sm:grid-cols-3">
            <div className="space-y-2">
              <div className="text-3xl">🎯</div>
              <p className="font-semibold text-white">Custom Strategy</p>
              <p className="text-sm text-slate-300">Tailored approach for your practice area</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl">⚡</div>
              <p className="font-semibold text-white">Quick Implementation</p>
              <p className="text-sm text-slate-300">90-day proven system deployment</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl">📈</div>
              <p className="font-semibold text-white">Guaranteed ROI</p>
              <p className="text-sm text-slate-300">Track every dollar invested</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const heroStats = [
  {
    label: "Average speed-to-lead with AI intake",
    value: "22 sec",
    description: "Qualified response time across phone, SMS, and chat.",
  },
  {
    label: "Increase in signed retainers",
    value: "+38%",
    description: "First 60 days after migrating from pieced-together tools.",
  },
  {
    label: "Client satisfaction with implementation",
    value: "4.9 / 5",
    description: "Post-launch surveys from MLA onboarding cohorts.",
  },
];

const productTabs = [
  {
    key: "pipeline",
    label: "Leads Pipeline",
    title: "Command every lead and handoff in a live pipeline view.",
    description:
      "Give intake teams and managing partners the same real-time picture. No spreadsheets. No guessing.",
    image: pipelinePreview,
    bullets: [
      "Drag-and-drop pipeline stages tuned for legal intake.",
      "AI nudges revive stalled leads before they slip away.",
      "Task routing keeps attorneys and case managers accountable.",
    ],
    highlight: "Firms cut lead response time by 63% after centralizing here.",
  },
  {
    key: "ai",
    label: "AI Conversations",
    title: "Always-on AI intake that speaks your brand voice.",
    description:
      "Converse in English and Spanish with natural language that qualifies, books, and syncs to your calendar.",
    image: aiPreview,
    bullets: [
      "Omnichannel replies within seconds, 24/7.",
      "Collects documents, schedules consults, and handles FAQs.",
      "Seamless human handoff with transcripts and recommended next steps.",
    ],
    highlight: "2.4x consult show-up rate after implementing Amicus Pro AI.",
  },
  {
    key: "kpi",
    label: "KPI Dashboard",
    title: "Know marketing ROI, intake velocity, and revenue in one view.",
    description:
      "Finally connect marketing spend to signed cases and revenue forecasts with dashboards purpose-built for partners.",
    image: kpiPreview,
    bullets: [
      "Daily scoreboards for campaigns, conversion, and booked revenue.",
      "Benchmark performance of intake staff and locations.",
      "Forecast cash flow by practice area and channel.",
    ],
    highlight: "Managing partners reclaim 5+ hours a week from manual reporting.",
  },
  {
    key: "automations",
    label: "Automations",
    title: "Prebuilt automations tested across hundreds of firms.",
    description:
      "Deploy MLA playbooks day one—follow-up, payment reminders, review requests, and more—ready for your practice.",
    image: automationPreview,
    bullets: [
      "Done-for-you automations for intake, onboarding, and client care.",
      "Integrates with existing CRMs, practice management, and billing tools.",
      "AI personalization keeps every touchpoint on brand without extra staff.",
    ],
    highlight: "Average intake team productivity jumps 5x within the first quarter.",
  },
];

const caseStudies = [
  {
    name: "Demarcus Ward, Esq.",
    practice: "Personal Injury · Criminal Defense · Business",
    location: "McKinney, TX",
    headline: "$2,700,000 in 12 months",
    narrative:
      "This program and group have changed the course of my entire practice. Its impact has been felt throughout my entire office. It is simply the best investment that we have ever made. We are forever grateful.",
    metrics: [
      "540 signed clients with automated nurturing",
      "Cost per acquisition: $685",
      "Return on investment: 630%"
    ],
    quote:
      "This program and group have changed the course of my entire practice. Its impact has been felt throughout my entire office. It is simply the best investment that we have ever made. We are forever grateful.",
    image: demarcusImg,
  },
  {
    name: "Bridgette Williams, Esq.",
    practice: "Personal Injury · Car Accidents · Slip and Falls",
    location: "Dallas, TX",
    headline: "$240,000 in 5 months",
    narrative:
      "My experience with Redwood Meridian has been fantastic. They have been absolutely wonderful with running our ads and giving me continuous updates and recommendations. They are dedicated to making sure my firm grows.",
    metrics: [
      "40 signed clients in 5 months",
      "Cost per acquisition: $856",
      "Return on investment: 600%"
    ],
    quote:
      "My experience with Redwood Meridian has been fantastic. They have been absolutely wonderful with running our ads and giving me continuous updates and recommendations. They are dedicated to making sure my firm grows.",
    image: brittaniImg,
  },
  {
    name: "Jose Escobar, Esq.",
    practice: "Wrongful Death · Car Accident",
    location: "Dallas, TX",
    headline: "$150,000 in 5 months",
    narrative:
      "Our firm hired Redwood Meridian to help with our firm's Facebook advertising, and the results have been outstanding. Their team is knowledgeable, responsive, and truly understands the legal industry.",
    metrics: [
      "25 signed clients in 5 months",
      "Cost per acquisition: $993",
      "Return on investment: 504%"
    ],
    quote:
      "Our firm hired Redwood Meridian to help with our firm's Facebook advertising, and the results have been outstanding. Their team is knowledgeable, responsive, and truly understands the legal industry.",
    image: byronImg,
  },
  {
    name: "Jamie Alvarez, Esq.",
    practice: "Property Insurance · Personal Injury Claims",
    location: "Miramar, FL",
    headline: "$100,000 in 3 months",
    narrative:
      "Sam and the rest of the team are wonderful. The program has really taught us how to work strategies effectively. They help us find the problems and solutions. We are very happy with what they are teaching us.",
    metrics: [
      "15 signed clients in 3 months",
      "Cost per acquisition: $1,466",
      "Return on investment: 354%"
    ],
    quote:
      "Sam and the rest of the team are wonderful. The program has really taught us how to work strategies effectively. They help us find the problems and solutions. We are very happy with what they are teaching us.",
    image: demarcusImg,
  },
  {
    name: "Tim Dominguez, Esq.",
    practice: "Personal Injury · Car · Truck · Rideshare",
    location: "Irvine, CA",
    headline: "9 new cases in 30 days",
    narrative:
      "Precision beats guesswork - 9 signed cases in 30 days, generating a 789% ROI. That's the power of phased execution. It's not about spending more - it's about spending smart.",
    metrics: [
      "9 signed clients in 30 days",
      "Cost per acquisition: $900",
      "Return on investment: 789%"
    ],
    quote:
      "Precision beats guesswork - 9 signed cases in 30 days, generating a 789% ROI. That's the power of phased execution. It's not about spending more - it's about spending smart.",
    image: brittaniImg,
  },
  {
    name: "Brittani Glidden, Esq.",
    practice: "Personal Injury · Criminal · Family · Immigration",
    location: "Denver, CO",
    headline: "15 new cases in 4 weeks",
    narrative:
      "Stopped guessing and started following the process. Only 4 short weeks later, 15 clients had already signed up — proof the systems were finally doing the heavy lifting.",
    metrics: [
      "15 signed clients in 4 weeks",
      "Cost per acquisition: $291",
      "Dramatic improvement in conversion rates"
    ],
    quote:
      "Stopped guessing and started following the process. Only 4 short weeks later, 15 clients had already signed up — proof the systems were finally doing the heavy lifting.",
    image: brittaniImg,
  },
  {
    name: "Byron Bailey, Esq.",
    practice: "Personal Injury · Car · Truck · Rideshare · Slips · Bites",
    location: "Dallas-Fort Worth, TX",
    headline: "$60,000 in 60 days",
    narrative:
      "Signed 15 new cases in just 4 weeks. Once the systems were in place, the growth came fast. First the CRM setup was completed and then came ads and proper tracking. In 60 days, firm worked like a well oiled machine.",
    metrics: [
      "15 signed clients in 60 days",
      "Cost per acquisition: $307",
      "Return on investment: 1,204%"
    ],
    quote:
      "Signed 15 new cases in just 4 weeks. Once the systems were in place, the growth came fast. First the CRM setup was completed and then came ads and proper tracking. In 60 days, firm worked like a well oiled machine.",
    image: byronImg,
  },
];

const faqItems = [
  {
    question: "How is Amicus Pro different from the old Legal Funnel platform?",
    answer:
      "Amicus Pro keeps the proven playbooks from Legal Funnel but rebuilds the entire experience as one AI-powered command center. Intake, follow-up, communication, reporting, and workflow now live in a single system optimized specifically for law firms.",
  },
  {
    question: "Will Amicus Pro integrate with my current practice management software?",
    answer:
      "Yes. Our implementation team connects Amicus Pro to the tools you already use—CRMs, practice management, calendaring, and marketing software—so your data flows seamlessly without duplicate entry.",
  },
  {
    question: "Do I need to hire additional staff to run Amicus Pro?",
    answer:
      "No. Firms use Amicus Pro to reduce manual staffing needs. The AI takes on first-touch intake, follow-up, and routine communication so your existing team can focus on consultations and high-value work.",
  },
  {
    question: "What kind of support do we receive during implementation?",
    answer:
      "My Legal Academy walks your team through every step: blueprinting your funnel, configuring automations, training intake staff, and monitoring KPIs post-launch. You also gain access to our community and weekly optimization sessions.",
  },
  {
    question: "How fast can we launch?",
    answer:
      "Most firms complete the guided implementation in 30 to 45 days. The MLA team configures your system while coaching intake leads to ensure adoption from day one.",
  },
];

const proofHighlights = [
  {
    value: "92%",
    label: "of firms report higher intake conversion in the first 60 days.",
  },
  {
    value: "5x",
    label: "average productivity gain after consolidating tools into Amicus Pro.",
  },
  {
    value: "600+",
    label: "firm systems launched by the My Legal Academy implementation team.",
  },
];

function classNames(...classes: Array<string | boolean | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export const HomePage = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState(productTabs[0].key);
  const [openFaq, setOpenFaq] = useState<string | null>(faqItems[0].question);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showDiscoveryPopup, setShowDiscoveryPopup] = useState(false);

  const activeTabContent =
    productTabs.find((tab) => tab.key === activeTab) ?? productTabs[0];

  useEffect(() => {
    trackPageView("Amicus Pro Landing Page");
    
    // Preload calendar script for instant loading when popup opens
    const script = document.createElement('script');
    script.src = 'https://link.legalfunnel.com/js/form_embed.js';
    script.type = 'text/javascript';
    script.async = true;
    document.head.appendChild(script);
    
    // Preload the calendar iframe in a hidden container
    const preloadContainer = document.createElement('div');
    preloadContainer.style.position = 'absolute';
    preloadContainer.style.left = '-9999px';
    preloadContainer.style.visibility = 'hidden';
    preloadContainer.innerHTML = `
      <iframe 
        src="https://link.legalfunnel.com/widget/booking/2pvKZYafk73gkuCvyoMx" 
        style="width: 100%; height: 500px; border: none;" 
        scrolling="no"
        id="preload_calendar"
      />
    `;
    document.body.appendChild(preloadContainer);
    
    return () => {
      // Cleanup on unmount
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
      if (document.body.contains(preloadContainer)) {
        document.body.removeChild(preloadContainer);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen scroll-smooth bg-slate-950 text-slate-100">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 opacity-60 mix-blend-screen" style={{ background: "radial-gradient(circle at top left, rgba(16, 185, 129, 0.18), transparent 45%), radial-gradient(circle at bottom right, rgba(52, 211, 153, 0.16), transparent 50%)" }} />
      </div>

      {/* Sticky Header - appears on scroll */}
      <header
        className={classNames(
          "fixed top-0 left-0 right-0 z-50 border-b border-white/10 transition-all duration-300",
          isScrolled ? "translate-y-0 bg-slate-950/95 backdrop-blur" : "-translate-y-full bg-transparent"
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-center px-6 py-3 font-sans sm:px-8 lg:px-10">
          <div className="flex items-center">
            <img
              src={amicusProLogo}
              alt="Amicus Pro by My Legal Academy"
              className="h-10 w-auto"
            />
          </div>
        </nav>
      </header>
             
      <main className="mx-auto flex max-w-7xl flex-col gap-16 px-6 pb-24 font-sans sm:px-8 lg:px-10 lg:pb-32">
        <section className="relative overflow-hidden rounded-[30px] border border-white/10 bg-slate-950/60 px-4 pt-4 pb-8 shadow-xl shadow-green-500/10 sm:px-6 lg:px-8 lg:pt-6 lg:pb-10">
          {/* Logo at top of hero section */}
          <div className="flex justify-center mb-4 lg:mb-6">
            <img
              src={amicusProLogo}
              alt="Amicus Pro by My Legal Academy"
              className="h-8 w-auto sm:h-10"
            />
          </div>
          <div className="absolute -left-24 top-16 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />
          <div className="relative z-10 mx-auto max-w-4xl space-y-6 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-emerald-300">
              Introducing Amicus Pro by My Legal Academy
            </span>
            <h1 className="font-serif text-3xl font-bold leading-[1.05] text-white sm:text-4xl lg:text-5xl xl:text-6xl">
              The AI-Powered Command Center For Modern Law Firms
            </h1>
            <p className="text-base leading-[1.6] text-slate-100 sm:text-lg lg:text-xl">
              The next evolution of Legal Funnel—now Amicus Pro. An AI-powered platform that unifies client intake, automated follow-ups, intelligent communications, document management, and real-time reporting.
            </p>
            <ul className="mx-auto max-w-3xl space-y-3 text-left text-sm leading-[1.7] text-slate-100 sm:text-base lg:text-lg">
              {[
                "Convert more signed retainers from existing lead flow with 24/7 AI intake responses.",
                "Unify partners, operators, and intake teams in one intelligent command center.",
                "Track true marketing ROI, intake velocity, and revenue forecasts in real time.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-green-500/25 text-xs font-bold text-green-300">
                    ✓
                  </span>
                  <span className="flex-1">{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <button
                onClick={() => setShowDiscoveryPopup(true)}
                className="rounded-full bg-green-600 px-6 py-3 text-center text-base font-bold uppercase tracking-[0.2em] text-white shadow-lg shadow-green-600/25 transition hover:bg-green-500 hover:shadow-green-500/30 sm:flex-none"
              >
                Book Discovery Call
              </button>
              <a
                href="#implementation"
                className="rounded-full border-2 border-white/30 px-6 py-3 text-center text-base font-semibold uppercase tracking-[0.2em] text-white transition hover:border-green-400/70 hover:bg-green-600/10 hover:text-green-200 sm:flex-none"
              >
                View Plans
              </a>
            </div>
          </div>
          <div className="mt-12 grid gap-6 border-t border-white/15 pt-12 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <div key={stat.label} className="space-y-4 rounded-2xl border border-white/10 bg-slate-900/40 p-6 backdrop-blur-sm transition hover:bg-slate-900/60 hover:scale-105">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-green-300">{stat.label}</p>
                <p className="text-3xl font-black text-white lg:text-4xl">{stat.value}</p>
                <p className="text-sm leading-relaxed text-slate-200">{stat.description}</p>
              </div>
            ))}
          </div>
        </section>


        <section id="problem" className="grid gap-10 lg:grid-cols-[1fr,0.9fr]">
          <div className="space-y-6">
            <span className="text-sm font-semibold uppercase tracking-[0.4em] text-emerald-200">
              The Challenge
            </span>
            <h2 className="font-serif text-4xl font-semibold text-white sm:text-5xl">
              Your Intake And Follow Up Are Leaking Clients.
            </h2>
            <p className="text-lg leading-relaxed text-slate-200">
              Today’s legal consumers expect an on-demand experience. When your intake team juggles disconnected tools and manual handoffs, high-value cases slip through the cracks.
            </p>
            <div className="grid gap-5">
              {[
                "Scattered systems keep intake teams blind to follow-up status and handoffs.",
                "Leads wait hours for a response while competitors reply in minutes.",
                "Turnover and inconsistent scripting create unpredictable qualification.",
                "Leadership can’t see true marketing ROI or conversion bottlenecks until it’s too late.",
              ].map((problem) => (
                <div key={problem} className="flex gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 text-base text-slate-200">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-emerald-400" />
                  <span>{problem}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-emerald-400/40 bg-gradient-to-br from-emerald-500/10 via-slate-950 to-indigo-500/20 p-8 text-slate-100">
            <div className="absolute -bottom-12 -left-8 h-48 w-48 rounded-full bg-emerald-500/20 blur-3xl" />
            <span className="text-sm font-semibold uppercase tracking-[0.4em] text-emerald-200">
              The Fix
            </span>
            <h3 className="mt-5 font-serif text-3xl text-white">
              Amicus Pro unifies intake, follow-up, and reporting inside one AI-powered control central.
            </h3>
            <p className="mt-4 text-base text-emerald-100/80">
              Consolidate every lead touchpoint, automate the repetitive work, and give partners crystal-clear visibility on ROI.
            </p>
            <div className="mt-6 grid gap-4 text-base text-emerald-100">
              {[
                "AI handles first response, qualification, and consult booking 24/7.",
                "Dashboards show true marketing ROI, intake velocity, and revenue forecasts.",
                "Guided implementation installs proven playbooks, scripts, and automations.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-4 rounded-3xl border border-emerald-400/30 bg-emerald-500/10 p-5">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full border border-emerald-400/60 text-xs text-emerald-200">
                    ★
                  </span>
                  <span>{item}</span>
                </div>
              ))}
          </div>
        </div>
        </section>

        <section id="why" className="space-y-12">
          <header className="space-y-6 text-center">
            <span className="text-base font-bold uppercase tracking-[0.3em] text-green-300">
              The Platform
            </span>
            <h2 className="font-serif text-5xl font-bold text-white sm:text-6xl lg:text-7xl">
              Meet Amicus Pro
            </h2>
            <p className="mx-auto max-w-4xl text-xl leading-relaxed text-slate-200 sm:text-2xl">
              The evolution of Legal Funnel—an AI-powered operating system that packages My Legal Academy's battle-tested intake and growth playbooks into one premium experience for modern law firms.
            </p>
          </header>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Control Central Dashboard",
                description:
                  "Monitor every lead, case status, and revenue forecast from a single view engineered for managing partners.",
                accent: "Strategic visibility",
              },
              {
                title: "AI Intake & Follow Up",
                description:
                  "Conversational AI qualifies, nurtures, and books prospects automatically—fully scripted to match your voice.",
                accent: "24/7 responsiveness",
              },
              {
                title: "All-In-One Workspace",
                description:
                  "Calls, SMS, email, documents, eSign, and payments—centralized with clean audit trails and compliance baked in.",
                accent: "Operational focus",
              },
              {
                title: "Growth Engine by MLA",
                description:
                  "Launch with proven automations, KPIs, and coaching from the My Legal Academy team behind the fastest-growing firms.",
                accent: "Playbooks that win",
              },
            ].map((card) => (
              <article
                key={card.title}
                className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 p-8 transition hover:border-emerald-400/60 hover:bg-slate-900"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-emerald-500/10 blur-3xl" />
                <span className="text-sm uppercase tracking-[0.3em] text-emerald-300">{card.accent}</span>
                <h3 className="mt-5 font-serif text-2xl font-semibold text-white">{card.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-slate-300">{card.description}</p>
              </article>
            ))}
        </div>
        </section>

        <section id="benefits" className="space-y-8">
          <header className="space-y-4">
            <span className="text-sm font-semibold uppercase tracking-[0.4em] text-emerald-200">
              The Outcomes
            </span>
            <h2 className="font-serif text-4xl font-semibold text-white sm:text-5xl">
              What Amicus Pro Unlocks For Your Firm
            </h2>
            <p className="max-w-3xl text-lg leading-relaxed text-slate-200">
              Firms use Amicus Pro to turn intake into a competitive advantage—without hiring sprees or fragile tech stacks.
            </p>
          </header>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "More Signed Clients From The Same Leads",
                points: [
                  "Immediate AI responses capture leads before competitors can.",
                  "Automated nurturing keeps prospects warm until they retain.",
                  "Conversion analytics spotlight top-performing campaigns.",
                ],
              },
              {
                title: "Less Hiring Stress And Overhead",
                points: [
                  "Automate the repetitive front end so staff focus on consults.",
                  "Standardize scripts, SOPs, and follow-up inside one workspace.",
                  "Reduce dependence on costly overnight intake coverage.",
                ],
              },
              {
                title: "Total Visibility Across Marketing, Intake, And Revenue",
                points: [
                  "Live dashboards connect spend to signed fees and cash flow.",
                  "Compare intake performance by coordinator, campaign, and location.",
                  "Forecast revenue with confidence instead of spreadsheets.",
                ],
              },
              {
                title: "Consistent Client Experience At Scale",
                points: [
                  "Centralize every client touchpoint for a seamless journey.",
                  "Deliver branded communications that feel personal and fast.",
                  "Measure and optimize each stage to protect your reputation.",
                ],
              },
            ].map((benefit) => (
              <article
                key={benefit.title}
                className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 transition hover:-translate-y-1 hover:border-emerald-400/50 hover:bg-slate-900"
              >
                <h3 className="font-serif text-2xl font-semibold text-white">{benefit.title}</h3>
                <ul className="mt-5 space-y-3 text-base text-slate-300">
                  {benefit.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full border border-emerald-400/60 text-xs text-emerald-300">
                        ✓
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="features" className="space-y-10">
          <header className="space-y-4">
            <span className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-200">
              The Product Tour
            </span>
            <h2 className="font-serif text-4xl font-semibold text-white sm:text-5xl">
              Inside Your New Law Firm Command Center
            </h2>
            <p className="max-w-3xl text-lg leading-relaxed text-slate-200">
              Explore the modules firms rely on to operate with precision—from first touch to signed retainer.
            </p>
          </header>
          <div className="rounded-4xl border border-white/10 bg-slate-900/70 p-6 lg:p-10">
            <div className="flex flex-wrap gap-3">
              {productTabs.map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveTab(tab.key)}
                  className={classNames(
                    "rounded-full border px-6 py-3 text-base font-semibold transition uppercase tracking-[0.25em]",
                    activeTab === tab.key
                      ? "border-emerald-400 bg-emerald-500/25 text-emerald-100 shadow-lg shadow-emerald-500/10"
                      : "border-white/10 bg-white/5 text-slate-300 hover:border-emerald-400/40 hover:text-emerald-200"
                  )}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="mt-8 grid gap-10 lg:grid-cols-[1.05fr,0.95fr] lg:items-center">
              <div className="space-y-4">
                <h3 className="font-serif text-2xl font-semibold text-white">
                  {activeTabContent.title}
                </h3>
                <p className="text-base text-slate-300">{activeTabContent.description}</p>
                <div className="grid gap-4">
                  {activeTabContent.bullets.map((bullet) => (
                    <div
                      key={bullet}
                      className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 text-base text-slate-200"
                    >
                      <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/15 text-xs font-semibold text-emerald-300">
                        •
                      </span>
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
                <div className="rounded-2xl border border-emerald-400/40 bg-emerald-500/10 p-6 text-base text-emerald-100">
                  {activeTabContent.highlight}
                </div>
              </div>
              <figure className="relative">
                <div className="absolute -inset-6 rounded-[32px] bg-gradient-to-br from-emerald-500/25 via-transparent to-indigo-500/25 blur-xl" />
                <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/80 p-4 shadow-xl shadow-emerald-500/10">
                  <img
                    src={activeTabContent.image}
                    alt={`${activeTabContent.label} preview`}
                    className="w-full rounded-2xl border border-white/10 object-cover"
                  />
                </div>
              </figure>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              onClick={() => setShowDiscoveryPopup(true)}
              className="rounded-full bg-green-600 px-10 py-4 text-lg font-bold uppercase tracking-[0.25em] text-white shadow-lg shadow-green-600/25 transition hover:bg-green-500"
            >
              Book Discovery Call
            </button>
          </div>
        </section>

        <section id="about-mla" className="rounded-4xl border border-white/10 bg-slate-900/60 p-10 lg:p-16">
          <div className="mx-auto max-w-4xl space-y-8 text-center">
            <span className="text-base font-bold uppercase tracking-[0.3em] text-green-300">
              The Platform
            </span>
            <div className="space-y-8">
              <img
                src={amicusProLogo}
                alt="Amicus Pro"
                className="mx-auto h-32 w-auto"
              />
            </div>
            <p className="text-2xl leading-relaxed text-slate-200">
              My Legal Academy (MLA) has scaled hundreds of firms by building intake systems, automations, and growth playbooks that outperform the market. Amicus Pro distills that expertise into one productized platform—backed by operators who understand law firm realities.
            </p>
            <p className="text-xl text-slate-300">
              You get more than software—MLA brings implementation specialists, intake trainers, and a community of high-performing firms to your corner.
            </p>
            <a
              href="https://mylegalacademy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xl font-bold uppercase tracking-[0.2em] text-green-300 transition hover:text-green-200"
            >
              Meet My Legal Academy →
            </a>
            <div className="grid gap-8 pt-12 md:grid-cols-3">
              {[
                "10+ years devoted exclusively to law firm growth.",
                "1,260+ proven systems launched across practice areas.",
                "Private community, coaching, and lifetime optimization.",
              ].map((item) => (
                <div key={item} className="rounded-3xl border border-green-400/20 bg-green-500/5 p-8 transition hover:border-green-400/40 hover:bg-green-500/10">
                  <p className="text-lg font-medium text-slate-200">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="implementation" className="space-y-12">
          <header className="space-y-6 text-center">
            <span className="text-base font-bold uppercase tracking-[0.3em] text-green-300">
              Service Tiers
            </span>
            <h2 className="font-serif text-5xl font-bold text-white sm:text-6xl lg:text-7xl">
              Choose Your Growth Path
            </h2>
            <p className="mx-auto max-w-4xl text-xl leading-relaxed text-slate-200 sm:text-2xl">
              Select the service tier that aligns with your firm's operational style and growth objectives.
            </p>
          </header>
          
          <div className="overflow-hidden rounded-4xl border border-white/10 bg-slate-900/70 p-8 lg:p-12">
            <TierComparison />
          </div>
          
          <div className="text-center">
            <button
              onClick={() => setShowDiscoveryPopup(true)}
              className="inline-flex items-center gap-3 rounded-full bg-green-600 px-12 py-6 text-xl font-bold uppercase tracking-[0.2em] text-white shadow-lg shadow-green-600/25 transition hover:bg-green-500 hover:shadow-green-500/30"
            >
              Book Discovery Call →
            </button>
          </div>
        </section>

        <section id="results" className="space-y-16">
          <header className="space-y-6 text-center">
            <span className="text-base font-bold uppercase tracking-[0.3em] text-green-300">
              Client Success Stories
            </span>
            <h2 className="font-serif text-5xl font-bold text-white sm:text-6xl lg:text-7xl">
              Law Firms Scaling With Amicus Pro
            </h2>
            <p className="mx-auto max-w-4xl text-xl leading-relaxed text-slate-200 sm:text-2xl">
              Real results from forward-thinking firms who chose My Legal Academy's proven system to transform their client acquisition.
            </p>
          </header>
          
          <div className="overflow-hidden rounded-4xl border border-white/10 bg-slate-900/70 p-8 lg:p-12">
            <CaseStudiesCarousel />
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {proofHighlights.map((highlight) => (
              <div key={highlight.label} className="rounded-3xl border border-green-400/20 bg-green-500/5 p-8 text-center transition hover:border-green-400/40 hover:bg-green-500/10">
                <p className="font-serif text-5xl font-black text-white lg:text-6xl">{highlight.value}</p>
                <p className="mt-4 text-lg font-medium text-slate-200">{highlight.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <span className="text-sm font-semibold uppercase tracking-[0.4em] text-emerald-200">
            FAQ
          </span>
          <h2 className="font-serif text-4xl font-semibold text-white sm:text-5xl">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqItems.map((item) => {
              const isOpen = openFaq === item.question;
              return (
                <div key={item.question} className="rounded-3xl border border-white/10 bg-slate-900/70">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between rounded-3xl px-7 py-5 text-left text-base font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-white/5"
                    onClick={() => setOpenFaq(isOpen ? null : item.question)}
                    aria-expanded={isOpen}
                  >
                    {item.question}
                    <span className="text-emerald-300">{isOpen ? "–" : "+"}</span>
                  </button>
                  {isOpen && (
                    <div className="border-t border-white/10 px-7 py-5 text-base text-slate-200">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        <section
          id="cta"
          className="rounded-4xl border border-green-400/40 bg-gradient-to-br from-green-500/20 via-slate-950 to-green-400/10 p-16 text-center shadow-green-500/20"
        >
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="font-serif text-5xl font-bold text-white sm:text-6xl lg:text-7xl">
              Ready to Scale Your Law Firm?
            </h2>
            <p className="text-2xl leading-relaxed text-slate-100 sm:text-3xl">
              Join 1,260+ law firms using My Legal Academy's proven systems. Book a discovery call to see how Amicus Pro can transform your practice in 90 days.
            </p>
            <div className="space-y-6">
              <button
                onClick={() => setShowDiscoveryPopup(true)}
                className="rounded-full bg-white px-16 py-6 text-xl font-bold uppercase tracking-[0.25em] text-slate-950 shadow-xl transition hover:bg-green-50 hover:shadow-2xl"
              >
                Book Discovery Call Now
              </button>
              <div className="grid gap-6 text-center sm:grid-cols-3">
                <div className="space-y-2">
                  <div className="text-4xl">🚀</div>
                  <p className="font-bold text-white">Proven System</p>
                  <p className="text-base text-slate-300">Complete 90-day transformation</p>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl">⏱️</div>
                  <p className="font-bold text-white">90-Day Timeline</p>
                  <p className="text-base text-slate-300">From setup to scaling</p>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl">🎯</div>
                  <p className="font-bold text-white">Guaranteed Results</p>
                  <p className="text-base text-slate-300">Trusted by 1,260+ firms</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-slate-950/90 py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 text-xs text-slate-500 lg:flex-row lg:items-center lg:justify-between lg:px-0">
          <div className="space-y-2">
            <p>
              © {new Date().getFullYear()} Amicus Pro by My Legal Academy. All rights reserved.
            </p>
            <p>
              Legal technology solutions for modern law firms.
            </p>
          </div>
          <div className="flex flex-wrap justify-center lg:justify-end gap-4 lg:gap-6 text-xs uppercase tracking-[0.3em]">
            <a href="#why" className="text-slate-400 transition hover:text-green-200">
              Why Amicus Pro
            </a>
            <a href="#features" className="text-slate-400 transition hover:text-green-200">
              Features
            </a>
            <a href="#implementation" className="text-slate-400 transition hover:text-green-200">
              Plans
            </a>
            <a href="/privacy-policy" className="text-slate-400 transition hover:text-green-200">
              Privacy Policy
            </a>
            <a href="/terms-of-service" className="text-slate-400 transition hover:text-green-200">
              Terms of Service
            </a>
            <button
              onClick={() => setShowDiscoveryPopup(true)}
              className="text-slate-400 transition hover:text-green-200 text-xs uppercase tracking-[0.3em]"
            >
              Book a Demo
            </button>
          </div>
        </div>
      </footer>

      <DiscoveryCallPopup isOpen={showDiscoveryPopup} onClose={() => setShowDiscoveryPopup(false)} />
    </div>
  );
};
