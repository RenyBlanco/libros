export type Libro = {
  id: string;
  isbn: string;
  nombre: string;
  autor: string;
};

export type LibroDetails = {
  isbn: string;
  nombre: string;
  autor: string;
  lanzado: string;
  paginas: number;
  pais: string;
};
