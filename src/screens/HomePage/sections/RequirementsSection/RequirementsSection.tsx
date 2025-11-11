import { Check } from "lucide-react";

const mustHavesList = [
  "$10-$15K Ad Budget",
  "7-Day Intake Coverage",
  "Speed to Lead within 60 seconds",
  "CRM + Call Tracking in place (or ready to set up)",
  "Commitment to proven process",
];

export const RequirementsSection = (): JSX.Element => {
  return (
    <section className="w-full pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-8 md:space-y-10 px-3 md:px-14 lg:px-18">
            <header>
              <h2 className="[font-family:'Playfair_Display',serif] font-medium text-[#0c0c0c] text-[32px] sm:text-[38px] md:text-[48px] lg:text-[54px] tracking-[-0.5px] leading-tight text-center px-2">
                This isn't for every PI Attorney.
              </h2>
            </header>

            <div className="text-center">
              <p className="[font-family:'Playfair_Display',serif] text-base sm:text-lg md:text-[20px] lg:text-[22px] leading-relaxed text-[#4d5256] max-w-4xl mx-auto">
                We only partner with firms ready to execute fast and follow the system and who meet these requirements:
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-7 md:p-9 lg:p-10">
                <div className="space-y-4 md:space-y-5">
                  {mustHavesList.map((item, index) => (
                    <div key={index} className="flex items-start gap-4 md:gap-6">
                      <div className="flex-shrink-0 mt-1">
                        <Check className="w-5 h-5 md:w-6 md:h-6 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <p className="[font-family:'Playfair_Display',serif] text-base sm:text-lg md:text-[20px] lg:text-[22px] leading-relaxed text-[#0c0c0c]">
                          {item}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
