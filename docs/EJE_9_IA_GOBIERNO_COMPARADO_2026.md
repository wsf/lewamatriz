---
title: "IA gubernamental comparada (2025-2026): lecciones adoptables para la provincia de Santa Fe"
tags: [santa-fe, rosario, inteligencia-artificial, gobernanza-ia, comparado]
status: active
created: 2026-10-30
---

# IA gubernamental comparada (2025-2026): lecciones adoptables para la provincia de Santa Fe

**Producto documental del Eje 9 "Ciencia, tecnología, innovación e IA" — Matriz de diagnóstico Santa Fe y Rosario.**
Documento de trabajo para equipos de asesores. Especialista del eje: Alejandro Sartorio (PhD Informática, ex Subsecretario de Innovación Pública de Santa Fe 2023-24, director CAETI-UAI).

---

## 1. Alcance y metodología

### 1.1 Alcance

- **Fecha de corte: 30 de octubre de 2026.** Toda la información fue verificada en esa fecha; los instrumentos de dinámica rápida (leyes en trámite, calendarios regulatorios) llevan advertencia de vigencia explícita.
- **Jurisdicciones cubiertas (14):**
  - Europa: Unión Europea, Reino Unido, Estonia, España.
  - Norteamérica y Asia-Pacífico: Estados Unidos, Canadá, Singapur, Corea del Sur.
  - América Latina: Chile, Uruguay, Brasil, Colombia, México.
  - Multilaterales: OCDE (con referencias a BID, CEPAL, SELA y CIPPEC como insumo regional).
- **Anclaje provincial:** diagnóstico consolidado del Eje 9 (`docs/EJE_9_CIENCIA_TECNOLOGIA_INNOVACION_IA_SANTA_FE_ROSARIO_2026.md`, corte 23/10/2026), en particular sus nudos críticos **#4 (gobernanza de IA incompleta: sin marco transversal público de evaluación de riesgos, auditoría y revisión humana)** y **#6 (riesgo de dependencia de proveedores: propiedad de datos, interoperabilidad, costos de salida)**.

### 1.2 Criterio de fuentes

- Prioridad a **fuentes oficiales primarias** (EUR-Lex, Comisión Europea, GOV.UK, e-Estonia/RIA/Riigikontroll, BOE, Congreso de los Diputados, whitehouse.gov, OMB, canada.ca/TBS, IMDA/GovTech/MDDI, MSIT/MOIS, MinCiencia, AGESIC, gov.br/MCTI, DNP/MinTIC, DOF, OCDE, BID, CEPAL).
- Fuentes secundarias (prensa, think tanks, academia) se usan solo para contexto o cuando citan a un funcionario identificable; se señalan como tales.
- **Regla de evidencia del proyecto:** no se inventan datos; cada fuente conserva URL + fecha de acceso; lo no verificable se marca **"Sin información pública verificable localizada"**; se separan hechos comprobados de interpretaciones y propuestas.
- Las secciones 4 y 5 (propuestas para Santa Fe y checklist Rosario) son **interpretaciones y propuestas del eje**, no hechos comprobados de las jurisdicciones analizadas.

### 1.3 Insumos del informe

Este documento consolida tres informes de investigación previos del Eje 9 (todos con fecha de acceso 30/10/2026) más el diagnóstico provincial consolidado (corte 23/10/2026):

1. **Europa** (UE AI Act, Reino Unido, Estonia, España) — informe de estado del arte, cache de delegación del perfil.
2. **Norteamérica y Asia-Pacífico** (EE.UU., Canadá, Singapur, Corea del Sur) — `eje9-estado-arte-ia-gubernamental-norteamerica-asiapacifico.md`.
3. **América Latina + multilaterales** (Chile, Uruguay, Brasil, Colombia, México; OCDE/BID/CEPAL/SELA/CIPPEC) — informe de estado del arte, cache de delegación del perfil.
4. **Diagnóstico provincial:** `docs/EJE_9_CIENCIA_TECNOLOGIA_INNOVACION_IA_SANTA_FE_ROSARIO_2026.md` (repo lewamatriz).

Los tres informes de investigación aplicaron el mismo criterio: búsqueda web + verificación en fuentes oficiales; lo no verificable se marcó "Sin información pública verificable localizada" y se reproduce aquí sin conversión a afirmación (sección 6).

### 1.4 Glosario de siglas

| Sigla | Significado |
|---|---|
| AI Act | Reglamento (UE) 2024/1689 de inteligencia artificial |
| ADM | Automated Decision-Making (directiva canadiense de decisiones automatizadas) |
| AESIA | Agencia Española de Supervisión de IA |
| AIA | Algorithmic Impact Assessment (evaluación de impacto algorítmica canadiense) |
| AIE | Autoavaliação de Impacto Ético (Brasil, NIA) |
| AGESIC | Agencia de Gobierno Electrónico y Sociedad de la Información (Uruguay) |
| ATRS | Algorithmic Transparency Recording Standard (Reino Unido) |
| ASaCTeI | Agencia Santafesina de Ciencia, Tecnología e Innovación |
| CAIO | Chief AI Officer (EE.UU.) |
| CONPES | documento de política nacional colombiano |
| ESAM | Escuela Superior de Administración Municipal (Rosario) |
| FRIA | Fundamental Rights Impact Assessment (art. 27 AI Act) |
| GPAI | IA de propósito general (AI Act) |
| MGF | Model AI Governance Framework (Singapur) |
| NIA | Núcleo de Inteligência Artificial (Brasil, SGD/MGI) |
| PBIA | Plano Brasileiro de Inteligência Artificial 2024-2028 |
| PNAI | Política Nacional de IA (Chile) |
| RIA/RIA-ES | denominación española del AI Act en las guías AESIA |
| SIA | Sistema Nacional de Regulación y Gobernanza de IA (PL 2338, Brasil) |
| TIC Governo | encuesta brasileña de TIC en el sector público (CGI.br/Cetic.br) |

---

## 2. Tabla comparada sintética

| Jurisdicción | Instrumento rector vigente | Registro/inventario público de IA estatal | Evaluación de impacto obligatoria | Contratación de IA | Formación de funcionarios | Resultado medible destacado |
|---|---|---|---|---|---|---|
| **Unión Europea** | Reglamento (UE) 2024/1689 "AI Act" (aplicación por fases; calendario modificado por Digital Omnibus, aprobación final Consejo 29/6/2026) + Apply AI Strategy (8/10/2025) | Sí: base de datos europea de IA de alto riesgo (arts. 49(2) y 71), obligatoria para *deployers* públicos | Sí: FRIA (art. 27) para autoridades públicas con IA de alto riesgo; supervisión humana y logs (art. 26) | Sin régimen único UE; ecosistema Apply AI (EDIHs, sandboxes, AI Factories) | Alfabetización obligatoria (art. 4) desde 2/2/2025; AI Skills Academy | Alto riesgo Anexo III rige desde 2/12/2027; sandbox por Estado miembro antes de 2/12/2027 |
| **Reino Unido** | Enfoque "pro-innovación" sin ley horizontal; AI Opportunities Action Plan (ene/2025); AI Playbook (10/2/2025); Roadmap Digital Government 2025-2030 (ene/2026) | Sí: ATRS, obligatorio para departamentos centrales desde 6/2/2024; 155 registros al 30/10/2026 | No hay régimen legal único; el AI Playbook exige assurance, inventario y comité de gobernanza por organización | PPN 02/24 (hoy PPN 01/25): declarar uso de IA en ofertas; Procurement Act 2023; CCS/G-Cloud | AI Adoption Accelerator; AI Skills Boost (10 M trabajadores a 2030); meta 100.000 civil servants upskilled | Solo 8% de proyectos de IA muestra beneficios medibles (State of Digital Government Review, ene/2025); Hillingdon −5% costo/llamada |
| **Estonia** | Estrategia "Kratt" 2024-2026 (€60 M) + AI Leap (1/9/2025); Ministerio de Justicia y Asuntos Digitales + RIA desde 1/1/2025 | Listado ministerial de ~130 "soluciones" cuestionado por la auditoría oficial (~30 genuinas) | No hay régimen general; estándar E-ISS APP.EE.2 con 22 medidas obligatorias de seguridad/validación | AI support toolbox con guías de contratación de IA | AI Leap: 20.000 estudiantes + 3.000 docentes (2025); herramientas IA para ~10.800 funcionarios hacia 2026 | X-Road: 2.200 M transacciones/año, ahorro ~1.345 años-trabajo/año; Bürokratt: 15 org. usuarias; auditoría Riigikontroll (abr/2026): mayoría de soluciones aún en testing sin ahorros |
| **España** | Estrategia de IA 2024 + Plan IA360 (21/9/2026); AESIA (RD 729/2023); ley orgánica adaptativa **caducada** en el Congreso el 6/10/2026 | Parcial: Atlas de la IA en España (ago/2026); GobTechLab con 19 casos de uso; sin registro obligatorio propio | Sandbox regulatorio (RD 817/2023, primero de Europa): 12 sistemas de alto riesgo probados; guías RIA de cumplimiento (16/12/2025) | Sin guía nacional específica localizada; Ley 9/2017 + NubeSARA soberana (SEPE) + Plataforma soberana de IA | INAP (grafo de conocimiento IA); Plan Nacional de Competencias Digitales (>2 M personas); AEAT y AEPD con formación obligatoria interna | Justicia: >1 M horas ahorradas, Murcia −161 días en monitorios; AEAT: chatbot SII-IVA −80% de correos de consulta (registro documentado, 2017); ALIA 40B verificado por AESIA |
| **Estados Unidos** | EO 14179 (23/1/2025) + OMB M-25-21 y M-25-22 (3/4/2025) + America's AI Action Plan (23/7/2025); EO 14319 "Unbiased AI"; EO preemption (11/12/2025) | Sí: inventario federal anual público en GitHub (ombegov); 2025: +3.600 casos en 41 agencias (+69%) | Sí para "alto impacto": prácticas mínimas de riesgo + revisión independiente previa a la aceptación de riesgo (M-25-21); se eliminó la categoría "rights-impacting" de Biden | M-25-22: derechos sobre datos, anti lock-in, prohibido entrenar modelos del proveedor con datos federales, monitoreo post-adjudicación | AI Training Act (bianual); acceso y entrenamiento en LLM frontier por agencia; Consejo de CAIOs | VA: 367 casos de uso; GSA USAi.gov plataforma compartida; GAO y Brookings: inventarios aún incompletos/inexactos |
| **Canadá** | Directive on Automated Decision-Making (Treasury Board), vigente 2019, 4.ª revisión 24/6/2025; ley C-27/AIDA murió (ene/2025); sin ley ómnibus | Sí: resultados de cada AIA publicados obligatoriamente en Open Government Portal antes de producción | Sí: AIA obligatoria previa a producción (65 preguntas de riesgo + 41 de mitigación; niveles I-IV); peer review publicado desde nivel II; intervención humana obligatoria niveles III-IV | La Directiva cubre sistemas "desarrollados **o contratados**": AIA, explicación y peer review aplican igual a compras | Sin programa nacional obligatorio documentado (sin información pública verificable localizada) | IRCC: ningún sistema puede rechazar ni recomendar rechazar una solicitud; contrapunto académico: "design-reality gap", compliance desigual (Springer, 2025) |
| **Singapur** | Model AI Governance Framework (2.ª ed. 2020) + MGF-GenAI (30/5/2024) + MGF Agentic AI (2025); NAIS 2.0 (dic/2023, act. 2025); sin ley de IA | No hay registro público obligatorio; junio 2026: anuncio de registro de agentes autónomos (fuente secundaria) | No obligatoria; frameworks voluntarios + testing verificable (AI Verify, Litmus, Sentinel, ISAGO) | Sin régimen legal específico; Estado comprador sofisticado (GeBIZ + plataformas centrales) | Curso obligatorio de alfabetización en IA para todos los funcionarios desde oct/2024; Prompt Royale 2025: >5.000 funcionarios de 114 agencias | Pair: ~80% de los ~150.000 funcionarios usó Pair Chat; >31.000 AIBots creados por no técnicos; OneService: >30.000 casos/mes, ~2.000 horas ahorradas |
| **Corea del Sur** | AI Basic Act (Ley 20676): en vigor 22/1/2026 + Enforcement Decree 36053; enmienda efectiva 21/7/2026; primera ley integral de IA de Asia-Pacífico | Sin registro público central localizado (sin información pública verificable localizada) | Sí para IA de "alto impacto": guías de AI Impact Assessment vía decreto; supervisión humana obligatoria; planes de protección publicados | Art. 16(3): prioridad obligatoria a productos/servicios de IA en compras públicas; exención de responsabilidad para funcionarios que compran IA de buena fe | Formación obligatoria para todos los funcionarios (estrategia "AI Government", ago/2026); meta 20.000 especialistas hacia 2030 | Chatbot fiscal NTS: ~180.000 usuarios, +350.000 consultas en temporadas pico 2026; consultas/usuario −26% |
| **Chile** | PNAI (DS 20/2021, act. 2024-2025); **ley de IA en trámite en el Senado (no sancionada)**; Circular 711 (vigente 1/1/2024) | En construcción: levantamiento piloto (abr/2025); acción N°87 "Registro de algoritmos públicos" con plazo dic/2026 | No obligatoria por ley; Circular 711 fija lineamientos de uso en el sector público | Directiva ChileCompra N°44 (2023): recomendaciones por etapa para proyectos de datos/IA; ChileCompra usa IA para detectar conflictos de interés (28/11/2025) | 5 perfiles de IA en catálogo ChileValora (abr/2025); 300 becas SENCE (2026) | Encuesta Servicio Civil (jun/2025, 32.168 respondientes): **61% de funcionarios usa IA, el doble que en 2023** |
| **Uruguay** | Estrategia Nacional de IA 2024-2030 (AGESIC, 19/11/2024) + Hoja de Ruta 2026-2027; art. 74 Ley 20.212; **sin ley específica de IA** | Sí: Observatorio de IA en el Estado — relevamiento obligatorio a 60 organismos; 27 casos reportados al 30/6/2024 (8 operativos), fichas públicas con campo "¿hay humano en la decisión final?" | No obligatoria por ley; recomendaciones AGESIC de transparencia algorítmica (publicar y mantener casos de IA) | Sin normativa específica localizada (sin información pública verificable localizada); rige estrategia de infraestructura centralizada y nube gubernamental | 1.543 funcionarios de 50 organismos capacitados 2019-2022; taller PNUD+AGESIC (nov/2025) | Registro público funcionando con ficha estándar caso por caso (caso BSE publicado completo); proceso ENIA: +300 personas, 78 aportes de consulta pública |
| **Brasil** | PBIA 2024-2028 (R$ 23.000 M, jul/2024); **PL 2338/2023 aprobado en Senado (dic/2024) pero trabado en Diputados — no es ley** | Parcial: NIA reporta 182 soluciones en operación y 41 órganos con directrices propias (datos 2025) | Sí (administrativa): Autoavaliação de Impacto Ético (AIE) del NIA para IA en sector público, alineada OCDE/UNESCO | Sin régimen específico; plataforma centralizada de infraestructura de IA prevista hasta 2026; programa INSPIRE (R$ 390 M) | Meta 115.000 servidores capacitados hasta 2026 | TIC Governo 2025 (CGI.br, 23/7/2026): 59% de órganos federales/estaduales usa IA; municipios solo 27% — brecha nacional-subnacional |
| **Colombia** | CONPES 4144 (14/2/2025) — Política Nacional de IA; Guía Ética para entidades públicas (act. 7/1/2026) | No: el propio CONPES admite que FURAG "no es suficiente" para conocer casos de uso, riesgos y barreras | No obligatoria; Guía Ética con chequeo de Ley 1581/2012 de datos | Sin régimen específico localizado | Curso "IA para el Sector Público" (UNESCO + U. de los Andes, ago/2025); 2.700 servidores formados con U. de Cartagena (ago-dic/2025) | MinTIC: 6 modelos de IA/analítica en operación, ~1.800 comunicaciones diarias automatizadas (auto-reportado, sin evaluación independiente); modelos soberanos Chiminigagua y Bachué |
| **México** | **Sin ley de IA ni estrategia nacional integral** (oct/2026); ATDT + Programa Sectorial 2025-2030 (DOF 19/9/2025); LNIA anunciado (abr/2025); Ley General de IA en gestación en el Senado | No localizado a nivel federal | No | Sin régimen específico localizado | No localizado a nivel federal | Caso subnacional CDMX/ADIP: Llave CDMX (~5 M usuarios, 100+ servicios), desarrollo in-house con propiedad del código; chatbots generativos con ODI/Faculty AI |
| **OCDE** | Recommendation on AI (OECD/LEGAL/0449, 2019; definición actualizada 8/11/2023; principios revisados may/2024; 48 países + UE adheridos, incl. Argentina) | Framework for the Classification of AI Systems (2022) diseñado explícitamente como base de registros/inventarios | "Governing with AI" (18/9/2025): recomienda guardarraíles y gestión de riesgo proporcionales | Sin instrumento vinculante; recomienda compra pública como palanca | Recomienda habilidades como habilitador transversal | 200 casos en 11 funciones de gobierno: alta proporción de pilotos que no escala; solo 15% de gobiernos tenía marco de inversión en IA (2023); solo 4% de casos habilita actores externos |

**Cómo leer la tabla:**

- *Instrumento rector vigente*: norma o estrategia de mayor rango efectiva al 30/10/2026 (no proyectos en trámite, que van en advertencias de vigencia).
- *Registro/inventario público*: existencia de un listado público de sistemas de IA del Estado, con o sin obligación legal.
- *Evaluación de impacto obligatoria*: instrumento que deba completarse antes de poner un sistema en producción o usarlo en decisiones.
- *Contratación de IA*: normas o guías específicas para comprar/contratar IA (no la ley general de compras).
- *Formación de funcionarios*: programas documentados para el empleo público (no formación general de la población).
- *Resultado medible destacado*: el dato duro más relevante y verificable de cada jurisdicción, incluido el contrapunto crítico cuando existe.

**Lectura rápida de la tabla:**

- **Con registro público obligatorio funcionando:** Reino Unido (ATRS), Canadá (AIA publicadas), EE.UU. (inventario GitHub), Uruguay (Observatorio). En construcción: Chile (dic/2026), UE (base de alto riesgo).
- **Con evaluación de impacto obligatoria previa a producción:** Canadá (la más completa y reutilizable), UE (FRIA para alto riesgo), Corea (alto impacto), Brasil (AIE administrativa), EE.UU. (alto impacto, atenuada respecto de 2024).
- **Con ley horizontal sancionada:** solo UE y Corea del Sur. Reino Unido, Singapur y Canadá optan por instrumentos administrativos; Chile, Brasil y México están **sin ley vigente**; España **caducó su proyecto** el 6/10/2026.
- **Lección estructural:** no hace falta ley nueva para gobernar la IA estatal — directivas del Ejecutivo (Canadá, Brasil, Colombia), estándares de transparencia (Reino Unido, Uruguay) y cláusulas de compra (Reino Unido, EE.UU., Chile, Corea) son adoptables por decreto/resolución provincial.

---

## 3. Hallazgos por región

### 3.1 Europa

#### 3.1.1 Unión Europea — AI Act: el calendario es la noticia

- **Reglamento (UE) 2024/1689 "AI Act"** en vigor desde 1/8/2024, aplicación por fases (cronología oficial del AI Act Service Desk, actualizada tras el Digital Omnibus):
  - 2/2/2025: prohibiciones + **alfabetización obligatoria (art. 4)** para todo proveedor y *deployer*, incluidos organismos públicos.
  - 2/8/2025: reglas GPAI; autoridades nacionales; gobernanza UE (AI Board, Panel Científico, Foro Consultivo).
  - 2/8/2026: aplicación general + transparencia (art. 50) + inicio del enforcement.
  - 2/12/2026: nuevas prohibiciones (deepfakes sexuales no consentidos, material de abuso infantil).
  - **2/12/2027: alto riesgo Anexo III** (biometría, educación, empleo, servicios públicos esenciales, migración, justicia) — **fecha movida por el Digital Omnibus** (antes 2/8/2026 en el texto original).
  - 2/8/2028: alto riesgo embebido en productos (Anexo I). 2/8/2030: fin de gracia para sistemas de alto riesgo ya usados por autoridades públicas (art. 111).
  - Sandbox regulatorio por Estado miembro: plazo movido de 2/8/2027 a **2/12/2027** por el Omnibus.
- **Digital Omnibus on AI**: propuesta COM(2025) 836 del 19/11/2025; verdeo final del Consejo 29/6/2026. Simplifica y reprograma plazos de alto riesgo. **Advertencia de vigencia: citar siempre el calendario post-Omnibus.**
- Obligaciones clave para organismos públicos como *deployers*: supervisión humana efectiva, monitoreo, calidad de datos, logs (art. 26); **FRIA — evaluación de impacto en derechos fundamentales (art. 27)**; **registro en la base de datos europea de IA de alto riesgo** (arts. 49(2) y 71).
- **Apply AI Strategy** (8/10/2025): ~€1.000 M para adopción en 10 sectores + sector público; Apply AI Alliance, AI Observatory y AI Act Service Desk.
- **Code of Practice on Marking and Labelling of AI-generated Content**: versión final 10/6/2026, voluntario; marcado machine-readable en 2 capas (metadata firmada + watermarking); secciones para proveedores y para *deployers* (etiquetado de deepfakes y de texto de interés público sin revisión editorial humana).
- **GPAI Code of Practice** (julio 2025) + directrices sobre alcance de obligaciones GPAI + plantilla de resumen público de contenidos de entrenamiento.
- **AI Continent Action Plan** (abril 2025): precursor de la Apply AI Strategy.
- Para las instituciones de la UE, la autoridad de vigilancia del AI Act es el **EDPS**.
- Fuentes: https://ai-act-service-desk.ec.europa.eu/en/ai-act/timeline/timeline-implementation-eu-ai-act (30/10/2026); https://www.consilium.europa.eu/en/policies/artificial-intelligence-act/timeline-artificial-intelligence/ (30/10/2026); https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai (30/10/2026); https://commission.europa.eu/news-and-media/news/keeping-european-industry-and-science-forefront-ai-2025-10-08_en (30/10/2026); https://ec.europa.eu/commission/presscorner/detail/en/ip_26_1328 (30/10/2026); https://www.autoriteitpersoonsgegevens.nl/en/themes/algorithms-ai/eu-ai-act (30/10/2026).

**Relevancia para Santa Fe:** empresas y universidades santafesinas que exporten software a la UE deberán cumplir el AI Act (extraterritorial); un sandbox regulatorio provincial (modelo RD 817/2023 español, articulable con la plataforma de la Medida 3 y con ASaCTeI) es instrumento de política productiva, no solo de gobernanza.

#### 3.1.2 Reino Unido — transparencia obligatoria con cumplimiento desigual

- Enfoque **"pro-innovación"**: sin ley horizontal; 5 principios para reguladores sectoriales (white paper 2023, respuesta 6/2/2024).
- **AI Opportunities Action Plan** (ene/2025, Matt Clifford): https://www.gov.uk/government/publications/ai-opportunities-action-plan/ai-opportunities-action-plan (30/10/2026).
- **AI Playbook for the UK Government** (GDS, 10/2/2025; integrado al **AI Knowledge Hub**, ai.gov.uk/knowledge-hub): 10 principios para todo el sector público —
  - conocer las limitaciones de la IA; uso legal/ético; seguridad; **control humano significativo**; gestión del ciclo de vida;
  - "la herramienta correcta para el trabajo" (a veces la respuesta no es IA); apertura/colaboración;
  - trabajar con los equipos comerciales desde el inicio; skills; assurance.
  - Exige **inventario de sistemas de IA por organización** y **comité de gobernanza de IA**.
  - Fuente: https://www.gov.uk/government/publications/ai-playbook-for-the-uk-government/artificial-intelligence-playbook-for-the-uk-government-html (30/10/2026); lanzamiento: https://gds.blog.gov.uk/2025-02-10/launching-the-artificial-intelligence-playbook-for-the-uk-government (30/10/2026).
- **Instituciones:** DSIT + AI Office (política), GDS (ejecución digital), CDDO (datos); unidad **CustomerFirst** (DSIT, ene/2026); **Responsible AI Advisory Panel** externo; incubadora **i.AI**.
- **ATRS (Algorithmic Transparency Recording Standard)**: registro público de herramientas algorítmicas.
  - Obligatorio para departamentos centrales y ALBs desde 6/2/2024; despliegue por fases desde marzo 2024.
  - **155 registros publicados al 30/10/2026** (corrección por verificación del 31/10/2026; la estimación anterior era ~125). Fuentes: https://www.gov.uk/algorithmic-transparency-records (30/10/2026); alcance y exenciones: https://www.gov.uk/government/publications/algorithmic-transparency-recording-standard-mandatory-scope-and-exemptions-policy (30/10/2026).
- **Contrapunto crítico (PLP, oct/2026):** de 15 sistemas automatizados relevados en decisiones públicas, **solo 4 estaban registrados** y había **1 sola evaluación de impacto de igualdad** vinculada — los sistemas de mayor riesgo son los que faltan en el registro. Fuente: https://publiclawproject.org.uk/resources/ai-in-public-body-decision-making (30/10/2026). **Lección: registro sin alcance obligatorio explícito, excepciones taxativas y verificación activa = registro incompleto.**
- **Compra pública:**
  - **PPN 02/24 "Improving Transparency of AI use in Procurement"** (25/3/2024, actualizada como PPN 01/25 bajo el Procurement Act 2023 — ley vigente para compras iniciadas desde 24/2/2025): obliga a preguntar a los oferentes **si usaron IA para redactar su oferta**, controlar que no entrenen IA con información confidencial del organismo y hacer due diligence adicional. Fuentes: https://www.gov.uk/government/publications/ppn-0224-improving-transparency-of-ai-use-in-procurement/ppn-0224-improving-transparency-of-ai-use-in-procurement-html (30/10/2026); https://assets.publishing.service.gov.uk/media/67af7ba0e270ceae39f9e279/PPN_017_Improving_transparency_of_AI_use_in_procurement.pdf (30/10/2026).
  - Guidelines for AI Procurement (Cabinet Office/OAI/WEF) + Digital, Data & Technology Playbook ("comply or explain") + rutas de mercado vía Crown Commercial Service (frameworks y Dynamic Purchasing Systems, p. ej. G-Cloud).
- **Formación:**
  - **AI Adoption Accelerator** del Open Innovation Team (25/6/2025, act. 23/10/2025): workshops + bootcamps "AI Pioneers" que forman campeones internos: https://www.gov.uk/government/news/accelerating-ai-adoption-in-the-civil-service (30/10/2026).
  - **AI Skills Boost** (gobierno-industria): upskilling de **10 M de trabajadores en IA hacia 2030**; programa **TechFirst (£187 M)**; meta de **1 de cada 10 funcionarios en roles digitales/tecnológicos para 2030** y upskilling de hasta **100.000 civil servants**: https://www.gov.uk/government/publications/dsit-annual-report-and-accounts-2025-to-2026/dsit-annual-report-and-accounts-2025-to-2026 (30/10/2026).
  - Caso de frontera: asistente **GOV.UK con Claude (Anthropic)** para navegación de servicios (empleo como primer caso), con ingenieros de Anthropic trabajando junto a GDS para transferencia de capacidad: https://www.anthropic.com/news/gov-UK-partnership (30/10/2026).
- **Resultados medibles:**
  - **NHS**: IA para predecir demanda en **50 servicios de urgencias (A&E)** y gestionar esperas (AI Exemplars; GDS blog 20/1/2026).
  - **Probation Service**: >**1.000 oficiales** usan transcripción automática de reuniones para reducir trabajo administrativo (misma fuente).
  - **Hillingdon Council**: primera autoridad local con automatización de voz + IA a escala; **−5% costo por llamada**.
  - **Contrapunto oficial: solo el 8% de los proyectos de IA muestra beneficios medibles** y 16% costos proyectados (State of Digital Government Review, ene/2025): https://www.gov.uk/government/publications/state-of-digital-government-review/state-of-digital-government-review (30/10/2026).
- **Blueprint for Modern Digital Government** (2025): eje 2 "Harness the power of AI for the public good"; potencial de **£45.000 M/año** en productividad del sector público: https://www.gov.uk/government/publications/a-blueprint-for-modern-digital-government/a-blueprint-for-modern-digital-government-html (30/10/2026). Roadmap 2025-2030 (19-20/1/2026): https://gds.blog.gov.uk/2026-01-20/our-roadmap-for-modern-digital-government (30/10/2026); declaración parlamentaria: https://questions-statements.parliament.uk/written-statements/detail/2026-01-19/hlws1246 (30/10/2026).

#### 3.1.3 Estonia — escala real + la auditoría oficial como contrapeso

- **Estrategia "Kratt" 2024-2026** (€60 M) + White Paper de Datos e IA 2024-2030 + Agenda Digital 2030. Desde 1/1/2025 el **Ministerio de Justicia y Asuntos Digitales** absorbió gobierno digital e IA; **RIA** ejecuta infraestructura (X-Road, Bürokratt, nube estatal). Fuente: https://interoperable-europe.ec.europa.eu/sites/default/files/inline-files/OSS%20Country%20Intelligence%20Report%20Estonia%202025_0.pdf (30/10/2026).
- **AI Leap (TI-Hüpe)**: anunciado 24/2/2025 por el presidente Karis; lanzamiento 1/9/2025 con 20.000 estudiantes y 3.000 docentes con acceso gratuito a herramientas IA (OpenAI, Anthropic, Google); expansión sept/2026 a escuelas vocacionales (+38.000 estudiantes); ~€6,5 M/año; fundación público-privada. Fuentes: https://hm.ee/en/news/estonia-announces-groundbreaking-national-initiative-ai-leap-programme-bring-ai-tools-all (30/10/2026); https://estonia.ee/stories/estonias-ambitious-initiative-the-ai-leap-programme-brings-ai-tools-to-all-schools (30/10/2026).
- Vertiente administración pública: herramientas de IA para ~**10.800 funcionarios** hacia 2026; meta de ahorrar ~**21 M horas/año hacia 2030** (CDO Ott Velsberg, The Mandarin — fuente secundaria con funcionario identificable): https://themandarin.com.au/299752-ai-artificial-intelligence-lessons-estonia-kratt (30/10/2026).
- **Bürokratt**: red interoperable de chatbots/asistentes del sector público, open source, hospedaje en State Cloud ~€150/mes por organismo, soporte RIA; 18 organizaciones usuarias (GovInsider, 2025); despliegue LLM/RAG en 2025 y agentes personalizados + LLM adaptado al estonio en 2026. €53 M de fondos RRF. Fuentes: https://www.kratid.ee/en/burokratt (30/10/2026); https://govinsider.asia/intl-en/article/estonia-eyes-cross-border-interoperability-for-burokratt-its-siri-of-public-services (30/10/2026); https://reforms-investments.ec.europa.eu/projects/burokratt-programme-and-national-virtual-assistant-platform-and-ecosystem_en (30/10/2026). **Métricas de impacto cuantitativo detalladas: sin información pública verificable localizada** (la auditoría 2026 señala justamente esto).
- **X-Road**: capa de intercambio de datos desde 2001, open source, principio *once-only* como derecho ciudadano desde 1997; >1.700 sistemas conectados, **2.200 M transacciones/año**, >3.800 e-servicios, ahorro anual ~**1.345 años de tiempo de trabajo** (la Comisión Europea cita 2.589 años ahorrados en 2024). Fuente: https://e-estonia.com/service/interoperability-services/x-road (30/10/2026).
- **CONTRALECCIÓN CLAVE — auditoría del Riigikontroll (abril 2026)**: de las "130 soluciones" del listado ministerial, expertos estiman que **muchas no son realmente IA** (~30 genuinas en los organismos relevados); la mayoría **aún en testing, sin ahorros ni mejoras significativas**; desarrollo dependiente de fondos UE con mantenimiento a cargo del presupuesto nacional; **roadmap de nube gubernamental incumplido** (postergado desde 2023). Recomienda estrategias de IA por organismo (prioridades, riesgos, skills). Fuente: https://riigikontroll.ee/sites/default/files/documents/2026-04/KA_80157_Overview%20of%20the%20development%20of%20AI%20solutions%20in%20public%20sector%20organisations_2025_1.pdf (30/10/2026).
- **Estándar E-ISS, sección APP.EE.2 "Artificial Intelligence Systems"**: 22 medidas obligatorias (planificación, validación de modelos, entradas/salidas, gestión de incidentes, datos confidenciales). Auditoría conjunta EUROSAI (12 entidades de control) sobre preparación del sector público para IA, completada a inicios de 2026 (misma fuente).
- **AI support toolbox** del gobierno: evaluaciones deep-dive, asesoría y **guías de contratación de IA** para que incluso agencias chicas adopten IA responsablemente (The Mandarin, CDO Velsberg).
- **Otros casos de uso documentados:** detección de fraude fiscal (Tax and Customs Board); transcripción automática de audiencias judiciales y sesiones parlamentarias; buscador legislativo con IA en el Riigikogu (Nortal Tark, fuente IOPEU arriba).
- Escala declarada: >200 casos de uso en gobierno central; **37% de funcionarios** declara usar IA; >120 soluciones según el PM Michal (fuente semioficial: https://investinestonia.com/pm-michal-to-newsweek-estonias-edge-lies-in-smart-ai-use/, 30/10/2026).
- **Caso Töötukassa (Fondo de Seguro de Desempleo)**: sistema de apoyo a decisiones OTT que predice probabilidad de empleo a 6 meses y riesgo de desempleo de larga duración; el CDO afirma que **redujo la carga de los caseworkers y acortó el tiempo en desempleo** (The Mandarin + descripción técnica en la auditoría de Riigikontroll 2026 — afirmación del funcionario, no verificada independientemente).

#### 3.1.4 España — agencia fuerte, ley caducada, resultados medibles en agencias

- **Estrategia de IA 2024** (Consejo de Ministros, may/2024; palanca 5 "IA en el Sector Público"): https://digital.gob.es/content/dam/portal-mtdfp/DigitalizacionIA/Estrategia_IA_2024.pdf (30/10/2026).
- **Plan IA360** (presentado por Pedro Sánchez el 21/9/2026): 14 proyectos tractores a 12 meses — gigafactoría de IA (€5.000 M público-privados), modelos BSC para salud/energía/clima/servicios públicos, Bono IA pymes, **Instituto de Seguridad de la IA dentro de AESIA**, observatorio IA-mercado laboral. Fuentes: https://lamoncloa.gob.es/presidente/actividades/Documents/2026/20260920%20Plan%20IA360.pdf (30/10/2026); https://espanadigital.gob.es/actualidad (30/10/2026).
- **ADVERTENCIA DE VIGENCIA:** el **Proyecto de Ley Orgánica para el buen uso y gobernanza de la IA** (aprobado en Consejo de Ministros 26/5/2026, registrado 28/5/2026, expte. 121/000096) está marcado **"Concluido (Caducado)" desde el 6/10/2026** en la ficha del Congreso; reimpulso incierto. Citar como "proyecto caducado". Fuentes: https://www.congreso.es/es/proyectos-de-ley?_iniciativas_id=121%2F000096 (30/10/2026); https://www.lamoncloa.gob.es/consejodeministros/resumenes/paginas/2026/260526-rueda-prensa-ministros.aspx (30/10/2026).
- **AESIA**: primera agencia de supervisión de IA de la UE. Creada por Ley 22/2021; estatuto por **RD 729/2023** (BOE 2/9/2023); sede en A Coruña; funciones de supervisión, inspección, sanción, asesoramiento y formación. Fuentes: https://www.boe.es/buscar/act.php?id=BOE-A-2023-18911 (30/10/2026); https://aesia.digital.gob.es/es (30/10/2026).
- **Sandbox regulatorio (RD 817/2023, primero de Europa)**: piloto operativo desde abril 2025 con **12 sistemas de alto riesgo de 6 sectores**; probó gobernanza, trazabilidad, **supervisión humana**, robustez y sesgo; produjo **guías de apoyo al cumplimiento del RIA para alto riesgo (16/12/2025)**. Fuentes: https://www.boe.es/eli/es/rd/2023-11-08/817 (30/10/2026); https://digital.gob.es/digitalizacion/areas-interes/sandbox-ia (30/10/2026); https://aesia.digital.gob.es/es/actualidad/20251216-publicadas-las-guias-de-apoyo-al-cumplimiento-del-RIA (30/10/2026).
- **Resultados medibles en agencias:**
  - **Justicia** (13/8/2026): **>1 M horas ahorradas**; automatización de monitorios con 350.000 tareas automatizadas; expedientes por >€700 M; 41.000 horas ahorradas en un proyecto; Murcia: **−161 días** de duración media del monitorio (premio CGPJ). Fuente: https://www.mpr.gob.es/prencom/notas/paginas/2026/ministerio-incorpora-soluciones-ia-robotizacion.aspx (30/10/2026).
  - **AEAT**: Estrategia de IA propia (1/12/2025) con "human in the loop", datos de calidad, equipos multidisciplinares y **formación obligatoria del personal**: https://sede.agenciatributaria.gob.es/static_files/Sede/Tema/Agencia_tributaria/Gobierno_abierto/Estrategia_IA.pdf (30/10/2026).
  - AEAT en producción: chatbot SII-IVA con **−80% de correos de consulta (registro documentado, 2017)**; "Nudge IRPF" predictivo en tiempo real; predicción de no declarantes; hardware propio (4 servidores, 8 GPUs Nvidia, €1,2 M — prensa: https://www.elmundo.es/economia/macroeconomia/2026-03-06/69ab01f8fc6c83293d8b4598.html, 30/10/2026).
  - **SEPE**: sistema **LEO** de clasificación automática de ofertas según la Clasificación Nacional de Ocupaciones; predicción de desempleo de larga duración; detección de fraude en capitalizaciones; matching oferta-demanda. Todos los modelos se **entrenan y ejecutan en la nube privada estatal certificada NubeSARA**, con evaluación conforme al AI Act y al Esquema Nacional de Seguridad. Fuente: https://wapes.org/wp-content/uploads/2026/09/es_wapes_ai-digitalisation_working-paper_2026.pdf (30/10/2026).
  - **ALIA**: infraestructura pública de modelos de lenguaje en español y lenguas cooficiales (35 idiomas europeos, 20% lenguas de España), coordinada por el BSC con liderazgo de SEDIA; ALIA-40B base (ene/2025) y ALIA 40B Instruido (17/12/2025); familia **verificada por AESIA** y alineada con los estándares de transparencia del AI Act. Fuentes: https://bsc.es/news/bsc-news/alia-europes-first-public-open-and-multilingual-ai-infrastructure (30/10/2026); https://digital.gob.es/en/comunicacion/notas-prensa/secretaria-digitalizacion-e-inteligencia-artificial/2025-12-17-12-2025 (30/10/2026); http://alia.gob.es/eng (30/10/2026).
  - **Transversal — GobTechLab** (laboratorio de innovación pública del MTDFP): 19 casos de uso en la AGE; **Plataforma soberana de IA para la Administración** (modelos bajo control público, auditados, anti dependencia de proveedores extranjeros); **Atlas de la IA en España** (ago/2026): https://digital.gob.es/content/dam/portal-mtdfp/comunicacion/comunicacion_ministro/2026-08-31-08-2026/Atlas%20de%20la%20IA.pdf (30/10/2026).
- **Formación:** INAP con grafo de conocimiento aumentado por IA (citado por OECD, "Gobernar con IA", jun/2025); Plan Nacional de Competencias Digitales: >2 M personas formadas, meta 80.000 profesionales (~150 h/curso); programa Generación IA (€120 M, ~400 investigadores). Fuente: https://laadministracionaldia.inap.es/noticia.asp?id=1518271 (30/10/2026). AEPD con política propia de IA generativa y evaluación de riesgo por caso de uso: https://www.aepd.es/memorias/memoria-aepd-2025.pdf (30/10/2026).
- **Compra pública de IA:** *marco específico estatal — sin información pública verificable localizada al 30/10/2026*; rige la Ley 9/2017 de Contratos + prácticas emergentes (NubeSARA, Plataforma soberana).

**Síntesis Europa (hechos):** la UE regula por fases y ya reprogramó su calendario; Reino Unido obliga transparencia (ATRS) y cláusulas de compra (PPN) sin ley de IA; Estonia demuestra arquitectura compartida (X-Road/Bürokratt) y a la vez el valor de la auditoría oficial que desinfla el relato; España muestra que una agencia (AESIA) + sandbox + estrategias por organismo (AEAT, SEPE) producen resultados medibles incluso con la ley adaptativa caducada.

---

### 3.2 Norteamérica y Asia-Pacífico

#### 3.2.1 Estados Unidos — inventario masivo + compra disciplinada, con vaivén político

- **Marco vigente:** EO 14179 (23/1/2025, derogó la EO 14110 de Biden); **OMB M-25-21** "Accelerating Federal Use of AI" (3/4/2025, reemplaza M-24-10); **OMB M-25-22** "Driving Efficient Acquisition of AI" (3/4/2025, reemplaza M-24-18); **America's AI Action Plan** (23/7/2025); EO 14319 "Preventing Woke AI" (23/7/2025, "Unbiased AI Principles" en compras de LLM); EO "Ensuring a National Policy Framework for AI" (11/12/2025, AI Litigation Task Force + preemption de leyes estatales). Fuentes: https://www.whitehouse.gov/wp-content/uploads/2025/02/M-25-21-Accelerating-Federal-Use-of-AI-through-Innovation-Governance-and-Public-Trust.pdf (30/10/2026); https://www.whitehouse.gov/releases/2025/04/white-house-releases-new-policies-on-federal-agency-ai-use-and-procurement/ (30/10/2026); https://www.whitehouse.gov/wp-content/uploads/2025/07/Americas-AI-Action-Plan.pdf (30/10/2026); https://www.whitehouse.gov/presidential-actions/2025/07/preventing-woke-ai-in-the-federal-government/ (30/10/2026); https://www.whitehouse.gov/presidential-actions/2025/12/eliminating-state-law-obstruction-of-national-artificial-intelligence-policy/ (30/10/2026).
- **Exigencias a agencias (M-25-21):**
  - **Chief AI Officer (CAIO)** obligatorio en 60 días, con rango senior; Consejo de CAIOs (CAIOC) formalizado, presidido por OMB.
  - Inventario de casos de uso por agencia; determinación y documentación de usos de **"alto impacto"**.
  - Prácticas mínimas de gestión de riesgo + **revisión independiente previa a la aceptación de riesgo** para alto impacto.
  - Estrategias de IA por agencia y adhesión a la guía de contratos de IA con plazo al 30/9/2025 (GAO-25-107933).
- **Inventario público anual** (EO 13960 §5 + Advancing American AI Act 2022 §7225): consolidado por OMB en GitHub (github.com/ombegov).
  - 2023: ~710-888 casos publicados.
  - **2024: 41 agencias, 2.133 casos de uso, 351 con impacto en derechos/seguridad** (corte 23/1/2025).
  - **2025: +3.600 casos en 41 agencias (+69% interanual)**.
  - Fuentes: https://github.com/ombegov/2024-Federal-AI-Use-Case-Inventory (30/10/2026); https://github.com/ombegov/2025-Federal-Agency-AI-Use-Case-Inventory (30/10/2026); https://www.govexec.com/technology/2026/04/agencies-report-over-3000-ai-use-cases-2025/412917/ (30/10/2026); https://brookings.edu/articles/assessing-the-state-of-ai-adoption-across-the-federal-government (30/10/2026).
- **Contratación (M-25-22):** retener derechos sobre datos y mejoras; **evitar vendor lock-in**; **prohibido que el proveedor entrene modelos comerciales con datos federales sin permiso expreso**; documentar capacidades/limitaciones y procedencia de datos de entrenamiento; testing continuo y monitoreo post-adjudicación; costos de desmantelamiento en contratos de LLM; los contratos de LLM deben incluir los "Unbiased AI Principles" (EO 14319); preferencia "comprar americano".
- **Formación:** mandato del AI Action Plan de que todas las agencias den **acceso y entrenamiento en modelos de lenguaje frontier** a los empleados cuyo trabajo lo justifique; AI Training Act (programa bianual de OMB); programa de intercambio de talento. Fuente: America's AI Action Plan (arriba).
- **NAIRR (National AI Research Resource):** piloto NSF (ene/2024) con 14 agencias y 28 socios; +600 proyectos y 6.000 estudiantes en los 50 estados; convocatoria NAIRR-OC (3/9/2025) para pasar de piloto a programa nacional permanente: https://www.nsf.gov/news/nsf-announces-funding-establish-national-ai-research (30/10/2026); https://www.nsf.gov/focus-areas/ai/nairr (30/10/2026).
- **Usos con resultados:**
  - **VA (Veterans Affairs)**: inventario 2025 con **367 casos de uso**; "VA GPT" (chat generativo interno) y VA VoiceBot para call centers; la IA acelera el procesamiento de reclamos (con debate congressional sobre errores): https://department.va.gov/ai/ai-use-case-inventory/ (30/10/2026); https://www.govexec.com/technology/2026/04/ai-helping-va-speed-claims-processing-dems-worry-about-errors/412916/ (30/10/2026).
  - **GSA USAi.gov — plataforma compartida de IA generativa** para que cualquier agencia lance chatbots vía API de modelos curados; junto con FedRAMP 20x redujo barreras de autorización: https://www.gsa.gov/artificial-intelligence/2025-gsa-ai-use-cases (act. 10/9/2026, acceso 30/10/2026).
  - **IRS**: chatbots de servicio al contribuyente (FAQs de reembolsos, cambio de domicilio, robo de identidad) con escalamiento a chat humano: https://www.irs.gov/pub/irs-pia/ts-am-iclc-pia.pdf (30/10/2026).
- **Contrapunto crítico:** GAO y Brookings señalan **inventarios aún incompletos/inexactos** y que AI.gov dejó de consolidar la información; el enfoque 2025-2026 eliminó la categoría "rights-impacting" con salvaguardas reforzadas de Biden (menos burocracia de riesgo, se mantienen inventario, CAIO, revisión independiente y prácticas mínimas). Fuente GAO: https://files.gao.gov/reports/GAO-25-107933/index.html (30/10/2026).

#### 3.2.2 Canadá — el estándar de oro en evaluación de impacto (y su "design-reality gap")

- **Directive on Automated Decision-Making** (Treasury Board): vigente desde 1/4/2019; aplica a todo sistema ADM **desarrollado o contratado** después del 1/4/2020; **4.ª revisión modificada el 24/6/2025**; sistemas preexistentes tienen plazo hasta el 24/6/2026 para cumplir. Fuente: https://www.tbs-sct.canada.ca/pol/doc-eng.aspx?id=32592 (30/10/2026).
- **ADVERTENCIA:** el proyecto de ley federal **C-27/AIDA murió en enero 2025**; en junio 2026 el gobierno federal confirmó que optará por instrumentos focalizados, no una ley ómnibus (fuente secundaria: https://doi.org/10.48550/arxiv.2607.15051).
- **Algorithmic Impact Assessment (AIA):** cuestionario **obligatorio previo a la puesta en producción**; versión vigente: **65 preguntas de riesgo + 41 de mitigación**; puntaje bruto máximo 169; **niveles I (mínimo) a IV (muy alto)** según derechos, salud, intereses económicos, sostenibilidad, reversibilidad y riesgo de datos. Herramienta abierta, gratuita y reutilizable (open license). Fuente: https://www.canada.ca/en/government/system/digital-government/digital-government-innovations/responsible-use-ai/algorithmic-impact-assessment.html (30/10/2026).
- **Requisitos escalados por nivel (Appendix C):** aviso en lenguaje claro; explicación publicada del sistema; **peer review obligatorio desde nivel II, publicado antes de producción** (guía: https://www.canada.ca/en/government/system/digital-government/digital-government-innovations/responsible-use-ai/automated-decision-making/guide-peer-review-automated-decision-systems.html, 30/10/2026); auditoría según nivel; **intervención humana obligatoria en niveles III-IV**; recurso/revisión para el ciudadano; nivel IV requiere autoridad específica del Treasury Board.
- **Registro público:** resultados finales de cada AIA publicados obligatoriamente en el Open Government Portal **antes** de la producción: https://search.open.canada.ca/opendata?collection=aia (30/10/2026). Incluye CBSA, ESDC, IRCC, RCMP, Transport Canada, Veterans Affairs. Publicación anual de eficiencia y efectividad de los sistemas ADM.
- **Caso IRCC (inmigración) — regla de diseño verificable en fuentes oficiales:** automatización solo de determinaciones **positivas** rutinarias (extensiones de permiso de estudio, permisos post-graduación, parte del patrocinio de refugiados); **ningún sistema puede rechazar ni recomendar rechazar una solicitud**; decisiones finales de oficiales humanos con entrenamiento explícito contra sesgo de automatización. Fuentes: https://open.canada.ca/data/dataset/452e10be-383d-4d7a-9c7d-6484dc366a4a (30/10/2026); https://open.canada.ca/data/en/dataset/f028d40f-3c0e-4a36-8a38-fe18d7aaaa32 (30/10/2026); https://open.canada.ca/data/dataset/71b309a0-efd2-4e85-8124-37e935c23aef (AIA AAST, 28/1/2025, acceso 30/10/2026); https://search.open.canada.ca/qpnotes/record/cic,IRCC-2025-QP-00001 (30/10/2026).
- **Otros casos con AIA publicada:** IRCC — Administrative Activities Support Tool (AAST), matching de datos biométricos/médicos con solicitudes (https://open.canada.ca/data/dataset/71b309a0-efd2-4e85-8124-37e935c23aef, AIA 28/1/2025, acceso 30/10/2026); **Transport Canada — PACT**: targeting automatizado de riesgo de carga aérea previa al embarque (AIA publicada; referencia: https://worldprivacyforum.org/posts/ai-governance-on-the-ground-series-canada/, 30/10/2026). IRCC es el departamento que más AIA ha publicado; el registro incluye además CBSA, ESDC, RCMP y Veterans Affairs.
- **Contrapunto crítico — "design-reality gap":** evaluación académica independiente del registro (Springer, 2025): **compliance desigual entre departamentos, sesgo pro-eficiencia y ausencia de sociedad civil en las AIA publicadas**. Fuente: https://link.springer.com/10.1007/s44206-025-00221-7 (30/10/2026).
- **Contratación:** la Directiva cubre explícitamente sistemas "desarrollados **o contratados**" — AIA, explicación y peer review aplican igual a compras a proveedores (con salvaguarda de PI y privacidad).
- **Formación:** *programa nacional obligatorio de formación de funcionarios federales en IA — sin información pública verificable localizada* (existen guías TBS de uso responsable, pero no un programa documentado con fuente oficial primaria).

#### 3.2.3 Singapur — gobernanza voluntaria + plataforma única con adopción masiva

- **Frameworks:** Model AI Governance Framework (2.ª ed., ene/2020, IMDA+PDPC; voluntario, principios de decisiones explicables/transparentes/justas + IA centrada en humanos); **MGF para IA Generativa** (finalizado 30/5/2024 por AI Verify Foundation + IMDA; 9 dimensiones: accountability, datos, despliegue confiable, reporte de incidentes, testing, seguridad, procedencia, investigación en alineamiento, IA para el bien público); **MGF for Agentic AI** (2025). Fuentes: https://aiverifyfoundation.sg/resources/mgf-gen-ai/ (30/10/2026); https://imda.gov.sg/-/media/imda/files/about/emerging-tech-and-research/artificial-intelligence/mgf-for-agentic-ai.pdf (30/10/2026).
- **NAIS 2.0** (4/12/2023, actualización 2025): "agilidad regulatoria" — sin ley específica de IA; leyes existentes + guías de reguladores; >S$1.000 M en 5 años (Budget 2024) + S$150 M Enterprise Compute (Budget 2025). Fuentes: https://practiceguides.chambers.com/practice-guides/artificial-intelligence-2025/singapore/trends-and-developments/O21097 (30/10/2026); https://isomer-user-content.by.gov.sg/39/cb52d9a0-0d6c-484d-96fe-571031b37eb7/NAIS_update.pdf (30/10/2026).
- **Pair (GovTech/Open Government Products):** asistente generativo interno seguro para los ~150.000 funcionarios; maneja datos clasificados Restricted/Sensitive; **los datos no entrenan modelos externos**. Resultados oficiales: **~80% de los funcionarios usó Pair Chat**; +73.000 usuarios activos mensuales; +7.700 Pair Assistants personalizados; **>31.000 AIBots** creados por funcionarios no técnicos (bot RAG en 15 minutos). Fuente: https://mddi.gov.sg/newsroom/mddi-s-response-to-pq-on-progress-of-adopting-ai-tools-within-public-service (30/10/2026). **Nota de transparencia:** el ahorro de tiempo (~46% en tareas administrativas) es **auto-reportado por funcionarios, sin auditoría externa publicada** (https://evidoria.eu/practice/pair-singapores-government-wide-generative-ai-assistant-for-public-officers, 30/10/2026).
- Otros casos con resultados oficiales:
  - **OneService Chatbot** (quejas municipales por WhatsApp/Telegram, desde 2021): >30.000 casos/mes, ~2.000 horas-hombre ahorradas, resolución hasta 2 días más rápida sin personal adicional; clasificación y ruteo automático: https://www.tech.gov.sg/technews/how-govtech-uses-ai-to-enhance-digital-public-services/ (30/10/2026).
  - **Clearance sin pasaporte en Changi** (reconocimiento facial): >1,5 M de viajeros en los primeros 3 meses; tiempo de clearance de 25s a 10s: https://thedocs.worldbank.org/en/doc/033a79cc8233622769bc381d16c661b7-0090012025/original/03-Feng-Ji-Sim-World-Bank-Event-Plenary-Session.pdf (30/10/2026).
  - **Ask Jamie**: asistente virtual en 80 sitios web gubernamentales, 15 M+ de preguntas respondidas, deflecta hasta 50% del tráfico a call centers: https://go.sabiogroup.com/rs/710-JZD-844/images/uk-casestudy-digital-singapore-government-ask-jamie.pdf (30/10/2026).
  - **PUB** predice riesgo de inundaciones; **SPF** bloquea millones de intentos de estafa/mes con detección ML de sitios scam.
  - Incubadora **LAUNCH! AI**: 60+ pruebas de concepto — URA redujo a la mitad el tiempo de redacción de condiciones de licitación; LTA SHERLOCK bajó informes de vulnerabilidad de 2 semanas a 1 día; ACRA CLAIR duplicó capacidad de supervisión de estados financieros (NAIS update, fuente citada).
- **Formación:** **curso obligatorio de alfabetización en IA para todos los funcionarios desde octubre 2024**; cursos del Civil Service College; competencia **Prompt Royale 2025**: >5.000 funcionarios de 114 agencias. Fuente: https://htx.gov.sg/whats-happening/all-news---events/all-news/2025/htx-officers-put-genai-to-the-test-at-prompt-royale-2025 (30/10/2026).
- **Gobernanza:** sin registro público obligatorio ni ley de IA; testing verificable (AI Verify Toolkit, Project Moonshot, Litmus, Sentinel, ISAGO); revisión humana calibrada por severidad del daño; junio 2026: anuncio de registro de agentes autónomos (fuente secundaria, Evidoria).

#### 3.2.4 Corea del Sur — primera ley integral de IA de Asia-Pacífico + compra pública como palanca

- **AI Basic Act** (Ley N.º 20676): sancionada 26/12/2024, promulgada 21/1/2025, **en vigor desde 22/1/2026**; **Enforcement Decree N.º 36053** (en vigor 22/1/2026: criterios de alto impacto, etiquetado/watermarks, umbral 10²⁶ FLOPs para "alto rendimiento", representante doméstico); **enmienda efectiva 21/7/2026** (codifica el National AI Strategy Committee, promueve adopción pública, accesibilidad). **Período de gracia:** moratoria MSIT de al menos 1 año en multas durante 2026. Fuentes: https://cset.georgetown.edu/publication/south-korea-ai-law-2025 (30/10/2026); https://www.trade.gov/market-intelligence/south-korea-ai-basic-act (30/10/2026); https://wheresthe.ai/rule/kr-ai-basic-act-enforcement-decree-2026/ (30/10/2026); https://www.msit.go.kr/eng/bbs/view.do?bbsSeqNo=42&mId=4&mPid=2&nttSeqNo=1264&sCode=eng (30/10/2026); https://www.cooley.com/news/insight/2026/2026-01-27-south-koreas-ai-basic-act-overview-and-key-takeaways (30/10/2026).
- Obligaciones clave: transparencia/etiquetado de generativa; **IA de alto impacto** (salud, energía, transporte, contratación, biometría, decisión pública, educación): **supervisión humana obligatoria** + planes publicados de protección de usuarios y mitigación de riesgos; IA de "alto rendimiento" (>10²⁶ FLOPs): obligaciones de seguridad; aplicación extraterritorial por umbrales (ingresos globales ≥ KRW 1 billón, ingresos IA en Corea ≥ KRW 10.000 M, o ≥1 M usuarios diarios coreanos).
- **Plan Maestro de IA trienal obligatorio** (Art. 6 de la ley); la NIA publicó guías de implementación (22/1/2026) para alto impacto, generativa y representante doméstico (DLA Piper: https://intelligence.dlapiper.com/artificial-intelligence?c=KR, modificado 20/7/2026, acceso 30/10/2026).
- **Sector público (Art. 16(3)):** organismos estatales deben dar **consideración prioritaria a productos y servicios de IA en sus compras** (compra pública como palanca de demanda) + **exención de responsabilidad para funcionarios** que compren/usen IA de buena fe (salvo dolo o negligencia grave). Base legal para datos públicos como datos de entrenamiento; 10-20% del presupuesto AX para IA de interés público. Fuentes: MSIT (arriba); https://global.eai.or.kr/ko/reports/13530 (30/10/2026).
- **Instituciones:** MSIT (política y cumplimiento); **National AI Strategy Committee** presidida por el presidente, relanzada 8/9/2025 con poder decisorio; aprobó el **Korea AI Action Plan** (finalizado feb/2026: 99 tareas, 326 recomendaciones); **Korea AI Safety Institute** (nov/2024, base legal Art. 12). Fuentes: https://stimson.org/2026/south-koreas-ai-basic-act-seeking-balance-between-industry-innovation-and-social-risk (30/10/2026); https://itif.org/publications/2025-09-29/one-law-sets-south-koreas-ai-policy-one-weak-link-could-break-it (30/10/2026); https://www.aisi.re.kr/eng/contents/22 (30/10/2026).
- **Estrategia "AI Government" (MOIS, ago/2026):** consulta ciudadana con IA 24/7 en 5 áreas para fines de 2027; "AI National Assistant" integrando Government24; **formación en IA obligatoria para todos los funcionarios** + meta de **20.000 especialistas avanzados hacia 2030** (~2% de la dotación). Fuentes: https://koreaherald.com/article/10851767 (30/10/2026); https://view.asiae.co.kr/en/article/2026082510275557665 (30/10/2026).
- **Resultados:**
  - Chatbot fiscal generativo del National Tax Service (primera institución gubernamental con consulta tributaria IA, temporada 2024; piloto IVA/liquidación anual ene/2026, expandido may/2026 a impuesto a las ganancias y créditos por ingreso del trabajo): **~180.000 usuarios y +350.000 consultas procesadas** en las temporadas pico de 2026; consultas por usuario de 2,6 a 1,9 (−26%). Fuentes: https://view.asiae.co.kr/en/article/2026080513205569425 (30/10/2026); https://ajupress.com/view/20260423120570138 (30/10/2026).
  - Detección de evasión con IA y asistente de procesamiento de datos (facturas, tarjetas) en el National Tax Administration Plan: https://ustr.gov/sites/default/files/files/Issue_Areas/Enforcement/Section%20301/Coupang/Exhibit%2046.pdf (30/10/2026).
  - **"AI National Secretary" (Gubi)** vía Naver/Kakao: tramitación de ~100 tipos de certificados electrónicos (partida de residencia, certificado de registro comercial, seguro de salud) por chat con IA privada (HyperClova X / Kanana), integrado con el Estado; expansión a liquidación anual de impuestos: https://mk.co.kr/en/economy/11984038 (30/10/2026).
- **Vacío:** *registro/inventario público de sistemas de IA del sector público coreano — sin información pública verificable localizada.*

**Síntesis Norteamérica y Asia-Pacífico (hechos):** Canadá ofrece la herramienta de gobernanza más barata y completa de adoptar (AIA abierta + niveles I-IV + publicación obligatoria), con la advertencia del design-reality gap; EE.UU. muestra cómo escalar un inventario (710 → 3.600+ casos) y cómo disciplinar la compra (M-25-22), con inventarios todavía imperfectos; Singapur prueba que plataforma única + curso obligatorio produce adopción real (~80%); Corea combina ley integral con incentivos explícitos a la compra pública y a los funcionarios que la ejecutan.

---

### 3.3 América Latina y multilaterales

#### 3.3.1 Chile — sin ley sancionada, pero con medición y compra pública avanzadas

- **PNAI** (DS N°20, 20/9/2021, DO 3/12/2021; horizonte 2021-2031, 3 ejes). Actualización 2024-2025 con metodología RAM de UNESCO y Plan de Acción (+100 acciones a 2026), presentado ene/2025 — *decreto exacto de actualización no localizado: parcialmente verificable*. Fuentes: https://minciencia.gob.cl/areas/inteligencia-artificial/politica-nacional-de-inteligencia-artificial/ (30/10/2026); https://www.camara.cl/verDoc.aspx?prmID=346735&prmTipo=DOCUMENTO_COMISION (30/10/2026).
- **ADVERTENCIA DE VIGENCIA — ley de IA EN TRÁMITE, no aprobada a oct/2026:** boletines refundidos 16821-19 y 15869-19; aprobada en general por la Cámara el 4/8/2025; **despachada al Senado el 13/10/2025**; radicada en la Comisión Desafíos del Futuro el 24/10/2025; urgencia simple repuesta el 1/9/2026. Contenido: clasificación por riesgo (alto/limitado), Consejo Asesor Técnico de IA, principio de supervisión humana, sanciones de 5.000 a 20.000 UTM. Fuentes: https://www.camara.cl/legislacion/ProyectosDeLey/tramitacion.aspx?%3BprmBOLETIN=16821-19&prmID=17429 (30/10/2026); https://www.camara.cl/cms/2025-10-13/camara-despacho-marco-regulatorio-para-uso-de-la-inteligencia-artificial-ia (30/10/2026); https://www.senado.cl/comunicaciones/noticias/proyecto-que-regula-sistemas-de-inteligencia-artificial-sera-estudiado-por (30/10/2026).
- **Circular N°711** (11/12/2023, vigente desde 1/1/2024): lineamientos de uso de IA en el sector público — instrumento administrativo vigente mientras la ley no sale.
- **Registro:** levantamiento piloto de servicios de IA estatales (Secretaría de Gobierno Digital, 1/4/2025): https://digital.gob.cl/biblioteca/estudios/resumen-ejecutivo-levantamiento-piloto-informacion-sobre-uso-de-servicios-ia-en-el-sector-publico (30/10/2026); acción **N°87 "Registro de algoritmos públicos"** del Plan de Acción con plazo **diciembre 2026** (MinCiencia + Hacienda).
- **Compra pública:**
  - **Directiva ChileCompra N°44 (2023)** — recomendaciones por etapa (investigación, solución, gestión de contratos) para proyectos de ciencia de datos e IA, basada en la guía "Permitido Innovar" del Laboratorio de Gobierno: https://www.chilecompra.cl/2025/06/chilecompra-expuso-sobre-uso-de-inteligencia-artificial-en-compras-publicas (30/10/2026).
  - **ChileCompra usa IA para integridad de sus propias compras** (28/11/2025): cruces entre Registro de Proveedores, beneficiarios finales (+196.000 personas) y base de funcionarios SIAPER; **alertas automáticas** cuando un funcionario tiene ≥10% de participación en empresa adjudicada; desde 2026 sumará mallas de parentesco del Registro Civil; **monitoreo automatizado con 15 reglas normativas al 100% de los procesos** de Mercado Público: https://www.chilecompra.cl/2025/11/chilecompra-expone-avances-en-uso-de-datos-e-inteligencia-artificial-para-disminuir-los-conflictos-de-interes-y-potenciales-irregularidades (30/10/2026).
- **Medición de adopción — el mejor dato de la región:** Encuesta Nacional de Funcionarios Públicos (jun/2025; 32.168 respondientes, 126 servicios): **61% de los funcionarios públicos usa IA en su trabajo — el doble que en 2023**: https://www.serviciocivil.cl/noticias/noticias/6-de-cada-10-funcionarias-y-funcionarios-publicos-utilizan-inteligencia-artificial-segun-encuesta-nacional-2025/ (30/10/2026).
- **Formación:** 5 perfiles laborales de IA incorporados al catálogo **ChileValora** (28/4/2025): https://www.minciencia.gob.cl/noticias/la-inteligencia-artificial-entra-al-catalogo-de-chilevalora-con-5-perfiles-propuestos-por-el-ministerio-de-ciencia (30/10/2026); 300 becas SENCE "Programador(a) en IA" y "Especialista en Interacción con IA Generativa" (2026).

#### 3.3.2 Uruguay — el registro público funcionando más transferible de ALC

- **Art. 74 Ley N°20.212** (6/11/2023): manda diseñar la Estrategia Nacional de Datos e IA con principios de equidad, no discriminación, responsabilidad, rendición de cuentas, transparencia, **auditoría** e innovación segura: https://www.impo.com.uy/bases/leyes/20212-2023/74 (30/10/2026).
- **Estrategia Nacional de IA 2024-2030** (aprobada 19/11/2024): cocreación liderada por **AGESIC** con +300 personas de 40 instituciones públicas, 11 OSC, 45 privadas/academia; consulta pública 16/9-21/10/2024 (78 aportes, 62 incorporados); 10 principios, 3 pilares (Gobernanza; Capacidades; Desarrollo sostenible), 12 líneas de acción. Fuentes: https://www.gub.uy/agencia-gobierno-electronico-sociedad-informacion-conocimiento/comunicacion/publicaciones/estrategia-nacional-inteligencia-artificial-del-uruguay-2024-2030 (30/10/2026); https://oecd.ai/en/dashboards/policy-initiatives/national-artificial-intelligence-strategy-20242030-8923 (30/10/2026). **Hoja de Ruta 2026-2027** presentada dic/2025 (incluye participación en LatamGPT): https://www.bcu.gub.uy/NOVA-BCU/SiteAssets/Lists/Iniciativas%20en%20Agenda/AllItems/nodo2_2025%20%5b01%5d%20AGESIC%20-%20Est%20IA%20y%20Datos%20-%20Diciembre%202025.pdf (30/10/2026).
- **ADVERTENCIA DE VIGENCIA: no hay ley específica de IA sancionada**; AGESIC entregó al Parlamento el 28/6/2024 el informe de recomendaciones regulatorias (art. 74): https://www.gub.uy/agencia-gobierno-electronico-sociedad-informacion-conocimiento/comunicacion/noticias/recomendaciones-para-regulacion-inteligencia-artificial (30/10/2026).
- **Observatorio de IA en el Estado** (compromiso 1.6 del 5° Plan de Gobierno Abierto, AGESIC+UAIP): **formulario obligatorio a 60 organismos**; al 30/6/2024 respondieron 22, con **27 casos reportados (8 operativos, 19 en desarrollo/testeo)**; 81,5% con especialistas del dominio. Es un **registro público de IA estatal funcionando**. Fuentes: https://www.gub.uy/agencia-gobierno-electronico-sociedad-informacion-conocimiento/comunicacion/publicaciones/relevamiento-casos-uso-aplicacion-inteligencia-artificial-estado-2 (30/10/2026); https://miradordegobiernoabierto.agesic.gub.uy/SigesVisualizador/gu/o/GA/p/2264 (30/10/2026).
- **Ficha de transparencia modelo — caso BSE:** reconocimiento automatizado de imágenes de documentos en producción desde 2020; publicado con ficha completa incluyendo la pregunta "**¿involucra participación humana en la decisión final?**" (respuesta: no — clasificación documental de bajo riesgo): https://www.gub.uy/agencia-gobierno-electronico-sociedad-informacion-conocimiento/comunicacion/publicaciones/caso-uso-ia-bse-reconocimiento-automatizado-imagenes-documentos (30/10/2026).
- **Recomendaciones de transparencia algorítmica:** los organismos deben publicar y mantener actualizados sus casos de IA (problema que resuelve, proceso, tecnología, público impactado), alineado con UNESCO: https://www.gub.uy/agencia-gobierno-electronico-sociedad-informacion-conocimiento/comunicacion/publicaciones/recomendaciones-sobre-transparencia-algoritmica/recomendaciones/reporte (30/10/2026).
- **Formación:** 1.543 funcionarios de 50 organismos capacitados 2019-2022 (5 cursos, 30 ediciones, 87% valoración muy buena/excelente; informe RAM UNESCO-Uruguay 2024: https://unesdoc.unesco.org/ark:/48223/pf0000391491, 30/10/2026); taller PNUD+AGESIC "IA para gobiernos" (11-13/11/2025): https://www.gub.uy/agencia-gobierno-electronico-sociedad-informacion-conocimiento/comunicacion/noticias/capacitacion-sobre-ia-para-organismos-del-estado (30/10/2026).
- **Contratación:** *normativa específica de compra pública de IA — sin información pública verificable localizada*; rige la estrategia de infraestructura centralizada y nube gubernamental de la ENIA.

#### 3.3.3 Brasil — ley trabada, plataforma que escala, y la brecha federal-subnacional medida

- **ADVERTENCIA DE VIGENCIA — PL 2338/2023 NO es ley a oct/2026:** presentado 3/5/2023; **aprobado por el Senado el 10/12/2024**; remitido a Diputados en mar/2025; Comisión Especial creada abr/2025; sin votación final. Contenido: enfoque de riesgo, **SIA coordinado por ANPD**, derechos de personas afectadas, auditorías de alto riesgo (art. 49). Fuentes: https://camara.leg.br/noticias/1159193-projeto-que-regulamenta-uso-da-inteligencia-artificial-no-brasil (30/10/2026); https://cria.digital/blog/marco-legal-da-ia-pl-2338 (análisis de estado, 4/10/2026, acceso 30/10/2026).
- **PBIA 2024-2028** ("IA para o bem de todos", jul/2024): **R$ 23.000 M** en 5 ejes (infraestructura/supercomputación; formación; **IA para servicios públicos**; innovación empresarial; apoyo regulatorio): https://www.gov.br/mcti/pt-br/acompanhe-o-mcti/transformacaodigital/plano-brasileiro-de-inteligencia-artificial (30/10/2026).
- **NIA (Núcleo de Inteligência Artificial, SGD/MGI):**
  - **182 soluciones de IA en operación; 144 órganos planifican adoptar asistentes; 41 órganos con directrices propias de IA** (datos 2025); acciones formalizadas por Portarias SGD/MGI nº 6.618/2024 y nº 473/2026.
  - Prototipos con UnB: chatbot RAG de soporte a cuenta Gov.br; asistente de texto Gov.br (multi-agente); asistente de clasificación jurídica de procesos (SPU); triaje documental para supervisión de educación superior (MEC/CPROC-CEBAS).
  - Fuentes: https://www.gov.br/governodigital/pt-br/infraestrutura-nacional-de-dados/inteligencia-artificial-1 (30/10/2026); https://cgi.br/media/docs/publicacoes/6/en-us/20260429153057/psi_a18_n1_data-governance-and-ai.pdf (Panorama Setorial da Internet N°1, NIC.br, abr/2026, acceso 30/10/2026).
  - **Chat Gov.br** (NIA+Dataprev, ene/2026): canal unificado de asistentes virtuales para políticas públicas del Ejecutivo Federal, inicialmente por WhatsApp (misma fuente NIC.br).
- **Gobernanza administrativa:** framework de **Autoavaliação de Impacto Ético (AIE)** del NIA, alineado OCDE/UNESCO con apoyo del Banco Mundial; **OBIA (Observatório Brasileiro de IA, NIC.br)** publica panel de indicadores del PBIA; meta **115.000 servidores capacitados hasta 2026**; plataforma centralizada de infraestructura de IA hasta 2026 (respuesta al Autodiagnóstico SISP 2025: **165 órganos con infraestructura insuficiente**); programa INSPIRE (Finep/CPQD, R$ 390 M, 4 años).
- **Medición de adopción — TIC Governo 2025** (CGI.br/Cetic.br, divulgada 23/7/2026): **59% de los órganos públicos federales y estaduales ya usa IA** (Judiciario 94%, MP 92%, Legislativo 83%, Ejecutivo 55%); federales 70% vs estaduales 58%; **municipios solo 27%**; usos: automatización de procesos (39%), minería de texto (35%), ML predictivo (31%). Estudio original en cetic.br; resumen consultado: https://sisolucoesdigitais.com.br/news/tic-governo-2025-inteligencia-artificial-orgaos-publicos (fuente secundaria, 30/10/2026). **Lectura clave para Santa Fe: la brecha nacional-subnacional/municipal es el problema estructural de la adopción.**
- **Contrapunto:** resultados de NIA **auto-reportados por la agencia, sin evaluación independiente localizada**.

#### 3.3.4 Colombia — política vía CONPES + guía ética para entidades públicas

- **CONPES 4144** (14/2/2025) — Política Nacional de IA (sucesor del CONPES 3975/2019). **El propio documento admite la debilidad de registro:** la única fuente formal sobre uso de IA en el sector público es el FURAG y "no es suficiente para generar información completa sobre casos de uso, riesgos y barreras". Fuentes: https://colaboracion.dnp.gov.co/CDT/Conpes/Econ%C3%B3micos/4144.pdf (30/10/2026); https://www.igac.gov.co/sites/default/files/transparencia/normograma/CONPES%204144%20DE%202025.pdf (30/10/2026).
- **Guía Ética para la Implementación, Desarrollo y Uso de Sistemas de IA en Entidades Públicas** (Presidencia + MinTIC + Minciencias + CRC + DNP; pág. act. 7/1/2026): basada en OCDE, UNESCO, ONU y Alan Turing Institute; caso ilustrativo SIPRICI (priorización de cirugías, basado en NHS); referencia a la Directiva Conjunta 007 sobre transparencia algorítmica (*número/fecha exacta no verificable en fuente primaria: parcialmente verificable*). Fuentes: https://www.mintic.gov.co/portal/inicio/Sala-de-prensa/Noticias/425888:Guia-Etica-para-la-Implementacion-Desarrollo-y-Uso-de-Sistemas-de-Inteligencia-Artificial-en-Entidades-Publicas-de-Colombia (30/10/2026); https://mintic.gov.co/portal/715/articles-425888_recurso_1.pdf (30/10/2026).
- **Usos:** MinTIC implementó **6 modelos de IA/analítica** (9/7/2026): generativa para PQRSD ciudadanos, ~**1.800 comunicaciones diarias** a operadores, análisis geoespacial + IA para alertas tempranas de pequeños ISP: https://www.mintic.gov.co/portal/715/w3-article-439551.html (30/10/2026). Modelos fundacionales soberanos **Chiminigagua** (ambiente) y **Bachué** (salud); plan de **60 microcentros de IA territoriales**: https://mintic.gov.co/portal/715/articles-135840_Informe_de_Gestion_Ministro_Julian_Molina_Gomez_marzo_septiembre_de_2025.pdf (30/10/2026).
- **Formación:** curso "IA para el Sector Público" con UNESCO y U. de los Andes (ago/2025); convenio con U. de Cartagena para **2.700 servidores públicos** (29/8-19/12/2025).
- **Contrapunto:** resultados MinTIC auto-reportados, sin evaluación independiente localizada.

#### 3.3.5 México — vacío federal, innovación subnacional (CDMX)

- **ADVERTENCIA DE VIGENCIA: no existe ley de IA ni estrategia nacional integral a oct/2026** (diagnóstico confirmado por El Economista, 25/7/2025: https://www.eleconomista.com.mx/tecnologia/mexico-necesita-estrategia-nacional-inteligencia-artificial-20250725-769839.html, 30/10/2026).
- Lo que sí hay: **ATDT** (Agencia de Transformación Digital y Telecomunicaciones, 2024) con **Programa Sectorial 2025-2030** (DOF 19/9/2025: https://sidof.segob.gob.mx/notas/5768198, 30/10/2026); **LNIA** (Laboratorio Nacional de IA, anunciado 15/4/2025, ATDT+SECIHTI: https://www.eluniversal.com.mx/nacion/sheinbaum-alista-laboratorio-nacional-de-inteligencia-artificial-gabinete-va-por-incorporacion-de-la-ia/, 30/10/2026); en el Senado, Comisión de IA con plan 2025-2026 hacia una **Ley General de IA** con coordinación explícita con gobiernos estatales y municipales: http://sil.gobernacion.gob.mx/Archivos/Documentos/2025/11/asun_4969335_20251111_1762877302.pdf (30/10/2026).
- **Caso subnacional transferible — CDMX/ADIP:** agencia única creada por ley local (2018-2019); **Llave CDMX** (identidad digital, 100+ servicios, ~5 M usuarios); **desarrollo in-house con propiedad del código y gobernanza de datos** (anti lock-in); chatbots generativos con ODI y Faculty AI (financiados por FCDO de Reino Unido) con marcos de IA responsable y outputs abiertos replicables. Fuentes: https://theodi.org/insights/projects/a-genai-powered-chatbot-for-mexico-city (30/10/2026); https://publications.iadb.org/en/node/35999 (30/10/2026); https://networkcultures.org/blog/2026-06-12/digital-tribulations-20-where-does-mexico-stand-on-digital-sovereignty-interview-with-the-agencia-digital-de-innovacion-publica-adip/ (30/10/2026).
- Cifras de impacto tipo "SAT IA / MXN 18 bn" circulan solo en fuentes secundarias no oficiales → **no verificables en fuente primaria; se omiten**.

#### 3.3.6 Multilaterales (OCDE, BID, CEPAL, SELA, CIPPEC)

- **OCDE — Recommendation on AI (OECD/LEGAL/0449):** adoptada 21-22/5/2019; **definición de sistema de IA actualizada por el Consejo el 8/11/2023**; principios revisados may/2024; **48 países + UE adheridos, incluida Argentina**: https://legalinstruments.oecd.org/en/instruments/oecd-legal-0449 (30/10/2026); memorando de la definición: https://www.oecd.org/content/dam/oecd/en/publications/reports/2024/03/explanatory-memorandum-on-the-updated-oecd-definition-of-an-ai-system%5F3c815e51/623da898-en.pdf (30/10/2026).
- **OCDE — Framework for the Classification of AI Systems** (Digital Economy Papers N°323, 22/2/2022): 5 dimensiones (People & Planet; Economic Context; Data & Input; AI Model; Task & Output), diseñado explícitamente como base para **registros/inventarios de sistemas de IA**, marcos sectoriales y evaluación de riesgo. Es el instrumento más directamente adoptable por una provincia para clasificar y registrar su IA. Fuentes: https://www.oecd.org/en/publications/oecd-framework-for-the-classification-of-ai-systems_cb6d9eca-en.html (30/10/2026); https://oecd.ai/en/classification (30/10/2026).
- **OCDE — "Governing with Artificial Intelligence" (18/9/2025):** análisis de **200 casos de uso en 11 funciones de gobierno** (continuidad de "Hello, World", 2024):
  - 57% automatiza/agiliza/personaliza procesos; 45% apoya decisiones y pronóstico; 30% accountability/detección de anomalías; **solo 4% habilita a actores externos**.
  - Adopción concentrada en servicios públicos, participación cívica y justicia; **alta proporción de pilotos que no escala**; solo **15% de los gobiernos (2023) tenía un marco de inversión en IA**.
  - Barreras transversales: brechas de habilidades, datos, falta de guías accionables, aversión al riesgo y ausencia de medición de ROI.
  - Patrón recomendado: estrategia de gobierno completo + **habilitadores** (datos, habilidades, infraestructura compartida) + **guardarraíles** (reglas, guías, gestión de riesgo) + mecanismos de engagement; gobernanza coherente porque *todos* los casos pueden presentar riesgos si no se diseñan con confiabilidad.
  - Menciona a Argentina por **Prometea** (Ministerio Público Fiscal, CABA) como caso de IA en justicia.
  - Fuentes: https://www.oecd.org/en/publications/governing-with-artificial-intelligence_795de142-en.html (30/10/2026); cap. 2 tendencias: https://www.oecd.org/en/publications/governing-with-artificial-intelligence_795de142-en/full-report/trends-and-early-lessons-from-the-use-of-ai-across-functions-of-government_c4968cb1.html (30/10/2026); cap. 3 desafíos: https://www.oecd.org/en/publications/governing-with-artificial-intelligence_795de142-en/full-report/implementation-challenges-that-hinder-the-strategic-use-of-ai-in-government_05cfe2bb.html (30/10/2026).
- **OCDE/CAF (2022), "Uso estratégico y responsable de la IA en el sector público de América Latina y el Caribe":** el diagnóstico regional de referencia (capacidades, gobernanza, ecosistema de datos): https://doi.org/10.1787/5b189cb4-es (30/10/2026). **CAF (2024), "Diseño de políticas públicas de IA"** — la guía práctica regional.
- **BID — "Inteligencia artificial para Estados más efectivos"** (Naranjo Bautista, Alessandro, Ortiz de Zárate; nov/2025): tres herramientas BID de IA para gestión pública —
  - (1) revisión de estructuras organizativas del Estado con PLN (detección de duplicaciones/vacíos de mandato sobre miles de normas);
  - (2) análisis de portafolios de programas y proyectos (alineación con metas nacionales);
  - (3) aprendizaje institucional (playbooks extraídos de **+1.500 proyectos**).
  - Mensaje central: la IA amplifica capacidad humana pero **depende de definir bien el problema**. Fuente: https://publications.iadb.org/es/inteligencia-artificial-para-estados-mas-efectivos (DOI 10.18235/0013786, 30/10/2026).
- **BID — CT regional RG-T4439** (aprobada 13/6/2024, en implementación): "Acelerar la adopción de la IA en ALC" — sistema de IA para identificar brechas regulatorias de gobierno digital, pilotos y formación de funcionarios: https://www.iadb.org/es/proyecto/RG-T4439 (30/10/2026).
- **BID — Gobernarte 2025**: premiados subnacionales — Observatorio Productivo y de Cambio Climático de **Manabí, Ecuador** (SIG + ML predictivo de series temporales para gestión territorial) y sistema **URANO** de zeladoria urbana predictiva de la **Prefectura de São Paulo**: https://www.iadb.org/es/quienes-somos/temas/modernizacion-del-estado/iniciativas/gobernarte/gobernarte-2025 (30/10/2026).
- **CEPAL — ILIA 2025** (3ª edición, 3/10/2025, con CENIA-Chile; 19 países): ALC = 6,6% del PIB mundial pero **1,12% de la inversión global en IA**; la mayoría de las estrategias nacionales **carece de financiamiento, mecanismos de implementación y evaluación de impacto**. Fuentes: https://www.cepal.org/es/comunicados/america-latina-caribe-acelera-la-adopcion-la-inteligencia-artificial-aunque-desafios (30/10/2026); https://indicelatam.cl/wp-content/uploads/2025/10/Documento_ILIA_2025.pdf (30/10/2026). Conferencia "IA en ALC: retos, estrategias y gobernanza" (4-5/3/2025): https://www.cepal.org/es/comunicados/la-inteligencia-artificial-esta-transformando-al-mundo-america-latina-caribe-puede (30/10/2026). Agenda digital eLAC2026.
- **SELA (sep/2025), "Inteligencia artificial y políticas públicas en ALC":** capítulo específico sobre **"El impacto de la IA en la gestión pública subnacional"** — el estado del arte regional en clave subnacional: https://www.sela.org/wp-content/uploads/2025/09/Inteligencia-artificial-y-politicas-publicas-en-ALC-LIBRO.pdf (30/10/2026).
- **CIPPEC (may/2025), "Guía para el uso de IA en el sector público en Argentina":** dirigida a funcionarios nacionales, **provinciales** y municipales; releva normativa provincial existente (incl. Buenos Aires 2024); propone estrategia provincial participativa, pilotos incrementales con evaluación de impacto previa, gobernanza con responsabilidades definidas e inversión en talento híbrido: https://www.cippec.org/wp-content/uploads/2025/05/Guia-para-el-uso-de-IA-en-el-sector-publico-en-Argentina_2025.pdf (30/10/2026).

**Síntesis América Latina (hechos):** ninguna de las tres grandes economías regionales tiene ley de IA sancionada (Chile en Senado, Brasil trabado en Diputados, México sin estrategia); todas avanzan con instrumentos administrativos (Circular 711, AIE brasileño, Guía Ética colombiana). Uruguay tiene el registro público más transferible (formulario obligatorio + ficha caso por caso). Chile tiene la mejor medición de adopción (61% de funcionarios) y la compra pública más madura (Directiva 44 + IA aplicada a integridad). El dato brasileño (municipios 27% vs federación 70%) confirma que **la escala subnacional es la frontera débil de ALC** — y por tanto la oportunidad de Santa Fe. Los cinco instrumentos regionales citados (framework OCDE, fichas uruguayas, AIE brasileño, Guía Ética colombiana, guía CIPPEC) son públicos, gratuitos y adoptables sin reforma legal.

---

## 4. Qué puede adoptar Santa Fe

**Contexto provincial (del diagnóstico consolidado, corte 23/10/2026):** Ley 13.742/2017 de CyT + ASaCTeI (agencia provincial) + Secretaría CTI; ecosistema CONICET Rosario/Santa Fe + UNR + UNL + UTN + INTA + INTI; Municipalidad de Rosario con régimen de compra pública de innovación (Ord. 10.264/2021, Dec. 507/2022, Dec. 274/2026), analítica de video con IA en 600 cámaras sin evaluación pública localizada y ESAM con red formativa en IA (desde oct/2026). Nudos críticos que estas medidas atacan: **#4 gobernanza de IA incompleta** y **#6 riesgo de dependencia de proveedores** (también #1 fragmentación de evidencia y #3 brecha financiamiento-evaluación).

**Aclaración:** todo lo que sigue es **propuesta del eje** (interpretación), no hecho comprobado. Las 8 medidas están priorizadas: las medidas 1-2 son la base de todo lo demás y no requieren ley nueva.

### Agenda mínima de los primeros 100 días (síntesis ejecutiva)

Si el Ejecutivo provincial y el DEM de Rosario decidieran actuar ya, esto es lo alcanzable en un trimestre según los plazos comparados:

1. **Firmar la resolución del registro provincial** (Medida 1) y publicar el formulario estándar de ficha — costo casi nulo, habilita todo lo demás.
2. **Adoptar por decreto el triage de riesgo + AIA** (Medidas 2 y 5) con el cuestionario canadiense adaptado — la herramienta es gratuita y de licencia abierta.
3. **Emitir el instructivo de cláusulas IA para pliegos** (Medida 4), provincia y Rosario en paralelo — las minutas modelo (PPN 02/24, M-25-22, Directiva 44) son públicas.
4. **Lanzar la primera encuesta de adopción** (Medida 7) con el método chileno — la línea de base provincial de adopción hoy no existe.
5. **Enviar la solicitud de información del caso 600 cámaras** (sección 5.5) — cierra el principal vacío fáctico del diagnóstico municipal.

Ninguna de las cinco requiere ley nueva, infraestructura nueva ni crédito externo; todas tienen precedente comparado verificable y documentos fuente reutilizables.

---

### Medida 1 — Registro público provincial de sistemas de IA con ficha estándar

- **Problema comprobado:** el diagnóstico provincial (nudos #1 y #4) constató que "no se localizó un marco transversal público" ni "un inventario público único"; el caso concreto documentado es la analítica de video con IA en 600 cámaras de Rosario (Proyecto de Presupuesto 2025) sin evaluación pública localizada. No se puede gobernar lo que no se conoce.
- **Población y territorio:** toda la administración pública provincial (Poder Ejecutivo, organismos descentralizados) y municipios que adhieran — prioritariamente Rosario y Santa Fe capital; población afectada indirecta: 3,5 M de habitantes.
- **Medida concreta:** resolución de la Secretaría CTI + ASaCTeI que instruya a todo organismo a reportar sus sistemas de IA (comprados o desarrollados, en producción o piloto) con **ficha estándar** basada en el OECD AI Systems Classification Framework (5 dimensiones): problema que resuelve, datos que usa, tecnología/modelo, nivel de riesgo, **¿hay humano en la decisión final?**, proveedor, costo y fecha de puesta en producción. Publicación en CSV abierto en el portal provincial de datos + reporte anual. Alcance obligatorio explícito, excepciones taxativas (seguridad provincial crítica con protocolo reservado) y verificación activa — la lección del PLP británico es que sin esto el registro queda incompleto justo en los sistemas de mayor riesgo.
- **Nivel competente:** provincial (ASaCTeI como custodio, Secretaría CTI como autoridad); municipal Rosario por adhesión vía ordenanza/decreto (puede anclarse en la Ord. 10.264 y en Open Data Rosario, Ord. 9.279/2014).
- **Costo y financiamiento:** bajo — formulario web + curaduría de fichas; estimado 1-2 cargos técnicos equivalentes + uso del portal de datos existente. Financiable con presupuesto corriente de ASaCTeI; sin necesidad de crédito externo. (Comparación: Uruguay lo hizo con formulario obligatorio a 60 organismos dentro de su plan de gobierno abierto.)
- **Plazo:** **corto (≤100 días)** para la resolución y el formulario; primer relevamiento completo en 6-12 meses.
- **Indicador público de resultado:** N° de sistemas registrados / N° de organismos que reportan; % de sistemas con ficha completa; tiempo desde la resolución hasta la primera publicación. Meta año 1: 100% de jurisdicciones provinciales reportando (contra-ejemplo uruguayo: solo 22 de 60 respondieron en la primera ronda — anticipar la resistencia).
- **Riesgos y dependencias:** sub-reporte y fichas de mala calidad (mitigar con verificación activa y responsable designado por organismo — figura "Chief AI Officer" por jurisdicción, modelo M-25-21 EE.UU.); uso cosmético del registro sin consecuencias; dependencia de la voluntad política del Ejecutivo provincial. **Vínculo con nudos críticos: cierra directamente #4 (sin registro no hay marco transversal posible) y habilita #6 (el campo "proveedor/costos de salida" del registro es el primer mapa de dependencias).**
- **Modelo tomado de:**
  - Uruguay — Observatorio de IA en el Estado (formulario obligatorio a 60 organismos; 27 casos con fichas públicas, campo explícito de revisión humana): https://www.gub.uy/agencia-gobierno-electronico-sociedad-informacion-conocimiento/comunicacion/publicaciones/relevamiento-casos-uso-aplicacion-inteligencia-artificial-estado-2 (30/10/2026).
  - Reino Unido — ATRS obligatorio desde 2024 con 155 registros al 30/10/2026: https://www.gov.uk/algorithmic-transparency-records (30/10/2026), y su contrapunto crítico PLP: https://publiclawproject.org.uk/resources/ai-in-public-body-decision-making (30/10/2026).
  - Complemento — OECD Classification Framework (base de campos de la ficha): https://oecd.ai/en/classification (30/10/2026).

---

### Medida 2 — Clasificación de riesgo + evaluación de impacto proporcional por decreto/resolución, sin esperar ley nacional

- **Problema comprobado:** nudo #4 del diagnóstico: "no se localizó un marco transversal público de evaluación de riesgos, auditoría y revisión humana para toda adopción estatal". Argentina no tiene ley nacional de IA sancionada; Chile y Brasil demuestran que igual se puede avanzar con instrumentos administrativos (Circular 711, AIE del NIA).
- **Población y territorio:** todo sistema de IA que decida, priorice o afecte derechos de ciudadanos santafesinos (beneficios sociales, salud, educación, seguridad, empleo público, tributario); provincia + municipios adheridos.
- **Medida concreta:** decreto provincial (o resolución conjunta Secretaría CTI + ASaCTeI si se prefiere menor rango) que adopte el **cuestionario AIA canadiense** (herramienta abierta con open license: 65 preguntas de riesgo + 41 de mitigación, niveles I-IV) adaptado localmente, con obligaciones escalonadas: **nivel I-II** → registro simple + aviso en lenguaje claro; **nivel III-IV** (sistemas que afectan derechos, incluida videovigilancia con analítica biométrica/conductual) → **evaluación de impacto publicada ANTES de la puesta en producción**, revisión externa (universidades/CONICET como pares), supervisión humana obligatoria documentada, recurso del ciudadano y auditoría periódica. Anclaje legal: Ley 13.742 (ASaCTeI como autoridad de articulación) + normativa de acceso a la información y protección de datos.
- **Nivel competente:** provincial (decreto del Poder Ejecutivo; ASaCTeI administra el instrumento y mantiene la guía); municipal Rosario puede replicar por decreto del DEM con su propia normativa.
- **Costo y financiamiento:** muy bajo en lo normativo (la AIA es gratuita y reutilizable); costo operativo de las evaluaciones nivel III-IV: convenios con UNR/UNL/UTN/CONICET (capacidad ya existente en el ecosistema) — financiable con partidas CTI corrientes y, eventualmente, cooperación BID/CAF (CT RG-T4439 de adopción de IA en ALC).
- **Plazo:** **corto (≤100 días)** para el instrumento normativo y la guía; aplicación plena a sistemas nuevos en 6 meses; legacy en 18-24 meses (modelo canadiense: sistemas preexistentes con plazo hasta 12 meses tras la revisión de la directiva).
- **Indicador público de resultado:** N° de evaluaciones de impacto publicadas; % de sistemas nivel III-IV con evaluación previa a producción; tiempo medio de tramitación de una evaluación (para evitar que el guardarraíl se vuelva cuello de botella).
- **Riesgos y dependencias:** "design-reality gap" canadiense — evaluaciones pro-forma con sesgo pro-eficiencia y sin mirada de derechos; mitigar con revisión externa obligatoria desde nivel III y publicación íntegra (no solo el resultado); riesgo de parálisis administrativa — mitigar con la exención de responsabilidad funcional coreana (Art. 16(3) AI Basic Act) para funcionarios que cumplen el procedimiento de buena fe; dependencia de que el Ejecutivo firme el decreto. **Vínculo con nudos críticos: es LA respuesta directa al nudo #4.**
- **Modelo tomado de:**
  - Canadá — Directive on ADM + AIA (niveles I-IV, peer review publicado, intervención humana obligatoria III-IV): https://www.tbs-sct.canada.ca/pol/doc-eng.aspx?id=32592 y https://www.canada.ca/en/government/system/digital-government/digital-government-innovations/responsible-use-ai/algorithmic-impact-assessment.html (30/10/2026), con su contrapunto: https://link.springer.com/10.1007/s44206-025-00221-7 (30/10/2026).
  - OCDE — framework de clasificación y "Governing with AI" (2025): https://www.oecd.org/en/publications/governing-with-artificial-intelligence_795de142-en.html (30/10/2026).
  - Brasil — AIE del NIA como instrumento administrativo sin ley: https://www.gov.br/governodigital/pt-br/infraestrutura-nacional-de-dados/inteligencia-artificial-1 (30/10/2026).
  - Corea — exención de responsabilidad funcional (Art. 16(3)): https://www.msit.go.kr/eng/bbs/view.do?bbsSeqNo=42&mId=4&mPid=2&nttSeqNo=1264&sCode=eng (30/10/2026).
  - Argentina — guía CIPPEC para provincias: https://www.cippec.org/wp-content/uploads/2025/05/Guia-para-el-uso-de-IA-en-el-sector-publico-en-Argentina_2025.pdf (30/10/2026).

---

### Medida 3 — Plataforma/node provincial compartido de IA para provincia y municipios

- **Problema comprobado:** nudo #6 (dependencia de proveedores) + hallazgo OCDE 2025: alta proporción de pilotos que no escala por falta de datos, habilidades e infraestructura compartida; dato brasileño: 165 órganos con infraestructura insuficiente y municipios en 27% de adopción. En Santa Fe, compras dispersas por ministerio/municipio multiplicarían costos de licencia y lock-in (el diagnóstico provincial ya señala la ausencia de base única que conecte capacidades y resultados).
- **Población y territorio:** administración provincial + municipios y comunas (prioridad: Rosario, Santa Fe, Rafaela, Venado Tuerto y municipios medianos); ~40-60 mil empleados públicos alcanzables.
- **Medida concreta:** ASaCTeI (con Secretaría CTI y la secretaría de informática provincial) construye un **node provincial de IA** de tres capas:
  - **(a) Asistente generativo provincial seguro** para funcionarios, con datos que no entrenan modelos de terceros y opción de hospedaje controlado (modelo Pair/NIA: el dato sensible no sale de la infraestructura pública).
  - **(b) Componentes reutilizables**: identidad, logs, enrutamiento, RAG sobre normativa y expedientes, plantillas de evaluación — cualquier organismo los monta en semanas, no en licitaciones de meses.
  - **(c) Catálogo de soluciones** del registro (Medida 1), con reuso obligatorio antes de comprar nuevo.
  - El ecosistema CONICET/UNR/UNL/UTN participa como desarrollador y evaluador. **Antecedente del especialista del eje:** Alejandro Sartorio, como Subsecretario de Innovación Pública de Santa Fe (2023-24), impulsó un **open gateway de IA generativa para expedientes** — antecedente provincial directo de la capa (b), que esta medida retoma y escala (pendiente validar con documentación provincial, sección 6).
- **Nivel competente:** provincial (ASaCTeI como proveedora de la capa común; convenio provincia-municipios para adhesión, con Rosario como primer socio y su infraestructura de datos abiertos como activo).
- **Costo y financiamiento:** medio-alto y escalonado: infraestructura inicial (GPU/on-premise o nube provincial) + equipo núcleo de 8-15 personas. Fuentes plausibles: presupuesto CTI provincial (ejecución 2025 informada: $8.142 M en políticas CTI), fondos federales de innovación, crédito BID (patrón Regional RG-T4439 / operaciones subnacionales), RRF-style no aplica pero sí cooperación CAF/BID. Comparación de costo unitario: Bürokratt cuesta ~€150/mes por organismo adherido sobre State Cloud — la arquitectura compartida es más barata que N proyectos aislados.
- **Plazo:** **mediano (1-2 años)**: MVP del asistente + 3 componentes reutilizables en 12 meses; catálogo y adhesión municipal en 24 meses. (Componente de largo plazo: modelos propios con universidades, 4-8 años, no necesario para arrancar.)
- **Indicador público de resultado:** N° de organismos/municipios usando la plataforma; % de nuevas soluciones de IA montadas sobre componentes comunes (vs. compras aisladas); costo medio por caso de uso; horas de trabajo administrativo ahorradas **auditadas** (no auto-reportadas — lección Singapur/Estonia).
- **Riesgos y dependencias:** que la plataforma sea otro piloto que no escala (mitigar: presupuesto plurianual comprometido y clientes internos desde el día 1); captura por un proveedor único (mitigar: componentes open source, modelos intercambiables, cláusulas de salida — nudo #6); capacidad técnica insuficiente en municipios chicos (mitigar: soporte centralizado tipo RIA estonia); cambio de gestión política (mitigar: institucionalizar en ASaCTeI por norma, no por programa de gobierno). **Vínculo con nudos críticos: ataca #6 estructuralmente (interoperabilidad, propiedad de datos, costos de salida) y reduce la fragmentación del #1.**
- **Modelo tomado de:**
  - Estonia — Bürokratt (red interoperable open source, ~€150/mes por organismo, 15 org. usuarias + 18 en adopción, €53 M RRF): https://www.kratid.ee/en/burokratt (30/10/2026).
  - Brasil — NIA (182 soluciones sobre infraestructura común; plataforma centralizada prevista 2026): https://www.gov.br/governodigital/pt-br/infraestrutura-nacional-de-dados/inteligencia-artificial-1 (30/10/2026).
  - Singapur — Pair (~150.000 funcionarios, ~80% de adopción, >31.000 AIBots por no técnicos, datos que no entrenan modelos externos): https://mddi.gov.sg/newsroom/mddi-s-response-to-pq-on-progress-of-adopting-ai-tools-within-public-service (30/10/2026).
  - EE.UU. — GSA USAi.gov como servicio compartido: https://www.gsa.gov/artificial-intelligence/2025-gsa-ai-use-cases (30/10/2026).
  - Complemento soberanía — España, Plataforma soberana de IA y NubeSARA (SEPE): https://digital.gob.es/content/dam/portal-mtdfp/comunicacion/comunicacion_ministro/2026-08-31-08-2026/Atlas%20de%20la%20IA.pdf (30/10/2026).

---

### Medida 4 — Cláusulas IA obligatorias en pliegos de compra pública

- **Problema comprobado:** nudo #6 del diagnóstico: "la contratación de sistemas digitales e IA debe registrar propiedad de datos, interoperabilidad, acceso a modelos, seguridad, costos de salida y dependencia de proveedores". Rosario ya tiene el régimen (Ord. 10.264/2021 + Dec. 274/2026) pero sin cláusulas IA específicas localizadas; la provincia sin guía alguna localizada.
- **Población y territorio:** todos los proveedores del Estado provincial y municipal; territorio: provincia + Rosario (extensible a compras conjuntas con municipios).
- **Medida concreta:** instructivo conjunto (provincia: Secretaría CTI + organismo de contrataciones; Rosario: dentro del régimen de la Ord. 10.264) que incorpore a todo pliego que involucre IA:
  1. **Declaración de uso de IA en la elaboración de la oferta** y prohibición de entrenar IA del proveedor con información confidencial del organismo (PPN 02/24 UK).
  2. **Clasificación de riesgo del sistema ofertado** según el instrumento de la Medida 2, previa a la adjudicación.
  3. **Titularidad pública de datos y mejoras de datos** + prohibición de entrenar modelos comerciales del proveedor con datos públicos sin permiso expreso (M-25-22).
  4. **Documentación del modelo**, procedencia de datos de entrenamiento, explicabilidad y **derechos de auditoría**.
  5. **Pilotos de 60-90 días antes de contratos plurianuales** y renovación por metas medibles.
  6. **Costos y plan de salida ordenada** (anti lock-in).
  7. **Ficha del registro (Medida 1) como condición de adjudicación y de pago.**
  - Complemento de política productiva (modelo coreano Art. 16(3)): puntuación favorable a soluciones desarrolladas con el ecosistema CyT santafesino — articulable con Ley 13.742.
- **Nivel competente:** provincial (instructivo del Ejecutivo para su administración central y descentralizada) **y** municipal Rosario (reglamentación ad hoc de la Ord. 10.264 — Rosario es la jurisdicción con el régimen de compra pública de innovación más avanzado del país y el lugar natural del piloto).
- **Costo y financiamiento:** bajo — redacción normativa + capacitación de compradores; sin costo incremental de infraestructura. Financiable con presupuesto corriente; apoyo técnico gratuito disponible (guías UK, M-25-22, Directiva ChileCompra 44 son públicas).
- **Plazo:** **corto (≤100 días)** para el instructivo provincial y la reglamentación rosarina; aplicación obligatoria a licitaciones nuevas desde el ejercicio siguiente.
- **Indicador público de resultado:** % de licitaciones con componentes de IA que incluyen las 7 cláusulas; N° de contratos con derechos de auditoría ejercidos efectivamente; N° de pilotos previos a contratos plurianuales; reducción de renovaciones automáticas sin evaluación.
- **Riesgos y dependencias:** resistencia del área de compras y de proveedores; cláusulas que encarezcan ofertas (mitigar: proporcionalidad — solo donde hay IA); dependencia de que los organismos detecten que están comprando IA (mitigar: definición OCDE 2023 incorporada al instructivo). **Vínculo con nudos críticos: es la ejecución contractual del nudo #6 y refuerza #4 (la evaluación de riesgo previa a adjudicación).**
- **Modelo tomado de:**
  - Reino Unido — PPN 02/24 (y PPN 01/25): https://www.gov.uk/government/publications/ppn-0224-improving-transparency-of-ai-use-in-procurement/ppn-0224-improving-transparency-of-ai-use-in-procurement-html (30/10/2026).
  - EE.UU. — OMB M-25-22: https://www.whitehouse.gov/releases/2025/04/white-house-releases-new-policies-on-federal-agency-ai-use-and-procurement/ (30/10/2026).
  - Chile — Directiva ChileCompra N°44: https://www.chilecompra.cl/2025/06/chilecompra-expuso-sobre-uso-de-inteligencia-artificial-en-compras-publicas (30/10/2026).
  - Corea — Art. 16(3) prioridad de compra: https://www.trade.gov/market-intelligence/south-korea-ai-basic-act (30/10/2026).
  - CDMX/ADIP — propiedad del código in-house: https://publications.iadb.org/en/node/35999 (30/10/2026).
  - Anclaje local — Ord. 10.264/2021 y Dec. 274/2026 Rosario: https://www.rosario.gob.ar/normativa/ver/documento.do?accion=getPdf&id=2215&modo=attachment (23/10/2026, diagnóstico Eje 9).

---

### Medida 5 — Supervisión humana por diseño: la IA provincial nunca rechaza derechos

- **Problema comprobado:** nudo #4 (sin marco de revisión humana) y el caso documentado de analítica de video en Rosario sin evaluación pública localizada. Riesgo jurídico y de derechos: decisiones automatizadas adversas sin responsable humano identificable ni recurso.
- **Población y territorio:** toda persona que tramita un derecho ante la provincia o el municipio (beneficios, licencias, salud, empleo, subsidios); empleados públicos que operan los sistemas; todo el territorio provincial.
- **Medida concreta:** regla transversal por decreto/resolución (integrada al instrumento de la Medida 2): **(a)** ningún sistema de IA estatal puede rechazar ni recomendar el rechazo de un derecho, beneficio o solicitud — solo automatizar determinaciones favorables o de enrutamiento/priorización con decisión final humana (práctica IRCC verificada); **(b)** en niveles III-IV, decisión final siempre de un funcionario humano identificado, con entrenamiento contra sesgo de automatización y registro de su intervención (logs); **(c)** aviso en lenguaje claro al ciudadano cuando un sistema de IA participa en su trámite + explicación publicada + canal de recurso/revisión humana; **(d)** prohibición expresa de prácticas de riesgo inaceptable (alineado AI Act arts. 5 y scoring social). Para priorización/segmentación no decisoria (p. ej. asignación de turnos), se permite con evaluación de impacto y monitoreo de sesgos.
- **Nivel competente:** provincial (decreto o resolución conjunta Secretaría CTI + Ministerio de Gobierno/Justicia); municipal Rosario por decreto del DEM; aplicable también como cláusula contractual (Medida 4).
- **Costo y financiamiento:** bajo — es principalmente diseño normativo y de proceso; costo operativo de mantener capacidad humana decisoria (que ya existe).
- **Plazo:** **corto (≤100 días)** para la norma; adecuación de sistemas en producción en 12-18 meses.
- **Indicador público de resultado:** % de sistemas nivel III-IV con decisión final humana documentada; N° de recursos/revisiones humanas solicitadas y resueltas; 0 decisiones adversas automatizadas (indicador binario verificable en auditoría).
- **Riesgos y dependencias:** "humano decorativo" (rubber-stamping) — mitigar con entrenamiento explícito contra sesgo de automatización y métricas de modificaciones humanas a recomendaciones; sobrecarga del personal si la IA solo acelera lo favorable — dimensionar en la medición de la Medida 7. **Vínculo con nudos críticos: núcleo del nudo #4.**
- **Modelo tomado de:**
  - Canadá — IRCC (ningún sistema rechaza ni recomienda rechazar; oficiales humanos con entrenamiento anti-sesgo; intervención humana obligatoria niveles III-IV de la Directiva): https://open.canada.ca/data/dataset/452e10be-383d-4d7a-9c7d-6484dc366a4a y https://www.tbs-sct.canada.ca/pol/doc-eng.aspx?id=32592 (30/10/2026).
  - Corea del Sur — supervisión humana obligatoria en alto impacto: https://cset.georgetown.edu/publication/south-korea-ai-law-2025 (30/10/2026).
  - UE — art. 26 AI Act + prohibiciones del art. 5: https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai (30/10/2026).
  - Reino Unido — principio de control humano significativo del AI Playbook: https://www.gov.uk/government/publications/ai-playbook-for-the-uk-government/artificial-intelligence-playbook-for-the-uk-government-html (30/10/2026).

---

### Medida 6 — Alfabetización obligatoria en IA y formación por perfiles con las universidades

- **Problema comprobado:** diagnóstico provincial: "hay experiencias y formación, pero no se localizó un marco transversal" (nudo #4); dato chileno: 61% de funcionarios ya usa IA (el doble que en 2023) — la **"IA en la sombra"** existe con o sin política, lo que hace que formar y encauzar no sea opcional. Rosario ya tiene la red formativa ESAM (oct/2026) pero sin equivalente provincial localizado.
- **Población y territorio:** todos los empleados públicos provinciales y municipales (objetivo inicial: funcionarios con poder de compra, gestores de proyectos de datos/IA, alta dirección; luego universal); provincia + Rosario, con modalidad híbrida para nodos territoriales.
- **Medida concreta:** programa provincial por **tres perfiles**: (1) **usuario general** — curso de alfabetización obligatorio (contenido mínimo alineado al art. 4 del AI Act: capacidades, limitaciones, riesgos, uso responsable de herramientas generativas, datos personales) como condición del legajo; (2) **gestor de proyectos de IA** — formación aplicada con casos reales de la administración (usa los sistemas del registro de la Medida 1 como material); (3) **auditor/evaluador de IA** — formación avanzada para los equipos de ASaCTeI, organismos de control y universidades. Ejecución en red con **UNR, UNL, UTN, CONICET** (capacidad ya instalada: CIFASIS, IRICE, ISHIR, etc.) + ESAM en Rosario. Certificación por competencias (referencia: perfiles ChileValora).
- **Nivel competente:** provincial (Secretaría CTI + ASaCTeI + escuela de administración provincial; convenio con universidades); municipal Rosario (ESAM ya en marcha — extender obligatoriedad por perfiles).
- **Costo y financiamiento:** medio-bajo: las universidades públicas y CONICET tienen la capacidad; costo principal es desarrollo de contenidos y horas de personal. Financiamiento: partidas de formación corrientes + convocatorias ASaCTeI + cooperación (CAF/BID, programa RG-T4439 incluye formación de funcionarios). Referencias de escala: Uruguay formó 1.543 funcionarios en 4 años; Colombia 2.700 en un cuatrimestre con universidad; Brasil se fijó meta de 115.000.
- **Plazo:** perfil 1 obligatorio en **mediano (1-2 años)** (primer cohorte ≤100 días vía ESAM/provincial); perfiles 2-3 en marcha en 12 meses.
- **Indicador público de resultado:** % de empleados públicos con alfabetización certificada (por perfil); N° de gestores y auditores formados; incorporación del curso al legajo/escalafón como requisito.
- **Riesgos y dependencias:** formación decorativa sin cambio de prácticas (mitigar: vincular a las Medidas 1-2 — el gestor formado es el que llena bien la ficha y la AIA); rotación de personal; resistencia gremial si se percibe como condicionante punitivo (mitigar: acuerdo paritario, formato incentivo de carrera). **Vínculo con nudos críticos: habilitador transversal del #4; la formación en cláusulas contractuales habilita el #6.**
- **Modelo tomado de:**
  - Singapur — curso obligatorio de alfabetización para los ~150.000 funcionarios desde oct/2024 + Prompt Royale: https://htx.gov.sg/whats-happening/all-news---events/all-news/2025/htx-officers-put-genai-to-the-test-at-prompt-royale-2025 (30/10/2026).
  - Corea — formación obligatoria + 20.000 especialistas hacia 2030: https://koreaherald.com/article/10851767 (30/10/2026).
  - Chile — perfiles ChileValora + becas SENCE: https://www.minciencia.gob.cl/noticias/la-inteligencia-artificial-entra-al-catalogo-de-chilevalora-con-5-perfiles-propuestos-por-el-ministerio-de-ciencia (30/10/2026).
  - UE — art. 4 AI Act (alfabetización obligatoria desde 2/2/2025): https://ai-act-service-desk.ec.europa.eu/en/ai-act/timeline/timeline-implementation-eu-ai-act (30/10/2026).
  - Anclaje local — red formativa ESAM Rosario: https://www.rosario.gob.ar/inicio/inscripcion-los-seminarios-de-actualizacion-para-el-personal-municipal (23/10/2026, diagnóstico Eje 9).

---

### Medida 7 — Medición anual de adopción real de IA en el empleo público provincial

- **Problema comprobado:** nudo #3 del diagnóstico (brecha entre financiamiento y evaluación: "existen instrumentos y montos relevantes, pero falta publicar resultados comparables"); sin línea de base de adopción no se puede diseñar política — y la evidencia comparada muestra que el relato oficial tiende a inflar (Estonia: 130 "soluciones" que la auditoría redujo a ~30 genuinas; Singapur: ahorros auto-reportados sin auditoría).
- **Población y territorio:** empleados públicos provinciales y municipales (encuesta censal o muestral representativa por jurisdicción); publicación abierta provincial.
- **Medida concreta:** **encuesta anual de uso de IA en la administración pública santafesina** (modelo Encuesta Nacional de Funcionarios Públicos de Chile): qué herramientas se usan (incluidas las no autorizadas — "shadow AI"), para qué tareas, horas estimadas ahorradas, capacitación recibida, percepciones de riesgo y confianza; + panel público de indicadores del registro (Medida 1) con casos en producción vs. pilotos, y resultados declarados vs. auditados por proyecto. Publicación anual obligatoria con ficha técnica completa.
- **Nivel competente:** provincial (ASaCTeI/Secretaría CTI + IPEC u organismo estadístico provincial para la calidad metodológica); Rosario puede adherir su universo municipal (la ESAM y su área de datos como contraparte).
- **Costo y financiamiento:** bajo — encuesta digital a ~40-60 mil agentes con tasa de respuesta objetivo >30% (Chile logró 32.168 respuestas en 126 servicios). Financiamiento corriente; posible apoyo CEPAL/CENIA (ILIA tiene metodología subnacional aplicable) o BID.
- **Plazo:** **corto-mediano:** primera encuesta a los 100 días de decidida, resultado publicado en el año; periodicidad anual fijada por norma.
- **Indicador público de resultado:** % de funcionarios que declara usar IA (línea de base provincial inexistente hoy); % que usa herramientas no autorizadas (insumo de la Medida 6); N° de casos en producción con métricas ex ante/ex post publicadas; brecha provincia-municipios.
- **Riesgos y dependencias:** baja tasa de respuesta (mitigar: respaldo de la jefatura de gabinete ministerial y difusión por legajo); uso político del número sin análisis (mitigar: ficha técnica y microdatos abiertos donde no haya dato personal); confusión entre auto-reporte y resultado auditado (mitigar: publicar ambas columnas separadas). **Vínculo con nudos críticos: cierra #3 y alimenta #1 (base única de evidencia) y #4 (los sistemas no registrados que aparezcan en la encuesta).**
- **Modelo tomado de:**
  - Chile — Encuesta Nacional de Funcionarios Públicos jun/2025 (61% usa IA, el doble que 2023; 32.168 respondientes): https://www.serviciocivil.cl/noticias/noticias/6-de-cada-10-funcionarias-y-funcionarios-publicos-utilizan-inteligencia-artificial-segun-encuesta-nacional-2025/ (30/10/2026).
  - Brasil — TIC Governo 2025 (59% federales/estaduales, 27% municipios): https://cgi.br/media/docs/publicaciones/6/en-us/20260429153057/psi_a18_n1_data-governance-and-ai.pdf (30/10/2026).
  - Reino Unido — State of Digital Government Review (8% con beneficios medibles): https://www.gov.uk/government/publications/state-of-digital-government-review/state-of-digital-government-review (30/10/2026).

---

### Medida 8 — Auditoría externa del portfolio de IA provincial

- **Problema comprobado:** nudo #3 (sin evaluación de resultados) y nudo #4 (sin auditoría); la lección estonia es contundente: sin control externo, el listado oficial de soluciones divergió de la realidad (130 declaradas vs. ~30 genuinas, mayoría en testing sin ahorros, dependencia de fondos externos no declarada, roadmap de nube incumplido).
- **Población y territorio:** todo el portfolio de sistemas de IA del Estado provincial y de los municipios adheridos (registro de la Medida 1 como universo auditado); publicación de informes.
- **Medida concreta:** **(a)** encargar a la **Auditoría General de la Provincia** (o el órgano de control externo competente) una auditoría anual de desempeño del portfolio de IA: existencia real de los sistemas declarados, resultados medidos vs. prometidos, cumplimiento del marco de riesgo (Medidas 2 y 5), cláusulas contractuales (Medida 4) y costos totales incluyendo mantenimiento post-proyecto; **(b)** adoptar como referencia técnica el estándar estonio **E-ISS APP.EE.2** (22 medidas obligatorias de validación de modelos, gestión de incidentes y datos confidenciales); **(c)** exigir **métricas ex ante y ex post por proyecto** como condición de financiamiento de ASaCTeI y de renovación contractual; **(d)** participación del ecosistema académico (UNR/UNL/CONICET) como revisor par de los sistemas nivel III-IV (modelo peer review canadiense). Publicación íntegra de los informes.
- **Nivel competente:** provincial (órgano de control externo + Legislatura como destinataria; ASaCTeI como auditada y como exigente de métricas a proyectos financiados); municipal Rosario con su órgano de control (Tribunal Municipal de Cuentas) para su portfolio, incluida la analítica de video.
- **Costo y financiamiento:** bajo-medio: la auditoría se ejecuta con personal del órgano de control + convenio académico para la revisión técnica especializada; sin infraestructura nueva. Referencia: la auditoría EUROSAI de 12 entidades de control (completada a inicios de 2026) muestra que es práctica estandarizable entre órganos de control.
- **Plazo:** **mediano (1-2 años):** primer informe de auditoría a los 18 meses (necesita el registro de la Medida 1 como insumo); periodicidad anual desde el segundo ciclo. Componente de largo plazo (4-8 años): consolidar capacidad auditora permanente en IA dentro del órgano de control.
- **Indicador público de resultado:** N° de sistemas auditados/año; % de proyectos con métricas ex ante y ex post publicadas; hallazgos por informe y % de recomendaciones implementadas al año siguiente; N° de sistemas discontinuados por falta de resultados (indicador de honestidad del portfolio, no de fracaso).
- **Riesgos y dependencias:** dependencia de la autonomía del órgano de control; auditoría que solo verifica papeles (mitigar: revisión técnica con académicos y pruebas de sistemas); conflicto político con proyectos insignicia (mitigar: el mandato por norma, no por acuerdo ad hoc). **Vínculo con nudos críticos: cierra el ciclo del #4 (auditoría es el componente faltante del "marco transversal de evaluación de riesgos, auditoría y revisión humana" que el diagnóstico señala como inexistente) y verifica el #6 (costos de salida y dependencia auditados).**
- **Modelo tomado de:**
  - Estonia — auditoría Riigikontroll abr/2026 (130 soluciones vs. ~30 genuinas; E-ISS APP.EE.2; auditoría conjunta EUROSAI): https://riigikontroll.ee/sites/default/files/documents/2026-04/KA_80157_Overview%20of%20the%20development%20of%20AI%20solutions%20in%20public%20sector%20organisations_2025_1.pdf (30/10/2026).
  - EE.UU. — GAO sobre cumplimiento de estrategias y contratos de IA: https://files.gao.gov/reports/GAO-25-107933/index.html (30/10/2026).
  - Canadá — peer review obligatorio publicado desde nivel II: https://www.canada.ca/en/government/system/digital-government/digital-government-innovations/responsible-use-ai/automated-decision-making/guide-peer-review-automated-decision-systems.html (30/10/2026).

---

### Priorización y secuencia sugerida

| Prioridad | Medida | Plazo | Costo | Nudos que ataca |
|---|---|---|---|---|
| 1 | M1 Registro público con ficha estándar | ≤100 días | Bajo | #4, #1, habilita #6 |
| 2 | M2 Clasificación de riesgo + AIA por decreto | ≤100 días (norma) | Muy bajo | #4 |
| 3 | M4 Cláusulas IA en pliegos (provincia + Rosario) | ≤100 días | Bajo | #6, #4 |
| 4 | M5 Supervisión humana por diseño | ≤100 días (norma) | Bajo | #4 |
| 5 | M7 Encuesta anual de adopción | Primera en ~100 días | Bajo | #3, #1 |
| 6 | M6 Alfabetización obligatoria + perfiles | 1-2 años | Medio-bajo | #4, #6 |
| 7 | M8 Auditoría externa del portfolio | 1-2 años | Bajo-medio | #4, #3, #6 |
| 8 | M3 Plataforma/node provincial compartido | 1-2 años (MVP) | Medio-alto | #6, #1 |

- **Secuencia lógica:** M1 da el mapa; M2/M5 dan la regla; M4 la hace cumplir en la compra; M7 mide la realidad; M8 la audita; M6 construye la capacidad; M3 escala la infraestructura. Las cinco primeras son de bajo costo y no requieren ley nueva: decreto/resolución del Ejecutivo provincial + reglamentación municipal rosarina.
- **Interpretación del eje (no hecho comprobado):** para una provincia de 3,5 M de habitantes con agencia de CyT propia y ecosistema científico denso, la ventana de oportunidad 2026-2027 es adoptar el marco administrativo completo antes de que una ley nacional (si llega) fije pisos distintos — los instrumentos comparados citados son públicos, gratuitos y reutilizables (AIA canadiense con open license, fichas uruguayas, framework OCDE, guías CIPPEC/CAF).

### Matriz medidas × nudos críticos del diagnóstico provincial

| Medida | Nudo #1 fragmentación | Nudo #3 financiamiento-evaluación | Nudo #4 gobernanza IA | Nudo #6 dependencia proveedores |
|---|:-:|:-:|:-:|:-:|
| M1 Registro público | ● directo | ○ | ● directo | ○ habilita (campo proveedor/salida) |
| M2 Clasificación de riesgo + AIA | | ○ | ● directo | ○ (evaluación previa a licitar) |
| M3 Plataforma/node compartido | ○ (catálogo) | ○ | ○ | ● directo |
| M4 Cláusulas IA en pliegos | | | ○ (evaluación pre-adjudicación) | ● directo |
| M5 Supervisión humana por diseño | | | ● directo | |
| M6 Alfabetización y perfiles | | | ○ habilitador | ○ (formación en cláusulas) |
| M7 Encuesta anual de adopción | ● (base única) | ● directo | ○ (detecta sistemas no registrados) | |
| M8 Auditoría externa del portfolio | | ● directo | ● directo | ● (costos de salida auditados) |

● = ataque directo al nudo; ○ = contribución indirecta/habilitadora.

### Lo que NO hay que copiar (contra-lecciones verificadas en las fuentes)

- **Registro voluntario o sin verificación** (Reino Unido): el ATRS es obligatorio desde 2024, pero el relevamiento del PLP (oct/2026) mostró que los sistemas de mayor riesgo son los que faltan — la adhesión sin alcance explícito, excepciones taxativas y verificación activa no funciona.
- **Contar soluciones en vez de medir resultados** (Estonia): el listado oficial de 130 "soluciones de IA" se desinfló a ~30 genuinas bajo auditoría, la mayoría aún en testing sin ahorros — el indicador "cantidad de sistemas" es vanidoso y engañoso.
- **Aceptar ahorros auto-reportados** (Singapur): el ~46% de ahorro de tiempo de Pair es auto-reporte de funcionarios sin auditoría externa publicada — toda métrica de beneficio debe distinguirse entre declarada y auditada.
- **Evaluaciones de impacto pro-forma** (Canadá): el "design-reality gap" documentó compliance desigual y sesgo pro-eficiencia en las AIA publicadas — la evaluación necesita revisión externa y publicidad íntegra.
- **Triunfalismo de cartera** (Reino Unido): solo el 8% de los proyectos de IA mostró beneficios medibles — planificar asumiendo que la mayoría de los pilotos no escalará (hallazgo OCDE coincidente) y prever discontinuación ordenada.
- **Esperar la ley nacional** (Chile, Brasil, México): tres años de trámite sin ley sancionada mientras los instrumentos administrativos (Circular 711, AIE, Guía Ética) sí avanzaron — la provincia no debe condicionar su marco a la legislación nacional.
- **Volatilidad por cambio de signo político** (EE.UU.): el marco federal cambió dos veces en 24 meses (M-24-10 → M-25-21) — anclar el marco santafesino en normas e instituciones estables (Ley 13.742, ASaCTeI), no en programas de gestión.

---

## 5. Aplicación al caso analítica de video Rosario (600 cámaras)

**Hechos comprobados (del diagnóstico provincial, corte 23/10/2026):** el proyecto de Presupuesto Rosario 2025 describe el despliegue de 600 cámaras de alta resolución con analítica de video basada en IA (proyecto iniciado en 2023, continuidad prevista en presupuesto 2025); fuente: https://www.rosario.gob.ar/inicio/sites/default/files/2025-01/Proyecto%20Presupuesto%202025.pdf (23/10/2026). Estado: **"sin evaluación pública integral localizada en esta primera ronda"**. No se afirma nada más sobre el sistema: alcance real, tecnología, proveedores, resultados y salvaguardas son materia a verificar, no hechos establecidos.

**Propuesta del eje:** usar los marcos comparados como **checklist de lo que debería publicarse y evaluarse** para un sistema de este tipo. La analítica de video sobre espacio público con IA toca biometría/seguridad, que en los tres marcos de referencia cae en la categoría de mayor exigencia:

### 5.1 Checklist según la Directive on ADM canadiense (AIA nivel III-IV probable)

Un sistema de videovigilancia con analítica que afecte derechos sería, por análogo con el marco canadiense, nivel III-IV (derechos, reversibilidad baja, datos sensibles). Debería existir y ser público:

- [ ] **AIA completa publicada antes de la producción** (o republicada ahora si el sistema ya opera): las 65 preguntas de riesgo y 41 de mitigación respondidas — https://www.canada.ca/en/government/system/digital-government/digital-government-innovations/responsible-use-ai/algorithmic-impact-assessment.html (30/10/2026).
- [ ] **Peer review externo publicado** (obligatorio desde nivel II en Canadá) — quién revisó el sistema, con qué independencia, qué halló.
- [ ] **Aviso en lenguaje claro** a la ciudadanía: que hay analítica de IA, con qué finalidad, en qué zonas.
- [ ] **Explicación pública del funcionamiento**: qué detecta, qué no detecta, tasas de error conocidas, qué pasa con las falsas detecciones.
- [ ] **Intervención humana obligatoria documentada**: ninguna consecuencia adversa para una persona (demora, identificación, sanción) sin decisión de un funcionario humano identificado.
- [ ] **Recurso/revisión para el ciudadano** afectado por una detección o identificación.
- [ ] **Publicación anual de eficiencia y efectividad**: métricas reales del sistema (no solo cantidad de cámaras).
- [ ] Si el sistema fue **contratado**: la AIA aplica igual (la directiva canadiense cubre sistemas "desarrollados o contratados") — el municipio debe poder exhibirla aunque la haya hecho el proveedor.

### 5.2 Checklist según el AI Act de la UE (alto riesgo Anexo III)

La videovigilancia con IA y los usos biométricos en espacio público están entre las categorías más reguladas del Anexo III (y algunas prácticas de identificación biométrica remota están directamente prohibidas en el art. 5). Aunque Santa Fe no está sujeta al AI Act, su checklist es el estándar de referencia más exigente y relevante si Rosario aspira a homologar prácticas con estándares internacionales (y para proveedores que exporten a la UE):

- [ ] **Verificación de prohibiciones (art. 5):** confirmar y documentar públicamente que el sistema NO realiza scoring social, identificación biométrica remota en tiempo real en espacio público con fines de seguridad fuera de excepciones legales estrictas, ni reconocimiento de emociones en los términos prohibidos.
- [ ] **Evaluación de impacto en derechos fundamentales (FRIA, art. 27):** obligatoria para autoridades públicas con IA de alto riesgo — equivalente a la AIA canadiense.
- [ ] **Supervisión humana efectiva + monitoreo + calidad de datos de entrada + logs** (art. 26): quién supervisa, cómo se monitorea la deriva del modelo, qué calidad tienen los datos de entrenamiento (sesgos por tono de piel, género, edad en reconocimiento/analítica de imágenes son el riesgo documentado del dominio).
- [ ] **Registro en base de datos pública** (arts. 49(2) y 71): ficha del sistema accesible.
- [ ] **Transparencia hacia las personas** (art. 50): información de que interactúan con/son analizadas por IA.
- [ ] **Alfabetización del personal que opera el sistema** (art. 4, vigente desde 2/2/2025).

### 5.3 Checklist según el ATRS del Reino Unido (ficha mínima de transparencia)

Lo mínimo publicable sin comprometer la seguridad operativa (el ATRS tiene un régimen de excepciones taxativas — seguridad nacional/policía con salvaguardas, que es exactamente el debate que Rosario debería dar públicamente):

- [ ] **Propósito del sistema** y problema público que busca resolver.
- [ ] **Datos que utiliza** (fuentes de video, metadatos, cruce con otras bases).
- [ ] **Tecnología y proveedor** (o declaración de desarrollo in-house), incluyendo si hay modelos de terceros.
- [ ] **Responsable humano** del sistema dentro del organismo.
- [ ] **Cómo influye en las decisiones** y qué decisiones quedan reservadas a humanos.
- [ ] **Fecha de puesta en producción y evaluaciones realizadas.**

### 5.4 Qué implicaría aplicar el marco propuesto (Medidas 1-2-5-8) al caso

- **Registro (M1):** ficha estándar del sistema en el registro provincial/municipal — hoy no localizada públicamente.
- **Clasificación de riesgo (M2):** la analítica de video con potencial identificación o perfilamiento conductual caería en nivel III-IV del esquema proporcional → evaluación de impacto publicada, revisión externa con universidades locales (UNR/CONICET tienen capacidad en visión por computadora e IRICE/ISHIR en impactos sociales), auditoría periódica.
- **Supervisión humana (M5):** regla explícita de que ninguna detección automática derive por sí sola en consecuencias adversas.
- **Auditoría (M8):** el órgano de control municipal/provincial audita resultados reales vs. los declarados en el presupuesto (eficacia de detección, costos totales, dependencia del proveedor — nudo #6).
- **Contratación (M4):** si hay renovación o ampliación del contrato, las 7 cláusulas de pliego deberían aplicarse (titularidad de datos de video, prohibición de entrenar modelos del proveedor con las imágenes, costos de salida).

**Advertencia metodológica:** todo lo anterior es un checklist normativo-propuesto derivado de marcos comparados; no constituye una afirmación sobre deficiencias concretas del sistema de Rosario, cuya documentación completa (contrato, evaluaciones internas, protocolos) no fue localizada en la primera ronda del diagnóstico y es tarea pendiente del eje (sección 6).

### 5.5 Documentación mínima a solicitar (propuesta del eje)

Para cerrar la verificación del caso sin afirmar hechos no comprobados, el eje debería solicitar —vía acceso a la información pública municipal/provincial— la siguiente documentación, que es exactamente la que los marcos comparados obligan a producir y publicar:

1. Contrato o acto administrativo de adquisición del sistema de analítica de video (proveedor, monto, plazo, garantías).
2. Especificación técnica: qué funciones de analítica se contrataron (detección de eventos, reconocimiento facial, lectura de patentes, análisis conductual) y sobre cuántas de las 600 cámaras operan efectivamente.
3. Evaluación de impacto previa a la puesta en producción (si existe), en cualquier formato.
4. Protocolo de supervisión humana: quién revisa las alertas, con qué formación, y qué decisiones se derivan de ellas.
5. Base legal del tratamiento de imágenes y eventual cruce con otras bases de datos; política de conservación y eliminación de grabaciones.
6. Métricas de eficacia publicadas o internas (detecciones, falsos positivos, resultados operativos).
7. Cláusulas de titularidad de datos de video, prohibición de uso secundario o entrenamiento de modelos del proveedor, y costos de salida.
8. Auditorías internas o externas realizadas desde 2023.

La respuesta (o su ausencia) alimenta directamente el registro propuesto (Medida 1), la clasificación de riesgo (Medida 2) y la auditoría de portfolio (Medida 8), y permite al eje pasar de "sin evaluación pública localizada" a una afirmación documentada sobre el estado real del sistema.

---

## 6. Vacíos y pendientes de verificación

### 6.1 Marcados "sin información pública verificable localizada" en las fuentes comparadas

**Europa:**
1. Estonia — métricas de impacto cuantitativo detalladas de **Bürokratt** (la auditoría Riigikontroll 2026 señala justamente esta carencia).
2. España — **marco específico de compra pública de IA a nivel estatal** (rige la Ley 9/2017 general; no se localizó guía nacional equivalente a la británica).

**Norteamérica y Asia-Pacífico:**
3. Canadá — **programa formal nacional de formación de funcionarios federales en IA** con fuente oficial primaria (existen guías TBS de uso responsable, no un programa obligatorio documentado).
4. Corea del Sur — **registro/inventario público de sistemas de IA del sector público** (el AI Action Plan prevé medidas de transparencia; no se localizó inventario central).

**América Latina:**
5. Uruguay — **normativa específica de compra pública de IA** (sin localizar; rige la estrategia de infraestructura centralizada de la ENIA).
6. Chile — **decreto exacto de actualización de la PNAI** (2024-2025): parcialmente verificable (la actualización y el Plan de Acción constan; el instrumento jurídico preciso no se localizó).
7. Colombia — **número y fecha exactos de la Directiva Conjunta 007** sobre transparencia algorítmica: parcialmente verificable (citada en la Guía Ética; no verificada en fuente primaria).
8. México — cifras de impacto tipo "SAT IA / MXN 18 bn": solo en fuentes secundarias no oficiales; **omitidas** por no verificables.
9. Singapur — cifra de ahorro de tiempo de Pair (~46%): **auto-reportada por funcionarios, sin auditoría externa publicada**.
10. Brasil y Colombia — resultados de NIA (182 soluciones) y MinTIC (6 modelos): **auto-reportados por las agencias, sin evaluación independiente localizada**.

### 6.2 Vacíos y pendientes del caso provincial/municipal (del diagnóstico Eje 9 y de este informe)

11. **Rosario — analítica de video 600 cámaras:** no se localizó evaluación pública integral; pendiente obtener contrato/proveedor, finalidad operativa declarada, protocolos de supervisión humana, evaluaciones internas, métricas de eficacia y costo total. Aplicarle el checklist de la sección 5.
12. **Rosario — organigrama municipal:** asignación orgánica exacta y autoridades vigentes de las áreas de innovación/datos/contratación/formación, a confirmar antes de cerrar la matriz.
13. **Provincia — protocolos internos de IA:** determinar qué protocolos (si existen) regulan evaluación de impacto, auditoría, explicabilidad, revisión humana, adquisición y discontinuidad de sistemas de IA en el Ejecutivo provincial.
14. **Provincia — relevamiento propio de adopción de IA estatal:** distinguir anuncio, piloto, contratación, sistema operativo y evaluación de impacto (pendiente del diagnóstico; la Medida 1 y la Medida 7 lo operacionalizan).
15. **Compra pública de innovación Rosario:** relevar procedimientos iniciados bajo la Ord. 10.264/2021 y Dec. 274/2026 (adjudicaciones, montos, prototipos, resultados).
16. **Serie I+D 2019-2024 Santa Fe** en valores reales + comparación nacional/regional (pendiente del diagnóstico, no resuelta por este informe comparado).
17. **Encuesta de percepción CyT 2023 — extracción completa para Santa Fe** (pendiente del diagnóstico).
18. **Serie oficial consolidada de Rosario ciudad** (I+D, investigadores, adopción empresarial de IA, patentes, exportaciones SBC, empleo tecnológico): no localizada.
19. **Vigencia dinámica a re-verificar antes de publicar** (instrumentos en movimiento al 30/10/2026): tramitación de la ley chilena de IA en el Senado; PL 2338 brasileño en Diputados; eventual reimpulso de la ley orgánica española caducada (6/10/2026); Ley General de IA mexicana en el Senado; reglamentación del Digital Omnibus UE y posibles nuevos corrimientos del calendario AI Act; registro de agentes autónomos de Singapur (anunciado jun/2026, fuente secundaria); cumplimiento de la acción N°87 de Chile (registro de algoritmos públicos, plazo dic/2026); Directiva canadiense: plazo de compliance legacy 24/6/2026 ya vencido — verificar estado de cumplimiento.
20. **Tareas pendientes del eje:** entrevistas estructuradas a universidades, organismos científicos, empresas, sindicatos, municipios y organizaciones de derechos digitales (del diagnóstico); validación del antecedente del open gateway de IA generativa para expedientes (2023-24) con documentación provincial; presupuestación fina de las Medidas 3 y 6 con ASaCTeI.

### 6.3 Tareas operativas inmediatas derivadas de este informe (propuestas del eje)

1. Solicitar a la Municipalidad de Rosario la documentación mínima de la sección 5.5 (acceso a la información pública).
2. Pedir a ASaCTeI/Secretaría CTI el inventario interno de sistemas de IA existentes en el Ejecutivo provincial (aunque no sea público) como línea de base de la Medida 1.
3. Descargar y adaptar el cuestionario AIA canadiense (open license) como borrador de trabajo de la Medida 2, con validación de UNR/UNL (facultades de Derecho e Informática).
4. Contactar a AGESIC (Uruguay) y a la Secretaría de Gobierno Digital (Chile) para transferencia de los instrumentos de registro y encuesta — ambos son cooperación Sur-Sur de bajo costo y están documentados como reutilizables.
5. Verificar el estado de la acción N°87 de Chile (registro de algoritmos públicos, plazo dic/2026) al cierre del año: si se cumple, será el primer registro nacional de ALC y referencia directa para Santa Fe.
6. Monitorear trimestralmente los instrumentos en movimiento listados en 6.2, ítem 19, y actualizar este documento con nota de versión.
7. Relevar normativa provincial general aplicable por caso de uso (protección de datos, acceso a la información, contratación, procedimiento administrativo, responsabilidad estatal) — pendiente explícito del diagnóstico que condiciona el anclaje jurídico de las Medidas 2, 4 y 5.
8. Presentar las 8 medidas a los equipos técnicos del Ejecutivo provincial y del Concejo/DEM de Rosario para validar niveles competentes y ventanas políticas antes de cerrar la Matriz.

---

## 7. Fuentes

Todas con **fecha de acceso 30/10/2026**, salvo las del diagnóstico provincial consolidado (acceso 23/10/2026), marcadas con (*). Solo se listan las fuentes efectivamente citadas en este informe.

### Unión Europea
- AI Act Service Desk — Timeline of implementation: https://ai-act-service-desk.ec.europa.eu/en/ai-act/timeline/timeline-implementation-eu-ai-act
- Consejo de la UE — AI Act timeline (aprobación final Digital Omnibus 29/6/2026): https://www.consilium.europa.eu/en/policies/artificial-intelligence-act/timeline-artificial-intelligence/
- Comisión Europea — Regulatory framework on AI: https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai
- Comisión Europea — Keeping European industry and science at the forefront of AI (Apply AI Strategy, 8/10/2025): https://commission.europa.eu/news-and-media/news/keeping-european-industry-and-science-forefront-ai-2025-10-08_en
- Comisión Europea — Apply AI: https://digital-strategy.ec.europa.eu/en/policies/apply-ai
- Comisión Europea — Q&A Apply AI Strategy (8/10/2025): https://ec.europa.eu/commission/presscorner/api/files/document/print/en/qanda_25_2300/QANDA_25_2300_EN.pdf
- Comisión Europea — Code of Practice on Marking and Labelling of AI-generated Content (10/6/2026): https://ec.europa.eu/commission/presscorner/detail/en/ip_26_1328
- Digital Omnibus on AI — COM(2025) 836: https://secure.ipex.eu/IPEXL-WEB/download/file/082d29089a99d8c5019a9d3319aa03cc
- Autoridad de Protección de Datos de Países Bajos — EU AI Act (obligaciones de deployers y registro): https://www.autoriteitpersoonsgegevens.nl/en/themes/algorithms-ai/eu-ai-act

### Reino Unido
- AI Opportunities Action Plan (ene/2025): https://www.gov.uk/government/publications/ai-opportunities-action-plan/ai-opportunities-action-plan
- AI Playbook for the UK Government (GDS, 10/2/2025): https://www.gov.uk/government/publications/ai-playbook-for-the-uk-government/artificial-intelligence-playbook-for-the-uk-government-html
- Lanzamiento del AI Playbook: https://gds.blog.gov.uk/2025-02-10/launching-the-artificial-intelligence-playbook-for-the-uk-government
- Blueprint for Modern Digital Government: https://www.gov.uk/government/publications/a-blueprint-for-modern-digital-government/a-blueprint-for-modern-digital-government-html
- Roadmap for Modern Digital Government 2025-2030: https://gds.blog.gov.uk/2026-01-20/our-roadmap-for-modern-digital-government
- Declaración parlamentaria Roadmap (19/1/2026): https://questions-statements.parliament.uk/written-statements/detail/2026-01-19/hlws1246
- ATRS — registros publicados: https://www.gov.uk/algorithmic-transparency-records
- ATRS — alcance obligatorio y exenciones: https://www.gov.uk/government/publications/algorithmic-transparency-recording-standard-mandatory-scope-and-exemptions-policy
- Public Law Project — AI in public body decision-making (oct/2026): https://publiclawproject.org.uk/resources/ai-in-public-body-decision-making
- State of Digital Government Review (ene/2025): https://www.gov.uk/government/publications/state-of-digital-government-review/state-of-digital-government-review
- PPN 02/24 — Improving Transparency of AI use in Procurement: https://www.gov.uk/government/publications/ppn-0224-improving-transparency-of-ai-use-in-procurement/ppn-0224-improving-transparency-of-ai-use-in-procurement-html
- PPN 01/25 (actualización bajo Procurement Act): https://assets.publishing.service.gov.uk/media/67af7ba0e270ceae39f9e279/PPN_017_Improving_transparency_of_AI_use_in_procurement.pdf
- AI Adoption Accelerator (25/6/2025): https://www.gov.uk/government/news/accelerating-ai-adoption-in-the-civil-service
- DSIT Annual Report 2025-26 (AI Skills Boost, TechFirst): https://www.gov.uk/government/publications/dsit-annual-report-and-accounts-2025-to-2026/dsit-annual-report-and-accounts-2025-to-2026
- Anthropic — GOV.UK partnership: https://www.anthropic.com/news/gov-UK-partnership

### Estonia
- Riigikontroll — Overview of the development of AI solutions in public sector organisations (abr/2026): https://riigikontroll.ee/sites/default/files/documents/2026-04/KA_80157_Overview%20of%20the%20development%20of%20AI%20solutions%20in%20public%20sector%20organisations_2025_1.pdf
- Ministerio de Educación — AI Leap announcement (feb/2025): https://hm.ee/en/news/estonia-announces-groundbreaking-national-initiative-ai-leap-programme-bring-ai-tools-all
- e-Estonia — AI Leap Programme: https://estonia.ee/stories/estonias-ambitious-initiative-the-ai-leap-programme-brings-ai-tools-to-all-schools
- ERR — President Karis AI-driven transformation: https://news.err.ee/1609614773/president-karis-spearheads-ai-driven-transformation-in-estonia-s-high-schools
- Bürokratt: https://www.kratid.ee/en/burokratt
- GovInsider — Bürokratt interoperability: https://govinsider.asia/intl-en/article/estonia-eyes-cross-border-interoperability-for-burokratt-its-siri-of-public-services
- Comisión Europea (RRF) — Bürokratt programme (€53 M): https://reforms-investments.ec.europa.eu/projects/burokratt-programme-and-national-virtual-assistant-platform-and-ecosystem_en
- The Mandarin — Lessons from Estonia (CDO Ott Velsberg): https://themandarin.com.au/299752-ai-artificial-intelligence-lessons-estonia-kratt
- X-Road: https://e-estonia.com/service/interoperability-services/x-road
- Comisión Europea (RRF) — X-Road savings document: https://reforms-investments.ec.europa.eu/document/download/fc6cf631-59df-484b-a4e9-d06ca761198e_en?filename
- OSS Country Intelligence Report Estonia 2025 (RIA/Ministerio): https://interoperable-europe.ec.europa.eu/sites/default/files/inline-files/OSS%20Country%20Intelligence%20Report%20Estonia%202025_0.pdf
- IOPEU Monitoring Estonia (2026): https://interoperable-europe.ec.europa.eu/sites/default/files/custom-page/attachment/2026-05/iopeu-monitoring_2025-dpaf_estonia_vfinal.pdf
- Invest in Estonia — PM Michal (Newsweek): https://investinestonia.com/pm-michal-to-newsweek-estonias-edge-lies-in-smart-ai-use/

### España
- Estrategia de IA 2024: https://digital.gob.es/content/dam/portal-mtdfp/DigitalizacionIA/Estrategia_IA_2024.pdf
- Plan IA360 (21/9/2026): https://lamoncloa.gob.es/presidente/actividades/Documents/2026/20260920%20Plan%20IA360.pdf
- España Digital — actualidad: https://espanadigital.gob.es/actualidad ; AESIA: http://espanadigital.gob.es/en/measure/aesia
- Proyecto de Ley Orgánica IA — Consejo de Ministros (26/5/2026): https://www.lamoncloa.gob.es/consejodeministros/resumenes/paginas/2026/260526-rueda-prensa-ministros.aspx
- Ficha Congreso 121/000096 (caducado 6/10/2026): https://www.congreso.es/es/proyectos-de-ley?_iniciativas_id=121%2F000096
- RD 729/2023 — estatuto AESIA (BOE): https://www.boe.es/buscar/act.php?id=BOE-A-2023-18911 ; web AESIA: https://aesia.digital.gob.es/es
- RD 817/2023 — sandbox regulatorio (BOE): https://www.boe.es/eli/es/rd/2023-11-08/817 ; https://digital.gob.es/digitalizacion/areas-interes/sandbox-ia
- Guías RIA alto riesgo (16/12/2025): https://aesia.digital.gob.es/es/actualidad/20251216-publicadas-las-guias-de-apoyo-al-cumplimiento-del-RIA
- Ministerio de la Presidencia/Justicia — IA y robotización (13/8/2026): https://www.mpr.gob.es/prencom/notas/paginas/2026/ministerio-incorpora-soluciones-ia-robotizacion.aspx
- AEAT — Estrategia de IA (1/12/2025): https://sede.agenciatributaria.gob.es/static_files/Sede/Tema/Agencia_tributaria/Gobierno_abierto/Estrategia_IA.pdf
- El Mundo — AEAT (6/3/2026): https://www.elmundo.es/economia/macroeconomia/2026-03-06/69ab01f8fc6c83293d8b4598.html
- SEPE — documento WEAPES 2026: https://wapes.org/wp-content/uploads/2026/09/es_wapes_ai-digitalisation_working-paper_2026.pdf
- Atlas de la IA en España (ago/2026): https://digital.gob.es/content/dam/portal-mtdfp/comunicacion/comunicacion_ministro/2026-08-31-08-2026/Atlas%20de%20la%20IA.pdf
- BSC — ALIA: https://bsc.es/news/bsc-news/alia-europes-first-public-open-and-multilingual-ai-infrastructure ; ALIA 40B Instruido: https://digital.gob.es/en/comunicacion/notas-prensa/secretaria-digitalizacion-e-inteligencia-artificial/2025-12-17-12-2025 ; http://alia.gob.es/eng
- INAP — declaraciones ministro Óscar López (24/10/2025): https://laadministracionaldia.inap.es/noticia.asp?id=1518271
- AEPD — Memoria 2025: https://www.aepd.es/memorias/memoria-aepd-2025.pdf
- OECD — Gobernar con IA (jun/2025): https://www.oecd.org/es/publications/2025/06/governing-with-artificial-intelligence_398fa287/full-report/

### Estados Unidos
- OMB M-25-21: https://www.whitehouse.gov/wp-content/uploads/2025/02/M-25-21-Accelerating-Federal-Use-of-AI-through-Innovation-Governance-and-Public-Trust.pdf
- White House — nuevas políticas de uso y compra de IA (3/4/2025, M-25-21/22): https://www.whitehouse.gov/releases/2025/04/white-house-releases-new-policies-on-federal-agency-ai-use-and-procurement/
- America's AI Action Plan (23/7/2025): https://www.whitehouse.gov/wp-content/uploads/2025/07/Americas-AI-Action-Plan.pdf
- EO 14319 — Preventing Woke AI: https://www.whitehouse.gov/presidential-actions/2025/07/preventing-woke-ai-in-the-federal-government/
- EO framework nacional / preemption (11/12/2025): https://www.whitehouse.gov/presidential-actions/2025/12/eliminating-state-law-obstruction-of-national-artificial-intelligence-policy/
- Inventario federal 2024: https://github.com/ombegov/2024-Federal-AI-Use-Case-Inventory ; Inventario 2025: https://github.com/ombegov/2025-Federal-Agency-AI-Use-Case-Inventory
- GovExec — +3.000 casos de uso 2025 (abr/2026): https://www.govexec.com/technology/2026/04/agencies-report-over-3000-ai-use-cases-2025/412917/
- GovExec — VA claims processing (abr/2026): https://www.govexec.com/technology/2026/04/ai-helping-va-speed-claims-processing-dems-worry-about-errors/412916/
- Brookings — Assessing the state of AI adoption: https://brookings.edu/articles/assessing-the-state-of-ai-adoption-across-the-federal-government
- GAO-25-107933: https://files.gao.gov/reports/GAO-25-107933/index.html
- VA — AI Use Case Inventory: https://department.va.gov/ai/ai-use-case-inventory/
- GSA — 2025 AI use cases / USAi.gov: https://www.gsa.gov/artificial-intelligence/2025-gsa-ai-use-cases
- IRS — chatbots PIA: https://www.irs.gov/pub/irs-pia/ts-am-iclc-pia.pdf
- NSF — NAIRR-OC (3/9/2025): https://www.nsf.gov/news/nsf-announces-funding-establish-national-ai-research ; https://www.nsf.gov/focus-areas/ai/nairr
- EY — Executive Action Alert (AI Action Plan): https://www.ey.com/content/dam/ey-unified-site/ey-com/en-us/insights/public-policy/documents/ey-executive-action-alert-trump-ai-action-plan-2025.pdf
- Evidence for Democracy — análisis comparado Canadá-EE.UU.: https://evidencefordemocracy.ca/wp-content/uploads/2026/09/From-Principles-to-Practice-A-Comparative-Analysis-of-AI-Governance-in-Canada-and-the-United-States.pdf
- NACo — Key AI Issues Facing US Counties: https://www.naco.org/sites/default/files/2026-08/Key_AI_Issues_Facing_US_Counties_FINAL.pdf

### Canadá
- Directive on Automated Decision-Making (4.ª revisión 24/6/2025): https://www.tbs-sct.canada.ca/pol/doc-eng.aspx?id=32592
- Algorithmic Impact Assessment: https://www.canada.ca/en/government/system/digital-government/digital-government-innovations/responsible-use-ai/algorithmic-impact-assessment.html
- Guía de peer review de sistemas ADM: https://www.canada.ca/en/government/system/digital-government/digital-government-innovations/responsible-use-ai/automated-decision-making/guide-peer-review-automated-decision-systems.html
- Registro de AIA publicadas: https://search.open.canada.ca/opendata?collection=aia
- IRCC — AIA Study Permit Extension: https://open.canada.ca/data/dataset/452e10be-383d-4d7a-9c7d-6484dc366a4a
- IRCC — AIA Passport ADM: https://open.canada.ca/data/en/dataset/f028d40f-3c0e-4a36-8a38-fe18d7aaaa32
- IRCC — AIA AAST (28/1/2025): https://open.canada.ca/data/dataset/71b309a0-efd2-4e85-8124-37e935c23aef
- IRCC — QP notes: https://search.open.canada.ca/qpnotes/record/cic,IRCC-2025-QP-00001
- Design-reality gap (Springer, 2025): https://link.springer.com/10.1007/s44206-025-00221-7
- World Privacy Forum — AI governance on the ground: Canada: https://worldprivacyforum.org/posts/ai-governance-on-the-ground-series-canada/
- Muerte de C-27/AIDA y giro a instrumentos focalizados (fuente secundaria): https://doi.org/10.48550/arxiv.2607.15051

### Singapur
- IMDA — consulta MGF GenAI: https://www.imda.gov.sg/resources/press-releases-factsheets-and-speeches/press-releases/2024/public-consult-model-ai-governance-framework-genai
- Cambridge Forum on AI — Singapore's evolving framework: https://cambridge.org/core/journals/cambridge-forum-on-ai-law-and-governance/article/governing-intelligence-singapures-evolving-ai-governance-framework/5E54A373E193E2D51354ADC1F509B9B4
- IMDA — GenAI governance playbook: https://imda.gov.sg/resources/press-releases-factsheets-and-speeches/factsheets/2024/gen-ai-and-digital-foss-ai-governance-playbook
- AI Verify Foundation — MGF GenAI: https://aiverifyfoundation.sg/resources/mgf-gen-ai/
- MGF for Agentic AI (2025): https://imda.gov.sg/-/media/imda/files/about/emerging-tech-and-research/artificial-intelligence/mgf-for-agentic-ai.pdf
- Chambers — Singapore AI trends 2025: https://practiceguides.chambers.com/practice-guides/artificial-intelligence-2025/singapore/trends-and-developments/O21097
- NAIS update (PDF): https://isomer-user-content.by.gov.sg/39/cb52d9a0-0d6c-484d-96fe-571031b37eb7/NAIS_update.pdf
- MDDI — respuesta parlamentaria sobre adopción de Pair: https://mddi.gov.sg/newsroom/mddi-s-response-to-pq-on-progress-of-adopting-ai-tools-within-public-service
- Evidoria — Pair (nota de transparencia): https://evidoria.eu/practice/pair-singapores-government-wide-generative-ai-assistant-for-public-officers
- GovTech — OneService: https://www.tech.gov.sg/technews/how-govtech-uses-ai-to-enhance-digital-public-services/
- GovTech — Changi clearance (Banco Mundial): https://thedocs.worldbank.org/en/doc/033a79cc8233622769bc381d16c661b7-0090012025/original/03-Feng-Ji-Sim-World-Bank-Event-Plenary-Session.pdf
- Ask Jamie (estudio de caso): https://go.sabiogroup.com/rs/710-JZD-844/images/uk-casestudy-digital-singapore-government-ask-jamie.pdf
- HTX — Prompt Royale 2025: https://htx.gov.sg/whats-happening/all-news---events/all-news/2025/htx-officers-put-genai-to-the-test-at-prompt-royale-2025
- CSC Ethos — AI adoption in the public service: https://knowledge.csc.gov.sg/ethos-issue-27/generating-momentum-for-ai-adoption-in-the-public-service

### Corea del Sur
- CSET — traducción del AI Basic Act: https://cset.georgetown.edu/publication/south-korea-ai-law-2025
- FPF — South Korea's new AI Framework Act: https://fpf.org/blog/south-koreas-new-ai-framework-act-a-balancing-act-between-innovation-and-regulation
- Trade.gov — South Korea AI Basic Act: https://www.trade.gov/market-intelligence/south-korea-ai-basic-act
- Enforcement Decree 36053: https://wheresthe.ai/rule/kr-ai-basic-act-enforcement-decree-2026/
- MSIT — enmienda (efectiva 21/7/2026): https://www.msit.go.kr/eng/bbs/view.do?bbsSeqNo=42&mId=4&mPid=2&nttSeqNo=1264&sCode=eng
- Cooley — AI Basic Act overview (27/1/2026): https://www.cooley.com/news/insight/2026/2026-01-27-south-koreas-ai-basic-act-overview-and-key-takeaways
- HKTDC Research (5/3/2026): https://research.hktdc.com/en/article/MjI2NDYyMzIzMA
- Stimson — AI Basic Act balance: https://stimson.org/2026/south-koreas-ai-basic-act-seeking-balance-between-industry-innovation-and-social-risk
- ITIF — One law sets South Korea's AI policy: https://itif.org/publications/2025-09-29/one-law-sets-south-koreas-ai-policy-one-weak-link-could-break-it
- EAI — reporte (NAISC, Action Plan): https://global.eai.or.kr/ko/reports/13530
- Korea AISI: https://www.aisi.re.kr/eng/contents/22
- DLA Piper — Korea AI tracker: https://intelligence.dlapiper.com/artificial-intelligence?c=KR
- Korea Herald — estrategia "AI Government" (ago/2026): https://koreaherald.com/article/10851767
- AsiaE — AI Government: https://view.asiae.co.kr/en/article/2026082510275557665
- AsiaE — chatbot fiscal NTS (5/8/2026): https://view.asiae.co.kr/en/article/2026080513205569425
- Aju Press — NTS (23/4/2026): https://ajupress.com/view/20260423120570138
- USTR Exhibit — National Tax Administration Plan: https://ustr.gov/sites/default/files/files/Issue_Areas/Enforcement/Section%20301/Coupang/Exhibit%2046.pdf
- MK — AI National Secretary (Gubi): https://mk.co.kr/en/economy/11984038

### Chile
- MinCiencia — PNAI: https://minciencia.gob.cl/areas/inteligencia-artificial/politica-nacional-de-inteligencia-artificial/
- MinCiencia — consulta ciudadana actualización PNAI (2024): http://minciencia.gob.cl/noticias/ministerio-de-ciencia-abre-consulta-ciudadana-para-actualizar-politica-nacional-de-inteligencia-artificial
- Plan de Acción (vía Cámara): https://www.camara.cl/verDoc.aspx?prmID=346735&prmTipo=DOCUMENTO_COMISION
- Tramitación ley de IA (boletín 16821-19): https://www.camara.cl/legislacion/ProyectosDeLey/tramitacion.aspx?%3BprmBOLETIN=16821-19&prmID=17429
- Cámara — despacho al Senado (13/10/2025): https://www.camara.cl/cms/2025-10-13/camara-despacho-marco-regulatorio-para-uso-de-la-inteligencia-artificial-ia
- Senado — Comisión Desafíos del Futuro (24/10/2025): https://www.senado.cl/comunicaciones/noticias/proyecto-que-regula-sistemas-de-inteligencia-artificial-sera-estudiado-por
- ChileCompra — IA contra conflictos de interés (28/11/2025): https://www.chilecompra.cl/2025/11/chilecompra-expone-avances-en-uso-de-datos-e-inteligencia-artificial-para-disminuir-los-conflictos-de-interes-y-potenciales-irregularidades
- ChileCompra — Directiva 44 / IA en compras (16/6/2025): https://www.chilecompra.cl/2025/06/chilecompra-expuso-sobre-uso-de-inteligencia-artificial-en-compras-publicas
- Servicio Civil — Encuesta Nacional 2025 (61%): https://www.serviciocivil.cl/noticias/noticias/6-de-cada-10-funcionarias-y-funcionarios-publicos-utilizan-inteligencia-artificial-segun-encuesta-nacional-2025/
- Gobierno Digital — levantamiento piloto uso de IA (1/4/2025): https://digital.gob.cl/biblioteca/estudios/resumen-ejecutivo-levantamiento-piloto-informacion-sobre-uso-de-servicios-ia-en-el-sector-publico
- MinCiencia — ChileValora 5 perfiles IA (28/4/2025): https://www.minciencia.gob.cl/noticias/la-inteligencia-artificial-entra-al-catalogo-de-chilevalora-con-5-perfiles-propuestos-por-el-ministerio-de-ciencia

### Uruguay
- IMPO — art. 74 Ley 20.212: https://www.impo.com.uy/bases/leyes/20212-2023/74
- AGESIC — Estrategia Nacional de IA 2024-2030: https://www.gub.uy/agencia-gobierno-electronico-sociedad-informacion-conocimiento/comunicacion/publicaciones/estrategia-nacional-inteligencia-artificial-del-uruguay-2024-2030
- AGESIC — proceso de cocreación: https://www.gub.uy/agencia-gobierno-electronico-sociedad-informacion-conocimiento/comunicacion/publicaciones/estrategia-nacional-inteligencia-artificial-uruguay-2024-2030-10
- OECD.AI — ENIA Uruguay: https://oecd.ai/en/dashboards/policy-initiatives/national-artificial-intelligence-strategy-20242030-8923
- AGESIC — recomendaciones para regulación (28/6/2024): https://www.gub.uy/agencia-gobierno-electronico-sociedad-informacion-conocimiento/comunicacion/noticias/recomendaciones-para-regulacion-inteligencia-artificial
- AGESIC/BCU — Hoja de Ruta 2026-2027 (dic/2025): https://www.bcu.gub.uy/NOVA-BCU/SiteAssets/Lists/Iniciativas%20en%20Agenda/AllItems/nodo2_2025%20%5b01%5d%20AGESIC%20-%20Est%20IA%20y%20Datos%20-%20Diciembre%202025.pdf
- AGESIC — relevamiento de casos de uso de IA en el Estado: https://www.gub.uy/agencia-gobierno-electronico-sociedad-informacion-conocimiento/comunicacion/publicaciones/relevamiento-casos-uso-aplicacion-inteligencia-artificial-estado-2
- Mirador de Gobierno Abierto: https://miradordegobiernoabierto.agesic.gub.uy/SigesVisualizador/gu/o/GA/p/2264
- AGESIC — caso BSE: https://www.gub.uy/agencia-gobierno-electronico-sociedad-informacion-conocimiento/comunicacion/publicaciones/caso-uso-ia-bse-reconocimiento-automatizado-imagenes-documentos
- AGESIC — recomendaciones de transparencia algorítmica: https://www.gub.uy/agencia-gobierno-electronico-sociedad-informacion-conocimiento/comunicacion/publicaciones/recomendaciones-sobre-transparencia-algoritmica/recomendaciones/reporte
- UNESCO — informe RAM Uruguay 2024: https://unesdoc.unesco.org/ark:/48223/pf0000391491
- AGESIC — capacitación IA para gobiernos (14/11/2025): https://www.gub.uy/agencia-gobierno-electronico-sociedad-informacion-conocimiento/comunicacion/noticias/capacitacion-sobre-ia-para-organismos-del-estado

### Brasil
- Câmara dos Deputados — PL 2338/2023: https://camara.leg.br/noticias/1159193-projeto-que-regulamenta-uso-da-inteligencia-artificial-no-brasil
- CRIA Digital — estado del PL 2338 (4/10/2026): https://cria.digital/blog/marco-legal-da-ia-pl-2338
- Migalhas — caminos del PL 2338 (16/5/2025): https://migalhas.com.br/coluna/migalhas-de-protecao-de-dados/430410/caminhos-do-pl-2-338-23
- MCTI — PBIA 2024-2028: https://www.gov.br/mcti/pt-br/acompanhe-o-mcti/transformacaodigital/plano-brasileiro-de-inteligencia-artificial
- gov.br — NIA / Inteligência Artificial: https://www.gov.br/governodigital/pt-br/infraestrutura-nacional-de-dados/inteligencia-artificial-1
- NIC.br — Panorama Setorial da Internet N°1 (abr/2026): https://cgi.br/media/docs/publicacoes/6/en-us/20260429153057/psi_a18_n1_data-governance-and-ai.pdf
- TIC Governo 2025 — resumen (fuente secundaria): https://sisolucoesdigitais.com.br/news/tic-governo-2025-inteligencia-artificial-orgaos-publicos (original en cetic.br)

### Colombia
- DNP — CONPES 4144 (14/2/2025): https://colaboracion.dnp.gov.co/CDT/Conpes/Econ%C3%B3micos/4144.pdf ; copia IGAC: https://www.igac.gov.co/sites/default/files/transparencia/normograma/CONPES%204144%20DE%202025.pdf
- MinTIC — Guía Ética (act. 7/1/2026): https://www.mintic.gov.co/portal/inicio/Sala-de-prensa/Noticias/425888:Guia-Etica-para-la-Implementacion-Desarrollo-y-Uso-de-Sistemas-de-Inteligencia-Artificial-en-Entidades-Publicas-de-Colombia ; PDF: https://mintic.gov.co/portal/715/articles-425888_recurso_1.pdf
- MinTIC — 6 modelos de IA (9/7/2026): https://www.mintic.gov.co/portal/715/w3-article-439551.html
- MinTIC — informe de gestión mar-sep 2025 (Chiminigagua, Bachué, microcentros): https://mintic.gov.co/portal/715/articles-135840_Informe_de_Gestion_Ministro_Julian_Molina_Gomez_marzo_septiembre_de_2025.pdf

### México
- El Economista — México necesita estrategia nacional de IA (25/7/2025): https://www.eleconomista.com.mx/tecnologia/mexico-necesita-estrategia-nacional-inteligencia-artificial-20250725-769839.html
- SIDOF — Programa Sectorial ATDT 2025-2030 (19/9/2025): https://sidof.segob.gob.mx/notas/5768198
- El Universal — LNIA (15/4/2025): https://www.eluniversal.com.mx/nacion/sheinbaum-alista-laboratorio-nacional-de-inteligencia-artificial-gabinete-va-por-incorporacion-de-la-ia/
- Senado — informe Comisión de IA (oct/2025): http://sil.gobernacion.gob.mx/Archivos/Documentos/2025/11/asun_4969335_20251111_1762877302.pdf
- ODI — GenAI chatbot for Mexico City: https://theodi.org/insights/projects/a-genai-powered-chatbot-for-mexico-city
- BID — Transformación digital: el modelo de la Ciudad de México: https://publications.iadb.org/en/node/35999
- Network Cultures — entrevista ADIP (jun/2026): https://networkcultures.org/blog/2026-06-12/digital-tribulations-20-where-does-mexico-stand-on-digital-sovereignty-interview-with-the-agencia-digital-de-innovacion-publica-adip/

### Multilaterales (OCDE, BID, CEPAL, SELA, CIPPEC)
- OCDE — Recommendation on AI (LEGAL/0449): https://legalinstruments.oecd.org/en/instruments/oecd-legal-0449
- OCDE — memorando definición actualizada de sistema de IA (2024): https://www.oecd.org/content/dam/oecd/en/publications/reports/2024/03/explanatory-memorandum-on-the-updated-oecd-definition-of-an-ai-system%5F3c815e51/623da898-en.pdf
- OCDE — Framework for the Classification of AI Systems (2022): https://www.oecd.org/en/publications/oecd-framework-for-the-classification-of-ai-systems_cb6d9eca-en.html ; https://oecd.ai/en/classification
- OCDE — Governing with Artificial Intelligence (18/9/2025): https://www.oecd.org/en/publications/governing-with-artificial-intelligence_795de142-en.html ; cap. 2: https://www.oecd.org/en/publications/governing-with-artificial-intelligence_795de142-en/full-report/trends-and-early-lessons-from-the-use-of-ai-across-functions-of-government_c4968cb1.html ; cap. 3: https://www.oecd.org/en/publications/governing-with-artificial-intelligence_795de142-en/full-report/implementation-challenges-that-hinder-the-strategic-use-of-ai-in-government_05cfe2bb.html
- OCDE/CAF (2022) — Uso estratégico y responsable de la IA en el sector público de ALC: https://doi.org/10.1787/5b189cb4-es
- BID — Inteligencia artificial para Estados más efectivos (nov/2025): https://publications.iadb.org/es/inteligencia-artificial-para-estados-mas-efectivos
- BID — CT RG-T4439: https://www.iadb.org/es/proyecto/RG-T4439
- BID — Gobernarte 2025: https://www.iadb.org/es/quienes-somos/temas/modernizacion-del-estado/iniciativas/gobernarte/gobernarte-2025
- CEPAL — comunicado ILIA 2025 (3/10/2025): https://www.cepal.org/es/comunicados/america-latina-caribe-acelera-la-adopcion-la-inteligencia-artificial-aunque-desafios ; PDF ILIA 2025: https://indicelatam.cl/wp-content/uploads/2025/10/Documento_ILIA_2025.pdf
- CEPAL — conferencia IA en ALC (4-5/3/2025): https://www.cepal.org/es/comunicados/la-inteligencia-artificial-esta-transformando-al-mundo-america-latina-caribe-puede
- SELA (sep/2025) — IA y políticas públicas en ALC: https://www.sela.org/wp-content/uploads/2025/09/Inteligencia-artificial-y-politicas-publicas-en-ALC-LIBRO.pdf
- CIPPEC (may/2025) — Guía para el uso de IA en el sector público en Argentina: https://www.cippec.org/wp-content/uploads/2025/05/Guia-para-el-uso-de-IA-en-el-sector-publico-en-Argentina_2025.pdf

### Fuentes provinciales/municipales (diagnóstico Eje 9, acceso 23/10/2026) (*)
- Ley provincial 13.742/2017: https://www.santafe.gov.ar/boletinoficial/recursos/boletines/19-7-2018ley13742-2018.html (*)
- ASaCTeI — portal oficial: https://www.santafe.gov.ar/index.php/web/content/view/full/242164/%28subtema%29/234948 (*)
- Gobierno de Santa Fe — ejecución CTI 2025 (23/1/2026): https://www.santafe.gov.ar/noticias/noticia/285055/ (*)
- Ordenanza Rosario 10.264/2021: https://www.rosario.gob.ar/normativa/ver/visualExterna.do?accion=verNormativa&idNormativa=181403 (*)
- Decreto Rosario 274/2026: https://www.rosario.gob.ar/normativa/ver/documento.do?accion=getPdf&id=2215&modo=attachment (*)
- Proyecto de Presupuesto Rosario 2025 (analítica de video, 600 cámaras): https://www.rosario.gob.ar/inicio/sites/default/files/2025-01/Proyecto%20Presupuesto%202025.pdf (*)
- ESAM — red formativa IA y ciencia de datos (oct/2026): https://www.rosario.gob.ar/inicio/inscripcion-los-seminarios-de-actualizacion-para-el-personal-municipal (*)
- Open Data Rosario (Ord. 9.279/2014): https://datosabiertos.rosario.gob.ar/acerca-de (*)
- Secretaría CTI Santa Fe: https://www.santafe.gov.ar/index.php/web/content/view/full/242155/%28subtema%29/23606 (*)

---

*Documento de trabajo del Eje 9 — Matriz de diagnóstico Santa Fe y Rosario. Elaborado el 30/10/2026. Las secciones 4 y 5 son propuestas e interpretaciones del eje; las secciones 2 y 3 documentan hechos comprobados con fuente y fecha de acceso. Lo no verificable está marcado explícitamente y consolidado en la sección 6.*

**Control de versiones:**

| Versión | Fecha | Cambio |
|---|---|---|
| 1.0 | 30/10/2026 | Primera consolidación: 14 jurisdicciones + OCDE, 8 medidas priorizadas, checklist caso 600 cámaras, consolidación de fuentes de los tres informes de investigación del eje. |
| próxima | trimestral | Actualización de instrumentos en movimiento (sección 6.2, ítem 19) e incorporación de la respuesta al pedido de información de la sección 5.5. |
