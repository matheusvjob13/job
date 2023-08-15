import Head from "next/head";
import ActiveFilters from "../components/ActiveFilters";
import Header from "../components/Header";
import Jobs from "../components/Jobs";
import FilterContextProvider from "../contexts/FilterContext";
import styles from "../styles/Home.module.css";
import { AnimateSharedLayout } from "framer-motion";
export default function Home() {
  return (
    <>
      <Head>
        <title>Static Job Listings | FM Challenge </title>
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <Header />
      <FilterContextProvider>
        <AnimateSharedLayout>
          <ActiveFilters />
          <Jobs />
        </AnimateSharedLayout>
      </FilterContextProvider>
      <footer className={styles.footer}>
        <a
          target="_blank"
          rel="noopener onreferrer"
          href="https://www.youtube.com/channel/UC74BFCI_FbThOjUqx6gmccg"
        >
          Coded by
          <div className={styles.logo}>
            <img
              src="https://avatars0.githubusercontent.com/u/40115867?s=460&u=818c7d4a1529080a0e5659aff0ff3ecbe47aa889&v=4"
              alt=""
            />
          </div>
        </a>
      </footer>
    </>
  );
}
