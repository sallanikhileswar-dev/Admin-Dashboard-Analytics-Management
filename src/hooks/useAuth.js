import { useSelector } from 'react-redux';

export const useAuth = () => {
  const { isAuthenticated, user, role } = useSelector((state) => state.auth);

  const isAdmin = role === 'Admin';
  const isManager = role === 'Manager';

  return {
    isAuthenticated,
    user,
    role,
    isAdmin,
    isManager
  };
};
