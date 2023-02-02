export const ExtractLocations = (allStays) => {
    var res = Array.from(new Set(allStays.map((stay) => `${stay.city}, ${stay.country}`)))

    return res
}