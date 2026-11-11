// Stand-in for next/image so Next.js sections run in a Vite/Lovable app.
import * as React from "react";

type Src = string | { src: string };
type Props = Omit<React.ImgHTMLAttributes<HTMLImageElement>, "src"> & {
  src: Src; fill?: boolean; priority?: boolean; quality?: number; placeholder?: string; blurDataURL?: string; unoptimized?: boolean; loader?: unknown;
};

const Image = React.forwardRef<HTMLImageElement, Props>(({ src, fill, priority, quality, placeholder, blurDataURL, unoptimized, loader, style, ...rest }, ref) => (
  <img
    ref={ref}
    src={typeof src === "string" ? src : src?.src}
    loading={priority ? "eager" : rest.loading ?? "lazy"}
    style={fill ? { position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", ...style } : style}
    {...rest}
  />
));
Image.displayName = "Image";
export default Image;
