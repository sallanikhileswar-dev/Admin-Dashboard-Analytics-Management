import { Grid, Typography, Card, CardContent, Box } from '@mui/material';
import { useSelector } from 'react-redux';
import Chart from 'react-apexcharts';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import { mockRevenueData, mockChartData } from '../services/mockData';

const Analytics = () => {
  const { mode } = useSelector((state) => state.theme);

  const donutOptions = {
    chart: { 
      type: 'donut',
      background: 'transparent'
    },
    labels: mockRevenueData.labels,
    colors: ['#667eea', '#ec4899', '#f59e0b', '#10b981'],
    legend: { 
      position: 'bottom',
      labels: {
        colors: mode === 'light' ? '#64748b' : '#94a3b8',
        useSeriesColors: false
      },
      fontSize: '13px',
      fontWeight: 600,
      fontFamily: 'Inter, sans-serif'
    },
    plotOptions: {
      pie: {
        donut: {
          size: '70%',
          labels: {
            show: true,
            total: {
              show: true,
              label: 'Total Revenue',
              fontSize: '14px',
              fontWeight: 600,
              color: mode === 'light' ? '#64748b' : '#94a3b8',
              formatter: () => '$155K'
            }
          }
        }
      }
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: '12px',
        fontWeight: 700,
        fontFamily: 'Inter, sans-serif'
      }
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: { width: 300 },
        legend: { position: 'bottom' }
      }
    }]
  };

  const barOptions = {
    chart: {
      type: 'bar',
      toolbar: { show: false },
      background: 'transparent'
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '60%',
        borderRadius: 8,
        borderRadiusApplication: 'end'
      }
    },
    dataLabels: { enabled: false },
    xaxis: {
      categories: mockChartData.categories,
      labels: {
        style: {
          colors: mode === 'light' ? '#64748b' : '#94a3b8',
          fontSize: '12px',
          fontWeight: 600,
          fontFamily: 'Inter, sans-serif'
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
          fontWeight: 600,
          fontFamily: 'Inter, sans-serif'
        }
      }
    },
    colors: ['#667eea'],
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: 'vertical',
        shadeIntensity: 0.5,
        gradientToColors: ['#764ba2'],
        opacityFrom: 0.9,
        opacityTo: 0.7
      }
    },
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

  const metrics = [
    { 
      label: 'Conversion Rate', 
      value: '3.24%', 
      change: '+0.5%',
      isPositive: true,
      gradient: 'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)',
      icon: '📈'
    },
    { 
      label: 'Bounce Rate', 
      value: '42.5%', 
      change: '-2.1%',
      isPositive: true,
      gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
      icon: '⚡'
    },
    { 
      label: 'Avg. Session', 
      value: '4m 32s', 
      change: '+12s',
      isPositive: true,
      gradient: 'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)',
      icon: '⏱️'
    },
    { 
      label: 'Page Views', 
      value: '12,543', 
      change: '+1.2K',
      isPositive: true,
      gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
      icon: '👁️'
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
          Analytics Dashboard
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ fontWeight: 500 }}>
          Track your performance metrics and insights
        </Typography>
      </Box>

      <Grid container spacing={3} sx={{ mb: 3 }}>
        {metrics.map((metric, index) => (
          <Grid item xs={6} md={3} key={index}>
            <Card
              sx={{
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: metric.gradient
                }
              }}
            >
              <CardContent sx={{ p: 2.5 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                  <Typography 
                    variant="body2" 
                    color="text.secondary"
                    sx={{ 
                      fontWeight: 600,
                      fontSize: '0.8rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}
                  >
                    {metric.label}
                  </Typography>
                  <Box sx={{ fontSize: '1.5rem' }}>{metric.icon}</Box>
                </Box>
                <Typography 
                  variant="h4" 
                  sx={{ 
                    fontWeight: 700,
                    mb: 1,
                    background: metric.gradient,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  {metric.value}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  {metric.isPositive ? (
                    <TrendingUpIcon sx={{ fontSize: 16, color: 'success.main' }} />
                  ) : (
                    <TrendingDownIcon sx={{ fontSize: 16, color: 'error.main' }} />
                  )}
                  <Typography
                    variant="caption"
                    sx={{ 
                      color: metric.isPositive ? 'success.main' : 'error.main',
                      fontWeight: 700
                    }}
                  >
                    {metric.change}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ mb: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>
                  Revenue Distribution
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Product performance breakdown
                </Typography>
              </Box>
              <Chart
                options={donutOptions}
                series={mockRevenueData.series}
                type="donut"
                height={350}
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ mb: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>
                  Monthly Performance
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Year-over-year comparison
                </Typography>
              </Box>
              <Chart
                options={barOptions}
                series={mockChartData.series}
                type="bar"
                height={350}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Analytics;
