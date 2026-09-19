import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Reveal from "./Reveal";

type TimelineItem = {
  time: string;
  title: string;
  description: string;
};

type WeddingTimelineProps = {
  items: TimelineItem[];
};

export default function WeddingTimeline({ items }: WeddingTimelineProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 30%"] });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className="editorial-timeline">
      <motion.div
        className="editorial-timeline__track"
        style={{ scaleY: reduceMotion ? 1 : scaleY, transformOrigin: "top" }}
        aria-hidden="true"
      />
      <div className="editorial-timeline__list">
        {items.map((item, index) => (
          <div className="editorial-timeline__item" key={`${item.time}-${item.title}`}>
            <Reveal className="editorial-timeline__time" delay={index * 0.03}>
              {item.time}
            </Reveal>
            <div className="editorial-timeline__dot-wrap" aria-hidden="true">
              <span className="editorial-timeline__dot" />
            </div>
            <Reveal className="editorial-timeline__content" delay={index * 0.05 + 0.06}>
              <h3 className="editorial-timeline__title">{item.title}</h3>
              <p className="editorial-timeline__description">{item.description}</p>
            </Reveal>
          </div>
        ))}
      </div>
    </div>
  );
}
