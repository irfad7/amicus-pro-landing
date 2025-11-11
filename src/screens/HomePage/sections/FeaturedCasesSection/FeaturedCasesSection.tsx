import { Card, CardContent } from "../../../../components/ui/card";

const benefitsList = [
  {
    title: "Speed to execution",
    description: "→ Calls returned in under 60 seconds = higher signed cases.",
  },
  {
    title: "AI-enhanced Followup That Doesn't Quit",
    description: "→ 15 touchpoints in 7 days closes more clients.",
  },
  {
    title: "Transparent ROI",
    description: "→ Know exactly what it costs to generate every signed case.",
  },
  {
    title: "All Proven Ad Creatives",
    description: "→ Lean on proven results based on 5 years of research and testing.",
  },
  {
    title: "Scalable Cash-Flow Model",
    description: "→ Control the speed and direction of your growth.",
  },
];

export const FeaturedCasesSection = (): JSX.Element => {
  return (
    <section className="w-full py-20">
      <div className="max-w-7xl mx-auto px-4">
        <Card className="w-full mx-auto bg-white rounded-[8.05px] shadow-[0px_0px_20.13px_#002c7a14] transition-shadow duration-300 hover:shadow-[0px_0px_28px_#002c7a20] hover:-translate-y-1.5">
          <CardContent className="px-6 pt-8 pb-8 md:px-10 md:pt-10 md:pb-10">
            <div className="max-w-5xl mx-auto">
              <div className="space-y-8 md:space-y-10 px-2 md:px-12 lg:px-16">
                <header>
                  <h2 className="[font-family:'Playfair_Display',serif] font-medium text-[#0c0c0c] text-[32px] sm:text-[38px] md:text-[48px] lg:text-[54px] tracking-[-0.5px] leading-tight text-center px-2">
                    Proven. Predictable. Scalable.
                  </h2>
                </header>

                <div className="space-y-5 md:space-y-7 [font-family:'Playfair_Display',serif] text-base sm:text-lg md:text-[20px] lg:text-[22px] leading-relaxed max-w-3xl mx-auto">
                  {benefitsList.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-4 md:gap-6 lg:gap-7 group hover:scale-[1.01] transition-transform duration-300 hover:bg-gray-50/50 rounded-lg p-3 -m-3 cursor-pointer">
                      <div className="flex-shrink-0">
                        <span className="[font-family:'Playfair_Display',serif] font-light text-[#0c0c0c] text-[24px] sm:text-[28px] md:text-[34px] lg:text-[38px] leading-none transition-colors duration-300 group-hover:text-[#0e823e] group-hover:scale-105">
                          {index + 1}.
                        </span>
                      </div>
                      <div className="flex-1 space-y-3">
                        <div className="font-bold text-[#0c0c0c] text-lg sm:text-xl md:text-[22px] lg:text-[24px] transition-colors duration-300 group-hover:text-[#0e823e]">
                          {benefit.title}
                        </div>
                        <div className="text-[#0c0c0c] transition-colors duration-300 group-hover:text-[#4d5256]">{benefit.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
