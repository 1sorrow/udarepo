function analyzeAsteroids(diameters) {
    if (!diameters || diameters.length === 0) {
        console.log("No asteroid data available.");
        return;
    }

    const totalAsteroids = diameters.length;
    const averageDiameter = diameters.reduce((sum, diameter) => sum + diameter, 0) / totalAsteroids;

    console.log(`Total Asteroids: ${totalAsteroids}`);
    console.log(`Average Diameter: ${averageDiameter.toFixed(2)} km`);
}
console.log('commit')