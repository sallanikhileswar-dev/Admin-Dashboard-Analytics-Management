import { Card, CardContent, Typography, Box } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

const StatCard = ({ title, value, change, icon: Icon, color = 'primary' }) => {
  const isPositive = change >= 0;

  const gradients = {
    primary: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    success: 'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)',
    warning: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
    error: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)'
  };

  return (
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
          background: gradients[color]
        }
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <Box sx={{ flex: 1 }}>
            <Typography 
              color="text.secondary" 
              variant="body2" 
              sx={{ 
                fontWeight: 600, 
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                fontSize: '0.75rem',
                mb: 1.5
              }}
            >
              {title}
            </Typography>
            <Typography 
              variant="h4" 
              component="div" 
              sx={{ 
                mb: 2,
                fontWeight: 700,
                background: gradients[color],
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              {value}
            </Typography>
            <Box 
              sx={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: 0.5,
                px: 1.5,
                py: 0.5,
                borderRadius: 2,
                backgroundColor: isPositive ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)'
              }}
            >
              {isPositive ? (
                <TrendingUpIcon sx={{ fontSize: 16, color: 'success.main' }} />
              ) : (
                <TrendingDownIcon sx={{ fontSize: 16, color: 'error.main' }} />
              )}
              <Typography
                variant="body2"
                sx={{ 
                  color: isPositive ? 'success.main' : 'error.main',
                  fontWeight: 700,
                  fontSize: '0.85rem'
                }}
              >
                {isPositive ? '+' : ''}{change}%
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              background: gradients[color],
              borderRadius: 3,
              p: 1.5,
              display: 'flex',
              boxShadow: `0 8px 16px ${color === 'primary' ? 'rgba(102, 126, 234, 0.3)' : 
                         color === 'success' ? 'rgba(16, 185, 129, 0.3)' :
                         color === 'warning' ? 'rgba(245, 158, 11, 0.3)' : 
                         'rgba(239, 68, 68, 0.3)'}`,
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.1) rotate(5deg)'
              }
            }}
          >
            <Icon sx={{ color: 'white', fontSize: 32 }} />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default StatCard;
