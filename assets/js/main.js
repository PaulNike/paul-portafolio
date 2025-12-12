// Toggle del menú en mobile
const navToggle = document.getElementById("nav-toggle");
const mainNav = document.getElementById("main-nav");

if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    mainNav.classList.toggle("open");
  });
}

// ------- PROYECTOS DINÁMICOS --------
const base = "/paul-portafolio/";

let projectsData = [
  // 2024
  {
    id: "bcp-tribu-pyme",
    name: "Plataforma PyME – BCP",
    shortDesc: "Microservicios en Azure, APIs seguras, Data Lake y CI/CD.",
    client: "BCP / NTT DATA",
    year: 2024,
    tech: ["Java", "Spring Boot", "Azure Functions", "APIM", "Kubernetes"],
    image: base + "assets/img/bcp.png",
    detailUrl: base + "projects/bcp-tribu-pyme.html"
  },

  // 2023
  {
    id: "izipay-ya",
    name: "IziPay Ya – Integración de pagos",
    shortDesc: "Microservicios con arquitectura hexagonal, monitoreo con New Relic.",
    client: "Interbank / NTT DATA",
    year: 2023,
    tech: ["Java", "Spring Boot", "Arquitectura Hexagonal", "MongoDB", "Azure"],
    image: base + "assets/img/izipay-ya.png",
    detailUrl: base + "projects/izipay-ya.html"
  },
  {
    id: "manzana-verde",
    name: "Manzana Verde – Plataforma Saludable",
    shortDesc: "Nuxt.js, Vue y Segment para impulsar conversiones y rendimiento.",
    client: "Manzana Verde",
    year: 2023,
    tech: ["Nuxt.js", "Vue.js", "Pinia", "Tailwind", "Segment"],
    image: base + "assets/img/manzanaverde.png",
    detailUrl: base + "projects/manzana-verde.html"
  },
  {
    id: "otto-grill",
    name: "Otto Grill – Optimización Checkout",
    shortDesc: "Mejoras en carrito, UX y pasarela Justo con Remix + React.",
    client: "Otto Grill",
    year: 2023,
    tech: ["React", "Remix", "Framer Motion", "Goober"],
    image: base + "assets/img/otto.png",
    detailUrl: base + "projects/otto-grill.html"
  },

  // 2022
  {
    id: "sunat-sigi",
    name: "SIGI – Gestión de Información SUNAT",
    shortDesc: "Servicios REST y microservicios para gestión tributaria.",
    client: "SUNAT / CANVIA",
    year: 2022,
    tech: ["Java", "JAX-RS", "Gradle", "Kafka", "MongoDB"],
    image: base + "assets/img/sunat.png",
    detailUrl: base + "projects/sunat-sigi.html"
  },
  {
    id: "learning-experience-rimac",
    name: "Learning Experience – Rímac Seguros",
    shortDesc: "Plataforma educativa corporativa con autenticación Azure AD.",
    client: "Rímac Seguros",
    year: 2022,
    tech: ["Laravel", "Bootstrap", "JQuery", "AWS S3"],
    image: base + "assets/img/learning.png",
    detailUrl: base + "projects/learning-experience-rimac.html"
  },
  {
    id: "estarbien-rimac",
    name: "Estar Bien – Rímac",
    shortDesc: "Plataforma educativa con cursos, exámenes y autenticación SAML.",
    client: "Rímac Seguros",
    year: 2022,
    tech: ["Laravel", "Bootstrap", "MySQL", "SAML"],
    image: base + "assets/img/rimac.png",
    detailUrl: base + "projects/estarbien-rimac.html"
  },

  // 2021
  {
    id: "unacem",
    name: "Asociación UNACEM – Plataforma de Formularios",
    shortDesc: "Registro, firma digital y gestión documental.",
    client: "Asociación UNACEM",
    year: 2021,
    tech: ["Laravel", "Bootstrap", "MySQL"],
    image: base + "assets/img/unacem.png",
    detailUrl: base + "projects/unacem.html"
  },
  {
    id: "beneficios-tasa",
    name: "Beneficios – TASA",
    shortDesc: "CMS corporativo con MSAL y panel de contenidos.",
    client: "TASA",
    year: 2021,
    tech: ["Laravel", "PHP", "MySQL", "MSAL"],
    image: base + "assets/img/tasa.png",
    detailUrl: base + "projects/beneficios-tasa.html"
  },

  // 2020
  {
    id: "fegasa",
    name: "Fegasa – Ecommerce B2C",
    shortDesc: "Tienda virtual con integración Mercado Pago.",
    client: "Fegasa",
    year: 2020,
    tech: ["CodeIgniter", "Bootstrap", "MySQL", "Mercado Pago"],
    image: base + "assets/img/fegasa.png",
    detailUrl: base + "projects/fegasa.html"
  },
  {
    id: "claro-web-reclamos",
    name: "Claro – Web Reclamos",
    shortDesc: "Portal para gestión de reclamos con sistemas internos.",
    client: "Claro Perú / Everis",
    year: 2020,
    tech: ["Java", "PL/SQL", "WebLogic", "SOAP", "REST"],
    image: base + "assets/img/claro.png",
    detailUrl: base + "projects/claro-web-reclamos.html"
  },

  // 2019
  {
    id: "xpressa",
    name: "Xpressa – Gestión de Producción Gráfica",
    shortDesc: "Sistema de solicitudes, equipos, tareas y KPIs.",
    client: "Xpressa",
    year: 2019,
    tech: ["Laravel", "Bootstrap", "MySQL"],
    image: base + "assets/img/xpressa.png",
    detailUrl: base + "projects/xpressa.html"
  },

  // 2018
  {
    id: "facele-facturacion",
    name: "Facele – Facturación Electrónica",
    shortDesc: "Soluciones de comprobantes electrónicos y portales B2B.",
    client: "Facele",
    year: 2018,
    tech: ["Java", "Spring Boot", "MySQL", "AWS"],
    image: base + "assets/img/facele.png",
    detailUrl: base + "projects/facele-facturacion.html"
  }
];

// ------ ORDENAR DESCENDENTE POR AÑO ------
projectsData.sort((a, b) => b.year - a.year);

// ------ Render dinámico ------
function renderProjects() {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;

  projectsData.forEach((p) => {
    const card = document.createElement("article");
    card.className = "project-card";

    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p class="short-desc">${p.shortDesc}</p>
      <p class="project-meta-line">
        Cliente: <strong>${p.client}</strong> · Año: <strong>${p.year}</strong>
      </p>
      <ul class="tech-list">
        ${p.tech.map((t) => `<li>${t}</li>`).join("")}
      </ul>
      <a href="${p.detailUrl}" class="btn btn-outline">Ver detalle</a>
    `;

    grid.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", renderProjects);
