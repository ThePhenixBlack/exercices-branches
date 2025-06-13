let keyOwner = [
    {
        firstname: "Pierre",
        hasKey: true,
    },
    {
        firstname: "Jerem",
        hasKey: true,
    },
    {
        firstname: "Juliette",
        hasKey: false,
    },
    {
        firstname: "Sabrina",
        hasKey: true,
    }
]
let array = []

function hasKey() {
    for (let i = 0; i < keyOwner.length; i++) {
        if (keyOwner[i].hasKey === true) {
            array.push(keyOwner[i].firstname)
            array.push(keyOwner[i].hasKey)
            //console.log(array)
        }
    }
    return array
}
console.log(hasKey())