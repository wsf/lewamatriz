const axes = {
  seguridad: { number: "01", title: "Seguridad y convivencia", points: ["Homicidios, violencia armada, robos y respuesta estatal.", "Distribución por territorio y perfil de víctimas.", "Policía, seguridad municipal, justicia y despliegue federal."] },
  justicia: { number: "02", title: "Justicia y sistema penal", points: ["Ingreso, resolución y duración de causas.", "Capacidad penitenciaria, prisión preventiva y acceso a defensa.", "Carga de trabajo, vacantes y coordinación institucional."] },
  economia: { number: "03", title: "Economía, producción y empleo", points: ["Actividad, empleo, informalidad, ingresos y pobreza.", "Estructura productiva, exportaciones, inversión y crédito.", "Comparaciones válidas entre aglomerados y provincia."] },
  educacion: { number: "04", title: "Educación", points: ["Matrícula, asistencia, trayectorias y aprendizajes.", "Brechas territoriales y socioeconómicas.", "Infraestructura, cargos, conectividad y formación técnica."] },
  salud: { number: "05", title: "Salud", points: ["Resultados sanitarios, cobertura y acceso.", "Capacidad de efectores, personal, turnos y medicamentos.", "Salud mental, consumos, dengue y vacunación."] },
  habitat: { number: "06", title: "Hábitat y vivienda", points: ["Déficit habitacional, tenencia y servicios básicos.", "Barrios populares, suelo, alquiler y regularización.", "Riesgo hídrico, urbanización y capacidad institucional."] },
  infraestructura: { number: "07", title: "Infraestructura, transporte y movilidad", points: ["Inversión, avance de obras y conectividad territorial.", "Pasajeros, frecuencia, tarifa, subsidios y accesibilidad.", "Siniestralidad, logística, puertos e hidrovía."] },
  energia: { number: "08", title: "Energía y servicios públicos", points: ["Tarifas, subsidios, deuda y peso sobre el ingreso.", "Cortes, calidad, reclamos e inversión.", "Agua, cloacas, gas y conectividad digital."] },
  ciencia: { number: "09", title: "Ciencia, tecnología e innovación", points: ["Santa Fe registró $193.100 millones de inversión en I+D, 5.151 investigadores EJC y 140 investigadores cada 100.000 habitantes en 2024.", "La evidencia pública está fragmentada y la mayoría de los indicadores disponibles tiene escala provincial, no de ciudad de Rosario.", "La provincia informó $8.142 millones ejecutados en políticas CTI durante 2025; falta conciliar el dato con la cuenta de inversión y resultados por proyecto."] },
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
  ciencia: { institutions: "Secretaría CTI y ASaCTeI; Municipalidad de Rosario; UNR, UNL y UTN; CCT CONICET Rosario y Santa Fe; INTA; INTI; Polo Tecnológico; parques, incubadoras y empresas.", cases: "TecPRO y financiamiento CTI 2025; Decreto Rosario 274/2026 de compra pública de innovación; analítica de video con IA; mesas de tecnologías digitales; prototipos #XperienciaUNR." },
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
  if (event.target.closest("a") && window.matchMedia("(max-width: 900px)").matches) {
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
const drawerNote = document.querySelector("#drawer-note");

const scienceSections = [
  ["01", "Diagnóstico del problema", "En 2024 Santa Fe registró $193.100 millones corrientes de inversión en I+D, equivalentes a $52.478 por habitante, 6,7 % del total nacional y 42 % de la Región Centro. Contó con 5.151 investigadores EJC, 2.081 personas de otro personal de I+D y 140 investigadores cada 100.000 habitantes. En 2023, las empresas empleaban 25,9 % del personal provincial de I+D, la mayor proporción de Región Centro.", "Los datos son provinciales y no describen por sí solos a Rosario. La serie 2019-2024 debe deflactarse y compararse con el total nacional y provincias equivalentes."],
  ["02", "Marco normativo", "La Ley Provincial 13.742 organiza el sistema de CTI y crea ASaCTeI. Rosario cuenta con la Ordenanza 10.264/2021 de Compra Pública de Innovación, el Decreto 507/2022 y el Decreto 274/2026, que completa la regulación de compra precomercial y asociación para la innovación. La Ordenanza 9.279/2014 creó Open Data Rosario.", "No se localizó una norma provincial transversal y específica sobre IA para todo el Poder Ejecutivo. Deben relevarse protocolos de impacto, auditoría, explicabilidad, revisión humana y discontinuidad."],
  ["03", "Instituciones y actores estatales", "El mapa incluye al Ministerio de Desarrollo Productivo, la Secretaría de Ciencia, Tecnología e Innovación, ASaCTeI, Municipalidad de Rosario, Legislatura y Concejo; UNR, UNL y UTN; CCT CONICET Rosario y Santa Fe; INTA, INTI, Polo Tecnológico, parques, incubadoras y empresas. El directorio de CONICET Rosario reúne institutos como CIFASIS, IBR, IFIR, IQUIR, IRICE e IICAR.", "Para cada institución faltan consolidar competencia, autoridad, presupuesto, ejecución, dotación, equipamiento, proyectos y mecanismos de coordinación."],
  ["04", "Políticas y programas vigentes", "La Provincia informó $8.142.458.824,44 ejecutados en políticas CTI durante 2025. TecPRO 2024 financió 50 proyectos por $2.404.484.298,02. También se identificaron Investigación Orientada, Eventos CTI, becas de posgrado, #XperienciaUNR, Universidad y Desarrollo Sostenible, Tecnoteca Rosario y el régimen municipal de Compra Pública de Innovación.", "Los montos informados por el Ejecutivo deben conciliarse con la cuenta de inversión. Falta publicar un padrón integrado con localidad, beneficiario, monto, etapa y resultado."],
  ["05", "Casos relevantes 2025-2026", "Se documentaron cinco casos: inversión científica provincial 2025; mesas provinciales de biotecnología y tecnologías digitales de mayo de 2026; reglamentación completa de Compra Pública de Innovación en febrero de 2026; proyecto rosarino de 600 cámaras con analítica de video basada en IA; y once prototipos de #XperienciaUNR desarrollados entre 2024 y 2025.", "Cada caso debe completarse con costo, contratación, datos utilizados, evaluación, resultados, riesgos, supervisión humana y estado actual."],
  ["06", "Percepción ciudadana", "La Encuesta Provincial de Percepción de la Ciencia, la Tecnología y la Innovación 2023 dispone de un informe específico para Santa Fe y declara representatividad provincial.", "Falta extraer la ficha técnica y resultados provinciales. No se localizó una encuesta oficial representativa de la ciudad de Rosario sobre confianza o percepción de la IA."],
  ["07", "Actores sociales y políticos", "El mapa inicial comprende universidades y organismos científicos, empresas de software, biotecnología, agtech, salud y logística; cámaras y clusters; sindicatos y colegios profesionales; organizaciones de derechos digitales y consumidores; Ejecutivos, Legislatura, Concejo y organismos de control.", "Registrar posición sobre financiamiento, regulación y adopción de IA, recursos, alianzas, capacidad de incidencia y población afectada."],
  ["08", "Síntesis", "Los principales nudos son la fragmentación de evidencia; escasez de indicadores específicos para Rosario; brecha entre financiamiento y evaluación de resultados; falta de un registro transversal de IA pública; capacidades de transferencia desiguales; y riesgo de dependencia tecnológica de proveedores.", "Próximos productos: serie 2019-2024, presupuesto y ejecución 2024-2026, padrón de proyectos, inventario de capacidades y registro público de sistemas de IA."]
];

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
  const sections = key === "ciencia" ? scienceSections : [
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
  drawerNote.innerHTML = key === "ciencia"
    ? `Informe consolidado al 23/10/2026 · <a href="docs/EJE_9_CIENCIA_TECNOLOGIA_INNOVACION_IA_SANTA_FE_ROSARIO_2026.md">abrir archivo de referencia en Markdown</a>`
    : "Estructura estándar de desarrollo · los vacíos deben consignarse explícitamente y nunca completarse con supuestos.";
  drawerContent.innerHTML = sections.map(([number, title, content, requirement]) => `<section><span>${number}</span><div><h4>${title}</h4><p>${content}</p><small>${requirement}</small></div></section>`).join("");
  axisDrawer.classList.add("open");
  axisDrawer.setAttribute("aria-hidden", "false");
  document.body.classList.add("axis-report-open");
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
  document.body.classList.remove("axis-report-open");
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
