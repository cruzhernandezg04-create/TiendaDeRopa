const botonesFiltro = document.querySelectorAll('.filtros button');
const productos = document.querySelectorAll('.producto');

botonesFiltro.forEach(boton => {
  boton.addEventListener('click', () => {

    botonesFiltro.forEach(b => b.classList.remove('activo'));
   
    boton.classList.add('activo');

    const filtro = boton.dataset.filtro;

    productos.forEach(producto => {
      if (filtro === 'todos' || producto.dataset.tipo === filtro) {
        producto.style.display = 'block';
      } else {
        producto.style.display = 'none';
      }
    });
  });
});

const productosConTallas = document.querySelectorAll('.producto');

productosConTallas.forEach(producto => {
  const botonesTalla = producto.querySelectorAll('.tallas button');

  botonesTalla.forEach(boton => {
    boton.addEventListener('click', () => {
      botonesTalla.forEach(b => b.classList.remove('seleccionada'));
      boton.classList.add('seleccionada');
    });
  });
});


const numeroWhatsApp = '525565936535';

productosConTallas.forEach(producto => {
  const btnPedir = producto.querySelector('.btn-pedir');

  btnPedir.addEventListener('click', (e) => {
    e.preventDefault(); 

    const nombre = producto.querySelector('.producto-nombre').textContent;
    const tallaSeleccionada = producto.querySelector('.tallas button.seleccionada');

    if (!tallaSeleccionada) {
      alert('Por favor selecciona una talla antes de pedir');
      return;
    }

    const talla = tallaSeleccionada.textContent;

    const mensaje = `Hola TKX, quiero pedir el producto "${nombre}" en talla ${talla}. ¿Tienen disponibilidad?`;

    const mensajeCodificado = encodeURIComponent(mensaje);

    window.open(`https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`, '_blank');
  });
});

const btnCustomWa = document.getElementById('btn-custom-wa');
const botonesTallaCustom = document.querySelectorAll('.tallas-selector button');

let tallaCustomSeleccionada = null;

botonesTallaCustom.forEach(boton => {
  boton.addEventListener('click', () => {
    botonesTallaCustom.forEach(b => b.classList.remove('seleccionada'));
    boton.classList.add('seleccionada');
    tallaCustomSeleccionada = boton.dataset.talla;
  });
});

btnCustomWa.addEventListener('click', (e) => {
  e.preventDefault();

  const tipoPrenda = document.getElementById('tipo-prenda').value;
  const colorPrenda = document.getElementById('color-prenda').value;
  const descripcion = document.getElementById('descripcion').value;

  if (!tallaCustomSeleccionada) {
    alert('Por favor selecciona una talla');
    return;
  }

  if (!descripcion.trim()) {
    alert('Por favor describe el diseño que quieres');
    return;
  }

  const mensaje = `Hola TKX, quiero un pedido personalizado:\nPrenda: ${tipoPrenda}\nTalla: ${tallaCustomSeleccionada}\nColor: ${colorPrenda}\nDiseño: ${descripcion}`;

  const mensajeCodificado = encodeURIComponent(mensaje);

  window.open(`https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`, '_blank');
});