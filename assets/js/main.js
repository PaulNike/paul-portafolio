// Toggle del menú en mobile
const navToggle = document.getElementById("nav-toggle");
const mainNav = document.getElementById("main-nav");

if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    mainNav.classList.toggle("open");
  });
}

// ------- PROYECTOS DINÁMICOS --------
// Rutas corregidas según la estructura:
// /home/projects.html -> para subir a raíz: ../
// /assets/img/         -> ../assets/img/

const projectsData = [
  {
    id: "bcp-tribu-pyme",
    name: "Plataforma PyME – BCP",
    shortDesc: "Microservicios en Azure, APIs seguras, Data Lake y CI/CD.",
    client: "BCP / NTT DATA",
    year: "2024",
    tech: ["Java", "Spring Boot", "Azure Functions", "APIM", "Kubernetes"],
    image: "../assets/img/bcp.png",
    detailUrl: "../projects/bcp-tribu-pyme.html"
  },
  {
    id: "izipay-ya",
    name: "IziPay Ya – Integración de pagos",
    shortDesc: "Microservicios con arquitectura hexagonal, monitoreo con New Relic.",
    client: "Interbank / NTT DATA",
    year: "2023",
    tech: ["Java", "Spring Boot", "Arquitectura Hexagonal", "MongoDB", "Azure"],
    image: "../assets/img/izipay-ya.png",
    detailUrl: "../projects/izipay-ya.html"
  },
  {
    id: "sunat-sigi",
    name: "SIGI – Gestión de Información SUNAT",
    shortDesc: "Servicios REST y microservicios para gestión tributaria.",
    client: "SUNAT / CANVIA",
    year: "2022",
    tech: ["Java", "JAX-RS", "Gradle", "Kafka", "MongoDB"],
    image: "../assets/img/sunat.png",
    detailUrl: "../projects/sunat-sigi.html"
  },
  {
    id: "claro-web-reclamos",
    name: "Claro – Web Reclamos",
    shortDesc: "Portal para gestión de reclamos con integración a sistemas internos.",
    client: "Claro Perú / Everis",
    year: "2020",
    tech: ["Java", "PL/SQL", "WebLogic", "SOAP", "REST"],
    image: "../assets/img/claro.png",
    detailUrl: "../projects/claro-web-reclamos.html"
  },
  {
    id: "facele-facturacion",
    name: "Facele – Facturación Electrónica",
    shortDesc: "Soluciones de comprobantes electrónicos y portales B2B.",
    client: "Facele",
    year: "2018",
    tech: ["Java", "Spring Boot", "MySQL", "AWS"],
    image: "../assets/img/facele.png",
    detailUrl: "../projects/facele-facturacion.html"
  }
];

function renderProjects() {
  const grid = document.getElementById("projects-grid");
  if (!grid || !projectsData || projectsData.length === 0) return;

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

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
});
