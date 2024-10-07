import { ReactNode } from "react";

interface Props {
  company: string;
  where: string;
  jobs: ReactNode[];
}

export default function ExperienceCompany(props: Props) {
  return (
    <div className="mb-5">
      <div className="print:border-b-2 print:border-b-[var(--theme-color)]">
        <strong>{props.company}</strong>, {props.where}
      </div>

      <div className="exp">{props.jobs.map((job) => job)}</div>
    </div>
  );
}
