import { ReactElement, useRef } from "react";
import { useInView } from "framer-motion";

function SectionAnimation({
  children,
  className = "",
}: {
  children: ReactElement | ReactElement[];
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
      className={className}
    >
      {children}
    </section>
  );
}

export default SectionAnimation;
