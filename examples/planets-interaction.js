const { LobbyApi } = require('ogame-bot-api');

async function main() {

    const api = new LobbyApi();
    await api.login('mail@gmail.com', 'password');
    const account = await api.selectLastPlayedAccount();
    const game = await api.loadGame(account);
    
    const planets = await game.planetsList();

    for (let i = 0; i < planets.length; i++) {
        await game.selectPlanet(planets[i].id)
        const resources = await game.resourcesList();
        console.log(`planet : ${planets[i].name} / resources : ${resources.metal}, ${resources.crystal}, ${resources.deuterium}`)
    }
}

main()
