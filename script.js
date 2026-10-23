const axes = {
  seguridad: { number: "01", title: "Seguridad y convivencia", points: ["Homicidios, violencia armada, robos y respuesta estatal.", "Distribución por territorio y perfil de víctimas.", "Policía, seguridad municipal, justicia y despliegue federal."] },
  justicia: { number: "02", title: "Justicia y sistema penal", points: ["Ingreso, resolución y duración de causas.", "Capacidad penitenciaria, prisión preventiva y acceso a defensa.", "Carga de trabajo, vacantes y coordinación institucional."] },
  economia: { number: "03", title: "Economía, producción y empleo", points: ["Actividad, empleo, informalidad, ingresos y pobreza.", "Estructura productiva, exportaciones, inversión y crédito.", "Comparaciones válidas entre aglomerados y provincia."] },
  educacion: { number: "04", title: "Educación", points: ["Matrícula, asistencia, trayectorias y aprendizajes.", "Brechas territoriales y socioeconómicas.", "Infraestructura, cargos, conectividad y formación técnica."] },
  salud: { number: "05", title: "Salud", points: ["Resultados sanitarios, cobertura y acceso.", "Capacidad de efectores, personal, turnos y medicamentos.", "Salud mental, consumos, dengue y vacunación."] },
  habitat: { number: "06", title: "Hábitat y vivienda", points: ["Déficit habitacional, tenencia y servicios básicos.", "Barrios populares, suelo, alquiler y regularización.", "Riesgo hídrico, urbanización y capacidad institucional."] },
  infraestructura: { number: "07", title: "Infraestructura, transporte y movilidad", points: ["Inversión, avance de obras y conectividad territorial.", "Pasajeros, frecuencia, tarifa, subsidios y accesibilidad.", "Siniestralidad, logística, puertos e hidrovía."] },
  energia: { number: "08", title: "Energía y servicios públicos", points: ["Tarifas, subsidios, deuda y peso sobre el ingreso.", "Cortes, calidad, reclamos e inversión.", "Agua, cloacas, gas y conectividad digital."] },
  ciencia: { number: "09", title: "Ciencia, tecnología e innovación", points: ["Inversión en I+D, talento, proyectos y financiamiento.", "Empresas tecnológicas, patentes y adopción productiva.", "Laboratorios, universidades, parques y vinculación."] },
  cultura: { number: "10", title: "Cultura, deporte y juventudes", points: ["Oferta, participación, infraestructura y gasto.", "Clubes, becas, prácticas deportivas y acceso territorial.", "Trayectorias juveniles, empleo, salud mental y participación."] }
};

const detail = document.querySelector("#axis-detail");
const buttons = [...document.querySelectorAll(".axis-button")];

function renderAxis(key) {
  const axis = axes[key];
  detail.innerHTML = `<span class="axis-number">${axis.number}</span><h3>${axis.title}</h3><ul>${axis.points.map(point => `<li>${point}</li>`).join("")}</ul>`;
}

buttons.forEach(button => {
  button.addEventListener("click", () => {
    buttons.forEach(item => {
      item.classList.remove("active");
      item.setAttribute("aria-selected", "false");
    });
    button.classList.add("active");
    button.setAttribute("aria-selected", "true");
    renderAxis(button.dataset.axis);
  });
});

const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector("#main-nav");
menuButton.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});
nav.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
});

renderAxis("seguridad");
