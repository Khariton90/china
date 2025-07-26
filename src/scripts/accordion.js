const toggleAccordionItem = (accordion, body) => {
  accordion.classList.toggle("active");
  if (body.style.maxHeight) {
    body.style.maxHeight = null;
  } else {
    body.style.maxHeight = `${body.scrollHeight}px`;
  }
};

const closeOtherAccordions = (currentAccordion) => {
  const accordions = document.querySelectorAll(".accordion");
  accordions.forEach((accordion) => {
    if (
      accordion !== currentAccordion &&
      accordion.classList.contains("active")
    ) {
      toggleAccordionItem(
        accordion,
        accordion.querySelector(".accordion-body")
      );
    }
  });
};

const accordionInit = async () => {
  const accordions = document.querySelectorAll(".accordion");
  if (!accordions.length) {
    return;
  }

  accordions.forEach(async (accordion, index) => {
    const head = accordion.querySelector(".accordion-head");
    const body = accordion.querySelector(".accordion-body");

    head.addEventListener("click", () => {
      closeOtherAccordions(accordion);
      toggleAccordionItem(accordion, body);
    });
  });
};

export default accordionInit;
