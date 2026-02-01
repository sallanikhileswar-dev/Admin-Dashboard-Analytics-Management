import {
  Box, Typography, Card, CardContent, TextField, Button,
  Switch, FormControlLabel, Divider, Grid
} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../store/slices/themeSlice';
import { toast } from 'react-toastify';

const Settings = () => {
  const { user } = useSelector((state) => state.auth);
  const { mode } = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const handleSave = () => {
    toast.success('Settings saved successfully!');
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Settings
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Profile Settings
              </Typography>
              <TextField
                fullWidth
                label="Name"
                defaultValue={user?.name}
                margin="normal"
              />
              <TextField
                fullWidth
                label="Email"
                defaultValue={user?.email}
                margin="normal"
                disabled
              />
              <TextField
                fullWidth
                label="Phone"
                defaultValue="+1 234 567 8900"
                margin="normal"
              />
              <Button
                variant="contained"
                sx={{ mt: 2 }}
                onClick={handleSave}
              >
                Save Changes
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Preferences
              </Typography>
              <FormControlLabel
                control={
                  <Switch
                    checked={mode === 'dark'}
                    onChange={() => dispatch(toggleTheme())}
                  />
                }
                label="Dark Mode"
              />
              <Divider sx={{ my: 2 }} />
              <FormControlLabel
                control={<Switch defaultChecked />}
                label="Email Notifications"
              />
              <Divider sx={{ my: 2 }} />
              <FormControlLabel
                control={<Switch defaultChecked />}
                label="Push Notifications"
              />
              <Divider sx={{ my: 2 }} />
              <FormControlLabel
                control={<Switch />}
                label="Marketing Emails"
              />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom color="error">
                Danger Zone
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Once you delete your account, there is no going back.
              </Typography>
              <Button variant="outlined" color="error">
                Delete Account
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Settings;
