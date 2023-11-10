const formulario = document.querySelector("#formulario");

//Crear evento
formulario.addEventListener("submit", validarFormulario);

//mis funciones
function validarFormulario(e) {
  e.preventDefault();
  const plan = document.querySelector("#plan").value;

  const planr = document.getElementById("plan-lo");
  planr.textContent = `${plan}`;

  const dn = document.querySelector("#dn").value;

  const dnr = document.getElementById("dn-lo");
  dnr.textContent = `${dn}`;

  const dn4 = document.querySelector("#dn4").value;

  const dn4r = document.getElementById("dn4-lo");
  dn4r.textContent = `${dn4}`;

  const grabacion = document.querySelector("#grabacion").value;

  const grabacionr = document.getElementById("grabacion-lo");
  grabacionr.textContent = `${grabacion}`;

  //Siguiente campo
  const fvc = document.querySelector("#fvc").value;

  const fvcr = document.getElementById("fvc-lo");
  fvcr.textContent = `${fvc}`;

  //Siguiente campo
  const nip = document.querySelector("#nip").value;

  const nipr = document.getElementById("nip-lo");
  nipr.textContent = `${nip}`;
  //Siguiente campo
  const vigencia = document.querySelector("#vigencia").value;

  const vigenciar = document.getElementById("vigencia-lo");
  vigenciar.textContent = `${vigencia}`;

  //Siguiente campo
  const nombres = document.querySelector("#nombres").value;

  const nombresr = document.getElementById("nombres-lo");
  nombresr.textContent = `${nombres}`;

  //Siguiente campo
  const apellidopat = document.querySelector("#apellido-pat").value;

  const apellidopatr = document.getElementById("apellido-pat-lo");
  apellidopatr.textContent = `${apellidopat}`;

  //Siguiente campo
  const apellidomat = document.querySelector("#apellido-mat").value;

  const apellidomatr = document.getElementById("apellido-mat-lo");
  apellidomatr.textContent = `${apellidomat}`;

  //Siguiente campo
  const curp = document.querySelector("#curp").value;

  const curpr = document.getElementById("curp-lo");
  curpr.textContent = `${curp}`;

  //Siguiente campo
  const user = document.querySelector("#user").value;

  const userr = document.getElementById("user-lo");
  userr.textContent = `${user}`;

  //Siguiente campo
  const fechanac = document.querySelector("#fechanac").value;

  const fechanacr = document.getElementById("fechanac-lo");
  fechanacr.textContent = `${fechanac}`;

  //Siguiente campo
  const lugarnac = document.querySelector("#lugarnac").value;

  const lugarnacr = document.getElementById("lugarnac-lo");
  lugarnacr.textContent = `${lugarnac}`;

   //Siguiente campo
   const rfc = document.querySelector("#rfc").value;

   const rfcr = document.getElementById("rfc-lo");
   rfcr.textContent = `${rfc}`;

  //Siguiente campo
  const calle = document.querySelector("#calle").value;

  const caller = document.getElementById("calle-lo");
  caller.textContent = `${calle}`;

  //Siguiente campo
  const numext = document.querySelector("#numext").value;

  const numextr = document.getElementById("numext-lo");
  numextr.textContent = `${numext}`;

  //Siguiente campo
  const numint = document.querySelector("#numint").value;

  const numintr = document.getElementById("numint-lo");
  numintr.textContent = `${numint}`;

  //Siguiente campo
  const colfracc = document.querySelector("#colfracc").value;

  const colfraccr = document.getElementById("colfracc-lo");
  colfraccr.textContent = `${colfracc}`;

   //Siguiente campo
   const cp = document.querySelector("#cp").value;

   const cpr = document.getElementById("cp-lo");
   cpr.textContent = `${cp}`;

  //Siguiente campo
  const entrecalles = document.querySelector("#entrecalles").value;

  const entrecallesr = document.getElementById("entrecalles-lo");
  entrecallesr.textContent = `${entrecalles}`;

  //Siguiente campo
  const referencias = document.querySelector("#referencias").value;

  const referenciasr = document.getElementById("referencias-lo");
  referenciasr.textContent = `${referencias}`;

  //Siguiente campo
  const del = document.querySelector("#del").value;

  const delr = document.getElementById("del-lo");
  delr.textContent = `${del}`;

  //Siguiente campo
  const estado = document.querySelector("#estado").value;

  const estador = document.getElementById("estado-lo");
  estador.textContent = `${estado}`;

  //Siguiente campo
  const contactouno = document.querySelector("#contactouno").value;

  const contactounor = document.getElementById("contactouno-lo");
  contactounor.textContent = `${contactouno}`;

  //Siguiente campo
  const contactodos = document.querySelector("#contactodos").value;

  const contactodosr = document.getElementById("contactodos-lo");
  contactodosr.textContent = `${contactodos}`;

  //Siguiente campo
  const email = document.querySelector("#email").value;

  const emailr = document.getElementById("email-lo");
  emailr.textContent = `${email}`;

  //Siguiente campo
  const idine = document.querySelector("#idine").value;

  const idiner = document.getElementById("idine-lo");
  idiner.textContent = `${idine}`;

  //Siguiente campo
  const cac = document.querySelector("#cac").value;

  const cacr = document.getElementById("cac-lo");
  cacr.textContent = `${cac}`;

  //Siguiente campo
  const ejecutivo = document.querySelector("#ejecutivo").value;

  const ejecutivor = document.getElementById("ejecutivo-lo");
  ejecutivor.textContent = `${ejecutivo}`;

  //Siguiente campo
  const validador = document.querySelector("#validador").value;

  const validadorr = document.getElementById("validador-lo");
  validadorr.textContent = `${validador}`;
}

