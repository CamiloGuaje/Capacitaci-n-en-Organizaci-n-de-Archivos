// Aplicación de Capacitación en Organización de Archivos - Cajamarca - VERSIÓN CORREGIDA
document.addEventListener('DOMContentLoaded', function() {
    
    // Datos de la aplicación
    const appData = {
        normatividad: {
            ley_594: {
                nombre: "Ley 594 de 2000 - Ley General de Archivos",
                descripcion: "Esta ley establece las reglas y principios generales que regulan la función archivística del Estado colombiano, definiendo políticas, planes y programas de gestión documental.",
                articulos_clave: [
                    "Art. 21: Establece la obligatoriedad del Programa de Gestión Documental (PGD)",
                    "Art. 22: Define las Tablas de Retención Documental (TRD) como instrumentos técnicos",
                    "Art. 24: Regula la organización de archivos de gestión, central e histórico",
                    "Art. 46: Establece sanciones por incumplimiento de la normativa archivística",
                    "Art. 12: Define responsabilidades de los servidores públicos en gestión documental"
                ]
            },
            acuerdo_001: {
                nombre: "Acuerdo 001 de 2024 - Acuerdo Único de la Función Archivística",
                descripcion: "Unifica y actualiza los criterios técnicos para la gestión documental, derogando acuerdos anteriores y estableciendo lineamientos claros para organización y conservación.",
                articulos_clave: [
                    "Establece criterios únicos para organización documental",
                    "Define metodologías para valoración y selección documental",
                    "Actualiza lineamientos para conservación preventiva",
                    "Unifica formatos para instrumentos archivísticos",
                    "Establece procedimientos para transferencias documentales"
                ]
            },
            ley_1712: {
                nombre: "Ley 1712 de 2014 - Transparencia y Acceso a la Información",
                descripcion: "Garantiza el derecho de acceso a la información pública y establece procedimientos para facilitar y promover el acceso ciudadano a la información.",
                articulos_clave: [
                    "Art. 15: Establece el Programa de Gestión Documental para transparencia",
                    "Art. 5: Define principios de máxima publicidad y transparencia",
                    "Art. 24: Regula la clasificación y reserva de información",
                    "Art. 26: Establece obligaciones de publicación proactiva",
                    "Art. 18: Define responsabilidades institucionales en acceso"
                ]
            },
            manual_gdc: {
                nombre: "Manual GDC-M-01 - Organización Documental Cajamarca",
                descripcion: "Manual específico de la Alcaldía Municipal de Cajamarca que establece procedimientos técnicos para la organización de archivos de gestión institucionales.",
                articulos_clave: [
                    "Define procedimientos específicos para la recepción documental",
                    "Establece formatos institucionales para inventarios y controles",
                    "Regula la conformación y rotulado de expedientes municipales",
                    "Define responsabilidades por dependencias en gestión documental",
                    "Establece cronogramas para transferencias documentales internas"
                ]
            }
        },
        
        proceso_organizacion: [
            {
                paso: 1,
                nombre: "Clasificación",
                descripcion: "Agrupar los documentos según las series documentales establecidas en la Tabla de Retención Documental (TRD) institucional",
                actividades: [
                    "Identificar la serie documental según TRD vigente",
                    "Separar documentos por tipo y función administrativa",
                    "Aplicar códigos de clasificación establecidos",
                    "Separar documentos de apoyo informativo"
                ],
                warnings: [
                    "No mezclar series documentales diferentes",
                    "Verificar vigencia de la TRD antes de clasificar",
                    "Los documentos de apoyo no forman expedientes"
                ],
                tips: [
                    "Mantener a mano la TRD institucional actualizada",
                    "Consultar con el responsable del archivo en casos dudosos",
                    "Fotografiar el estado inicial antes de intervenir"
                ]
            },
            {
                paso: 2,
                nombre: "Depuración",
                descripcion: "Retirar duplicados idénticos, folios en blanco sin contenido informativo y documentos de apoyo que no hacen parte del expediente",
                actividades: [
                    "Identificar y retirar duplicados idénticos",
                    "Remover folios completamente en blanco",
                    "Separar documentos de apoyo (periódicos, folletos, etc.)",
                    "Retirar grapas, clips y elementos metálicos"
                ],
                warnings: [
                    "No eliminar folios con anotaciones manuscritas",
                    "Conservar originales aunque existan copias",
                    "No retirar folios que sirvan de separadores oficiales"
                ],
                tips: [
                    "Usar tenazas apropiadas para retirar grapas",
                    "Alisar cuidadosamente folios que estuvieron grapados",
                    "Inventariar documentos retirados si son significativos"
                ]
            },
            {
                paso: 3,
                nombre: "Ordenación",
                descripcion: "Organizar los documentos en orden cronológico estricto, de la fecha más antigua a la más reciente",
                actividades: [
                    "Verificar fechas de todos los documentos",
                    "Ordenar cronológicamente de antiguo a reciente",
                    "Mantener el orden original dentro del mismo día",
                    "Ubicar documentos sin fecha al final"
                ],
                warnings: [
                    "No alterar el orden cronológico por ningún motivo",
                    "Respetar fechas de radicación, no de elaboración",
                    "Los documentos sin fecha van al final del expediente"
                ],
                tips: [
                    "Usar formato de fecha AAAA-MM-DD para ordenar",
                    "Verificar fechas en sellos y radicaciones",
                    "Crear una tabla de fechas si hay muchos documentos"
                ]
            },
            {
                paso: 4,
                nombre: "Foliación",
                descripcion: "Numerar consecutivamente todos los folios con lápiz mina negra en la esquina superior derecha del recto de cada hoja",
                actividades: [
                    "Usar exclusivamente lápiz mina negra HB",
                    "Numerar en esquina superior derecha del recto",
                    "Numerar consecutivamente sin saltos",
                    "Registrar folios faltantes o illegibles"
                ],
                warnings: [
                    "Nunca usar bolígrafo, marcador o tinta",
                    "No foliar en el verso de las hojas",
                    "No sobrescribir numeración existente"
                ],
                tips: [
                    "Usar regla para números rectos y legibles",
                    "Verificar que el lápiz esté bien afilado",
                    "Contar folios antes de empezar para verificar total"
                ]
            },
            {
                paso: 5,
                nombre: "Descripción",
                descripcion: "Elaborar la hoja de control del expediente y los inventarios documentales según formato FUID (Formato Único de Inventario Documental)",
                actividades: [
                    "Completar hoja de control del expediente",
                    "Diligenciar inventario documental FUID",
                    "Registrar metadatos del expediente",
                    "Asignar código topográfico"
                ],
                warnings: [
                    "Todos los campos obligatorios deben completarse",
                    "Verificar exactitud de fechas extremas",
                    "El número de folios debe coincidir exactamente"
                ],
                tips: [
                    "Usar terminología técnica apropiada",
                    "Verificar ortografía en nombres y términos",
                    "Mantener consistencia en formato de fechas"
                ]
            },
            {
                paso: 6,
                nombre: "Almacenamiento",
                descripcion: "Guardar los documentos en carpetas apropiadas sin sobrecargar, respetando capacidad máxima de 200 folios por carpeta",
                actividades: [
                    "Seleccionar carpeta libre de ácido",
                    "Verificar capacidad máxima (200 folios)",
                    "Almacenar sin comprimir documentos",
                    "Orientar uniformemente en la carpeta"
                ],
                warnings: [
                    "No exceder 200 folios por carpeta",
                    "No forzar documentos en carpetas llenas",
                    "Evitar carpetas con ganchos metálicos"
                ],
                tips: [
                    "Usar carpetas de pH neutro para conservación",
                    "Dejar espacio para manipulación",
                    "Verificar que documentos no sobresalgan"
                ]
            },
            {
                paso: 7,
                nombre: "Rotulado",
                descripcion: "Identificar cada carpeta con rótulo que contenga información completa y legible sobre su contenido",
                actividades: [
                    "Crear rótulo con información completa",
                    "Incluir todos los datos requeridos",
                    "Ubicar rótulo en lugar visible",
                    "Usar letra clara y legible"
                ],
                warnings: [
                    "Información debe ser completa y precisa",
                    "Rótulo debe estar firmemente adherido",
                    "No usar abreviaciones no oficiales"
                ],
                tips: [
                    "Usar formato estándar institucional",
                    "Plastificar rótulos para durabilidad",
                    "Revisar ortografía antes de adherir"
                ]
            }
        ],

        // 15 preguntas para quiz normativo
        quiz_normativo: [
            {
                question: "¿Cuál es la ley principal que regula los archivos en Colombia?",
                options: ["Ley 594 de 2000", "Ley 1712 de 2014", "Acuerdo 001 de 2024", "Ley 80 de 1993"],
                correct: 0,
                explanation: "La Ley 594 de 2000 es la Ley General de Archivos que establece las reglas y principios generales de la función archivística en Colombia."
            },
            {
                question: "¿Qué establece el artículo 21 de la Ley 594 de 2000?",
                options: ["Las sanciones", "El Programa de Gestión Documental", "Los costos", "Los horarios"],
                correct: 1,
                explanation: "El artículo 21 establece la obligatoriedad del Programa de Gestión Documental (PGD) para todas las entidades públicas."
            },
            {
                question: "¿Qué son las TRD según la normatividad colombiana?",
                options: ["Tarifas", "Tablas de Retención Documental", "Títulos", "Transferencias"],
                correct: 1,
                explanation: "Las TRD son instrumentos técnicos que establecen los tiempos de conservación y la disposición final de los documentos."
            },
            {
                question: "¿Cuál es el objetivo principal de la Ley 1712 de 2014?",
                options: ["Regular salarios", "Garantizar acceso a información pública", "Controlar gastos", "Establecer horarios"],
                correct: 1,
                explanation: "La Ley 1712 garantiza el derecho de acceso a la información pública y establece principios de transparencia."
            },
            {
                question: "¿Qué derogó el Acuerdo 001 de 2024?",
                options: ["La Ley 594", "Acuerdos archivísticos anteriores", "La Ley 1712", "Ninguna normativa"],
                correct: 1,
                explanation: "El Acuerdo 001 de 2024 unifica y deroga los acuerdos archivísticos anteriores para establecer criterios técnicos únicos."
            },
            {
                question: "¿Cuántos tipos de archivo establece la Ley 594?",
                options: ["2 tipos", "3 tipos", "4 tipos", "5 tipos"],
                correct: 1,
                explanation: "La Ley 594 establece 3 tipos de archivo: de gestión, central e histórico."
            },
            {
                question: "¿Qué principio establece la Ley 1712 para el acceso a la información?",
                options: ["Mínima publicidad", "Máxima publicidad", "Publicidad restringida", "Sin publicidad"],
                correct: 1,
                explanation: "La Ley 1712 establece el principio de máxima publicidad para garantizar el acceso ciudadano a la información."
            },
            {
                question: "¿Quién es responsable de la gestión documental en las entidades?",
                options: ["Solo el archivista", "Todos los servidores públicos", "Solo el jefe", "Solo el secretario"],
                correct: 1,
                explanation: "Según la Ley 594, todos los servidores públicos tienen responsabilidades en la gestión documental."
            },
            {
                question: "¿Qué formato unifica el Acuerdo 001 de 2024 para inventarios?",
                options: ["FUID", "FORD", "FARD", "FUND"],
                correct: 0,
                explanation: "El FUID (Formato Único de Inventario Documental) es el formato unificado para inventarios documentales."
            },
            {
                question: "¿Cuál es la finalidad de la valoración documental?",
                options: ["Cobrar impuestos", "Determinar conservación o eliminación", "Contar documentos", "Archivar todo"],
                correct: 1,
                explanation: "La valoración documental determina qué documentos se conservan o eliminan según su valor administrativo, legal, fiscal o histórico."
            },
            {
                question: "¿Qué establece el Manual GDC-M-01 de Cajamarca?",
                options: ["Salarios", "Procedimientos de organización documental", "Horarios", "Presupuestos"],
                correct: 1,
                explanation: "El Manual GDC-M-01 establece los procedimientos específicos para la organización de archivos de gestión en Cajamarca."
            },
            {
                question: "¿Cada cuánto deben actualizarse las TRD?",
                options: ["Cada año", "Cada 5 años máximo", "Nunca", "Cada 10 años"],
                correct: 1,
                explanation: "Las TRD deben actualizarse máximo cada 5 años o cuando haya cambios significativos en la estructura institucional."
            },
            {
                question: "¿Qué tipo de información puede clasificarse como reservada?",
                options: ["Toda", "Solo la de seguridad nacional", "Ninguna", "Solo la financiera"],
                correct: 1,
                explanation: "Solo puede clasificarse como reservada la información que afecte la seguridad nacional, la defensa, las relaciones internacionales o la investigación criminal."
            },
            {
                question: "¿Qué sanciones establece la Ley 594 por incumplimiento?",
                options: ["Solo multas", "Disciplinarias, penales y fiscales", "No hay sanciones", "Solo amonestaciones"],
                correct: 1,
                explanation: "La Ley 594 establece sanciones disciplinarias, penales y fiscales por el incumplimiento de la normativa archivística."
            },
            {
                question: "¿Cuál es el tiempo máximo para responder una petición según la Ley 1712?",
                options: ["5 días", "15 días hábiles", "30 días", "No hay tiempo límite"],
                correct: 1,
                explanation: "La Ley 1712 establece 15 días hábiles como tiempo máximo para responder peticiones de acceso a información pública."
            }
        ],

        // Ejercicios prácticos mejorados
        ejercicios_clasificacion: [
            { documento: "Resolución de nombramiento No. 045", serie_correcta: "Resoluciones Administrativas", opciones: ["Resoluciones Administrativas", "Actos Administrativos", "Correspondencia", "Contratos"] },
            { documento: "Contrato de prestación de servicios No. 123", serie_correcta: "Contratos", opciones: ["Contratos", "Convenios", "Resoluciones", "Correspondencia"] },
            { documento: "Acta de reunión de coordinación del 15 de enero", serie_correcta: "Actas", opciones: ["Actas", "Correspondencia", "Informes", "Memorandos"] },
            { documento: "Derecho de petición ciudadano radicado 2024-001", serie_correcta: "Peticiones", opciones: ["Peticiones", "Correspondencia Externa", "Quejas", "Reclamos"] },
            { documento: "Informe de gestión trimestral", serie_correcta: "Informes", opciones: ["Informes", "Correspondencia", "Actas", "Resoluciones"] },
            { documento: "Factura de servicios públicos", serie_correcta: "Cuentas por Pagar", opciones: ["Cuentas por Pagar", "Correspondencia", "Contratos", "Informes"] }
        ],

        ejercicios_foliacion: [
            { name: "Solicitud de permiso", date: "2024-01-15", correctOrder: 1 },
            { name: "Acuse de recibo", date: "2024-01-16", correctOrder: 2 },
            { name: "Estudio técnico", date: "2024-01-25", correctOrder: 3 },
            { name: "Concepto jurídico", date: "2024-02-05", correctOrder: 4 },
            { name: "Respuesta de la entidad", date: "2024-02-10", correctOrder: 5 },
            { name: "Recurso de reposición", date: "2024-02-20", correctOrder: 6 },
            { name: "Resolución definitiva", date: "2024-02-28", correctOrder: 7 },
            { name: "Notificación personal", date: "2024-03-05", correctOrder: 8 }
        ],

        ejercicios_expedientes: [
            { name: "Derecho de petición", date: "2024-01-10", order: 1 },
            { name: "Acuse de recibo automático", date: "2024-01-12", order: 2 },
            { name: "Traslado a dependencia competente", date: "2024-01-15", order: 3 },
            { name: "Solicitud de información técnica", date: "2024-01-18", order: 4 },
            { name: "Informe técnico solicitado", date: "2024-01-28", order: 5 },
            { name: "Concepto jurídico", date: "2024-02-02", order: 6 },
            { name: "Proyecto de respuesta", date: "2024-02-08", order: 7 },
            { name: "Respuesta definitiva al ciudadano", date: "2024-02-12", order: 8 },
            { name: "Constancia de notificación", date: "2024-02-15", order: 9 },
            { name: "Archivo del expediente", date: "2024-02-16", order: 10 }
        ],

        glosario: {
            archivo_gestion: "Comprende toda la documentación que es sometida a continua utilización y consulta administrativa por las oficinas productoras u otras que las soliciten",
            expediente: "Unidad documental compleja formada por un conjunto de documentos generados orgánica y funcionalmente por una instancia productora en la resolución de un mismo asunto",
            clasificacion: "Operación archivística que consiste en el establecimiento de las categorías y grupos que reflejan la estructura jerárquica del fondo y sus relaciones",
            ordenacion: "Operación realizada dentro del proceso de organización que consiste en establecer secuencias naturales cronológicas, alfabéticas y numéricas",
            foliacion: "Operación que consiste en numerar hojas o folios pertenecientes a una unidad documental de manera consecutiva",
            serie_documental: "Conjunto de unidades documentales de estructura y contenido homogéneos, emanados de un mismo órgano o sujeto productor",
            subserie_documental: "Conjunto de unidades documentales que forman parte de una serie, identificadas de forma separada de ésta por su contenido y sus características específicas",
            transferencia_documental: "Remisión de los documentos del archivo de gestión al central, y de éste al histórico, de conformidad con las tablas de retención documental",
            tabla_retencion: "Listado de series con sus correspondientes tipos documentales, a las cuales se asigna el tiempo de permanencia en cada etapa del ciclo vital de los documentos",
            valoracion_documental: "Proceso permanente y continuo que inicia desde la planificación de los documentos y por medio del cual se determinan sus valores primarios y secundarios"
        }
    };

    // Variables globales
    let currentQuizQuestion = 0;
    let quizScore = 0;
    let currentStep = null;
    let evaluationQuestions = [];
    let currentEvalQuestion = 0;
    let evaluationScore = 0;
    let evaluationAnswers = [];

    // ============= FUNCIONES GLOBALES =============
    
    // Función para mostrar secciones - CORREGIDA
    window.showSection = function(sectionId) {
        console.log('Navegando a sección:', sectionId);
        
        // Ocultar todas las secciones
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            section.classList.remove('active');
        });

        // Mostrar sección objetivo
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.add('active');
            console.log('Sección mostrada:', sectionId);
        } else {
            console.error('Sección no encontrada:', sectionId);
        }

        // Actualizar navegación
        const navButtons = document.querySelectorAll('.nav__button');
        navButtons.forEach(btn => {
            btn.classList.remove('active');
            btn.removeAttribute('aria-current');
        });
        
        const activeNavButton = document.querySelector(`[data-section="${sectionId}"]`);
        if (activeNavButton) {
            activeNavButton.classList.add('active');
            activeNavButton.setAttribute('aria-current', 'page');
        }

        // Scroll al inicio
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Funciones globales para modales - CORREGIDAS
    window.closeNormaDetails = function() {
        const normaDetails = document.getElementById('norma-details');
        if (normaDetails) {
            normaDetails.classList.add('hidden');
            console.log('Detalles de norma cerrados');
        }
    };

    window.closeStepDetails = function() {
        const stepDetails = document.getElementById('step-details');
        if (stepDetails) {
            stepDetails.classList.add('hidden');
            console.log('Detalles de paso cerrados');
        }
    };

    window.closeStepSimulator = function() {
        const simulator = document.getElementById('step-simulator');
        if (simulator) {
            simulator.classList.add('hidden');
            console.log('Simulador cerrado');
        }
    };

    window.startStepSimulator = function() {
        if (!currentStep) return;
        
        const simulator = document.getElementById('step-simulator');
        const simulatorTitle = document.getElementById('simulator-title');
        const simulatorContent = document.getElementById('simulator-content');
        
        if (simulator && simulatorTitle && simulatorContent) {
            simulatorTitle.textContent = `🎮 Simulador - Paso ${currentStep.paso}: ${currentStep.nombre}`;
            simulatorContent.innerHTML = `
                <div class="simulator-content">
                    <h4>Práctica Interactiva</h4>
                    <p>En un entorno real, aquí practicarías:</p>
                    <ul>
                        ${currentStep.actividades.map(act => `<li>${act}</li>`).join('')}
                    </ul>
                    <div class="simulator-exercise">
                        <h5>Ejercicio de Ejemplo:</h5>
                        <p>Para el paso "${currentStep.nombre}", debes seguir esta secuencia:</p>
                        <ol>
                            ${currentStep.actividades.map((act, index) => 
                                `<li><label>
                                    <input type="checkbox" class="sim-step" data-step="${index}"> ${act}
                                </label></li>`
                            ).join('')}
                        </ol>
                        <div class="simulator-progress">
                            <div id="sim-progress">Progreso: 0/${currentStep.actividades.length}</div>
                        </div>
                    </div>
                </div>
            `;
            
            // Agregar funcionalidad al simulador
            const simSteps = simulatorContent.querySelectorAll('.sim-step');
            simSteps.forEach(checkbox => {
                checkbox.addEventListener('change', function() {
                    const completed = simulatorContent.querySelectorAll('.sim-step:checked').length;
                    const total = simSteps.length;
                    const progressEl = simulatorContent.querySelector('#sim-progress');
                    if (progressEl) {
                        progressEl.textContent = `Progreso: ${completed}/${total}`;
                        if (completed === total) {
                            progressEl.innerHTML += ' ✅ <strong>¡Paso completado!</strong>';
                            progressEl.style.color = 'var(--color-success-green)';
                        }
                    }
                });
            });
            
            simulator.classList.remove('hidden');
            simulator.scrollIntoView({ behavior: 'smooth' });
        }
    };

    window.closeModal = function() {
        document.querySelectorAll('.modal').forEach(modal => {
            modal.classList.add('hidden');
        });
        console.log('Todos los modales cerrados');
    };

    // ============= INICIALIZACIÓN DE NAVEGACIÓN =============
    function initNavigation() {
        const navButtons = document.querySelectorAll('.nav__button');
        const moduleCards = document.querySelectorAll('.module-card');

        // Navegación principal
        navButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const targetSection = this.getAttribute('data-section');
                console.log('Click en navegación:', targetSection);
                showSection(targetSection);
            });
        });

        // Cards de módulos
        moduleCards.forEach(card => {
            // Click en la card
            card.addEventListener('click', function(e) {
                if (!e.target.closest('.btn')) {
                    const targetSection = this.getAttribute('data-target');
                    console.log('Click en card:', targetSection);
                    showSection(targetSection);
                }
            });

            // Navegación con teclado
            card.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    const targetSection = this.getAttribute('data-target');
                    showSection(targetSection);
                }
            });

            // Botones dentro de cards
            const cardButton = card.querySelector('.btn');
            if (cardButton) {
                cardButton.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    const targetSection = card.getAttribute('data-target');
                    console.log('Click en botón de card:', targetSection);
                    showSection(targetSection);
                });
            }
        });

        console.log('✅ Navegación inicializada correctamente');
    }

    // ============= MARCO NORMATIVO =============
    function initNormativo() {
        const normativaCards = document.querySelectorAll('.normativa-card');
        
        normativaCards.forEach(card => {
            // Click en card
            card.addEventListener('click', function(e) {
                if (!e.target.closest('.btn')) {
                    const normaKey = this.getAttribute('data-norma');
                    const norma = appData.normatividad[normaKey];
                    console.log('Mostrando detalles de norma:', normaKey);
                    showNormaDetails(norma);
                }
            });

            // Navegación con teclado
            card.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    const normaKey = this.getAttribute('data-norma');
                    const norma = appData.normatividad[normaKey];
                    showNormaDetails(norma);
                }
            });

            // Botón dentro de card
            const cardButton = card.querySelector('.btn');
            if (cardButton) {
                cardButton.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    const normaKey = card.getAttribute('data-norma');
                    const norma = appData.normatividad[normaKey];
                    console.log('Click en botón de norma:', normaKey);
                    showNormaDetails(norma);
                });
            }
        });

        initQuizNormativo();
        console.log('✅ Marco Normativo inicializado');
    }

    function showNormaDetails(norma) {
        const detailsDiv = document.getElementById('norma-details');
        const titleEl = document.getElementById('norma-title');
        const descriptionEl = document.getElementById('norma-description');
        const articlesEl = document.getElementById('norma-articles');

        if (!detailsDiv || !titleEl || !descriptionEl || !articlesEl) {
            console.error('Elementos de detalles de norma no encontrados');
            return;
        }

        titleEl.textContent = norma.nombre;
        descriptionEl.textContent = norma.descripcion;
        
        articlesEl.innerHTML = '';
        norma.articulos_clave.forEach(articulo => {
            const li = document.createElement('li');
            li.textContent = articulo;
            articlesEl.appendChild(li);
        });

        detailsDiv.classList.remove('hidden');
        detailsDiv.scrollIntoView({ behavior: 'smooth' });
        console.log('Detalles de norma mostrados');
    }

    // Quiz Normativo
    function initQuizNormativo() {
        currentQuizQuestion = 0;
        quizScore = 0;
        displayQuizQuestion();
        
        const submitButton = document.getElementById('quiz-submit');
        if (submitButton) {
            submitButton.addEventListener('click', checkQuizAnswer);
        }
    }

    function displayQuizQuestion() {
        if (currentQuizQuestion >= appData.quiz_normativo.length) return;
        
        const question = appData.quiz_normativo[currentQuizQuestion];
        const questionEl = document.getElementById('quiz-question');
        const optionsEl = document.getElementById('quiz-options');
        const questionNumberEl = document.getElementById('question-number');
        const totalQuestionsEl = document.getElementById('total-questions');
        const progressFill = document.getElementById('progress-fill');

        if (!questionEl || !optionsEl) return;

        questionEl.textContent = question.question;
        if (questionNumberEl) questionNumberEl.textContent = currentQuizQuestion + 1;
        if (totalQuestionsEl) totalQuestionsEl.textContent = appData.quiz_normativo.length;
        if (progressFill) {
            const progressPercent = ((currentQuizQuestion + 1) / appData.quiz_normativo.length) * 100;
            progressFill.style.width = progressPercent + '%';
        }

        optionsEl.innerHTML = '';
        question.options.forEach((option, index) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'quiz-option';
            optionDiv.textContent = option;
            optionDiv.setAttribute('data-index', index);
            optionDiv.setAttribute('tabindex', '0');
            optionDiv.setAttribute('role', 'button');
            
            optionDiv.addEventListener('click', function() {
                document.querySelectorAll('.quiz-option').forEach(opt => opt.classList.remove('selected'));
                this.classList.add('selected');
            });

            optionDiv.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    document.querySelectorAll('.quiz-option').forEach(opt => opt.classList.remove('selected'));
                    this.classList.add('selected');
                }
            });
            
            optionsEl.appendChild(optionDiv);
        });

        const feedbackEl = document.getElementById('quiz-feedback');
        if (feedbackEl) feedbackEl.innerHTML = '';
    }

    function checkQuizAnswer() {
        const selectedOption = document.querySelector('.quiz-option.selected');
        const feedbackEl = document.getElementById('quiz-feedback');
        const submitButton = document.getElementById('quiz-submit');

        if (!selectedOption) {
            if (feedbackEl) {
                feedbackEl.innerHTML = '<div class="quiz-feedback error">⚠️ Por favor selecciona una respuesta antes de continuar</div>';
            }
            return;
        }

        const selectedIndex = parseInt(selectedOption.getAttribute('data-index'));
        const correctIndex = appData.quiz_normativo[currentQuizQuestion].correct;
        const explanation = appData.quiz_normativo[currentQuizQuestion].explanation;

        document.querySelectorAll('.quiz-option').forEach((option, index) => {
            option.style.pointerEvents = 'none';
            if (index === correctIndex) {
                option.classList.add('correct');
            } else if (index === selectedIndex && index !== correctIndex) {
                option.classList.add('incorrect');
            }
        });

        let feedbackMessage = '';
        if (selectedIndex === correctIndex) {
            quizScore++;
            feedbackMessage = `<div class="quiz-feedback success">✅ ¡Correcto! ${explanation}</div>`;
        } else {
            feedbackMessage = `<div class="quiz-feedback error">❌ Incorrecto. ${explanation}</div>`;
        }

        if (feedbackEl) feedbackEl.innerHTML = feedbackMessage;

        currentQuizQuestion++;
        
        if (currentQuizQuestion < appData.quiz_normativo.length) {
            if (submitButton) {
                submitButton.textContent = '➡️ Siguiente Pregunta';
                submitButton.onclick = function() {
                    displayQuizQuestion();
                    submitButton.textContent = '✅ Verificar Respuesta';
                    submitButton.onclick = checkQuizAnswer;
                    // Re-habilitar opciones
                    document.querySelectorAll('.quiz-option').forEach(opt => {
                        opt.style.pointerEvents = 'auto';
                        opt.classList.remove('correct', 'incorrect', 'selected');
                    });
                };
            }
        } else {
            const finalPercentage = Math.round((quizScore / appData.quiz_normativo.length) * 100);
            if (feedbackEl) {
                feedbackEl.innerHTML += `<div class="quiz-feedback success">🎉 <strong>Quiz completado</strong><br>
                Puntuación final: ${quizScore}/${appData.quiz_normativo.length} (${finalPercentage}%)<br>
                ${finalPercentage >= 80 ? '¡Excelente dominio del marco normativo!' : 'Se recomienda revisar nuevamente el contenido.'}</div>`;
            }
            if (submitButton) submitButton.style.display = 'none';
        }
    }

    // ============= PROCESO DE ORGANIZACIÓN =============
    function initProceso() {
        const stepsGrid = document.getElementById('steps-grid');
        
        if (stepsGrid) {
            stepsGrid.innerHTML = '';
            appData.proceso_organizacion.forEach(step => {
                const stepCard = document.createElement('div');
                stepCard.className = 'step-card';
                stepCard.setAttribute('data-step', step.paso);
                stepCard.setAttribute('tabindex', '0');
                stepCard.setAttribute('role', 'button');
                stepCard.innerHTML = `
                    <h4>${step.nombre}</h4>
                    <p>${step.descripcion}</p>
                `;
                
                stepCard.addEventListener('click', function() {
                    console.log('Click en paso:', step.paso);
                    showStepDetails(step);
                });

                stepCard.addEventListener('keydown', function(e) {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        showStepDetails(step);
                    }
                });
                
                stepsGrid.appendChild(stepCard);
            });
        }
        console.log('✅ Proceso de Organización inicializado');
    }

    function showStepDetails(step) {
        const detailsDiv = document.getElementById('step-details');
        const titleEl = document.getElementById('step-title');
        const descriptionEl = document.getElementById('step-description');
        const activitiesEl = document.getElementById('step-activities');
        const checklistEl = document.getElementById('step-checklist');
        const warningsEl = document.getElementById('step-warnings');
        const tipsEl = document.getElementById('step-tips');

        if (!detailsDiv || !titleEl || !descriptionEl || !activitiesEl || !checklistEl) {
            console.error('Elementos de detalles de paso no encontrados');
            return;
        }

        currentStep = step;
        titleEl.textContent = `Paso ${step.paso}: ${step.nombre}`;
        descriptionEl.textContent = step.descripcion;
        
        // Actividades
        activitiesEl.innerHTML = '';
        step.actividades.forEach(actividad => {
            const li = document.createElement('li');
            li.textContent = actividad;
            activitiesEl.appendChild(li);
        });

        // Checklist interactivo
        checklistEl.innerHTML = '';
        step.actividades.forEach((actividad, index) => {
            const checklistItem = document.createElement('div');
            checklistItem.className = 'checklist-item';
            checklistItem.innerHTML = `
                <input type="checkbox" id="check-${step.paso}-${index}" class="checklist-checkbox">
                <label for="check-${step.paso}-${index}">${actividad}</label>
            `;
            checklistEl.appendChild(checklistItem);
        });

        // Warnings
        if (warningsEl && step.warnings) {
            warningsEl.innerHTML = '';
            step.warnings.forEach(warning => {
                const warningItem = document.createElement('div');
                warningItem.innerHTML = `⚠️ ${warning}`;
                warningItem.style.color = 'var(--color-error-red)';
                warningItem.style.marginBottom = 'var(--space-8)';
                warningsEl.appendChild(warningItem);
            });
        }

        // Tips
        if (tipsEl && step.tips) {
            tipsEl.innerHTML = '';
            step.tips.forEach(tip => {
                const tipItem = document.createElement('div');
                tipItem.innerHTML = `💡 ${tip}`;
                tipItem.style.color = 'var(--color-success-green)';
                tipItem.style.marginBottom = 'var(--space-8)';
                tipsEl.appendChild(tipItem);
            });
        }

        detailsDiv.classList.remove('hidden');
        detailsDiv.scrollIntoView({ behavior: 'smooth' });
        console.log('Detalles de paso mostrados:', step.paso);
    }

    // ============= CASOS PRÁCTICOS =============
    function initCasosPracticos() {
        initExerciseTabs();
        initClassificationExercise();
        initFoliationExercise();
        initExpedienteExercise();
        initRotuladoExercise();
        console.log('✅ Casos Prácticos inicializados');
    }

    function initExerciseTabs() {
        const tabButtons = document.querySelectorAll('.tab-button');
        const exercises = document.querySelectorAll('.exercise');

        tabButtons.forEach(button => {
            button.addEventListener('click', function() {
                const exerciseId = this.getAttribute('data-exercise');
                console.log('Cambiando a ejercicio:', exerciseId);
                
                tabButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                exercises.forEach(ex => ex.classList.remove('active'));
                const targetExercise = document.getElementById(`ejercicio-${exerciseId}`);
                if (targetExercise) {
                    targetExercise.classList.add('active');
                    console.log('Ejercicio mostrado:', exerciseId);
                }
            });
        });
    }

    // Ejercicio de Clasificación
    function initClassificationExercise() {
        const documentsList = document.getElementById('documents-list');
        const seriesList = document.getElementById('series-list');
        const checkButton = document.getElementById('check-classification');
        const resetButton = document.getElementById('reset-classification');
        
        if (!documentsList || !seriesList) {
            console.error('Elementos de clasificación no encontrados');
            return;
        }
        
        let classificationScore = 0;

        function setupClassificationGame() {
            documentsList.innerHTML = '';
            seriesList.innerHTML = '';
            classificationScore = 0;
            updateScore('classification-score', classificationScore);

            // Crear documentos
            appData.ejercicios_clasificacion.forEach((ejercicio, index) => {
                const docElement = document.createElement('div');
                docElement.className = 'document-item';
                docElement.textContent = ejercicio.documento;
                docElement.draggable = true;
                docElement.setAttribute('data-document', index);
                docElement.setAttribute('tabindex', '0');
                
                docElement.addEventListener('dragstart', function(e) {
                    e.dataTransfer.setData('text/plain', index);
                    this.classList.add('dragging');
                });
                
                docElement.addEventListener('dragend', function() {
                    this.classList.remove('dragging');
                });
                
                documentsList.appendChild(docElement);
            });

            // Crear series
            const allSeries = [...new Set(appData.ejercicios_clasificacion.flatMap(ej => ej.opciones))];
            allSeries.forEach(serie => {
                const serieZone = document.createElement('div');
                serieZone.className = 'series-drop-zone';
                serieZone.textContent = serie;
                serieZone.setAttribute('data-serie', serie);
                
                serieZone.addEventListener('dragover', function(e) {
                    e.preventDefault();
                    this.classList.add('drag-over');
                });
                
                serieZone.addEventListener('dragleave', function() {
                    this.classList.remove('drag-over');
                });
                
                serieZone.addEventListener('drop', function(e) {
                    e.preventDefault();
                    this.classList.remove('drag-over');
                    
                    const documentIndex = e.dataTransfer.getData('text/plain');
                    const documentElement = document.querySelector(`[data-document="${documentIndex}"]`);
                    
                    if (documentElement) {
                        this.appendChild(documentElement);
                        documentElement.draggable = false;
                        console.log('Documento clasificado:', documentElement.textContent, 'en', serie);
                    }
                });
                
                seriesList.appendChild(serieZone);
            });
            
            console.log('Ejercicio de clasificación configurado');
        }

        function checkClassification() {
            classificationScore = 0;
            const dropZones = document.querySelectorAll('.series-drop-zone');
            
            dropZones.forEach(zone => {
                zone.classList.remove('correct', 'incorrect');
                const documents = zone.querySelectorAll('.document-item');
                
                documents.forEach(doc => {
                    const docIndex = parseInt(doc.getAttribute('data-document'));
                    const correctSerie = appData.ejercicios_clasificacion[docIndex].serie_correcta;
                    const currentSerie = zone.getAttribute('data-serie');
                    
                    if (correctSerie === currentSerie) {
                        zone.classList.add('correct');
                        classificationScore++;
                    } else {
                        zone.classList.add('incorrect');
                    }
                });
            });

            updateScore('classification-score', classificationScore);
            
            const feedback = document.getElementById('classification-feedback');
            if (feedback) {
                const total = appData.ejercicios_clasificacion.length;
                if (classificationScore === total) {
                    feedback.innerHTML = '<div class="exercise-feedback success">🎉 ¡Excelente! Has clasificado todos los documentos correctamente según las series de la TRD.</div>';
                } else {
                    feedback.innerHTML = `<div class="exercise-feedback error">📋 Puntuación: ${classificationScore}/${total}. Algunos documentos no están en la serie correcta. Revisa la TRD y vuelve a intentar.</div>`;
                }
            }
            
            console.log('Clasificación verificada. Puntuación:', classificationScore);
        }

        setupClassificationGame();
        
        if (checkButton) checkButton.addEventListener('click', checkClassification);
        if (resetButton) resetButton.addEventListener('click', setupClassificationGame);
    }

    // Ejercicio de Foliación
    function initFoliationExercise() {
        const foliationDocs = document.getElementById('foliation-documents');
        const checkButton = document.getElementById('check-foliation');
        const resetButton = document.getElementById('reset-foliation');
        
        if (!foliationDocs) {
            console.error('Contenedor de foliación no encontrado');
            return;
        }
        
        let foliationScore = 0;

        function setupFoliationGame() {
            foliationDocs.innerHTML = '';
            foliationScore = 0;
            updateScore('foliation-score', foliationScore);

            // Mezclar documentos
            const shuffledDocs = [...appData.ejercicios_foliacion].sort(() => Math.random() - 0.5);

            shuffledDocs.forEach((doc, index) => {
                const docElement = document.createElement('div');
                docElement.className = 'foliation-doc';
                docElement.innerHTML = `
                    <div class="doc-header">
                        <strong>${doc.name}</strong>
                    </div>
                    <div class="doc-date">📅 ${doc.date}</div>
                    <div class="folio-input-container">
                        <label for="folio-${index}">Folio #:</label>
                        <input type="number" 
                               id="folio-${index}"
                               class="foliation-input" 
                               data-correct="${doc.correctOrder}" 
                               min="1" 
                               max="${appData.ejercicios_foliacion.length}"
                               placeholder="Número">
                    </div>
                `;
                foliationDocs.appendChild(docElement);
            });
            
            console.log('Ejercicio de foliación configurado');
        }

        function checkFoliation() {
            foliationScore = 0;
            const inputs = document.querySelectorAll('.foliation-input');
            
            inputs.forEach(input => {
                input.classList.remove('correct', 'incorrect');
                const userValue = parseInt(input.value);
                const correctValue = parseInt(input.getAttribute('data-correct'));
                
                if (userValue === correctValue) {
                    input.classList.add('correct');
                    foliationScore++;
                } else {
                    input.classList.add('incorrect');
                }
            });

            updateScore('foliation-score', foliationScore);
            
            const feedback = document.getElementById('foliation-feedback');
            if (feedback) {
                const total = appData.ejercicios_foliacion.length;
                if (foliationScore === total) {
                    feedback.innerHTML = '<div class="exercise-feedback success">🎉 ¡Perfecto! Has foliado todos los documentos en orden cronológico correcto.</div>';
                } else {
                    feedback.innerHTML = `<div class="exercise-feedback error">📄 Puntuación: ${foliationScore}/${total}. Algunos folios no están en orden cronológico. Recuerda: más antiguo = folio menor.</div>`;
                }
            }
            
            console.log('Foliación verificada. Puntuación:', foliationScore);
        }

        setupFoliationGame();
        
        if (checkButton) checkButton.addEventListener('click', checkFoliation);
        if (resetButton) resetButton.addEventListener('click', setupFoliationGame);
    }

    // Ejercicio de Expedientes
    function initExpedienteExercise() {
        const expedienteDocs = document.getElementById('expediente-documents');
        const checkButton = document.getElementById('check-expediente');
        const resetButton = document.getElementById('reset-expediente');
        
        if (!expedienteDocs) {
            console.error('Contenedor de expedientes no encontrado');
            return;
        }
        
        let expedienteScore = 0;
        let selectedDocs = [];

        function setupExpedienteGame() {
            expedienteDocs.innerHTML = '';
            expedienteScore = 0;
            selectedDocs = [];
            updateScore('expediente-score', expedienteScore);

            // Mezclar documentos
            const shuffledDocs = [...appData.ejercicios_expedientes].sort(() => Math.random() - 0.5);

            shuffledDocs.forEach((doc, index) => {
                const docElement = document.createElement('div');
                docElement.className = 'expediente-doc';
                docElement.setAttribute('tabindex', '0');
                docElement.innerHTML = `
                    <div class="doc-number">#</div>
                    <div class="doc-content">
                        <strong>${doc.name}</strong>
                        <div class="doc-date">📅 ${doc.date}</div>
                    </div>
                `;
                docElement.setAttribute('data-order', doc.order);
                docElement.setAttribute('data-name', doc.name);
                docElement.setAttribute('data-date', doc.date);
                
                docElement.addEventListener('click', function() {
                    if (this.classList.contains('selected')) {
                        this.classList.remove('selected');
                        selectedDocs = selectedDocs.filter(d => d.name !== doc.name);
                    } else {
                        this.classList.add('selected');
                        selectedDocs.push(doc);
                    }
                    updateDocumentOrder();
                });

                docElement.addEventListener('keydown', function(e) {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        this.click();
                    }
                });
                
                expedienteDocs.appendChild(docElement);
            });
            
            console.log('Ejercicio de expedientes configurado');
        }

        function updateDocumentOrder() {
            // Mostrar orden de selección
            selectedDocs.forEach((doc, selectionIndex) => {
                const docElement = document.querySelector(`[data-name="${doc.name}"]`);
                if (docElement) {
                    const numberDiv = docElement.querySelector('.doc-number');
                    if (numberDiv) {
                        numberDiv.textContent = selectionIndex + 1;
                    }
                    docElement.style.order = selectionIndex;
                }
            });

            // Limpiar números de documentos no seleccionados
            document.querySelectorAll('.expediente-doc:not(.selected) .doc-number').forEach(num => {
                num.textContent = '#';
            });
        }

        function checkExpediente() {
            expedienteScore = 0;
            const selectedElements = document.querySelectorAll('.expediente-doc.selected');
            
            selectedElements.forEach(el => el.classList.remove('correct-order', 'incorrect-order'));
            
            if (selectedDocs.length === appData.ejercicios_expedientes.length) {
                // Verificar orden cronológico
                const sortedBySelection = [...selectedDocs];
                const sortedByDate = [...selectedDocs].sort((a, b) => new Date(a.date) - new Date(b.date));
                
                let isCorrectOrder = true;
                for (let i = 0; i < sortedBySelection.length; i++) {
                    const selectedDoc = document.querySelector(`[data-name="${sortedBySelection[i].name}"]`);
                    if (sortedBySelection[i].name === sortedByDate[i].name) {
                        if (selectedDoc) selectedDoc.classList.add('correct-order');
                        expedienteScore++;
                    } else {
                        if (selectedDoc) selectedDoc.classList.add('incorrect-order');
                        isCorrectOrder = false;
                    }
                }
                
                updateScore('expediente-score', expedienteScore);
                
                const feedback = document.getElementById('expediente-feedback');
                if (feedback) {
                    const total = appData.ejercicios_expedientes.length;
                    if (isCorrectOrder) {
                        feedback.innerHTML = '<div class="exercise-feedback success">🎉 ¡Excelente! Has conformado el expediente en orden cronológico perfecto.</div>';
                    } else {
                        feedback.innerHTML = `<div class="exercise-feedback error">📋 Puntuación: ${expedienteScore}/${total}. El orden cronológico no es correcto. Revisa las fechas de los documentos.</div>`;
                    }
                }
            } else {
                const feedback = document.getElementById('expediente-feedback');
                if (feedback) {
                    feedback.innerHTML = '<div class="exercise-feedback error">📋 Debes seleccionar todos los documentos en el orden cronológico correcto para formar el expediente.</div>';
                }
            }
            
            console.log('Expediente verificado. Puntuación:', expedienteScore);
        }

        setupExpedienteGame();
        
        if (checkButton) checkButton.addEventListener('click', checkExpediente);
        if (resetButton) resetButton.addEventListener('click', setupExpedienteGame);
    }

    // Ejercicio de Rotulado
    function initRotuladoExercise() {
        const checkButton = document.getElementById('check-rotulo');
        const resetButton = document.getElementById('reset-rotulo');
        
        // Live preview
        const inputs = ['entidad', 'serie', 'fechas', 'folios'];
        inputs.forEach(inputId => {
            const input = document.getElementById(inputId);
            const preview = document.getElementById(`preview-${inputId}`);
            
            if (input && preview) {
                input.addEventListener('input', function() {
                    preview.textContent = this.value || '_______________';
                });
            }
        });

        function checkRotulo() {
            const entidad = document.getElementById('entidad').value;
            const serie = document.getElementById('serie').value;
            const fechas = document.getElementById('fechas').value;
            const folios = document.getElementById('folios').value;
            
            const feedback = document.getElementById('rotulado-feedback');
            let errors = [];
            
            if (!entidad.trim()) errors.push('Entidad es obligatoria');
            if (!serie) errors.push('Serie documental es obligatoria');
            if (!fechas.trim()) errors.push('Fechas extremas son obligatorias');
            if (!folios || folios < 1 || folios > 200) errors.push('Número de folios debe ser entre 1 y 200');
            
            if (errors.length === 0) {
                feedback.innerHTML = `
                    <div class="exercise-feedback success">
                        ✅ ¡Rótulo generado correctamente!<br>
                        <strong>Rótulo completo:</strong><br>
                        ENTIDAD: ${entidad}<br>
                        SERIE: ${serie}<br>
                        FECHAS: ${fechas}<br>
                        FOLIOS: ${folios}
                    </div>`;
            } else {
                feedback.innerHTML = `<div class="exercise-feedback error">❌ Errores encontrados:<br>• ${errors.join('<br>• ')}</div>`;
            }
            
            console.log('Rótulo verificado. Errores:', errors.length);
        }

        function resetRotulo() {
            inputs.forEach(inputId => {
                const input = document.getElementById(inputId);
                const preview = document.getElementById(`preview-${inputId}`);
                if (input) input.value = '';
                if (preview) preview.textContent = '_______________';
            });
            
            const feedback = document.getElementById('rotulado-feedback');
            if (feedback) feedback.innerHTML = '';
            
            console.log('Ejercicio de rotulado reiniciado');
        }

        if (checkButton) checkButton.addEventListener('click', checkRotulo);
        if (resetButton) resetButton.addEventListener('click', resetRotulo);
    }

    // Función auxiliar para actualizar puntuaciones
    function updateScore(scoreId, score) {
        const scoreEl = document.getElementById(scoreId);
        if (scoreEl) {
            scoreEl.textContent = score;
        } else {
            console.warn('Elemento de puntuación no encontrado:', scoreId);
        }
    }

    // ============= EVALUACIÓN =============
    function initEvaluacion() {
        generateEvaluationQuestions();
        
        const startButton = document.getElementById('start-evaluation');
        if (startButton) {
            startButton.addEventListener('click', startEvaluation);
            console.log('Botón de evaluación configurado');
        } else {
            console.error('Botón de inicio de evaluación no encontrado');
        }
        
        console.log('✅ Evaluación inicializada');
    }

    function generateEvaluationQuestions() {
        // Generar 30 preguntas distribuidas según especificación
        evaluationQuestions = [];
        
        // 8 preguntas de marco normativo
        const normativoQuestions = appData.quiz_normativo.slice(0, 8).map(q => ({
            ...q,
            category: 'Marco Normativo'
        }));
        
        // 15 preguntas sobre proceso de organización
        const procesoQuestions = [
            { question: "¿Cuál es el primer paso en la organización documental?", options: ["Ordenación", "Clasificación", "Foliación", "Depuración"], correct: 1, category: "Proceso de Organización" },
            { question: "¿Qué elementos se retiran en la depuración?", options: ["Originales", "Duplicados y grapas", "Fechas", "Folios numerados"], correct: 1, category: "Proceso de Organización" },
            { question: "¿Cómo se debe ordenar cronológicamente?", options: ["Más reciente primero", "Más antiguo primero", "Por importancia", "Por tamaño"], correct: 1, category: "Proceso de Organización" },
            { question: "¿Con qué se debe foliar?", options: ["Bolígrafo", "Marcador", "Lápiz mina negra", "Tinta"], correct: 2, category: "Proceso de Organización" },
            { question: "¿Dónde se coloca el número de folio?", options: ["Centro de la hoja", "Esquina inferior izquierda", "Esquina superior derecha del recto", "En el verso"], correct: 2, category: "Proceso de Organización" },
            { question: "¿Cuál es la capacidad máxima por carpeta?", options: ["150 folios", "200 folios", "250 folios", "300 folios"], correct: 1, category: "Proceso de Organización" },
            { question: "¿Qué significa TRD?", options: ["Transferencia de Documentos", "Tabla de Retención Documental", "Trámite de Documentos", "Tipo de Documento"], correct: 1, category: "Proceso de Organización" },
            { question: "¿Qué es una serie documental?", options: ["Un archivo completo", "Conjunto de documentos homogéneos", "Una carpeta", "Un expediente"], correct: 1, category: "Proceso de Organización" },
            { question: "¿Cuántos pasos tiene el proceso de organización?", options: ["5 pasos", "6 pasos", "7 pasos", "8 pasos"], correct: 2, category: "Proceso de Organización" },
            { question: "¿Qué es un expediente?", options: ["Una carpeta vacía", "Unidad documental compleja de un asunto", "Un archivo digital", "Una serie completa"], correct: 1, category: "Proceso de Organización" },
            { question: "¿Para qué sirve la foliación?", options: ["Decorar documentos", "Numerar consecutivamente", "Clasificar series", "Archivar"], correct: 1, category: "Proceso de Organización" },
            { question: "¿Qué información debe tener un rótulo?", options: ["Solo el nombre", "Entidad, serie, fechas, folios", "Solo la fecha", "Solo el código"], correct: 1, category: "Proceso de Organización" },
            { question: "¿Qué documentos NO se conservan en depuración?", options: ["Originales", "Duplicados idénticos", "Documentos firmados", "Folios importantes"], correct: 1, category: "Proceso de Organización" },
            { question: "¿Cuál es el formato para inventarios?", options: ["FORD", "FUID", "FUND", "FARD"], correct: 1, category: "Proceso de Organización" },
            { question: "¿En qué orden se realiza la organización?", options: ["Aleatoriamente", "Según urgencia", "Siguiendo los 7 pasos secuenciales", "Por disponibilidad"], correct: 2, category: "Proceso de Organización" }
        ];
        
        // 7 preguntas de casos prácticos
        const casosQuestions = [
            { question: "Una Resolución de nombramiento pertenece a la serie:", options: ["Correspondencia", "Resoluciones Administrativas", "Contratos", "Actas"], correct: 1, category: "Casos Prácticos" },
            { question: "Si un documento tiene fecha 2024-01-15 y otro 2024-01-10, ¿cuál va primero?", options: ["2024-01-15", "2024-01-10", "El más importante", "Da igual"], correct: 1, category: "Casos Prácticos" },
            { question: "En un expediente de 50 folios, el último debe numerarse:", options: ["49", "50", "51", "No se numera"], correct: 1, category: "Casos Prácticos" },
            { question: "Si una carpeta tiene 200 folios y llega un documento más, debes:", options: ["Forzarlo en la carpeta", "Crear nueva carpeta", "Eliminarlo", "Comprimirlo"], correct: 1, category: "Casos Prácticos" },
            { question: "Un derecho de petición se clasifica en:", options: ["Correspondencia", "Peticiones", "Quejas", "Informes"], correct: 1, category: "Casos Prácticos" },
            { question: "Al encontrar 3 copias idénticas de un documento, debes:", options: ["Conservar las 3", "Conservar 1 original", "Conservar 2 copias", "Eliminar todas"], correct: 1, category: "Casos Prácticos" },
            { question: "El rótulo de una carpeta debe incluir:", options: ["Solo la serie", "Solo las fechas", "Entidad, serie, fechas y folios", "Solo el código"], correct: 2, category: "Casos Prácticos" }
        ];

        // Combinar todas las preguntas
        evaluationQuestions = [...normativoQuestions, ...procesoQuestions, ...casosQuestions];
        
        // Mezclar preguntas
        evaluationQuestions = evaluationQuestions.sort(() => Math.random() - 0.5);
        
        console.log('Preguntas de evaluación generadas:', evaluationQuestions.length);
    }

    function startEvaluation() {
        const startDiv = document.getElementById('evaluation-start');
        const quizDiv = document.getElementById('evaluation-quiz');
        const totalEl = document.getElementById('eval-total');
        
        if (startDiv) startDiv.classList.add('hidden');
        if (quizDiv) quizDiv.classList.remove('hidden');
        if (totalEl) totalEl.textContent = evaluationQuestions.length;
        
        currentEvalQuestion = 0;
        evaluationScore = 0;
        evaluationAnswers = [];
        
        displayEvaluationQuestion();
        
        const submitButton = document.getElementById('eval-submit');
        if (submitButton) {
            submitButton.addEventListener('click', checkEvaluationAnswer);
        }
        
        console.log('Evaluación iniciada');
    }

    function displayEvaluationQuestion() {
        if (currentEvalQuestion >= evaluationQuestions.length) {
            showEvaluationResults();
            return;
        }

        const question = evaluationQuestions[currentEvalQuestion];
        const questionEl = document.getElementById('eval-question');
        const optionsEl = document.getElementById('eval-options');
        const currentEl = document.getElementById('eval-current');
        const categoryEl = document.getElementById('eval-category');
        const progressFill = document.getElementById('eval-progress-fill');

        if (questionEl) questionEl.textContent = question.question;
        if (currentEl) currentEl.textContent = currentEvalQuestion + 1;
        if (categoryEl) categoryEl.textContent = question.category;
        if (progressFill) {
            const progressPercent = ((currentEvalQuestion + 1) / evaluationQuestions.length) * 100;
            progressFill.style.width = progressPercent + '%';
        }

        if (optionsEl) {
            optionsEl.innerHTML = '';
            question.options.forEach((option, index) => {
                const optionDiv = document.createElement('div');
                optionDiv.className = 'quiz-option';
                optionDiv.textContent = option;
                optionDiv.setAttribute('data-index', index);
                optionDiv.setAttribute('tabindex', '0');
                
                optionDiv.addEventListener('click', function() {
                    document.querySelectorAll('.quiz-option').forEach(opt => opt.classList.remove('selected'));
                    this.classList.add('selected');
                });

                optionDiv.addEventListener('keydown', function(e) {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        document.querySelectorAll('.quiz-option').forEach(opt => opt.classList.remove('selected'));
                        this.classList.add('selected');
                    }
                });
                
                optionsEl.appendChild(optionDiv);
            });
        }

        const feedbackEl = document.getElementById('eval-feedback');
        if (feedbackEl) feedbackEl.innerHTML = '';
    }

    function checkEvaluationAnswer() {
        const selectedOption = document.querySelector('.quiz-option.selected');
        const feedbackEl = document.getElementById('eval-feedback');

        if (!selectedOption) {
            if (feedbackEl) {
                feedbackEl.innerHTML = '<div class="quiz-feedback error">⚠️ Por favor selecciona una respuesta</div>';
            }
            return;
        }

        const selectedIndex = parseInt(selectedOption.getAttribute('data-index'));
        const correctIndex = evaluationQuestions[currentEvalQuestion].correct;
        const isCorrect = selectedIndex === correctIndex;
        
        // Registrar respuesta
        evaluationAnswers.push({
            questionIndex: currentEvalQuestion,
            selectedIndex,
            correctIndex,
            isCorrect,
            category: evaluationQuestions[currentEvalQuestion].category
        });

        if (isCorrect) evaluationScore++;

        // Mostrar feedback visual
        document.querySelectorAll('.quiz-option').forEach((option, index) => {
            option.style.pointerEvents = 'none';
            if (index === correctIndex) {
                option.classList.add('correct');
            } else if (index === selectedIndex && index !== correctIndex) {
                option.classList.add('incorrect');
            }
        });

        if (feedbackEl) {
            feedbackEl.innerHTML = isCorrect ? 
                '<div class="quiz-feedback success">✅ Correcto</div>' :
                '<div class="quiz-feedback error">❌ Incorrecto</div>';
        }

        currentEvalQuestion++;
        
        // Continuar o finalizar
        setTimeout(() => {
            if (currentEvalQuestion < evaluationQuestions.length) {
                displayEvaluationQuestion();
            } else {
                showEvaluationResults();
            }
        }, 1500);
    }

    function showEvaluationResults() {
        const quizDiv = document.getElementById('evaluation-quiz');
        const resultsDiv = document.getElementById('evaluation-results');
        
        if (quizDiv) quizDiv.classList.add('hidden');
        if (resultsDiv) resultsDiv.classList.remove('hidden');
        
        // Calcular resultados
        const totalQuestions = evaluationQuestions.length;
        const percentage = Math.round((evaluationScore / totalQuestions) * 100);
        const passed = percentage >= 80;
        
        // Mostrar puntuación
        const finalScoreEl = document.getElementById('final-score');
        const finalTotalEl = document.getElementById('final-total');
        const scorePercentageEl = document.getElementById('score-percentage');
        const resultsMessageEl = document.getElementById('results-message');
        const resultsTitleEl = document.getElementById('results-title');
        
        if (finalScoreEl) finalScoreEl.textContent = evaluationScore;
        if (finalTotalEl) finalTotalEl.textContent = totalQuestions;
        if (scorePercentageEl) scorePercentageEl.textContent = percentage + '%';
        
        if (resultsTitleEl) {
            resultsTitleEl.textContent = passed ? '🎉 ¡Felicitaciones!' : '📚 Sigue Estudiando';
        }
        
        if (resultsMessageEl) {
            if (passed) {
                resultsMessageEl.innerHTML = `
                    <div class="results-message success">
                        <h4>¡Has aprobado la evaluación!</h4>
                        <p>Tu puntuación de ${percentage}% demuestra un excelente dominio de la organización documental.</p>
                        <p><strong>🏆 Certificación:</strong> Has completado exitosamente el programa de capacitación en organización de archivos de gestión.</p>
                    </div>
                `;
            } else {
                resultsMessageEl.innerHTML = `
                    <div class="results-message error">
                        <h4>Puntuación insuficiente</h4>
                        <p>Tu puntuación de ${percentage}% está por debajo del 80% requerido.</p>
                        <p><strong>📖 Recomendación:</strong> Repasa los módulos y vuelve a intentar la evaluación.</p>
                    </div>
                `;
            }
        }
        
        // Desglose por categorías
        const categoryScoresEl = document.getElementById('category-scores');
        if (categoryScoresEl) {
            const categories = {};
            evaluationAnswers.forEach(answer => {
                if (!categories[answer.category]) {
                    categories[answer.category] = { correct: 0, total: 0 };
                }
                categories[answer.category].total++;
                if (answer.isCorrect) categories[answer.category].correct++;
            });
            
            let categoryHTML = '';
            Object.keys(categories).forEach(category => {
                const cat = categories[category];
                const catPercentage = Math.round((cat.correct / cat.total) * 100);
                categoryHTML += `
                    <div class="category-score">
                        <strong>${category}:</strong> ${cat.correct}/${cat.total} (${catPercentage}%)
                    </div>
                `;
            });
            
            categoryScoresEl.innerHTML = categoryHTML;
        }
        
        console.log('Resultados de evaluación mostrados. Puntuación:', evaluationScore, '/', totalQuestions);
    }

    // ============= RECURSOS =============
    function initRecursos() {
        const glossaryEl = document.getElementById('glossary');
        
        if (glossaryEl) {
            glossaryEl.innerHTML = '';
            Object.entries(appData.glosario).forEach(([term, definition]) => {
                const termDiv = document.createElement('div');
                termDiv.className = 'glossary-term';
                termDiv.innerHTML = `
                    <h5>${term.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</h5>
                    <p>${definition}</p>
                `;
                glossaryEl.appendChild(termDiv);
            });
        }

        // Quick reference modal
        const quickRefButton = document.getElementById('quick-reference');
        if (quickRefButton) {
            quickRefButton.addEventListener('click', function() {
                const modal = document.getElementById('quick-reference-modal');
                if (modal) {
                    modal.classList.remove('hidden');
                    console.log('Modal de referencia rápida abierto');
                }
            });
        } else {
            console.error('Botón de referencia rápida no encontrado');
        }
        
        console.log('✅ Recursos inicializados');
    }

    // ============= EVENTOS GLOBALES =============
    
    // Cerrar modal con Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
            closeNormaDetails();
            closeStepDetails();
            closeStepSimulator();
        }
    });

    // Cerrar modal clickeando fuera
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal') || e.target.classList.contains('modal-close')) {
            closeModal();
        }
    });

    // ============= INICIALIZACIÓN PRINCIPAL =============
    function initializeApp() {
        console.log('🚀 Iniciando aplicación...');
        
        setTimeout(() => {
            initNavigation();
            initNormativo();
            initProceso();
            initCasosPracticos();
            initEvaluacion();
            initRecursos();
            
            showSection('inicio');
            
            console.log('🎉 Aplicación de Capacitación en Organización de Archivos - Cajamarca iniciada exitosamente');
            console.log('📊 Características implementadas:');
            console.log('✅ Navegación funcional con accesibilidad mejorada');
            console.log('✅ Marco normativo con 15 preguntas de quiz interactivo');
            console.log('✅ Proceso de organización: 7 pasos detallados con simuladores');
            console.log('✅ Casos prácticos: 4 ejercicios interactivos completos');
            console.log('✅ Evaluación completa: 30 preguntas distribuidas por categorías');
            console.log('✅ Recursos: glosario especializado y enlaces externos funcionales');
            console.log('✅ Diseño responsive con colores de alto contraste WCAG AA');
            console.log('✅ Funcionalidad de modales corregida');
        }, 100);
    }

    // Ejecutar inicialización
    initializeApp();
});