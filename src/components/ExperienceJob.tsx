import { ReactNode } from "react";

interface Props {
  title: string;
  dateRange: string;
  description: ReactNode;
}

export default function ExperienceJob(props: Props) {
  return (
    <div className="mb-5 pl-5 relative exp__job">
      <p>
        <strong className="uppercase">{props.title}</strong>, {props.dateRange}
      </p>
      {props.description}
    </div>
  );
}
