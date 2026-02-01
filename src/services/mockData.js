export const mockUsers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active', joinDate: '2023-01-15' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Manager', status: 'Active', joinDate: '2023-02-20' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User', status: 'Inactive', joinDate: '2023-03-10' },
  { id: 4, name: 'Alice Williams', email: 'alice@example.com', role: 'Manager', status: 'Active', joinDate: '2023-04-05' },
  { id: 5, name: 'Charlie Brown', email: 'charlie@example.com', role: 'User', status: 'Active', joinDate: '2023-05-12' }
];

export const mockStats = {
  totalUsers: 1234,
  activeUsers: 987,
  revenue: 45678,
  growth: 12.5
};

export const mockChartData = {
  series: [{
    name: 'Users',
    data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 140, 160, 180]
  }],
  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
};

export const mockRevenueData = {
  series: [44, 55, 13, 43],
  labels: ['Product A', 'Product B', 'Product C', 'Product D']
};
