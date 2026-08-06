import Image from "next/image";

import type { ContentImage } from "@/content/types";

type GoldOrnamentProps = { className: string; gradientId: string; position: "top" | "bottom" };

function GoldOrnament({ className, gradientId, position }: GoldOrnamentProps) {
  return (
    <svg aria-hidden="true" className={className} data-frame-ornament={position} focusable="false" viewBox="0 0 160 16">
      <defs>
        <linearGradient id={gradientId} gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="160" y2="0">
          <stop offset="0%" stopColor="#F4E3A1" />
          <stop offset="50%" stopColor="#D4B96A" />
          <stop offset="100%" stopColor="#8F6B24" />
        </linearGradient>
      </defs>
      <g fill={`url(#${gradientId})`}>
        <polygon points="80,4.8 83.2,8 80,11.2 76.8,8" />
        <polygon points="43.7,4.8 46.9,8 43.7,11.2 40.5,8" />
        <polygon points="116.3,4.8 119.5,8 116.3,11.2 113.1,8" />
        <polygon points="10.9,5.6 13.3,8 10.9,10.4 8.5,8" />
        <polygon points="2.4,5.6 4.8,8 2.4,10.4 0,8" />
        <polygon points="149.1,5.6 151.5,8 149.1,10.4 146.7,8" />
        <polygon points="157.6,5.6 160,8 157.6,10.4 155.2,8" />
      </g>
      <g fill="none" stroke={`url(#${gradientId})`} strokeLinejoin="miter" strokeWidth="1.5">
        <polygon points="72.6,8 61,5.7 49.4,8 61,10.3" vectorEffect="non-scaling-stroke" />
        <polygon points="87.4,8 99,5.7 110.6,8 99,10.3" vectorEffect="non-scaling-stroke" />
        <polygon points="38.7,8 27.55,5.8 16.4,8 27.55,10.2" vectorEffect="non-scaling-stroke" />
        <polygon points="121.3,8 132.45,5.8 143.6,8 132.45,10.2" vectorEffect="non-scaling-stroke" />
      </g>
    </svg>
  );
}

export function ContentFigure({ image, priority = false }: { image: ContentImage; priority?: boolean }) {
  const gradientIdBase = `content-figure-gold-${image.src.replace(/[^a-zA-Z0-9_-]/g, "-")}`;
  const renderedImage = (
    <Image
      className="content-figure__image"
      src={image.src}
      width={image.width}
      height={image.height}
      sizes="(max-width: 767px) 92vw, (max-width: 1199px) 42vw, 480px"
      alt={image.alt}
      priority={priority}
      loading={priority ? "eager" : "lazy"}
    />
  );

  return (
    <figure className="content-figure">
      <div className="content-figure__media">
        {image.productHref ? <a className="content-figure__link" href={image.productHref}>{renderedImage}</a> : renderedImage}
        <svg
          aria-hidden="true"
          className="content-figure__frame"
          focusable="false"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          <defs>
            <linearGradient id={`${gradientIdBase}-rule`} gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="100" y2="0">
              <stop offset="0%" stopColor="#F4E3A1" />
              <stop offset="50%" stopColor="#D4B96A" />
              <stop offset="100%" stopColor="#8F6B24" />
            </linearGradient>
          </defs>
          <g
            fill="none"
            stroke={`url(#${gradientIdBase}-rule)`}
            strokeLinecap="square"
            strokeLinejoin="miter"
            strokeWidth="1.5"
            vectorEffect="non-scaling-stroke"
          >
            <path d="M 0 0 V 100 M 100 0 V 100" vectorEffect="non-scaling-stroke" />
            <path d="M 0 0 H 30 M 70 0 H 100 M 0 100 H 30 M 70 100 H 100" vectorEffect="non-scaling-stroke" />
          </g>
        </svg>
        <GoldOrnament className="content-figure__ornament content-figure__ornament--top" gradientId={`${gradientIdBase}-ornament-top`} position="top" />
        <GoldOrnament className="content-figure__ornament content-figure__ornament--bottom" gradientId={`${gradientIdBase}-ornament-bottom`} position="bottom" />
      </div>
    </figure>
  );
}
