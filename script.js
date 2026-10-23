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
const search = document.querySelector("#axis-search");
const sideNav = document.querySelector("#side-nav");
const matrixDetails = {
  seguridad: { institutions: "Ministerio de Justicia y Seguridad; Policía de Santa Fe; Municipalidad de Rosario; fuerzas federales.", cases: "Violencia armada, homicidios, robos, convivencia urbana y coordinación interjurisdiccional." },
  justicia: { institutions: "Poder Judicial; MPA; Servicio Público de la Defensa; Servicio Penitenciario; Legislatura provincial.", cases: "Duración de causas, prisión preventiva, capacidad penitenciaria, vacantes y acceso a defensa." },
  economia: { institutions: "Ministerios productivos; IPEC; municipios; agencias de desarrollo; cámaras empresarias y sindicatos.", cases: "Empleo, informalidad, ingresos, pobreza, inversión, crédito, exportaciones y actividad pyme." },
  educacion: { institutions: "Ministerio de Educación; universidades; municipios; institutos terciarios; gremios docentes.", cases: "Asistencia, trayectorias, aprendizajes, infraestructura, conectividad y formación técnica." },
  salud: { institutions: "Ministerio de Salud; hospitales y centros de salud; municipios; universidades; obras sociales.", cases: "Acceso, turnos, medicamentos, salud mental, consumos, dengue y vacunación." },
  habitat: { institutions: "Secretaría de Hábitat; municipios; ASSA; EPE; organismos de vivienda y planificación urbana.", cases: "Déficit habitacional, alquiler, barrios populares, servicios, suelo y riesgo hídrico." },
  infraestructura: { institutions: "Ministerios de Obras Públicas y Transporte; Vialidad; ENAPRO; municipios; empresas prestatarias.", cases: "Obras, transporte, tarifa, subsidios, accesibilidad, logística, puertos e hidrovía." },
  energia: { institutions: "EPE; ASSA; ENARGAS; ENRE; municipios; organismos de defensa del consumidor.", cases: "Tarifas, cortes, calidad, deuda, inversión, agua, cloacas, gas y conectividad." },
  ciencia: { institutions: "Universidades; CONICET; INTA; INTI; CCT Rosario; polos tecnológicos; empresas y gobiernos.", cases: "Inversión en I+D, talento, IA, datos, cómputo, transferencia, adopción pyme y financiamiento." },
  cultura: { institutions: "Ministerios y secretarías de Cultura; municipios; clubes; universidades; organizaciones juveniles.", cases: "Oferta cultural, acceso, clubes, becas, empleo joven, salud mental y participación." }
};

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
  if (window.matchMedia("(max-width: 900px)").matches) {
    const open = sideNav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(open));
  } else {
    const collapsed = sideNav.classList.toggle("collapsed");
    document.body.classList.toggle("sidebar-collapsed", collapsed);
    menuButton.setAttribute("aria-expanded", String(!collapsed));
  }
});
sideNav.addEventListener("click", event => {
  const axisLink = event.target.closest("[data-axis-link]");
  if (axisLink) {
    const matchingButton = buttons.find(button => button.dataset.axis === axisLink.dataset.axisLink);
    if (matchingButton) matchingButton.click();
    openAxisDevelopment(axisLink.dataset.axisLink);
  }
  if (window.matchMedia("(max-width: 900px)").matches) {
    sideNav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  }
});

search.addEventListener("input", () => {
  const query = search.value.trim().toLocaleLowerCase("es");
  buttons.forEach(button => {
    button.hidden = !button.textContent.toLocaleLowerCase("es").includes(query);
  });
  const firstVisible = buttons.find(button => !button.hidden);
  if (firstVisible && query) {
    buttons.forEach(button => {
      button.classList.toggle("active", button === firstVisible);
      button.setAttribute("aria-selected", String(button === firstVisible));
    });
    renderAxis(firstVisible.dataset.axis);
  }
});

const matrixApp = document.querySelector("#matrix-app");
const matrixBody = document.querySelector("#matrix-body");
const matrixSearch = document.querySelector("#matrix-search");
const matrixFilter = document.querySelector("#matrix-filter");
const matrixCount = document.querySelector("#matrix-count");
const matrixEmpty = document.querySelector("#matrix-empty");
const matrixExpand = document.querySelector("#matrix-expand");
const axisDrawer = document.querySelector("#axis-drawer");
const drawerTitle = document.querySelector("#drawer-title");
const drawerNumber = document.querySelector("#drawer-number");
const drawerContent = document.querySelector("#drawer-content");
const drawerClose = document.querySelector("#drawer-close");

Object.entries(axes).forEach(([key, axis]) => {
  matrixFilter.insertAdjacentHTML("beforeend", `<option value="${key}">${axis.number} · ${axis.title}</option>`);
});

function renderMatrix() {
  const query = matrixSearch.value.trim().toLocaleLowerCase("es");
  const filter = matrixFilter.value;
  const rows = Object.entries(axes).filter(([key, axis]) => {
    const details = matrixDetails[key];
    const searchable = [axis.title, ...axis.points, details.institutions, details.cases].join(" ").toLocaleLowerCase("es");
    return (filter === "all" || key === filter) && searchable.includes(query);
  });

  matrixBody.innerHTML = rows.map(([key, axis]) => {
    const details = matrixDetails[key];
    return `<tr tabindex="0" data-axis-key="${key}" aria-label="Abrir desarrollo de ${axis.title}"><th scope="row"><span>${axis.number}</span>${axis.title}</th><td>${axis.points[0]}</td><td>${details.institutions}</td><td>${details.cases}</td></tr>`;
  }).join("");
  matrixCount.textContent = `${rows.length} ${rows.length === 1 ? "eje" : "ejes"}`;
  matrixEmpty.hidden = rows.length !== 0;
}

matrixSearch.addEventListener("input", renderMatrix);
matrixFilter.addEventListener("change", renderMatrix);

function openAxisDevelopment(key) {
  const axis = axes[key];
  const details = matrixDetails[key];
  const sections = [
    ["01", "Diagnóstico del problema", axis.points[0], "Magnitud, evolución de cinco años, desigualdades territoriales y limitaciones estadísticas."],
    ["02", "Marco normativo", "Relevar normas nacionales, provinciales y municipales aplicables.", "Distinguir competencias legales, reglamentación vigente y vacíos normativos."],
    ["03", "Instituciones y actores estatales", details.institutions, "Registrar autoridad, competencia, programas, presupuesto, recursos y coordinación."],
    ["04", "Políticas y programas vigentes", "Identificar programas activos y documentar cobertura, metas, presupuesto y resultados.", "Consignar: “Sin información pública verificable localizada” cuando corresponda."],
    ["05", "Casos resonantes en la prensa", details.cases, "Para cada caso: fecha, actores, fuente original, estado actual y problema que permite examinar."],
    ["06", "Percepción ciudadana", "Contrastar encuestas, reclamos y consultas con registros administrativos.", "Separar percepción, experiencia de usuarios y evidencia objetiva."],
    ["07", "Actores sociales y políticos", "Mapear organizaciones, cámaras, sindicatos, universidades, especialistas y grupos afectados.", "Registrar posiciones, intereses, recursos y capacidad de incidencia."],
    ["08", "Síntesis", axis.points[1], "Identificar nudos críticos, responsabilidades, vacíos de información y asuntos para una segunda etapa de propuestas."]
  ];
  drawerNumber.textContent = `Eje ${axis.number}`;
  drawerTitle.textContent = axis.title;
  drawerContent.innerHTML = sections.map(([number, title, content, requirement]) => `<section><span>${number}</span><div><h4>${title}</h4><p>${content}</p><small>${requirement}</small></div></section>`).join("");
  axisDrawer.classList.add("open");
  axisDrawer.setAttribute("aria-hidden", "false");
  drawerClose.focus();
}

matrixBody.addEventListener("click", event => {
  const row = event.target.closest("[data-axis-key]");
  if (row) openAxisDevelopment(row.dataset.axisKey);
});
matrixBody.addEventListener("keydown", event => {
  if ((event.key === "Enter" || event.key === " ") && event.target.matches("[data-axis-key]")) {
    event.preventDefault();
    openAxisDevelopment(event.target.dataset.axisKey);
  }
});
drawerClose.addEventListener("click", () => {
  axisDrawer.classList.remove("open");
  axisDrawer.setAttribute("aria-hidden", "true");
});
matrixExpand.addEventListener("click", () => {
  const expanded = matrixApp.classList.toggle("matrix-fullscreen");
  document.body.classList.toggle("matrix-open", expanded);
  matrixExpand.textContent = expanded ? "Cerrar vista ampliada" : "Ampliar matriz";
  matrixExpand.setAttribute("aria-expanded", String(expanded));
});
document.addEventListener("keydown", event => {
  if (event.key !== "Escape") return;
  if (axisDrawer.classList.contains("open")) drawerClose.click();
  else if (matrixApp.classList.contains("matrix-fullscreen")) matrixExpand.click();
});

renderAxis("seguridad");
renderMatrix();
