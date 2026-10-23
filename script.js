const methods=[
  ["Diagnóstico del problema","Indicadores, tendencia, distribución territorial, población afectada y vacíos estadísticos."],
  ["Marco normativo","Leyes, decretos, ordenanzas, convenios, reglamentación y competencias."],
  ["Instituciones estatales","Responsables, autoridades, presupuesto, personal, capacidades y coordinación."],
  ["Políticas vigentes","Objetivos, cobertura, recursos, resultados, evaluaciones y discontinuidades."],
  ["Casos de agenda","Hechos de 24 meses con fecha, actores, fuente, estado y aprendizaje institucional."],
  ["Percepción ciudadana","Encuestas con ficha técnica, reclamos, confianza y contraste con datos objetivos."],
  ["Actores sociales","Intereses, propuestas, poder de cooperación o veto y alianzas posibles."],
  ["Síntesis","Tres a cinco nudos críticos, mapa de competencias y evidencia pendiente."]
];
document.querySelector("#method-grid").innerHTML=methods.map((m,i)=>`<article class="method-card"><span>0${i+1}</span><h3>${m[0]}</h3><p>${m[1]}</p></article>`).join("");

const axes=[
  {name:"Seguridad",ind:["Homicidios y heridos por arma de fuego","Robos, amenazas y extorsiones","Mapa barrial y victimización"],inst:["Ministerio de Justicia y Seguridad","Policía y Servicio Penitenciario","Municipio, fuerzas y justicia federal"],cases:["Violencia altamente lesiva","Ataques y extorsiones","Control carcelario y corrupción"]},
  {name:"Justicia",ind:["Causas, resolución y duración","Prisión preventiva y capacidad carcelaria","Carga por fiscal, defensor y juez"],inst:["MPA y Defensa Penal","Poder Judicial","Servicio Penitenciario y justicia federal"],cases:["Traslado de detenidos a Subunidad 4","Infraestructura penitenciaria de Piñero","Juicios y concursos"]},
  {name:"Economía",ind:["PBG, actividad y productividad","Empleo, informalidad e ingresos","Exportaciones, crédito e inversión"],inst:["Desarrollo Productivo y Trabajo","Rosario Desarrollo Económico","INTA, INTI, ARCA y BCRA"],cases:["Facturación DReI","Cierres e inversiones","Hidrovía y logística"]},
  {name:"Educación",ind:["Matrícula, asistencia y terminalidad","Aprendizajes y alfabetización","Infraestructura y días efectivos"],inst:["Ministerio de Educación","Regionales y universidades","Municipio, INET y CONEAU"],cases:["Evaluación Santafesina de Lectura","Conflictos y calendario","Infraestructura escolar"]},
  {name:"Salud",ind:["Mortalidad y cobertura","Camas, turnos y personal","Salud mental, consumos y dengue"],inst:["Ministerio y hospitales provinciales","Red municipal de Rosario","IAPOS, PAMI y Nación"],cases:["Guardias y tiempos de espera","Corredores sanitarios","Medicamentos y financiamiento"]},
  {name:"Hábitat",ind:["Déficit y calidad habitacional","Alquiler, esfuerzo y tenencia","Barrios populares y servicios"],inst:["Hábitat y Vivienda provincial","SPV Rosario y Planeamiento","Catastro y prestadoras"],cases:["Informe habitacional Censo 2022","Urbanización y regularización","Alquileres e inundabilidad"]},
  {name:"Movilidad",ind:["Estado de rutas y avance de obras","Frecuencia, tarifa y flota","Siniestralidad y reparto modal"],inst:["Obras Públicas y Vialidad","Secretaría y Ente de Movilidad","CNRT, ANSV y ENAPRO"],cases:["Renovación de flota TUP","Financiamiento sin aporte nacional","Rutas, puertos e hidrovía"]},
  {name:"Servicios",ind:["Tarifas y tarifa social","Cortes, reclamos y reposición","Agua, gas y conectividad"],inst:["EPE y ASSA","Litoral Gas y cooperativas","Entes nacionales y municipio"],cases:["Reclamos de Defensoría","Redes y acueductos","Cortes y subsidios"]},
  {name:"Ciencia",ind:["I+D, investigadores y becarios","Empresas tecnológicas y empleo","Laboratorios y vinculación"],inst:["Ciencia provincial","CONICET, UNR, UNL y UTN","Polo Tecnológico, INTA e INTI"],cases:["Financiamiento científico","Biotecnología, software e IA","Talento y adopción pyme"]},
  {name:"Cultura y juventudes",ind:["Oferta, asistencia y gasto cultural","Clubes y actividad física","Estudio, empleo y salud joven"],inst:["Cultura provincial","Áreas municipales y juventudes","Clubes, universidades y federaciones"],cases:["Quinta de Funes","Indicadores culturales","Clubes, fútbol y empleo joven"]}
];
const controls=document.querySelector("#axis-controls"),detail=document.querySelector("#axis-detail");
function renderAxis(index){const a=axes[index];detail.innerHTML=`<div><h3>Indicadores</h3><ul>${a.ind.map(x=>`<li>${x}</li>`).join("")}</ul></div><div><h3>Instituciones</h3><ul>${a.inst.map(x=>`<li>${x}</li>`).join("")}</ul></div><div><h3>Casos y agenda</h3><ul>${a.cases.map(x=>`<li>${x}</li>`).join("")}</ul></div>`;[...controls.children].forEach((b,i)=>b.classList.toggle("active",i===index));}
axes.forEach((a,i)=>{const b=document.createElement("button");b.type="button";b.role="tab";b.textContent=a.name;b.addEventListener("click",()=>renderAxis(i));controls.appendChild(b)});renderAxis(0);
