let estado = {
  nivel: 1,
  decisiones: []
};

// Información personalizada para cada carta por nivel y opción
const opciones = {
  1: {
    A: { titulo: "Explorar la ciudad", img: "https://picsum.photos/id/1011/600/400", desc: "Te aventuras entre los edificios destruidos." },
    B: { titulo: "Refugiarse en un túnel", img: "https://picsum.photos/id/1012/600/400", desc: "Encuentras un antiguo búnker subterráneo." },
    C: { titulo: "Buscar aliados", img: "https://picsum.photos/id/1013/600/400", desc: "Te unes a un pequeño grupo de sobrevivientes." }
  },
  2: {
    A: { titulo: "Investigar una señal", img: "https://picsum.photos/id/1021/600/400", desc: "Una señal misteriosa proviene de las montañas." },
    B: { titulo: "Construir defensa", img: "https://picsum.photos/id/1022/600/400", desc: "Fortificas tu refugio con lo que tienes a mano." },
    C: { titulo: "Rastrear enemigos", img: "https://picsum.photos/id/1023/600/400", desc: "Sigues huellas en la nieve." }
  },
  3: {
    A: { titulo: "Explorar una base abandonada", img: "https://picsum.photos/id/1031/600/400", desc: "Encuentras documentos secretos." },
    B: { titulo: "Hackear una terminal", img: "https://picsum.photos/id/1032/600/400", desc: "Accedes a información antigua del sistema." },
    C: { titulo: "Escapar de una trampa", img: "https://picsum.photos/id/1033/600/400", desc: "Una estructura colapsa a tu alrededor." }
  },
  4: {
    A: { titulo: "Enviar señal de auxilio", img: "https://picsum.photos/id/1041/600/400", desc: "Lanzas un mensaje al espacio." },
    B: { titulo: "Recuperar energía", img: "https://picsum.photos/id/1042/600/400", desc: "Recargas equipos con paneles solares." },
    C: { titulo: "Curar heridas", img: "https://picsum.photos/id/1043/600/400", desc: "Usas un kit médico improvisado." }
  },
  5: {
    A: { titulo: "Enfrentar al líder enemigo", img: "https://picsum.photos/id/1051/600/400", desc: "Te preparas para la batalla final." },
    B: { titulo: "Liberar a los prisioneros", img: "https://picsum.photos/id/1052/600/400", desc: "Abres las celdas de un campamento oculto." },
    C: { titulo: "Escapar del sistema", img: "https://picsum.photos/id/1053/600/400", desc: "Buscas una salida definitiva del caos." }
  }
};

const fondos = {
  1: 'https://media.istockphoto.com/id/1732963074/es/foto/cielo-nocturno-estrellado-en-el-espacio.jpg',
  2: 'https://picsum.photos/id/1032/1200/800',
  3: 'https://picsum.photos/id/1002/1200/800',
  4: 'https://picsum.photos/id/1022/1200/800',
  5: 'https://picsum.photos/id/1062/1200/800'
};

function irANivel(nivel, opcionAnterior) {
  estado.nivel = nivel;
  if (opcionAnterior) estado.decisiones.push(opcionAnterior);

  if (nivel > 5) {
    mostrarFinal();
    return;
  }

  const fondo = fondos[nivel] || fondos[1];

  const cartasHTML = `
    <div class="columns is-multiline is-centered is-variable is-4 mt-5">
      <div class="column is-4">
        <div class="card has-equal-height">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="${opciones[nivel].A.img}" alt="${opciones[nivel].A.titulo}">
            </figure>
          </div>
          <div class="card-content">
            <p class="title is-5">${opciones[nivel].A.titulo}</p>
            <p class="content">${opciones[nivel].A.desc}</p>
          </div>
          <footer class="card-footer">
            <a href="#" class="card-footer-item button is-info is-light" onclick="irANivel(${nivel + 1}, 'A')">Elegir A</a>
          </footer>
        </div>
      </div>

      <div class="column is-4">
        <div class="card has-equal-height">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="${opciones[nivel].B.img}" alt="${opciones[nivel].B.titulo}">
            </figure>
          </div>
          <div class="card-content">
            <p class="title is-5">${opciones[nivel].B.titulo}</p>
            <p class="content">${opciones[nivel].B.desc}</p>
          </div>
          <footer class="card-footer">
            <a href="#" class="card-footer-item button is-info is-light" onclick="irANivel(${nivel + 1}, 'B')">Elegir B</a>
          </footer>
        </div>
      </div>

      <div class="column is-4">
        <div class="card has-equal-height">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="${opciones[nivel].C.img}" alt="${opciones[nivel].C.titulo}">
            </figure>
          </div>
          <div class="card-content">
            <p class="title is-5">${opciones[nivel].C.titulo}</p>
            <p class="content">${opciones[nivel].C.desc}</p>
          </div>
          <footer class="card-footer">
            <a href="#" class="card-footer-item button is-info is-light" onclick="irANivel(${nivel + 1}, 'C')">Elegir C</a>
          </footer>
        </div>
      </div>
    </div>
  `;

  document.body.innerHTML = `
    <section class="nivel" style="background-image: url('${fondo}');">
      <div class="contenido-nivel" id="contenido-nivel">
        <h2 class="title is-2">Nivel ${nivel}</h2>
        ${opcionAnterior ? `<p class="subtitle is-5">Has elegido: ${opcionAnterior}</p>` : ''}
        ${cartasHTML}
      </div>
    </section>
  `;

  setTimeout(() => {
    document.getElementById('contenido-nivel').classList.add('visible');
  }, 2000);
}

function mostrarFinal() {
  document.body.innerHTML = `
    <section class="nivel" style="background-color: black;">
      <div class="contenido-nivel visible">
        <h2 class="title is-1">¡Has completado CRUDY!</h2>
        <p class="subtitle is-4">Tus decisiones fueron:</p>
        <ul>
          ${estado.decisiones.map((d, i) => `<li>Nivel ${i + 1}: ${d}</li>`).join('')}
        </ul>
        <button class="button is-light mt-5" onclick="location.reload()">Volver a empezar</button>
      </div>
    </section>
  `;
}
