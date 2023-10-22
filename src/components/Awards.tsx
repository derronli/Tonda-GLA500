import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

type FeatureCardProps = {
  icon: string,
  title: string,
  content: string,
  index: number,
}

const FeatureCard = ({ icon, title, content, index }: FeatureCardProps) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`xl:w-[64px] md:w-[50px] w-[64px] xl:h-[64px] md:h-[50px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white xl:text-[18px] md:text-[14px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite xl:text-[16px] md:text-[12px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Awards = () => { 

  return (
    <section id="features" className={`${layout.section}`}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Awards? They are <br className="sm:block hidden" /> part of who we are
        </h2>
        <p
          className={`${styles.paragraph} xl:max-w-[470px] md:max-w-[400px] mt-5`}
        >
          We are champions. The Tonda GLA500 has been a worldwide sensation
          since its release in 1987. We assembled a team of winners - experts in
          their field of engineering, design and management. Clearly it shows.
          You too can become a champion.
        </p>

        <Button styles="mt-10" />
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Awards;
