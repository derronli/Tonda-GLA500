// Collection of classnames >> tied to a single string (key), so they can be used more easily
// Makes code cleaner

const styles = {
  boxWidth: "xl:max-w-[1280px] lg:max-w-[950px] w-full",

  heading2:
    "font-poppins font-semibold xl:text-[48px] md:text-[43px] text-[40px] text-white xl:leading-[76.8px] md:leading-[60px] leading-[66.8px] w-full",
  heading1:
    "font-poppins xl:text-[60px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
  paragraph:
    "font-poppins font-normal text-dimWhite xl:text-[18px] md:text-[12px] xl:leading-[30.8px] md:leading-[20px]",

  sideHeading: "font-poppins font-normal text-white xl:text-[26px] text-[18px]",

  paragraphDark:
    "font-poppins font-normal text-black text-[22px] leading-[30.8px]",
  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
