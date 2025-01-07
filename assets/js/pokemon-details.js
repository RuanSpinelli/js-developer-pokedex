document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const pokemonId = urlParams.get('id');

    if (pokemonId) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
            .then(response => response.json())
            .then(pokemon => {
                const pokemonDetails = document.getElementById('pokemonDetails');
                pokemonDetails.innerHTML = `
                    <h2>${pokemon.name}</h2>
                    <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
                    <p>ID: ${pokemon.id}</p>
                    <p>Type: ${pokemon.types.map(type => type.type.name).join(', ')}</p>
                    <p>Height: ${pokemon.height}</p>
                    <p>Weight: ${pokemon.weight}</p>
                `;
            })
            .catch(error => console.error('Erro ao buscar os detalhes do Pokémon:', error));
    } else {
        alert('Nenhum Pokémon selecionado!');
    }
});
