import React from 'react';
import { useGetTodoItemsQuery, TodoItem } from '../gql/types';
import { DataGrid } from '@mui/x-data-grid';

export const TodoList: React.FunctionComponent = (): React.ReactElement => {
  const { data, loading, error } = useGetTodoItemsQuery();

  if (loading || !data) return <p>loading</p>;
  if (error) return <p>{JSON.stringify(error.message)}</p>;
  console.log(data);

  const columns = [
    { field: 'id', headerName: 'ID', width: 150 },
    {
      field: 'content',
      headerName: 'Content',
      width: 150
    }
  ];

  // const columns = [
  //   { field: 'id', headerName: 'ID', width: 90 },
  //   {
  //     field: 'firstName',
  //     headerName: 'First name',
  //     width: 150,
  //     editable: true
  //   },
  //   {
  //     field: 'lastName',
  //     headerName: 'Last name',
  //     width: 150,
  //     editable: true
  //   },
  //   {
  //     field: 'age',
  //     headerName: 'Age',
  //     type: 'number',
  //     width: 110,
  //     editable: true
  //   }
  // ];
  //
  // const rows = [
  //   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  //   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  //   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  //   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  //   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  //   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  //   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  //   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  //   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 }
  // ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        columns={columns}
        rows={data.todoItems}
        pageSize={10}
        checkboxSelection
      />
    </div>
  );
};
