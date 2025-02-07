const resultArtist = document.getElementById("result-artist");
const playlistContainer = document.getElementById("result-playlists");
const searchInput = document.getElementById("search-input");

function requestApi(searchTerm) {
  // Realiza a requisição para buscar artistas
  fetch(`http://localhost:3000/artists?name_like=${searchTerm}`)
    .then((response) => response.json()) // Converte a resposta para JSON
    .then((data) => displayResults(data)) // Passa os dados para a função displayResults
    .catch((error) => console.error("Erro ao buscar dados:", error)); // Exibe erro no console se houver
}

function displayResults(artists) {
  hidePlaylists(); // Esconde a lista de playlists

  // Limpa qualquer resultado anterior
  resultArtist.innerHTML = '';

  // Se não encontrar nenhum artista, exibe uma mensagem
  if (artists.length === 0) {
    resultArtist.innerHTML = '<p>Nenhum artista encontrado.</p>';
    resultArtist.classList.remove("hidden");
    return;
  }

  // Cria um cartão para cada artista encontrado
  artists.forEach((artist) => {
    const artistCard = document.createElement('div');
    artistCard.classList.add('artist-card');

    artistCard.innerHTML = `
      <div class="card-img">
        <img src="${artist.urlImg}" alt="${artist.name}" class="artist-img" />
        <div class="play">
          <span class="fa fa-solid fa-play"></span>
        </div>
      </div>
      <div class="card-text">
        <a href="#" class="vst" title="${artist.name}">
          <span class="artist-name">${artist.name}</span>
        </a>
        <span class="artist-categorie">${artist.genre}</span>
      </div>
    `;

    resultArtist.appendChild(artistCard);
  });

  resultArtist.classList.remove("hidden");
}

function hidePlaylists() {
  playlistContainer.classList.add("hidden");
}

searchInput.addEventListener("input", function () {
  const searchTerm = searchInput.value.toLowerCase();
  if (searchTerm === "") {
    resultArtist.classList.add("hidden");
    playlistContainer.classList.remove("hidden");
    return;
  }
  requestApi(searchTerm);
});
