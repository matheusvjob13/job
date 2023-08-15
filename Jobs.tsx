import React from "react";
import styles from "../styles/Jobs.module.css";
import data from "../data.json";
import { Job } from "./Job";

export default function Jobs() {
  return (
    <ul className={styles.jobs}>
      {data.map((d: Job) => {
        return <Job job={d} key={d.id} />;
      })}
    </ul>
  );
}
