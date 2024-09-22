// Objeto con la información del CV
const cv = {
  nombre: "Jorge Balmori Arenas",
  profesion: "Desarrollador Web junior",
  contacto: {
    email: "jbalmoriarenas@gmail.com",
    telefono: "+34 683 175 251",
    linkedin: "www.linkedin.com/in/jorge-balmori-arenas",
    github: "https://github.com/seedpower5",
  },
  experiencia: [
    {
      empresa: "Neuprotel",
      cargo: "Desarrollador Frontend en prácticas",
      periodo: "Marzo 2023- junio 2023",
      descripcion: "Durante mis prácticas en Neuprotel, me especialicé en el desarrollo de software empresarial personalizado, utilizando tecnologías como HTML, CSS, React y APIs para crear soluciones a medida que optimizan la gestión y administración de empresas.",
    },
    {
      empresa: "CIC Consulting Informático",
      cargo: "Bootcamp de Programación",
      periodo: "Julio 2023- Octubre 2023",
      descripcion: "Participé en un bootcamp de 3 meses sobre desarrollo de aplicaciones empresariales en Java, donde obtuve certificación y adquirí experiencia en trabajo en equipo, organización de código, y el uso de tecnologías como GitLab, GitHub, Java, Angular, Jenkins y Spring.",
    },
    {
      empresa: "CabralesAventura.Sl",
      cargo: "Desarrollador Web",
      periodo: "Enero 2023- Agosto 2024",
      descripcion: "Desarrollé la página web de la empresa de actividades turísticas Cabralesaventura y en diversos proyectos de diseño.",
    },
  ],
  educacion: [
    {
      institucion: "Ies Augusto Linares",
      estudios: "Técnico Superior Desarrollo de Aplicaciones Web",
      año: "2021 - 2023",
    },
    {
      institucion: "Colegio Calasanz Santander",
      estudios: "Bachillerato científico",
      año: "2017",
    },
  ],
  habilidades: ["JavaScript", "React", "Node.js", "CSS", "HTML", "Spring", "Java", "Angular", "Php", "Jenkins", "Mysql", "Github"],
};

// Función para generar el CV en HTML
function generarCV() {
  const cvDiv = document.getElementById("cv");

  // Formato estilo código JS con corchetes y punto y coma
  const nombreProfesion = `
      <div class="bloque">
        <span class="corchete">{</span><br>
        &nbsp;&nbsp;<span class="propiedad">nombre</span>: <span class="string">"${cv.nombre}"</span>,<br>
        &nbsp;&nbsp;<span class="propiedad">profesion</span>: <span class="string">"${cv.profesion}"</span>;<br>
        <span class="corchete-cierre">}</span>
      </div>`;
  cvDiv.innerHTML = nombreProfesion;

  // Contacto
  const contacto = `
      <div class="bloque">
        <span class="corchete">{</span><br>
        &nbsp;&nbsp;<span class="propiedad">contacto</span>: <span class="corchete">{</span><br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span class="propiedad">email</span>: <span class="string">"${cv.contacto.email}"</span>,<br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span class="propiedad">telefono</span>: <span class="string">"${cv.contacto.telefono}"</span>,<br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span class="propiedad">linkedin</span>: <a href="${cv.contacto.linkedin}" target="_blank" class="string">"${cv.contacto.linkedin}"</a>;<br>
        &nbsp;&nbsp;<span class="corchete-cierre">}</span><br>
        <span class="corchete-cierre">}</span>
      </div>`;
  cvDiv.innerHTML += contacto;

  // Experiencia
  let experiencia = `
      <div class="bloque">
        <span class="corchete">{</span><br>
        &nbsp;&nbsp;<span class="propiedad">experiencia</span>: <span class="corchete">[</span><br>`;
  cv.experiencia.forEach((exp) => {
    experiencia += `
        &nbsp;&nbsp;&nbsp;&nbsp;<span class="corchete">{</span><br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="propiedad">empresa</span>: <span class="string">"${exp.empresa}"</span>,<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="propiedad">cargo</span>: <span class="string">"${exp.cargo}"</span>,<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="propiedad">periodo</span>: <span class="string">"${exp.periodo}"</span>,<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="propiedad">descripcion</span>: <span class="string">"${exp.descripcion}"</span>;<br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span class="corchete-cierre">},</span><br>`;
  });
  experiencia += `
        &nbsp;&nbsp;<span class="corchete-cierre">]</span><br>
        <span class="corchete-cierre">}</span>
      </div>`;
  cvDiv.innerHTML += experiencia;

  // Educación
  let educacion = `
      <div class="bloque">
        <span class="corchete">{</span><br>
        &nbsp;&nbsp;<span class="propiedad">educacion</span>: <span class="corchete">[</span><br>`;
  cv.educacion.forEach((edu) => {
    educacion += `
        &nbsp;&nbsp;&nbsp;&nbsp;<span class="corchete">{</span><br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="propiedad">institucion</span>: <span class="string">"${edu.institucion}"</span>,<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="propiedad">estudios</span>: <span class="string">"${edu.estudios}"</span>,<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="propiedad">año</span>: <span class="string">"${edu.año}"</span>;<br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span class="corchete-cierre">},</span><br>`;
  });
  educacion += `
        &nbsp;&nbsp;<span class="corchete-cierre">]</span><br>
        <span class="corchete-cierre">}</span>
      </div>`;
  cvDiv.innerHTML += educacion;

  // Habilidades
  const habilidades = `
      <div class="bloque">
        <span class="corchete">{</span><br>
        &nbsp;&nbsp;<span class="propiedad">habilidades</span>: <span class="corchete">[</span><br>
        ${cv.habilidades
          .map(
            (habilidad) =>
              `&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"${habilidad}"</span>,<br>`
          )
          .join("")}
        &nbsp;&nbsp;<span class="corchete-cierre">]</span><br>
        <span class="corchete-cierre">}</span>
      </div>`;
  cvDiv.innerHTML += habilidades;
}

// Llamar a la función para generar el CV al cargar la página
window.onload = generarCV;
