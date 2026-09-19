import type { ReactNode } from "react";
import Reveal from "./Reveal";

type SectionIntroProps = {
  eyebrow: string;
  title: string;
  body?: ReactNode;
  align?: "left" | "center";
};

export default function SectionIntro({ eyebrow, title, body, align = "left" }: SectionIntroProps) {
  return (
    <div className="section-intro" data-align={align}>
      <Reveal>
        <p className="section-intro__eyebrow">{eyebrow}</p>
      </Reveal>
      <Reveal delay={0.06} y={34}>
        <h2 className="section-intro__title">{title}</h2>
      </Reveal>
      {body ? (
        <Reveal delay={0.12}>
          <div className="section-intro__body">{body}</div>
        </Reveal>
      ) : null}
    </div>
  );
}
