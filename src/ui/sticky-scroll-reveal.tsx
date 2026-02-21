"use client";
import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { cn } from "../lib/utils";

export type StickyScrollItem = {
  title: string;
  description: React.ReactNode;
  content?: React.ReactNode;
};

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: StickyScrollItem[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  return (
    <div className="sticky-scroll-root" ref={ref}>
      {/* Left: scrolling text panels */}
      <div className="sticky-scroll-left">
        {content.map((item, index) => (
          <div key={index} className="sticky-scroll-item">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: activeCard === index ? 1 : 0.25 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <h2 className="sticky-scroll-title">{item.title}</h2>
              <div className="sticky-scroll-desc">{item.description}</div>
            </motion.div>
          </div>
        ))}
        {/* spacer so the last item can scroll fully into view */}
        <div className="sticky-scroll-spacer" />
      </div>

      {/* Right: sticky crossfading panel */}
      <div className={cn("sticky-scroll-right", contentClassName)}>
        {content.map((item, index) => (
          <motion.div
            key={index}
            initial={false}
            animate={{ opacity: activeCard === index ? 1 : 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="sticky-scroll-panel"
          >
            {item.content}
          </motion.div>
        ))}
      </div>
    </div>
  );
};
