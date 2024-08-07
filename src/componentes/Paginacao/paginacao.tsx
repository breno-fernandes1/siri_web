import * as React from 'react';
import { Link,  Route, Routes, useLocation } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';

function Content() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get('page') || '1', 4);
  return (
    <Pagination sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      page={page}
      count={4}
      renderItem={(item) => (
        <PaginationItem
          component={Link}
          to={`/${item.page === 1 ? '' : `?page=${item.page}`}`}
          {...item}
        />
      )}
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
