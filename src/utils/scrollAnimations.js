export const scrollAnimations = () => {
  const sections = document.querySelectorAll("section");
  const navA = document.querySelectorAll(".content-navbar .nav-links li a");
  const navBackground = document.querySelectorAll(".content-navbar ul");

  function updateActiveSection() {
    const currentScroll = window.scrollY;
    if (currentScroll !== 0) {
      navBackground[0].classList.add("background-scrolling");
    } else {
      navBackground[0].classList.remove("background-scrolling");
    }

    let maxVisibleArea = 0;
    let activeSection = null;

    sections.forEach((section) => {
      const visibleArea = getVisibleArea(section);
      if (visibleArea > maxVisibleArea) {
        maxVisibleArea = visibleArea;
        activeSection = section.getAttribute("id");
      }
    });
    if (activeSection === "projects") {
      const card = document.querySelector(".cards");
      card.classList.add("show");
    }

    navA.forEach((a) => {
      a.classList.remove("active");
      if (a.classList.contains(activeSection)) {
        a.classList.add("active");
      }
    });
  }

  function getVisibleArea(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;
    const windowWidth =
      window.innerWidth || document.documentElement.clientWidth;
    const visibleHeight =
      Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
    const visibleWidth =
      Math.min(rect.right, windowWidth) - Math.max(rect.left, 0);
    return visibleHeight * visibleWidth;
  }

  window.addEventListener("scroll", updateActiveSection);
  window.addEventListener("resize", updateActiveSection);
};
