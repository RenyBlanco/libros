import  React, { useEffect, useMemo, useState } from 'react';
import { fetchLibros } from '../api/fetchLibros';
import { Column, useTable, useGlobalFilter, useSortBy } from 'react-table';
import LoadingScreen from '../components/LoadingScreen';
import { waitFor } from '../utils/utils';
import TableContainer from './TableContainer';
import { Link } from 'react-router-dom';

interface Cabeza {
    isbn: String;
    name: String;
    authors: String;
    country: String;
}

const Libros = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const getBooks = async () => {
            setIsLoading(true);
            await waitFor(1000);
            const data = await fetchLibros();
            setBooks(data);
            setIsLoading(false);
        }
        getBooks();
    }, []);

    const renderId = ({ cell }: any) => {
        const id = cell.value;
        const link = `/libro/${id}`;

        return (
            <td>
                <Link to={link}>{id}</Link>
                {/* <a href={link}>{id}</a> */}
            </td>
        );
    };

    const columns = useMemo < Column < Cabeza > [] > (
        () => [
            {
                Header: "Información del Libro",
                columns: [
                    {
                        Header: "Id",
                        accessor: "id",
                        Cell: renderId
                    },
                    {
                        Header: "Isbn",
                        accessor: "isbn"
                    },
                    {
                        Header: "Nombre",
                        accessor: "name"
                    }
                ]
            },
            {
                Header: "Información Autor",
                columns: [
                    {
                        Header: "Autor(es)",
                        accessor: "authors"
                    },
                    {
                        Header: "País",
                        accessor: "country"
                    }
                ]
            }
        ],
        []
    );

    
    const tableInstance = useTable(
        { columns, data: books },
        useGlobalFilter,
        useSortBy
    );
    
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        preGlobalFilteredRows,
        setGlobalFilter,
        state
    } = tableInstance;

    if (isLoading) {
        return <LoadingScreen />
    }
    return (
        
        <main>
            <TableContainer>
                <table {...getTableProps()}>
                    <thead>
                        {headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column) => (
                                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                        {column.render("Header")}
                                        <span>
                                            {column.isSorted ? column.isSortedDesc
                                                ? " 🔽"
                                                : " 🔼"
                                                : ""}
                                        </span>
                                    </th>
                            ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {rows.map((row) => {
                            prepareRow(row);
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map((cell) => {
                                        return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <div>
                    <p>Total de Libros: {preGlobalFilteredRows.length}</p>
                    <label>Filtrar : </label>
                    <input type='text' value={state.globalFilter} onChange={(e)=>setGlobalFilter(e.target.value)}/>
                </div> 
            </TableContainer>
        </main>
    );
};

export default Libros;