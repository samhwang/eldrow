import {
  CssBaseline,
  Grid,
  ThemeProvider,
  createTheme,
  Typography,
} from '@mui/material';

const theme = createTheme();

function App() {
  const rows = [1, 2, 3, 4, 5, 6];
  const columns = [1, 2, 3, 4, 5];
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid container maxWidth="xs">
        <Typography variant="h1">ELDROW</Typography>
        {rows.map((rowNum) => (
          <Grid
            item
            container
            key={`row-${rowNum}`}
            xs={12}
            spacing={2}
            sx={{
              alignItems: 'center',
              justify: 'row',
              margin: 2,
            }}
          >
            {columns.map((colNum) => (
              <Grid
                item
                container
                key={`${rowNum}x${colNum}`}
                xs={2}
                spacing={1}
                sx={{
                  alignItems: 'center',
                  border: '1px solid',
                  margin: 1,
                  minWidth: '50px',
                  maxWidth: '50px',
                  minHeight: '50px',
                  maxHeight: '50px',
                }}
              >
                <Typography>A</Typography>
              </Grid>
            ))}
          </Grid>
        ))}
      </Grid>
    </ThemeProvider>
  );
}

export default App;
