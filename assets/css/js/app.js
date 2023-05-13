const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $name = document.querySelector('#name'); // Cambio "name" a "#name"
const $blog = document.querySelector('#blog'); // Cambio "blog" a "#blog"
const $location = document.querySelector('.location'); // Cambio "location" a ".location"

async function displayUser(username) { // agrego async porque usa await
  $name.textContent = 'cargando...'; // se cambia a name
  try { //Se agrega try
    const response = await fetch(`${usersEndpoint}/${username}`);
    const data = await response.json(); // Agregado: obtener los datos JSON de la respuesta
    console.log(data);
    $name.textContent = `${data.name}`; //se cambia a name y comillas invertidas
    $blog.textContent = `${data.blog}`; // se cambia a blog y comillas invertidas
    $location.textContent = `${data.location}`; // se cambia a location y comillas invertidas
  } catch (error) {
    handleError(error);
  }
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $name.textContent = `Algo salió mal: ${err}`;
}

displayUser('stolinski').catch(handleError);