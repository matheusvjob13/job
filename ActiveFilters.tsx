import { AnimatePresence, motion } from "framer-motion";
import React, { useContext } from "react";
import { FilterContext } from "../contexts/FilterContext";
import styles from "../styles/Filter.module.css";
export default function ActiveFilters() {
  const { filters, dispatch } = useContext(FilterContext);
  return (
    <AnimatePresence>
      {filters.length > 0 && (
        <motion.div
          initial={{ scale: 0, y: "50%" }}
          animate={{ scale: 1, y: "-50%" }}
          exit={{ scale: 0, y: "-50%" }}
          className={styles.activeFilters}
        >
          <ul className={styles.filters}>
            {filters.map((filter) => {
              return (
                <motion.li
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  key={filter}
                  className={styles.filter}
                >
                  {filter}
                  <button
                    onClick={() => {
                      dispatch({ type: "REMOVE_FILTER", payload: { filter } });
                    }}
                    className={styles.rmF}
                  >
                    <img src="./images/icon-remove.svg" alt="" />
                  </button>
                </motion.li>
              );
            })}
          </ul>
          <button
            onClick={() => {
              dispatch({ type: "CLEAR_ALL", payload: {} });
            }}
            className={styles.clear}
          >
            Clear
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
