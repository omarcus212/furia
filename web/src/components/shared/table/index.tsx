import {useReactTable, getCoreRowModel, flexRender, ColumnDef,
} from '@tanstack/react-table';
import { useEffect, useState } from 'react';
import { gamesPlay } from '../../../service/games';


const TableComponent = () => {

    const [games, setGames] = useState([]); 

const columns: ColumnDef<any>[] = [
    {
      header: 'Jogo',
      accessorKey: 'game',
    },
    {
      header: 'Evento',
      accessorKey: 'event',
    },
    {
      header: 'Time 1',
      accessorKey: 'first_team',
    },
    {
      header: 'Placar Time 1',
      accessorKey: 'scoreboard_first_team',
    },
     {
      header: 'VS',
      accessorKey: 'VS',
      cell: 'vs'
    },
    {
      header: 'Time 2',
      accessorKey: 'seconde_team',
    },
    {
      header: 'Placar Time 2',
      accessorKey: 'scoreboard_seconde_team',
    },
    {
      header: 'Data',
      accessorKey: 'date',
      cell: ({ getValue }) => {
        const date = new Date(getValue() as string);
        return date.toLocaleString();
      },
    },
  ];

 useEffect(() => {

        const getGames = async () =>{
        const res = await gamesPlay()
        setGames(res?.data.data)
        }
        
        getGames()

    }, []);

 const table = useReactTable({
    data: games,  
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

return (
  <div className="w-full overflow-x-auto text-white rounded-md">
    <table className="min-w-[600px] w-full bg-[#1E1E1E] border border-white text-white">
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id} className="border border-white border-collapse">
            {headerGroup.headers.map((header) => (
              <th
                key={header.id}
                className="p-3 border border-white text-left font-semibold text-sm sm:text-base"
              >
                {flexRender(header.column.columnDef.header, header.getContext())}
              </th>
            ))}
          </tr>
        ))}
      </thead>

      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id} className="border-b border-white">
            {row.getVisibleCells().map((cell) => (
              <td
                key={cell.id}
                className="p-2 sm:p-3 text-sm sm:text-base border border-white"
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
}


export default TableComponent