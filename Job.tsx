import { AnimatePresence, motion } from "framer-motion";
import React, { useContext } from "react";
import { FilterContext } from "../contexts/FilterContext";
import styles from "../styles/Jobs.module.css";
import { Tags } from "./Tags";

export type Job = {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
};
type Jobprops = {
  job: Job;
};

export const Job: React.FC<Jobprops> = ({ job }) => {
  const tags = [job.role, job.level, ...job.languages, ...job.tools];
  const { filters } = useContext(FilterContext);
  const found = filters.every((r) => tags.includes(r));

  return (
    <AnimatePresence>
      {filters.length > 0 && found === false ? null : (
        <motion.li
          layoutId={job.company}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={styles.job}
        >
          <div className={styles.companyLogo}>
            <img src={`${job.logo}`} alt={job.company} />
          </div>

          <div title="company " className={styles.company}>
            <span>{job.company}</span>
            {job.new && <span className={styles.new}>New!</span>}
            {job.featured && <span className={styles.featured}>Featured</span>}
          </div>

          <h2 className={styles.position}>{job.position}</h2>

          <div className={styles.features}>
            <span className="postedAt">{job.postedAt}</span>
            <span className="contract">{job.contract}</span>
            <span className="location">{job.location}</span>
          </div>

          <Tags tags={tags} />
        </motion.li>
      )}
    </AnimatePresence>
  );
};
