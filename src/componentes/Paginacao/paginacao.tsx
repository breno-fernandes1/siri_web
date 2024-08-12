import * as React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';

function Content() {
  return (
    <Pagination
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      count={4}
      renderItem={(item) => {
        const page = item.page;
        const route = `/dimensoes${page}`; // Gera a rota dinâmica para cada página

        return (
          <PaginationItem
            component={Link}
            to={route}
            {...item}
          />
        );
      }}
    />
  );
}

export default function PaginationLink() {
  return (
    <Routes>
      <Route path="*" element={<Content />} />
    </Routes>
  );
}
