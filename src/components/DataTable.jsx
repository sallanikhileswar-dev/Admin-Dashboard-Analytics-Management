import { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  TablePagination, TableSortLabel, Paper, TextField, Box, Chip, InputAdornment
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const DataTable = ({ data, columns }) => {
  const { mode } = useSelector((state) => state.theme);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [orderBy, setOrderBy] = useState('');
  const [order, setOrder] = useState('asc');
  const [filter, setFilter] = useState('');

  const handleSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const filteredData = data.filter((row) =>
    Object.values(row).some((value) =>
      String(value).toLowerCase().includes(filter.toLowerCase())
    )
  );

  const sortedData = [...filteredData].sort((a, b) => {
    if (!orderBy) return 0;
    const aVal = a[orderBy];
    const bVal = b[orderBy];
    if (order === 'asc') {
      return aVal > bVal ? 1 : -1;
    }
    return aVal < bVal ? 1 : -1;
  });

  const paginatedData = sortedData.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Paper>
      <Box sx={{ p: 3 }}>
        <TextField
          fullWidth
          size="small"
          placeholder="Search across all fields..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: 'primary.main' }} />
              </InputAdornment>
            )
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              background: mode === 'light' 
                ? 'rgba(102, 126, 234, 0.03)' 
                : 'rgba(129, 140, 248, 0.05)'
            }
          }}
        />
      </Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow
              sx={{
                background: mode === 'light'
                  ? 'linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%)'
                  : 'linear-gradient(135deg, rgba(129, 140, 248, 0.05) 0%, rgba(167, 139, 250, 0.05) 100%)'
              }}
            >
              {columns.map((column) => (
                <TableCell 
                  key={column.id}
                  sx={{ 
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    color: 'text.primary'
                  }}
                >
                  <TableSortLabel
                    active={orderBy === column.id}
                    direction={orderBy === column.id ? order : 'asc'}
                    onClick={() => handleSort(column.id)}
                    sx={{
                      '&.Mui-active': {
                        color: 'primary.main',
                        fontWeight: 700
                      }
                    }}
                  >
                    {column.label}
                  </TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData.map((row, index) => (
              <TableRow 
                key={row.id} 
                hover
                sx={{
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    background: mode === 'light'
                      ? 'rgba(102, 126, 234, 0.04)'
                      : 'rgba(129, 140, 248, 0.04)',
                    transform: 'scale(1.001)'
                  },
                  animation: `fadeIn 0.3s ease ${index * 0.05}s both`,
                  '@keyframes fadeIn': {
                    from: { opacity: 0, transform: 'translateY(10px)' },
                    to: { opacity: 1, transform: 'translateY(0)' }
                  }
                }}
              >
                {columns.map((column) => (
                  <TableCell 
                    key={column.id}
                    sx={{ 
                      fontSize: '0.9rem',
                      fontWeight: column.id === 'name' ? 600 : 400
                    }}
                  >
                    {column.id === 'status' ? (
                      <Chip
                        label={row[column.id]}
                        color={row[column.id] === 'Active' ? 'success' : 'default'}
                        size="small"
                        sx={{
                          fontWeight: 700,
                          fontSize: '0.75rem',
                          height: 26,
                          background: row[column.id] === 'Active'
                            ? 'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)'
                            : undefined,
                          boxShadow: row[column.id] === 'Active'
                            ? '0 4px 12px rgba(16, 185, 129, 0.2)'
                            : undefined
                        }}
                      />
                    ) : column.id === 'role' ? (
                      <Chip
                        label={row[column.id]}
                        size="small"
                        sx={{
                          fontWeight: 600,
                          fontSize: '0.75rem',
                          height: 26,
                          background: row[column.id] === 'Admin'
                            ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                            : row[column.id] === 'Manager'
                            ? 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
                            : 'rgba(100, 116, 139, 0.1)',
                          color: row[column.id] === 'User' ? 'text.primary' : 'white'
                        }}
                      />
                    ) : (
                      row[column.id]
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={filteredData.length}
        page={page}
        onPageChange={(e, newPage) => setPage(newPage)}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={(e) => {
          setRowsPerPage(parseInt(e.target.value, 10));
          setPage(0);
        }}
        rowsPerPageOptions={[5, 10, 25]}
        sx={{
          borderTop: '1px solid',
          borderColor: mode === 'light' ? 'rgba(0, 0, 0, 0.08)' : 'rgba(255, 255, 255, 0.08)',
          '& .MuiTablePagination-selectLabel, & .MuiTablePagination-displayedRows': {
            fontWeight: 600,
            fontSize: '0.85rem'
          }
        }}
      />
    </Paper>
  );
};

export default DataTable;
