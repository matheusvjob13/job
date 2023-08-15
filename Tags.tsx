import React, { useContext } from "react";
import { FilterContext } from "../contexts/FilterContext";
import styles from "../styles/Filter.module.css";
type TagsProps = {
  tags: string[];
};
type TagProps = {
  tag: string;
};

export const Tag: React.FC<TagProps> = ({ tag }) => {
  const { dispatch } = useContext(FilterContext);

  return (
    <li
      onClick={() => {
        dispatch({ type: "ADD_FILTER", payload: { filter: tag } });
      }}
      className={styles.filter}
    >
      {tag}
    </li>
  );
};

export const Tags: React.FC<TagsProps> = ({ tags }) => {
  return (
    <ul className={styles.filters}>
      {tags.map((tag) => {
        return <Tag key={tag} tag={tag} />;
      })}
    </ul>
  );
};
