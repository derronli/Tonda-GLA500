import styles from "../style";
import { discount, carTrans } from "../assets";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col md:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">10th Year</span> Anniversary
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold xl:text-[72px] text-[52px] text-white xl:leading-[100.8px] leading-[75px]">
            The New <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Generation</span>{" "}
          </h1>
        </div>

        <h1 className="font-poppins font-semibold xl:text-[68px] text-[52px] text-white xl:leading-[100.8px] leading-[75px] w-full">
          of Luxury
        </h1>
        <p
          className={`${styles.paragraph} xl:max-w-[480px] md:max-w-[350px] mt-5`}
        >
          Our team of experts uses cutting edge technology and research to
          elevate the driving experience. Precision crafted performance to fit
          your every need.
        </p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={carTrans}
          alt="Sound"
          className="w-[100%] h-[100%] relative z-[5] bg-no-repeat bg-cover bg-center"
        />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] -top-20 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[80%] h-[80%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>
    </section>
  );
};

export default Hero;
