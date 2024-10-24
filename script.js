async function fetchAndDisplayGames() {
    try {
        const response = await fetch('http://localhost:3000/api/games');
        if (!response.ok) {
            throw new Error(`Error fetching games: ${response.statusText}`);
        }
        const games = await response.json();
        const gameListElement = document.getElementById('game-list');

        games.forEach(game => {
            const gameCard = document.createElement('div');
            gameCard.className = 'game-card';
            gameCard.innerHTML = `
                <h3>${game.name}</h3>
                <p>App ID: ${game.appid}</p>
            `;

            // Зареждане на изображението
            const img = new Image();
            img.src = `https://steamcdn-a.akamaihd.net/steam/apps/${game.appid}/header.jpg`;
            img.onload = () => {
                gameCard.appendChild(img);
            };
            img.onerror = () => {
                const altImg = document.createElement('p');
                altImg.innerText = 'Image not available';
                gameCard.appendChild(altImg);
            };

            gameListElement.appendChild(gameCard);
        });
    } catch (error) {
        console.error('Error fetching games:', error);
    }
}

window.onload = fetchAndDisplayGames;
