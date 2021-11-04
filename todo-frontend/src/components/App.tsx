import React from 'react';
import { useGetTodoItemsQuery, TodoItem } from '../gql/types';
import { CssBaseline, ThemeProvider, useTheme } from '@mui/material';
import { TodoList } from './TodoList';
import Container from '@mui/material/Container';
import { css } from '@emotion/react';

export const App: React.FunctionComponent = (): React.ReactElement => {
  const { data, loading, error } = useGetTodoItemsQuery();
  const theme = useTheme();

  if (loading || !data) return <p>loading</p>;
  if (error) return <p>{JSON.stringify(error.message)}</p>;
  console.log(data);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Container>
          <TodoList />
        </Container>
      </CssBaseline>
    </ThemeProvider>
  );
};
