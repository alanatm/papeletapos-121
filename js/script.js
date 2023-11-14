//variables layout
const planr = document.getElementById("plan-lo");
const dnr = document.getElementById("dn-lo");
const dn4r = document.getElementById("dn4-lo");
const grabacionr = document.getElementById("grabacion-lo");
const fvcr = document.getElementById("fvc-lo");
const nipr = document.getElementById("nip-lo");
const vigenciar = document.getElementById("vigencia-lo");
const nombresr = document.getElementById("nombres-lo");
const apellidopatr = document.getElementById("apellido-pat-lo");
const apellidomatr = document.getElementById("apellido-mat-lo");
const curpr = document.getElementById("curp-lo");
const userr = document.getElementById("user-lo");
const fechanacr = document.getElementById("fechanac-lo");
const lugarnacr = document.getElementById("lugarnac-lo");
const rfcr = document.getElementById("rfc-lo");
const caller = document.getElementById("calle-lo");
const numextr = document.getElementById("numext-lo");
const numintr = document.getElementById("numint-lo");
const colfraccr = document.getElementById("colfracc-lo");
const cpr = document.getElementById("cp-lo");
const entrecallesr = document.getElementById("entrecalles-lo");
const referenciasr = document.getElementById("referencias-lo");
const delr = document.getElementById("del-lo");
const estador = document.getElementById("estado-lo");
const contactounor = document.getElementById("contactouno-lo");
const contactodosr = document.getElementById("contactodos-lo");
const emailr = document.getElementById("email-lo");
const idiner = document.getElementById("idine-lo");
const cacr = document.getElementById("cac-lo");
const ejecutivor = document.getElementById("ejecutivo-lo");
const validadorr = document.getElementById("validador-lo");

//Variables para eventos
const copiapsuper = document.querySelector("#copia-p-super");
const copiapventa = document.querySelector("#copia-p-venta");

const formulario = document.querySelector("#formulario");
const superbutton = document.getElementById("copy-super");
const ventabutton = document.getElementById("copy-sale");

//Eventos
//Click submit del formulario
formulario.addEventListener("submit", validarFormulario);

//Click botón copiar para supervisor
superbutton.addEventListener("click", copiasuper);
ventabutton.addEventListener("click", copiaventa);

//evento global para vigencia nip
window.addEventListener("DOMContentLoaded", fechavigencia);
//mis funciones

//capitalizar texto
function capitalizartexto(frase) {
  return frase.replace(/\w\S*/g, function (palabra) {
    return palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
  });
}
//Convertir Texto Mayusculas
function mayus(frasemay) {
  return frasemay.toUpperCase();
}

//Convertir Texto Minusculas
function minus(frasemin) {
  return frasemin.toLowerCase();
}

//función copia super
//Copia solo los campos del envío al supervisor
//campos: Plan, DN, Grabación DN, FVC, NIP, Vigencia, Nombres
//Apellido Paterno, Apellido Materno, CURP,User Login

function copiasuper() {
  const valplanr = document.getElementById("copia-p-super");
  navigator.clipboard.writeText(valplanr.textContent);
}

//función copia venta
//Copia solo los campos del envío al grupo de ventas
//campos: Plan, DN, Grabación DN, FVC, NIP, Vigencia, Nombres
//Apellido Paterno, Apellido Materno, CURP,User Login

function copiaventa() {
  const valventa = document.getElementById("copia-p-venta");
  navigator.clipboard.writeText(valventa.textContent);
}

//Obtiene los últimos 4 dígitos del DN sobre el input
function obtenerdigitos() {
  const dnval = document.getElementById("dn").value;
  document.getElementById("dn4").value = dnval.slice(6);
}

//fecha para vigencia del nip
function fechavigencia() {
  var tiempotranscurrido = Date.now();
  var fecha = new Date(tiempotranscurrido);
  var dias = 5; // Número de días a agregar
  var dia = fecha.getDate() + dias;
  var mes = fecha.getMonth() + 1;
  var angio = fecha.getFullYear();
  var fechastn = `${dia}/${mes}/${angio}`;

  dia = ("0" + dia).slice(-2);
  mes = ("0" + mes).slice(-2);

  console.log(fechastn);
  document.getElementById("vigencia").value = fechastn;
}

//Captura la información del input, lo minimiza y muestra
function validarFormulario(e) {
  e.preventDefault();

  const plan = document.querySelector("#plan").value;
  const planmin = capitalizartexto(plan);
  planr.textContent = `${planmin}`.replace(
    /[^\x20\x2Da-zA-Z0-9\x5F\xC0-\xD6\xD8-\xF6\xF8-\xFF]/g,
    ""
  ); //elimina caracteres especiales exceptuando alfanuméricos como la ñ

  const dn = document.querySelector("#dn").value;
  const dnmin = capitalizartexto(dn);
  dnr.textContent = `${dnmin}`.replace(/[^a-zA-Z0-9 ]/g, "");

  const dn4 = document.querySelector("#dn4").value;
  const dn4min = capitalizartexto(dn4);
  dn4r.textContent = `${dn4min}`.replace(/[^a-zA-Z0-9 ]/g, "");

  const grabacion = document.querySelector("#grabacion").value;
  const grabacionmin = capitalizartexto(grabacion);
  grabacionr.textContent = `${grabacionmin}`.replace(/[^a-zA-Z0-9 ]/g, "");

  //Siguiente campo
  const fvc = document.querySelector("#fvc").value;
  const fvcmin = capitalizartexto(fvc);
  fvcr.textContent = `${fvcmin}`.replace(/[^a-zA-Z0-9 ]/g, "");


  /*const fvcmin = new Date(fvc);
  var diafvc = fvcmin.getDate() + 1;
  var mesfvc = fvcmin.getMonth() + 1;
  const angiofvc = fvcmin.getFullYear();

  if (diafvc >= 29 && mesfvc == 2) {
    diafvc = "01";
    mesfvc = mesfvc + 1;
    fvcr.textContent = `${diafvc}/${mesfvc}/${angiofvc}`;
  } else if (diafvc < 10 && mesfvc < 10) {
    fvcr.textContent = `0${diafvc}/0${mesfvc}/${angiofvc}`;
  } else if (diafvc > 9 && diafvc < 31 && mesfvc < 10) {
    fvcr.textContent = `${diafvc}/0${mesfvc}/${angiofvc}`;
  } else if (diafvc < 10 && mesfvc > 9) {
    fvcr.textContent = `0${diafvc}/${mesfvc}/${angiofvc}`;
  } else if (diafvc > 9 && diafvc < 31 && mesfvc > 9) {
    fvcr.textContent = `${diafvc}/${mesfvc}/${angiofvc}`;
  } else if (diafvc >= 31 && mesfvc < 10) {
    diafvc = "01";
    mesfvc = mesfvc + 1;
    fvcr.textContent = `${diafvc}/0${mesfvc}/${angiofvc}`;
  } else if (diafvc >= 31 && mesfvc > 9) {
    diafvc = "01";
    mesfvc = mesfvc + 1;
    fvcr.textContent = `${diafvc}/${mesfvc}/${angiofvc}`;
  } else {
    fvcr.textContent = `error`;
  }*/

  //Siguiente campo
  const nip = document.querySelector("#nip").value;
  const nipmin = capitalizartexto(nip);
  nipr.textContent = `${nipmin}`.replace(/[^a-zA-Z0-9 ]/g, "");
  //Siguiente campo
  const vigencia = document.querySelector("#vigencia").value;
  const vigenciamin = capitalizartexto(vigencia);
  vigenciar.textContent = `${vigenciamin}`;

  //Siguiente campo
  const nombres = document.querySelector("#nombres").value;
  const nombresmin = capitalizartexto(nombres);
  nombresr.textContent = `${nombresmin}`.replace(
    /[^\x20\x2Da-zA-Z0-9\x5F\xC0-\xD6\xD8-\xF6\xF8-\xFF]/g,
    ""
  ); //elimina caracteres especiales exceptuando alfanuméricos como la ñ

  //Siguiente campo
  const apellidopat = document.querySelector("#apellido-pat").value;
  const apellidopatmin = capitalizartexto(apellidopat);
  apellidopatr.textContent = `${apellidopatmin}`.replace(
    /[^\x20\x2Da-zA-Z0-9\x5F\xC0-\xD6\xD8-\xF6\xF8-\xFF]/g,
    ""
  ); //elimina caracteres especiales exceptuando alfanuméricos como la ñ

  //Siguiente campo
  const apellidomat = document.querySelector("#apellido-mat").value;
  const apellidomatmin = capitalizartexto(apellidomat);
  apellidomatr.textContent = `${apellidomatmin}`.replace(
    /[^\x20\x2Da-zA-Z0-9\x5F\xC0-\xD6\xD8-\xF6\xF8-\xFF]/g,
    ""
  ); //elimina caracteres especiales exceptuando alfanuméricos como la ñ

  //Siguiente campo
  const curp = document.querySelector("#curp").value;
  const curpmin = mayus(curp);
  curpr.textContent = `${curpmin}`.replace(/[^a-zA-Z0-9 ]/g, "");

  //Siguiente campo
  const user = document.querySelector("#user").value;
  const usermin = mayus(user);
  userr.textContent = `${usermin}`;

  //Siguiente campo
  const fechanac = document.querySelector("#fechanac").value;
  const fechanacmin = capitalizartexto(fechanac);
  fechanacr.textContent = `${fechanacmin}`;

  //Siguiente campo
  const lugarnac = document.querySelector("#lugarnac").value;
  const lugarnacmin = capitalizartexto(lugarnac);
  lugarnacr.textContent = `${lugarnacmin}`.replace(
    /[^\x20\x2Da-zA-Z0-9\x5F\xC0-\xD6\xD8-\xF6\xF8-\xFF]/g,
    ""
  ); //elimina caracteres especiales exceptuando alfanuméricos como la ñ
  //Siguiente campo
  const rfc = document.querySelector("#rfc").value;
  const rfcmin = mayus(rfc);
  rfcr.textContent = `${rfcmin}`.replace(/[^a-zA-Z0-9 ]/g, "");

  //Siguiente campo
  const calle = document.querySelector("#calle").value;
  const callemin = capitalizartexto(calle);
  caller.textContent = `${callemin}`.replace(
    /[^\x20\x2Da-zA-Z0-9\x5F\xC0-\xD6\xD8-\xF6\xF8-\xFF]/g,
    ""
  ); //elimina caracteres especiales exceptuando alfanuméricos como la ñ

  //Siguiente campo
  const numext = document.querySelector("#numext").value;
  const numextmin = capitalizartexto(numext);
  numextr.textContent = `${numextmin}`.replace(/[^a-zA-Z0-9 ]/g, "");

  //Siguiente campo
  const numint = document.querySelector("#numint").value;
  const numintmin = capitalizartexto(numint);
  numintr.textContent = `${numintmin}`.replace(/[^a-zA-Z0-9 ]/g, "");

  //Siguiente campo
  const colfracc = document.querySelector("#colfracc").value;
  const colfraccmin = capitalizartexto(colfracc);
  colfraccr.textContent = `${colfraccmin}`.replace(
    /[^\x20\x2Da-zA-Z0-9\x5F\xC0-\xD6\xD8-\xF6\xF8-\xFF]/g,
    ""
  ); //elimina caracteres especiales exceptuando alfanuméricos como la ñ

  //Siguiente campo
  const cp = document.querySelector("#cp").value;
  const cpmin = capitalizartexto(cp);
  cpr.textContent = `${cpmin}`.replace(/[^a-zA-Z0-9 ]/g, "");

  //Siguiente campo
  const entrecalles = document.querySelector("#entrecalles").value;
  const entrecallesmin = capitalizartexto(entrecalles);
  entrecallesr.textContent = `${entrecallesmin}`.replace(
    /[^\x20\x2Da-zA-Z0-9\x5F\xC0-\xD6\xD8-\xF6\xF8-\xFF]/g,
    ""
  ); //elimina caracteres especiales exceptuando alfanuméricos como la ñ

  //Siguiente campo
  const referencias = document.querySelector("#referencias").value;
  const referenciasmin = capitalizartexto(referencias);
  referenciasr.textContent = `${referenciasmin}`.replace(
    /[^\x20\x2Da-zA-Z0-9\x5F\xC0-\xD6\xD8-\xF6\xF8-\xFF]/g,
    ""
  ); //elimina caracteres especiales exceptuando alfanuméricos como la ñ

  //Siguiente campo
  const del = document.querySelector("#del").value;
  const delmin = capitalizartexto(del);
  delr.textContent = `${delmin}`.replace(
    /[^\x20\x2Da-zA-Z0-9\x5F\xC0-\xD6\xD8-\xF6\xF8-\xFF]/g,
    ""
  ); //elimina caracteres especiales exceptuando alfanuméricos como la ñ

  //Siguiente campo
  const estado = document.querySelector("#estado").value;
  const estadomin = capitalizartexto(estado);
  estador.textContent = `${estadomin}`.replace(
    /[^\x20\x2Da-zA-Z0-9\x5F\xC0-\xD6\xD8-\xF6\xF8-\xFF]/g,
    ""
  ); //elimina caracteres especiales exceptuando alfanuméricos como la ñ

  //Siguiente campo
  const contactouno = document.querySelector("#contactouno").value;
  const contactounomin = capitalizartexto(contactouno);
  contactounor.textContent = `${contactounomin}`.replace(/[^a-zA-Z0-9 ]/g, "");

  //Siguiente campo
  const contactodos = document.querySelector("#contactodos").value;
  const contactodosmin = capitalizartexto(contactodos);
  contactodosr.textContent = `${contactodosmin}`.replace(/[^a-zA-Z0-9 ]/g, "");

  //Siguiente campo
  const email = document.querySelector("#email").value;
  const emailmin = minus(email);
  emailr.textContent = `${emailmin}`;

  //Siguiente campo
  const idine = document.querySelector("#idine").value;
  const idinemin = capitalizartexto(idine);
  idiner.textContent = `${idinemin}`.replace(/[^a-zA-Z0-9 ]/g, "");

  //Siguiente campo
  const cac = document.querySelector("#cac").value;
  const cacmin = capitalizartexto(cac);
  cacr.textContent = `${cacmin}`.replace(
    /[^\x20\x2Da-zA-Z0-9\x5F\xC0-\xD6\xD8-\xF6\xF8-\xFF]/g,
    ""
  ); //elimina caracteres especiales exceptuando alfanuméricos como la ñ

  //Siguiente campo
  const ejecutivo = document.querySelector("#ejecutivo").value;
  const ejecutivomin = capitalizartexto(ejecutivo);
  ejecutivor.textContent = `${ejecutivomin}`.replace(
    /[^\x20\x2Da-zA-Z0-9\x5F\xC0-\xD6\xD8-\xF6\xF8-\xFF]/g,
    ""
  ); //elimina caracteres especiales exceptuando alfanuméricos como la ñ

  //Siguiente campo
  const validador = document.querySelector("#validador").value;
  const validadormin = capitalizartexto(validador);
  validadorr.textContent = `${validadormin}`.replace(
    /[^\x20\x2Da-zA-Z0-9\x5F\xC0-\xD6\xD8-\xF6\xF8-\xFF]/g,
    ""
  ); //elimina caracteres especiales exceptuando alfanuméricos como la ñ

  //Info para botón copiar
  copiapsuper.textContent = `PLAN:\t ${planmin}\nDN:\t${dnmin}\nGRABACIÓN DN:\t${grabacionmin}\nFVC:\t${fvcr}\nNIP:\t${nipmin}\nVIGENCIA:\t${vigenciamin}\nNOMBRES:\t${nombresmin}\nAPELLIDO PATERNO:\t${apellidopatmin}\nAPELLIDO MATERNO:\t${apellidomatmin}\nCURP:\t${curpmin}\nUSER LOGIN:\t${usermin}\nEJECUTIVO:\t${ejecutivomin}`;
  copiapventa.textContent = `PLAN:\t ${planmin}\nDN:\t${dnmin}\nDN (ÚLTIMOS 4 DIGITOS):\t${dn4min}\nGRABACIÓN DN:\t${grabacionmin}\nFVC:\t${fvcr}\nNIP:\t${nipmin}\nVIGENCIA:\t${vigenciamin}\nNOMBRES:\t${nombresmin}\nAPELLIDO PATERNO:\t${apellidopatmin}\nAPELLIDO MATERNO:\t${apellidomatmin}\nCURP:\t${curpmin}\nUSER LOGIN:\t${usermin}\nFECHA DE NACIMIENTO:\t${fechanacmin}\nLUGAR DE NACIMIENTO:\t${lugarnacmin}\nRFC:\t${rfcmin}\nCALLE:\t${callemin}\nNÚMERO EXT:\t${numextmin}\nNÚMERO INT:\t${numintmin}\nCOLONIA O FRACC:\t${colfraccmin}\nCP:\t${cpmin}\nENTRE CALLES:\t${entrecallesmin}\nREFERENCIAS:\t${referenciasmin}\nDELEGACIÓN/MUNICIPIO:\t${delmin}\nESTADO:\t${estadomin}\nTEL CONTACTO 1:\t${contactounomin}\nTEL CONTACTO 2:\t${contactodosmin}\nEMAIL:\t${emailmin}\nID INE:\t${idinemin}\nCAC MOVISTAR:\t${cacmin}\nEJECUTIVO:\t${ejecutivomin}\nVALIDADOR:\t${validadormin}`;
}
