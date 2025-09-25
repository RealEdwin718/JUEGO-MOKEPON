// VARIABLES GLOBALES
let ataqueJugador;
let ataqueEnemigo;
let resultadoRonda = "";
let vidasJugador = 3;
let vidasEnemigo = 3;
let juegoTerminado = false;
let spanAtaqueNuestro = document.getElementById("spanOurAttack");

// <------------------------------------------------------------------------------------------------>

// PARA QUE CUANDO SELECCIONEMOS LAS MASCOTAS ESTAS SE CAMBIEN; CON SU IMAGEN, SU NOMBRE Y SU PODER
const mascotas = {
  Hipodoge: {
    Nombre: "Hipodoge",
    img: "https://mokepon.jpxoi.com/assets/img/webp/mokepon_hipodoge.webp",
    poder: "Agua💦",
  },
  Capipepo: {
    Nombre: "Capipepo",
    img: "mokepons_mokepon_capipepo_attack.png",
    poder: "Tierra🌱",
  },
  Ratigueya: {
    Nombre: "Ratigueya",
    img: "mokepons_mokepon_ratigueya_attack.webp",
    poder: "Fuego🔥",
  },
  Langostelvis: {
    Nombre: "Langostelvis",
    img: "mokepons_mokepon_langostelvis_attack.png",
    poder: "Agua💦 y Fuego🔥",
  },
  Tucapalma: {
    Nombre: "Tucapalma",
    img: "200px-Trumbeak.png",
    poder: "Agua💦 y Tierra🌱",
  },
  Pydos: {
    Nombre: "Pydos",
    img: "145.png",
    poder: "Tierra🌱 y Fuego🔥",
  },
};

// <--------------------------------------------------------------------------------------->

const radios = document.querySelectorAll('input[name="mascota"]');
const cards = document.querySelectorAll(".card");
const seccionAtaque = document.getElementById("seleccionarAtaque");

// FUNCIÓN QUE SIRVE PARA CARGAR Y ESCUCHAR EVENTOS DE LOS BOTONES

function iniciarJuego() {
  document.getElementById("seleccionarMascota").style.display = "block";
  document.getElementById("seleccionarAtaque").style.display = "none";
  document.getElementById("messages").style.display = "none";

  let botonMascota = document.getElementById("selectMascot");
  botonMascota.addEventListener("click", seleccionarMascota);

  let botonFuego = document.getElementById("botonFuego");
  botonFuego.addEventListener("click", ataqueFuego);

  let botonAgua = document.getElementById("botonAgua");
  botonAgua.addEventListener("click", ataqueAgua);

  let botonTierra = document.getElementById("botonTierra");
  botonTierra.addEventListener("click", ataqueTierra);
}

// <------------------------------------------------------------------------------------------------->

// FUNCIÓN PARA SELECCIONAR LA MASCOTA:

function seleccionarMascota() {
  let inputHipodoge = document.getElementById("hipodoge");
  let inputCapipepo = document.getElementById("capipepo");
  let inputRatigueya = document.getElementById("ratigueya");
  let inputLangostelvis = document.getElementById("langostelvis");
  let inputTucapalma = document.getElementById("tucapalma");
  let inputPydos = document.getElementById("pydos");
  let spanMascotaJugador = document.getElementById("mascotaJugador");

  let mascotaSeleccionada = "";

  if (inputHipodoge.checked) {
    mascotaSeleccionada = "Hipodoge";
  } else if (inputCapipepo.checked) {
    mascotaSeleccionada = "Capipepo";
  } else if (inputRatigueya.checked) {
    mascotaSeleccionada = "Ratigueya";
  } else if (inputLangostelvis.checked) {
    mascotaSeleccionada = "Langostelvis";
  } else if (inputTucapalma.checked) {
    mascotaSeleccionada = "Tucapalma";
  } else if (inputPydos.checked) {
    mascotaSeleccionada = "Pydos";
  } else {
    alert("Debes seleccionar una Mascota 😑");
    return;
  }

  spanMascotaJugador.innerHTML = mascotaSeleccionada;
  alert(`Seleccionaste a ${mascotaSeleccionada} ✅`);

  document.getElementById("imgMascotaJugador").src =
    mascotas[mascotaSeleccionada].img;
  document.getElementById("poderMascotaJugador").textContent =
    mascotas[mascotaSeleccionada].poder;

  document.getElementById("seleccionarMascota").style.display = "none";
  document.getElementById("seleccionarAtaque").style.display = "block";

  seleccionarMascotaEnemigo();
}

// <-------------------------------------------------------------------------------------------->

// FUNCIÓN PARA QUE SE SELECCIONE DE MANERA ALEATORIA LA MASCOTA DEL ENEMIGO:

function seleccionarMascotaEnemigo() {
  let mascotaAleatoria = aleatorio(1, 6);
  let spanMascotaEnemigo = document.getElementById("mascotaEnemigo");
  let mascotaSeleccionada = "";

  if (mascotaAleatoria == 1) {
    mascotaSeleccionada = "Hipodoge";
  } else if (mascotaAleatoria == 2) {
    mascotaSeleccionada = "Capipepo";
  } else if (mascotaAleatoria == 3) {
    mascotaSeleccionada = "Ratigueya";
  } else if (mascotaAleatoria == 4) {
    mascotaSeleccionada = "Langostelvis";
  } else if (mascotaAleatoria == 5) {
    mascotaSeleccionada = "Tucapalma";
  } else {
    mascotaSeleccionada = "Pydos";
  }

  spanMascotaEnemigo.innerHTML = mascotaSeleccionada;
  document.getElementById("imgMascotaEnemigo").src =
    mascotas[mascotaSeleccionada].img;
  document.getElementById("poderMascotaEnemigo").textContent =
    mascotas[mascotaSeleccionada].poder;
}

// FUNCIONES PARA CADA UNO DE LOS ATAQUES:

// FUNCIÓN PARA EL ATAQUE DE FUEGO:
function ataqueFuego() {
  ataqueJugador = "FUEGO🔥";
  //  ataqueJugador);
  spanAtaqueNuestro.innerHTML = ataqueJugador;
  ataqueAleatorioEnemigo();
  combate();
}

// FUNCIÓN PARA EL ATAQUE DE AGUA:
function ataqueAgua() {
  ataqueJugador = "AGUA💦";
  spanAtaqueNuestro.innerHTML = ataqueJugador;
  //  ataqueJugador);
  ataqueAleatorioEnemigo();
  combate();
}

// FUNCIÓN PARA EL ATAQUE DE TIERRA:
function ataqueTierra() {
  ataqueJugador = "TIERRA🌱";
  spanAtaqueNuestro.innerHTML = ataqueJugador;
  //  ataqueJugador);
  ataqueAleatorioEnemigo();
  combate();
}

// -------------------------------------------------------------------------------------

// FUNCIÓN PARA EL ATAQUE ALEATORIO QUE NOS LANCE EL ENEMIGO:
function ataqueAleatorioEnemigo() {
  let randomAttackEnemy = aleatorio(1, 3);
  let spanEnemyAttack = document.getElementById("spanEnemyAttack");

  if (randomAttackEnemy == 1) {
    ataqueEnemigo = "FUEGO🔥";
  } else if (randomAttackEnemy == 2) {
    ataqueEnemigo = "AGUA💦";
  } else {
    ataqueEnemigo = "TIERRA🌱";
  }

  spanEnemyAttack.innerHTML = ataqueEnemigo;
}

// <--------------------------------------------------------------------------------------------------------->

// FUNCIÓN EN LA QUE LANZAMOS ATAQUES Y SE DECIDE LA VICTORIA O LA DERROTA
function combate() {
  if (juegoTerminado) return;

  let mensajeDesicisivo = document.getElementById("messageFinalCombat");

  if (ataqueJugador == ataqueEnemigo) {
    resultadoRonda = "EMPATE🤝";
  } else if (
    (ataqueJugador == "FUEGO🔥" && ataqueEnemigo == "TIERRA🌱") ||
    (ataqueJugador == "AGUA💦" && ataqueEnemigo == "FUEGO🔥") ||
    (ataqueJugador == "TIERRA🌱" && ataqueEnemigo == "AGUA💦")
  ) {
    resultadoRonda = "¡GANASTEEE! 🎉🎉";
    vidasEnemigo--;
  } else {
    resultadoRonda = "PERDISTE 😞";
    vidasJugador--;
  }

  mensajeDesicisivo.innerHTML = resultadoRonda;

  actualizarVidas();
  agregarAlHistorial();
  revisarVidas();
}

// <-------------------------------------------------------------------------------------------------->

// FUNCIÓN PARA MIRAR QUIEN DE LOS DOS VA GANANDO ENTRE LA PC Y NOSOTROS Y EN CASO TAL, SE ACTIVARÁ UNA ALERTA
function revisarVidas() {
  if (vidasJugador == 0) {
    alert("A la próxima será bro 😿");
    juegoTerminado = true;
  } else if (vidasEnemigo == 0) {
    alert("Felicitaciones, ¡GANASTEE 🎉🎉!");
    juegoTerminado = true;
  }
}

// <----------------------------------------------------------------------------------------------------->

// FUNCIÓN PARA QUE LOS CORAZONES CAMBIEN SEGÚN SE PIERDA O SE VAYA GANANDO
function actualizarVidas() {
  document.getElementById("vidas-jugador").innerHTML =
    "❤️".repeat(vidasJugador) + "💔".repeat(3 - vidasJugador);

  document.getElementById("vidas-enemigo").innerHTML =
    "❤️".repeat(vidasEnemigo) + "💔".repeat(3 - vidasEnemigo);

  document.getElementById("playerLives").innerText = vidasJugador;
  document.getElementById("enemyLives").innerText = vidasEnemigo;
}

// <------------------------------------------------------------------------------------->

// FUNCIÓN PARA QUE LOS MENSAJES SE MUESTREN EN EL HISTORIAL
function agregarAlHistorial() {
  const historial = document.getElementById("historial");

  let mensaje = document.createElement("p");
  
  // PARA QUE COJA LOS ESTILOS DE LA ETIQUETA P CON LA CLASE DE MENSAJESS
  mensaje.classList.add("mensajess");
  
  mensaje.innerHTML = `
    Tu mascota atacó con <span>${ataqueJugador}</span>, 
    y la mascota del enemigo atacó con <span>${ataqueEnemigo}</span> 
    - <strong>${resultadoRonda}</strong>
  `;

  historial.appendChild(mensaje);

  // Autoscroll para que siempre muestre el último mensaje
  historial.scrollTop = historial.scrollHeight
}

// <-------------------------------------------------------------------------------------------------->

// PARA QUE CUANDO LE DEMOS CLIC AL BOTÓN DE REINICIAR
function reiniciarJuego() {
  ataqueJugador = "";
  ataqueEnemigo = "";

  vidasJugador = 3;
  vidasEnemigo = 3;
  juegoTerminado = false;

  // SE LIMPIE TODO LO SIGUIENTE:
  document.getElementById("spanOurAttack").innerHTML = "";
  document.getElementById("spanEnemyAttack").innerHTML = "";
  document.getElementById("mascotaJugador").innerHTML = "";
  document.getElementById("mascotaEnemigo").innerHTML = "";
  document.getElementById("messageFinalCombat").innerHTML = "";
  document.getElementById("playerLives").innerHTML = "3";
  document.getElementById("enemyLives").innerHTML = "3";
  document.getElementById("vidas-jugador").innerHTML = "❤️❤️❤️";
  document.getElementById("vidas-enemigo").innerHTML = "❤️❤️❤️";
  document.getElementById("historial").innerHTML = "";

  document.getElementById("seleccionarAtaque").style.display = "none";
  document.getElementById("messages").style.display = "none";
  document.getElementById("seleccionarMascota").style.display = "block";

  limpiarImputs();
}

// <------------------------------------------------------------------------------------------------>

// PARA LIMPIAR LOS INPUTS:
function limpiarImputs() {
  const inputsMascotas = document.querySelectorAll('input[name="mascota"]');
  inputsMascotas.forEach((inputsMascotas) => (inputsMascotas.checked = false));
}

// FUNCIÓN MUY IMPORTANTE PARA GENERAR LOS ATAQUES DEL ENEMIGO
function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener("load", iniciarJuego);
