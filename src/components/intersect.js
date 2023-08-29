export default function loadIntersect() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("showFeature");
        } else {
          entry.target.classList.remove("showFeature");
        }
      });
    },
    { threshold: 0, rootMargin: "50px" }
  );
  const hiddenElements = document.querySelectorAll(".hiddenFeature");
  hiddenElements.forEach((el) => observer.observe(el));
}
