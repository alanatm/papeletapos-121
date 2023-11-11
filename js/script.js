const formulario = document.querySelector("#formulario");

//Crear evento
formulario.addEventListener("submit", validarFormulario);

//mis funciones
//Captura la información del input, lo minimiza y muestra
function validarFormulario(e) {
  e.preventDefault();

  const plan = document.querySelector("#plan").value;
  const planmin = plan.toLowerCase();
  const planr = document.getElementById("plan-lo");
  planr.textContent = `${planmin}`;

  const dn = document.querySelector("#dn").value;
  const dnmin = dn.toLowerCase();
  const dnr = document.getElementById("dn-lo");
  dnr.textContent = `${dnmin}`;

  const dn4 = document.querySelector("#dn4").value;
  const dn4min = dn4.toLowerCase();
  const dn4r = document.getElementById("dn4-lo");
  dn4r.textContent = `${dn4min}`;

  const grabacion = document.querySelector("#grabacion").value;
  const grabacionmin = grabacion.toLowerCase();
  const grabacionr = document.getElementById("grabacion-lo");
  grabacionr.textContent = `${grabacionmin}`;

  //Siguiente campo
  const fvc = document.querySelector("#fvc").value;
  const fvcmin = fvc.toLowerCase();
  const fvcr = document.getElementById("fvc-lo");
  fvcr.textContent = `${fvcmin}`;

  //Siguiente campo
  const nip = document.querySelector("#nip").value;
  const nipmin = nip.toLowerCase();
  const nipr = document.getElementById("nip-lo");
  nipr.textContent = `${nipmin}`;
  //Siguiente campo
  const vigencia = document.querySelector("#vigencia").value;
  const vigenciamin = vigencia.toLowerCase();
  const vigenciar = document.getElementById("vigencia-lo");
  vigenciar.textContent = `${vigenciamin}`;

  //Siguiente campo
  const nombres = document.querySelector("#nombres").value;
  const nombresmin = nombres.toLowerCase();
  const nombresr = document.getElementById("nombres-lo");
  nombresr.textContent = `${nombresmin}`;

  //Siguiente campo
  const apellidopat = document.querySelector("#apellido-pat").value;
  const apellidopatmin = apellidopat.toLowerCase();
  const apellidopatr = document.getElementById("apellido-pat-lo");
  apellidopatr.textContent = `${apellidopatmin}`;

  //Siguiente campo
  const apellidomat = document.querySelector("#apellido-mat").value;
  const apellidomatmin = apellidomat.toLowerCase();
  const apellidomatr = document.getElementById("apellido-mat-lo");
  apellidomatr.textContent = `${apellidomatmin}`;

  //Siguiente campo
  const curp = document.querySelector("#curp").value;
  const curpmin = curp.toLowerCase();
  const curpr = document.getElementById("curp-lo");
  curpr.textContent = `${curpmin}`;

  //Siguiente campo
  const user = document.querySelector("#user").value;
  const usermin = user.toLowerCase();
  const userr = document.getElementById("user-lo");
  userr.textContent = `${usermin}`;

  //Siguiente campo
  const fechanac = document.querySelector("#fechanac").value;
  const fechanacmin = fechanac.toLowerCase();
  const fechanacr = document.getElementById("fechanac-lo");
  fechanacr.textContent = `${fechanacmin}`;

  //Siguiente campo
  const lugarnac = document.querySelector("#lugarnac").value;
  const lugarnacmin = lugarnac.toLowerCase();
  const lugarnacr = document.getElementById("lugarnac-lo");
  lugarnacr.textContent = `${lugarnacmin}`;

  //Siguiente campo
  const rfc = document.querySelector("#rfc").value;
  const rfcmin = rfc.toLowerCase();
  const rfcr = document.getElementById("rfc-lo");
  rfcr.textContent = `${rfcmin}`;

  //Siguiente campo
  const calle = document.querySelector("#calle").value;
  const callemin = calle.toLowerCase();
  const caller = document.getElementById("calle-lo");
  caller.textContent = `${callemin}`;

  //Siguiente campo
  const numext = document.querySelector("#numext").value;
  const numextmin = numext.toLowerCase();
  const numextr = document.getElementById("numext-lo");
  numextr.textContent = `${numextmin}`;

  //Siguiente campo
  const numint = document.querySelector("#numint").value;
  const numintmin = numint.toLowerCase();
  const numintr = document.getElementById("numint-lo");
  numintr.textContent = `${numintmin}`;

  //Siguiente campo
  const colfracc = document.querySelector("#colfracc").value;
  const colfraccmin = colfracc.toLowerCase();
  const colfraccr = document.getElementById("colfracc-lo");
  colfraccr.textContent = `${colfraccmin}`;

  //Siguiente campo
  const cp = document.querySelector("#cp").value;
  const cpmin = cp.toLowerCase();
  const cpr = document.getElementById("cp-lo");
  cpr.textContent = `${cpmin}`;

  //Siguiente campo
  const entrecalles = document.querySelector("#entrecalles").value;
  const entrecallesmin = entrecalles.toLowerCase();
  const entrecallesr = document.getElementById("entrecalles-lo");
  entrecallesr.textContent = `${entrecallesmin}`;

  //Siguiente campo
  const referencias = document.querySelector("#referencias").value;
  const referenciasmin = referencias.toLowerCase();
  const referenciasr = document.getElementById("referencias-lo");
  referenciasr.textContent = `${referenciasmin}`;

  //Siguiente campo
  const del = document.querySelector("#del").value;
  const delmin = del.toLowerCase();
  const delr = document.getElementById("del-lo");
  delr.textContent = `${delmin}`;

  //Siguiente campo
  const estado = document.querySelector("#estado").value;
  const estadomin = estado.toLowerCase();
  const estador = document.getElementById("estado-lo");
  estador.textContent = `${estadomin}`;

  //Siguiente campo
  const contactouno = document.querySelector("#contactouno").value;
  const contactounomin = contactouno.toLowerCase();
  const contactounor = document.getElementById("contactouno-lo");
  contactounor.textContent = `${contactounomin}`;

  //Siguiente campo
  const contactodos = document.querySelector("#contactodos").value;
  const contactodosmin = contactodos.toLowerCase();
  const contactodosr = document.getElementById("contactodos-lo");
  contactodosr.textContent = `${contactodosmin}`;

  //Siguiente campo
  const email = document.querySelector("#email").value;
  const emailmin = email.toLowerCase();
  const emailr = document.getElementById("email-lo");
  emailr.textContent = `${emailmin}`;

  //Siguiente campo
  const idine = document.querySelector("#idine").value;
  const idinemin = idine.toLowerCase();
  const idiner = document.getElementById("idine-lo");
  idiner.textContent = `${idinemin}`;

  //Siguiente campo
  const cac = document.querySelector("#cac").value;
  const cacmin = cac.toLowerCase();
  const cacr = document.getElementById("cac-lo");
  cacr.textContent = `${cacmin}`;

  //Siguiente campo
  const ejecutivo = document.querySelector("#ejecutivo").value;
  const ejecutivomin = ejecutivo.toLowerCase();
  const ejecutivor = document.getElementById("ejecutivo-lo");
  ejecutivor.textContent = `${ejecutivomin}`;

  //Siguiente campo
  const validador = document.querySelector("#validador").value;
  const validadormin = validador.toLowerCase();
  const validadorr = document.getElementById("validador-lo");
  validadorr.textContent = `${validadormin}`;
}
