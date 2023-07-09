// https://anapioficeandfire.com/api/houses

export async function fetchCasas() {
    try {
        const response = await fetch("https://anapioficeandfire.com/api/houses");
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error)
    }
}