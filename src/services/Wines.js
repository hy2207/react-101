export function fetchRegions() {
    return fetch(`https://wines-api.herokuapp.com/api/regions`)
        .then(regions => regions.json());
}

export function fetchWinesFrom(region) {
    return fetch(`https://wines-api.herokuapp.com/api/wines?region=${region}`)
        .then(wines => wines.json());
}

export function fetchWine(id) {
    return fetch(`https://wines-api.herokuapp.com/api/wines/${id}`)
        .then(wine => wine.json());
}
