// https://anapioficeandfire.com/
/* import { Libro } from "../types/types"; */

/*
export async function fetchLibros(): Promise<Libro[]> {
    const response = await fetch(
        "https://anapioficeandfire.com/api/books"
    );
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    const results = await response.json();
    const libros = results.map((libro: any) => ({
        id: libro.national_number,
        isbn: libro.isbn,
        nombre: libro.name,
        autor: libro.authors
}));
return libros;
}
*/

export async function fetchLibros() {
    try {
        const response = await fetch("https://anapioficeandfire.com/api/books");
        const result = await response.json();
        result.map((d: any, index : number) => {
            let ident = index+1;
            d.id = ident.toString();
            });
        return result;
    } catch (error) {
        console.error(error)
    }
} 

