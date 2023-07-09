import  React, { useEffect, useMemo, useState } from 'react';
import { fetchCasas } from '../api/fetchCasas';
import { Column, useTable } from 'react-table';
import LoadingScreen from '../components/LoadingScreen';
import { waitFor } from '../utils/utils';
import TableContainer from './TableContainer';

interface Cabeza {
    name: String;
    region: String;
    coatOfArms: String;
}
const Reinos = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [houses, setHouses] = useState([]);

    useEffect(() => {
        const getHouses = async () => {
            setIsLoading(true);
            await waitFor(1000);
            const data = await fetchCasas();
            setHouses(data);
            setIsLoading(false);
        }
        getHouses();
    }, []);


    const columns = useMemo < Column < Cabeza > [] > (
        () => [
            {
                Header: "Nombre",
                accessor: "name"
                
            },
            {
                Header: "Región",
                accessor: "region"
            },
            {
                Header: "Armas",
                accessor: "coatOfArms"
            }
        ],
        []
    );
    const tableInstance = useTable({ columns, data: houses });
    
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
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
                            <th {...column.getHeaderProps()}>{ column.render("Header")}</th>
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
            </TableContainer>
        </main>
    );
};

export default Reinos;