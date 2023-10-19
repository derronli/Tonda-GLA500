import styles from "./style";
import React from "react";
import {
  Navbar,
  Hero,
  Stats,
  Awards,
  AppSupport,
  Sound,
  Testimonials,
  CTA,
  Footer,
  Slider,
  FeaturedScroll,
  BuildColour,
  Landing,
  Versatile,
  Design,
} from "./components";

const App = () => {
  return (
    <div id="container" className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`${styles.flexStart} flex-col`}>
        <Landing />
      </div>

      <div className={`bg-primary ${styles.flexStart} pt-20`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Awards />
        </div>
      </div>

      <div className={`bg-primary pb-24`}>
        <Design />
      </div>

      <div className={`bg-primary ${styles.flexStart} flex-col`}>
        <Slider />
        <FeaturedScroll />
        <BuildColour />
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <AppSupport />
          <Sound />
        </div>
      </div>

      <div className={`bg-primary`}>
        <Versatile />
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Testimonials />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
