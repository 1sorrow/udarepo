const fetchAsteroids = require("./asteroidFetcher");
const analyzeAsteroids = require("./asteroidAnalyzer");

async function main() {
    const diameters = await fetchAsteroids();
    analyzeAsteroids(diameters);
}

main();
