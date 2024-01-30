import { ReactNode } from "react";

interface Props {
  company: string;
  where: string;
  jobs: ReactNode[];
}

export default function ExperienceCompany(props: Props) {
  return (
    <div>
      <div>
        <strong>{props.company}</strong>, {props.where}
      </div>

      <div className="exp">{props.jobs.map((job) => job)}</div>
    </div>
  );
}
