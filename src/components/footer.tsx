import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { cn } from "../lib/utils";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <footer
      ref={ref as React.RefObject<HTMLElement>}
      className={cn(
        "relative pt-8 pb-22 md:pb-8 px-4 border-t border-[#334756]/30 bg-[#082032]/50 backdrop-blur-sm transition-all duration-700 ease-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      )}
    >
      {/* Futuristic accent line */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-[#FF4C29] to-transparent"></div>

      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left side - Copyright */}
          <div className="flex items-center space-x-2 text-white/60">
            <div className="w-2 h-2 bg-[#FF4C29] rounded-full animate-pulse" aria-hidden="true"></div>
            <span className="text-sm">
              © {currentYear}{" "}
              <span className="text-[#FF4C29] font-semibold">Faique Inaas</span>
              . All rights reserved.
            </span>
          </div>

          {/* Center - Decorative element */}

          {/* Right side - Status */}
          <div className="flex items-center space-x-2 text-white/60">
            <span className="text-sm">Crafted with</span>
            <div className="w-1 h-1 bg-[#FF4C29] rounded-full animate-ping" aria-hidden="true"></div>
            <span className="text-sm text-[#FF4C29] font-semibold">
              passion
            </span>
          </div>
        </div>

        {/* Bottom decorative line */}
        <div className="mt-6 flex justify-center">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-0.5 bg-[#334756]/50"></div>
            <div className="w-2 h-2 border border-[#FF4C29]/30 rotate-45"></div>
            <div className="w-4 h-0.5 bg-[#334756]/50"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}

