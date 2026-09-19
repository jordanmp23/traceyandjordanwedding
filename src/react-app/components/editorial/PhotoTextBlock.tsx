import type { ReactNode } from "react";
import Reveal from "./Reveal";

type PhotoTextBlockProps = {
  eyebrow: string;
  title: string;
  image: string;
  imageAlt: string;
  children: ReactNode;
  reverse?: boolean;
  caption?: string;
};

export default function PhotoTextBlock({
  eyebrow,
  title,
  image,
  imageAlt,
  children,
  reverse = false,
  caption,
}: PhotoTextBlockProps) {
  return (
    <div className={`photo-text${reverse ? " photo-text--reverse" : ""}`}>
      <Reveal className="photo-text__media" y={36}>
        <figure className="photo-text__frame">
          <img className="photo-text__image" src={image} alt={imageAlt} loading="lazy" />
          {caption ? <figcaption className="photo-text__caption">{caption}</figcaption> : null}
        </figure>
      </Reveal>

      <Reveal className="photo-text__copy" delay={0.08} y={28}>
        <p className="photo-text__index">{eyebrow}</p>
        <h2 className="photo-text__title">{title}</h2>
        <div className="photo-text__rule" />
        <div className="photo-text__body">{children}</div>
        <div className="photo-text__decor" aria-hidden="true" />
      </Reveal>
    </div>
  );
}
