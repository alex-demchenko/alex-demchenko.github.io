import { ReactNode } from "react";
import { cn } from "../utils/cn";

interface Props {
  title: string;
  children: ReactNode;

  className?: string;
}

export default function SectionBlock(props: Props) {
  return (
    <section
      className={cn(
        "mt-10 grid grid-cols-[1fr] md:grid-cols-[200px_1fr] gap-x-10 border-t-2 border-black",
        props.className
      )}
    >
      <h2 className="leading-4 uppercase">{props.title}</h2>
      <div className="pt-5">{props.children}</div>
    </section>
  );
}
