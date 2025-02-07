// function for making  sure that we have data for the astroid
function analyzeAsteroids(diameters) {
    if (!diameters || diameters.length === 0) {
        console.log("No asteroid data available.");
        return;
    }

    // making variables to store the data
    const totalAsteroids = diameters.length;
    const averageDiameter = diameters.reduce((sum, diameter) => sum + diameter, 0) / totalAsteroids;

    // printing the output
    console.log(`Total Asteroids: ${totalAsteroids}`);
    console.log(`Average Diameter: ${averageDiameter.toFixed(2)} km`);
}
console.log('commit')