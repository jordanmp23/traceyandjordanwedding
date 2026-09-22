import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import type { ReactNode } from "react";
import Reveal from "./Reveal";

type FullBleedProps = {
  image: string;
  imageAlt: string;
  eyebrow: string;
  title: string;
  children?: ReactNode;
  className?: string;
};

export default function FullBleed({
  image,
  imageAlt,
  eyebrow,
  title,
  children,
  className = "",
}: FullBleedProps) {
  const ref = useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [-30, 30]);

  return (
    <section ref={ref} className={`full-bleed ${className}`}>
      <motion.img
        className="full-bleed__image"
        src={image}
        alt={imageAlt}
        style={{ y }}
      />
      <div className="full-bleed__content">
        <Reveal y={32}>
          <p className="full-bleed__eyebrow">{eyebrow}</p>
          <h2 className="full-bleed__title">{title}</h2>
          {children ? <div className="full-bleed__copy">{children}</div> : null}
        </Reveal>
      </div>
    </section>
  );
}
