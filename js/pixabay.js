const cargarImagenes = async () => {
  let input = document.querySelector("#busqueda").value;

  const API_KEY = "23918568-2d622b0004fd6aa6fbf939c98";
  const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${input}&lang=es&per_page=40&image_type=photo&orientation=horizontal&category=food`;

  const respuesta = await fetch(URL);
  const resultado = await respuesta.json();

  let imagenes = resultado.hits;
  console.log(imagenes);

  let imagenesHTML = ``;
  imagenes.map((imagen) => {
    const { largeImageURL, webformatURL, tags } = imagen;

    imagenesHTML += `
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                <div class="card">
                    <img src="${webformatURL}" alt="${tags}" class="card-img-top">
                    <div class="card-footer">
                        <a href="${largeImageURL}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="btn btn-secondary btn-block">
                        Ver Imagen</a>
                     </div>
                </div>
            </div>              
        `;
  });

  divListadoImagenes = document.querySelector("#listadoImagenes");

  setTimeout(() => {
    divListadoImagenes.innerHTML = imagenesHTML;
  });
};
