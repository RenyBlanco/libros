import  React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchLibro } from '../api/fetchLibro';
import LoadingScreen from '../components/LoadingScreen';
import { waitFor } from '../utils/utils';
import { LibroDetails } from '../types/types';
import styles from './libro.module.css';

const Libro = () => {

    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [book, setBook] = useState<LibroDetails>();
    const navigate = useNavigate();

    useEffect(() => {
        const getBook = async () => {
            setIsLoading(true);
            await waitFor(1000);
            const data = await fetchLibro(id as string);
            setBook(data);
            setIsLoading(false);
        }
        getBook();
    }, [id]);

    if (isLoading) {
        return <LoadingScreen />
    }
    return (
        <>
            <div className="py-10 px-10 max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden md:max-w-2xl">
                <div className='md:flex'>

                
                <div className="text-center space-y-2">
                    <main className={styles.libroInfo}>
                        <div className="text-slate-500 font-medium">Isbn :{book?.isbn }</div>
                        <div className="text-lg text-black font-semibold">Nombre :{book?.nombre}</div>
                        <div>Autor(es) :{book?.autor}</div>
                        <div>Lanzado :{book?.lanzado }</div>
                        <div>No. de páginas :{book?.paginas}</div>
                        <div>País :{book?.pais}</div>
                    </main>
                <button
                    className="px-4 py-1 text-sm text-blue-600 font-semibold rounded-full border border-gray-200 hover:text-white hover:bg-gray-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2"
                onClick={() => navigate(-1)}
                >Regresar
                </button>
                    </div>
                    </div>
            </div>
        </>
    );
};

export default Libro;