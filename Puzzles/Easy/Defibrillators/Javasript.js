const LON = readline();
const LAT = readline();
const N = parseInt(readline());
const allDistances = [];
for (let i = 0; i < N; i++) {
    const DEFIB = readline();
    const [identifier, name, address, phoneNumber, longitude, latitude] = DEFIB.split(';');
    const userLon = formatCoordinates(LON);
    const userLat = formatCoordinates(LAT);
    const defibLon = formatCoordinates(longitude);
    const defibLat = formatCoordinates(latitude);

    const distance = getDistance(userLon, userLat, defibLon, defibLat);
    allDistances.push({name: name, distance: distance});
}

function formatCoordinates(coordinates) {
    const formatedCoordinates = Number(coordinates.replace(',', '.'));
    return formatedCoordinates;
}

function getDistance(longitudeA, latitudeA, longitudeB, latitudeB) {
    const x = (longitudeB - longitudeA) * Math.cos((latitudeA + latitudeB) / 2);
    const y = latitudeB - latitudeA;
    const distance = Math.sqrt((x ** 2) + (y ** 2)) * 6371;
    return distance;
}

const closestDefibrilator = allDistances.sort((a,b) => a.distance - b.distance)[0];

console.log(closestDefibrilator.name);