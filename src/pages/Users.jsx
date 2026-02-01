import { Typography, Box, Card, CardContent } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { useSelector } from 'react-redux';
import DataTable from '../components/DataTable';
import { mockUsers } from '../services/mockData';

const columns = [
  { id: 'id', label: 'ID' },
  { id: 'name', label: 'Name' },
  { id: 'email', label: 'Email' },
  { id: 'role', label: 'Role' },
  { id: 'status', label: 'Status' },
  { id: 'joinDate', label: 'Join Date' }
];

const Users = () => {
  const { role } = useSelector((state) => state.auth);

  const { data: users, isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: () => Promise.resolve(mockUsers)
  });

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        User Management
      </Typography>

      {role === 'Admin' ? (
        <Card sx={{ mb: 2, bgcolor: 'info.light' }}>
          <CardContent>
            <Typography variant="body2">
              🔐 Admin Access: You have full access to manage all users
            </Typography>
          </CardContent>
        </Card>
      ) : (
        <Card sx={{ mb: 2, bgcolor: 'warning.light' }}>
          <CardContent>
            <Typography variant="body2">
              👁️ Manager Access: View-only mode
            </Typography>
          </CardContent>
        </Card>
      )}

      <DataTable data={users} columns={columns} />
    </Box>
  );
};

export default Users;
