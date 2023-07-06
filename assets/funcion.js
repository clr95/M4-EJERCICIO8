const reservation = new Proxy({}, {
  set(target, prop, value) {
    if (prop === 'edad' && value < 18) {
      alert('Debes ser mayor de 18 años para realizar una reserva.');
    } else if (prop === 'correo' && !validateEmail(value)) {
      alert('El correo ingresado no es válido.');
    } else if (prop === 'fecha' && !validateDate(value)) {
      alert('La fecha seleccionada no es válida.');
    } else {
      target[prop] = value;
    }
    return true;
  }
});

function validateEmail(email) {
  const emailRegex = /^\S+@\S+\.\S+$/;
  return emailRegex.test(email);
}

function validateDate(date) {
  const selectedDate = new Date(date);
  const currentDate = new Date();
  return selectedDate >= currentDate;
}

const form = document.querySelector('#reservationForm');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  const nombre = document.querySelector('#Nombre').value;
  const apellido = document.querySelector('#lastName').value;
  const correo = document.querySelector('#mail').value;
  const edad = parseInt(document.querySelector('#edad').value);
  const fecha = document.querySelector('#date').value;

  reservation.nombre = nombre;
  reservation.apellido = apellido;
  reservation.correo = correo;
  reservation.edad = edad;
  reservation.fecha = fecha;

  console.log(reservation);
});