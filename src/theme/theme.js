import { useMemo } from 'react';
import { createTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';

export const useTheme = () => {
  const { mode } = useSelector((state) => state.theme);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: mode === 'light' ? '#6366f1' : '#818cf8',
            light: '#a5b4fc',
            dark: '#4f46e5',
            gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
          },
          secondary: {
            main: mode === 'light' ? '#ec4899' : '#f472b6',
            light: '#f9a8d4',
            dark: '#db2777',
            gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
          },
          success: {
            main: '#10b981',
            light: '#34d399',
            dark: '#059669'
          },
          warning: {
            main: '#f59e0b',
            light: '#fbbf24',
            dark: '#d97706'
          },
          error: {
            main: '#ef4444',
            light: '#f87171',
            dark: '#dc2626'
          },
          info: {
            main: '#3b82f6',
            light: '#60a5fa',
            dark: '#2563eb'
          },
          background: {
            default: mode === 'light' ? '#f8fafc' : '#0f172a',
            paper: mode === 'light' ? '#ffffff' : '#1e293b',
            gradient: mode === 'light' 
              ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
              : 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)'
          },
          text: {
            primary: mode === 'light' ? '#1e293b' : '#f1f5f9',
            secondary: mode === 'light' ? '#64748b' : '#94a3b8'
          }
        },
        typography: {
          fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
          h4: {
            fontWeight: 700,
            letterSpacing: '-0.02em'
          },
          h5: {
            fontWeight: 700,
            letterSpacing: '-0.01em'
          },
          h6: {
            fontWeight: 600,
            letterSpacing: '-0.01em'
          },
          button: {
            fontWeight: 600,
            letterSpacing: '0.02em'
          }
        },
        shape: {
          borderRadius: 16
        },
        shadows: mode === 'light' ? [
          'none',
          '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
          '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
          '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
          '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
          '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          ...Array(18).fill('0 25px 50px -12px rgba(0, 0, 0, 0.25)')
        ] : [
          'none',
          '0 1px 2px 0 rgba(0, 0, 0, 0.3)',
          '0 1px 3px 0 rgba(0, 0, 0, 0.4), 0 1px 2px 0 rgba(0, 0, 0, 0.24)',
          '0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -1px rgba(0, 0, 0, 0.24)',
          '0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -2px rgba(0, 0, 0, 0.2)',
          '0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 10px 10px -5px rgba(0, 0, 0, 0.16)',
          '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
          ...Array(18).fill('0 25px 50px -12px rgba(0, 0, 0, 0.5)')
        ],
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                textTransform: 'none',
                borderRadius: 12,
                padding: '10px 24px',
                fontSize: '0.95rem',
                fontWeight: 600,
                boxShadow: 'none',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)'
                }
              },
              contained: {
                background: mode === 'light' 
                  ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                  : 'linear-gradient(135deg, #818cf8 0%, #a78bfa 100%)',
                '&:hover': {
                  background: mode === 'light'
                    ? 'linear-gradient(135deg, #5568d3 0%, #653a8b 100%)'
                    : 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)'
                }
              }
            }
          },
          MuiCard: {
            styleOverrides: {
              root: {
                borderRadius: 20,
                backdropFilter: 'blur(20px)',
                background: mode === 'light'
                  ? 'rgba(255, 255, 255, 0.9)'
                  : 'rgba(30, 41, 59, 0.8)',
                border: mode === 'light' 
                  ? '1px solid rgba(255, 255, 255, 0.8)'
                  : '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: mode === 'light'
                  ? '0 8px 32px rgba(0, 0, 0, 0.08)'
                  : '0 8px 32px rgba(0, 0, 0, 0.4)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: mode === 'light'
                    ? '0 12px 40px rgba(0, 0, 0, 0.12)'
                    : '0 12px 40px rgba(0, 0, 0, 0.5)'
                }
              }
            }
          },
          MuiTextField: {
            styleOverrides: {
              root: {
                '& .MuiOutlinedInput-root': {
                  borderRadius: 12,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-1px)'
                  },
                  '&.Mui-focused': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 12px rgba(99, 102, 241, 0.2)'
                  }
                }
              }
            }
          },
          MuiChip: {
            styleOverrides: {
              root: {
                borderRadius: 8,
                fontWeight: 600,
                fontSize: '0.8rem'
              }
            }
          }
        }
      }),
    [mode]
  );

  return theme;
};
