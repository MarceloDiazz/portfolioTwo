export const scrollAnimations = () => {
  const sections = document.querySelectorAll("section");
  const navA = document.querySelectorAll(".content-navbar .nav-links li a");
  const navBackground = document.querySelector(".content-navbar ul");
  let ticking = false; // Usamos una bandera para evitar ejecutar múltiples cálculos innecesarios

  // Guardamos las posiciones iniciales para mejorar el rendimiento
  const sectionPositions = Array.from(sections).map((section) => {
    return {
      id: section.getAttribute("id"),
      element: section,
    };
  });

  // Función principal que maneja la lógica de scroll
  function updateActiveSection() {
    const currentScroll = window.scrollY;
    
    // Cambiar el fondo del navbar solo si es necesario
    if (currentScroll !== 0) {
      navBackground.classList.add("background-scrolling");
    } else {
      navBackground.classList.remove("background-scrolling");
    }

    // Usamos una variable para rastrear la sección activa
    let maxVisibleArea = 0;
    let activeSection = null;

    sectionPositions.forEach(({ id, element }) => {
      const visibleArea = getVisibleArea(element);
      if (visibleArea > maxVisibleArea) {
        maxVisibleArea = visibleArea;
        activeSection = id;
      }
    });

    // Mostrar las cards cuando la sección "projects" es activa
    if (activeSection === "projects") {
      const card = document.querySelector(".cards");
      if (card) card.classList.add("show");
    }

    // Actualizamos las clases de los enlaces del navbar
    navA.forEach((a) => {
      a.classList.remove("active");
      if (a.classList.contains(activeSection)) {
        a.classList.add("active");
      }
    });

    // Marcamos el final del cálculo para habilitar la próxima ejecución
    ticking = false;
  }

  // Función que calcula el área visible de un elemento
  function getVisibleArea(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const windowWidth = window.innerWidth || document.documentElement.clientWidth;

    const visibleHeight = Math.max(0, Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0));
    const visibleWidth = Math.max(0, Math.min(rect.right, windowWidth) - Math.max(rect.left, 0));

    return visibleHeight * visibleWidth;
  }

  // Usamos requestAnimationFrame para optimizar el manejo de scroll
  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateActiveSection();
      });
      ticking = true;
    }
  }

  // Agregamos los eventos de scroll y resize
  window.addEventListener("scroll", onScroll);
  window.addEventListener("resize", updateActiveSection);

  // Llamada inicial para marcar la sección activa al cargar la página
  updateActiveSection();
};
