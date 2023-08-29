import { apple, appCharging, google } from "../assets";
import styles, { layout } from "../style";
import { useEffect } from "react";
import loadIntersect from "./intersect";

const AppSupport = () => {
  useEffect(() => {
    loadIntersect();
  }, []);
  return (
    <section id="product" className={`${layout.sectionReverse} hiddenFeature`}>
      <div className={layout.sectionImgReverse}>
        <img
          src={appCharging}
          alt="AppSupport"
          className="w-[100%] h-[100%] relative z-[5] sideImg"
        />

        {/* gradient start */}
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
        {/* gradient end */}
      </div>

      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2} md:ml-36 ml-0`}>
          A world of support <br className="sm:block hidden" /> at your
          fingertips
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 md:ml-36 ml-0`}>
          The available Tonda Connect app makes interacting with your Tonda more
          convenient than ever. Plus multi-connect and wireless charging.
        </p>

        <div className="flex flex-row flex-wrap sm:mt-10 mt-6 md:ml-36 ml-0">
          <img
            src={apple}
            alt="google_play"
            className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer"
          />
          <img
            src={google}
            alt="google_play"
            className="w-[144.17px] h-[43.08px] object-contain cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};

export default AppSupport;
