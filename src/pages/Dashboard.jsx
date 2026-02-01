import { Grid, Typography, Card, CardContent, Box, Avatar } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { useSelector } from 'react-redux';
import Chart from 'react-apexcharts';
import PeopleIcon from '@mui/icons-material/People';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import StatCard from '../components/StatCard';
import { mockStats, mockChartData } from '../services/mockData';

const Dashboard = () => {
  const { mode } = useSelector((state) => state.theme);
  const { data: stats } = useQuery({
    queryKey: ['stats'],
    queryFn: () => Promise.resolve(mockStats)
  });

  const lineChartOptions = {
    chart: {
      type: 'area',
      toolbar: { show: false },
      zoom: { enabled: false },
      background: 'transparent'
    },
    dataLabels: { enabled: false },
    stroke: { 
      curve: 'smooth', 
      width: 3,
      colors: ['#667eea']
    },
    xaxis: {
      categories: mockChartData.categories,
      labels: {
        style: {
          colors: mode === 'light' ? '#64748b' : '#94a3b8',
          fontSize: '12px',
          fontWeight: 600
        }
      },
      axisBorder: { show: false },
      axisTicks: { show: false }
    },
    yaxis: {
      labels: {
        style: {
          colors: mode === 'light' ? '#64748b' : '#94a3b8',
          fontSize: '12px',
          fontWeight: 600
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.1,
        stops: [0, 90, 100]
      }
    },
    colors: ['#667eea'],
    grid: {
      borderColor: mode === 'light' ? '#e2e8f0' : '#334155',
      strokeDashArray: 4,
      xaxis: { lines: { show: false } }
    },
    tooltip: {
      theme: mode,
      style: {
        fontSize: '12px',
        fontFamily: 'Inter, sans-serif'
      },
      y: {
        formatter: (val) => val.toLocaleString()
      }
    }
  };

  const activities = [
    { 
      text: 'New user registered', 
      time: '2 min ago',
      icon: '👤',
      color: '#667eea'
    },
    { 
      text: 'Order #1234 completed', 
      time: '15 min ago',
      icon: '🛍️',
      color: '#10b981'
    },
    { 
      text: 'Payment received', 
      time: '1 hour ago',
      icon: '💰',
      color: '#f59e0b'
    },
    { 
      text: 'New comment posted', 
      time: '2 hours ago',
      icon: '💬',
      color: '#ec4899'
    }
  ];

  return (
    <Box>
      <Box sx={{ mb: 4 }}>
        <Typography 
          variant="h4" 
          sx={{ 
            fontWeight: 700,
            mb: 1,
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          Dashboard Overview
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ fontWeight: 500 }}>
          Welcome back! Here's what's happening today.
        </Typography>
      </Box>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Total Users"
            value={stats?.totalUsers.toLocaleString()}
            change={12.5}
            icon={PeopleIcon}
            color="primary"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Active Users"
            value={stats?.activeUsers.toLocaleString()}
            change={8.2}
            icon={TrendingUpIcon}
            color="success"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Revenue"
            value={`$${stats?.revenue.toLocaleString()}`}
            change={15.3}
            icon={AttachMoneyIcon}
            color="warning"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Orders"
            value="342"
            change={-2.4}
            icon={ShoppingCartIcon}
            color="error"
          />
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} lg={8}>
          <Card>
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>
                    User Growth
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Monthly active users trend
                  </Typography>
                </Box>
                <Box
                  sx={{
                    px: 2,
                    py: 1,
                    borderRadius: 2,
                    background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
                    border: '1px solid rgba(102, 126, 234, 0.2)'
                  }}
                >
                  <Typography variant="caption" sx={{ fontWeight: 700, color: 'primary.main' }}>
                    +23.5% this month
                  </Typography>
                </Box>
              </Box>
              <Chart
                options={lineChartOptions}
                series={mockChartData.series}
                type="area"
                height={350}
              />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} lg={4}>
          <Card sx={{ height: '100%' }}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 3 }}>
                Recent Activity
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {activities.map((activity, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 2,
                      p: 2,
                      borderRadius: 3,
                      background: mode === 'light' 
                        ? 'rgba(248, 250, 252, 0.8)' 
                        : 'rgba(15, 23, 42, 0.5)',
                      border: '1px solid',
                      borderColor: mode === 'light' ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.05)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateX(4px)',
                        borderColor: activity.color,
                        boxShadow: `0 4px 12px ${activity.color}20`
                      }
                    }}
                  >
                    <Avatar
                      sx={{
                        width: 40,
                        height: 40,
                        background: `${activity.color}15`,
                        fontSize: '1.2rem'
                      }}
                    >
                      {activity.icon}
                    </Avatar>
                    <Box sx={{ flex: 1, minWidth: 0 }}>
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          fontWeight: 600,
                          mb: 0.5,
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap'
                        }}
                      >
                        {activity.text}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <FiberManualRecordIcon 
                          sx={{ 
                            fontSize: 8, 
                            color: activity.color,
                            animation: 'pulse 2s ease-in-out infinite',
                            '@keyframes pulse': {
                              '0%, 100%': { opacity: 1 },
                              '50%': { opacity: 0.5 }
                            }
                          }} 
                        />
                        <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 500 }}>
                          {activity.time}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
