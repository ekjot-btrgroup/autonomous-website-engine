// Stand-in for next/link so Next.js sections run in a Vite/Lovable app.
import * as React from "react";

type Props = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: string | { pathname?: string }; prefetch?: boolean; replace?: boolean; scroll?: boolean; shallow?: boolean; legacyBehavior?: boolean; passHref?: boolean;
};

const Link = React.forwardRef<HTMLAnchorElement, Props>(({ href, prefetch, replace, scroll, shallow, legacyBehavior, passHref, ...rest }, ref) => (
  <a ref={ref} href={typeof href === "string" ? href : href?.pathname ?? "#"} {...rest} />
));
Link.displayName = "Link";
export default Link;
