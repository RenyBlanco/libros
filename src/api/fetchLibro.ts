// https://anapioficeandfire.com/

import { LibroDetails } from "../types/types";

export async function fetchLibro(
    id: string = "1"
    ): Promise<LibroDetails> {
    const response = await fetch(
        `https://anapioficeandfire.com/api/books/${id}`
    );

    if (!response.ok) {
        throw new Error(response.statusText);
    }
    const result = await response.json();
    const libro = {
        isbn: result.isbn,
        nombre: result.name,
        autor: result.authors,
        lanzado: result.released,
        paginas: result.numberOfPages,
        pais: result.country
    };
    console.log(libro);
    return libro;
}

/*
export async function fetchLibro(id:string = "1") {
    try {
        const response = await fetch("https://anapioficeandfire.com/api/books/"+id);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error)
    }
}
*/