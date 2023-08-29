import { soundSystem } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
import { useEffect } from "react";
import loadIntersect from "./intersect";

const Sound = () => {
  useEffect(() => {
    loadIntersect();
  }, []);
  return (
    <section className={`${layout.section} hiddenFeature`}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Turn it up! With <br className="sm:block hidden" /> premium sound
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          From long road trips to running errands the Tonda premium audio system
          gives you clear, audio bliss to make your trip that much more
          enjoyable.
        </p>

        <Button styles={`mt-10`} />
      </div>

      <div className={layout.sectionImg}>
        <img
          src={soundSystem}
          alt="AppSupport"
          className="w-[100%] h-[100%] sideImg"
        />
      </div>
    </section>
  );
};

export default Sound;
