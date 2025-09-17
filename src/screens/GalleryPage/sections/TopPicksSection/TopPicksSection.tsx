import React from "react";
import { Separator } from "../../../../components/ui/separator";

export const TopPicksSection = (): JSX.Element => {
  const navigationItems = [
    { label: "Home", href: "#" },
    { label: "Gallery", href: "#" },
    { label: "About Us", href: "#" },
    { label: "Customer Reviews", href: "#" },
  ];

  return (
    <footer className="w-full h-64 bg-white relative translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
      <Separator className="w-full" />

      <div className="flex justify-between items-start px-20 pt-[51px] h-full">
        <div className="flex flex-col gap-[93px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          <h2 className="[font-family:'Alata',Helvetica] font-normal text-[#00231c] text-2xl tracking-[0] leading-9 whitespace-nowrap">
            Bloom Valley Nursery
          </h2>

          <img
            className="w-[184px] h-10"
            alt="Social icons"
            src="https://c.animaapp.com/mfkekfwl57gCHC/img/social-icons.svg"
          />
        </div>

        <nav className="flex flex-col gap-[25px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
          <div className="flex items-center justify-center gap-[18px]">
            {navigationItems.slice(0, 3).map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className="[font-family:'Alata',Helvetica] font-normal text-[#00231c] text-base tracking-[0] leading-6 whitespace-nowrap hover:text-[#00231c]/80 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href={navigationItems[3].href}
            className="[font-family:'Alata',Helvetica] font-normal text-[#00231c] text-base tracking-[0] leading-6 text-center hover:text-[#00231c]/80 transition-colors"
          >
            {navigationItems[3].label}
          </a>
        </nav>
      </div>
    </footer>
  );
};
