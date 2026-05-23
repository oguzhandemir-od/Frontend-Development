import React from "react";

import "./main.css";
import { useContext } from "react";
import { ThemeContext } from "./context-api/ThemeContext";

// Material UI
import {
  Alert,
  AppBar,
  Button,
  Card,
  CardContent,
  Container,
  createTheme,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";

// Function
export default function MainFunction() {
  // Material UI
  const materialUITheme = createTheme({
    palette: {
      primary: {
        main: "#111111",
      },
      secondary: {
        main: "#222222",
      },
    },
  });

  // Context Api
  const { theme, toggleTheme } = useContext(ThemeContext);
  const styles = {
    light: {
      background: "white",
      color: "black",
      padding: "2rem",
    },
    dark: {
      background: "black",
      color: "white",
      padding: "2rem",
    },
  };

  return (
    <React.Fragment>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <br />
            <Typography variant="h2" component="h2">
              Blog Page Sayfası
            </Typography>

            <Typography variant="body1" component="p">
              Blog Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Deleniti ab, culpa atque, incidunt veritatis expedita dignissimos
              dolores sint, veniam eveniet cupiditate laudantium! Fuga sed
              cumque facere deserunt reiciendis? Unde, minus.
            </Typography>
            <br />
            <Button>Primary</Button>
            <Button
              sx={{
                padding: 2, // 8px*2=16px
                marginRight: 4,
                marginBottom: 5,
                display: "block",
              }}
              variant="contained"
            >
              Primary-1
            </Button>

            <Button
              style={{ padding: 10, display: "block", marginBottom: 10 }}
              variant="contained"
              color="secondary"
            >
              Primary-2
            </Button>
            <ThemeProvider theme={materialUITheme}>
              <Button
                style={{ padding: 10, display: "block" }}
                variant="contained"
                color="primary"
              >
                Primary-3
              </Button>
            </ThemeProvider>

            <Alert
              sx={{
                marginTop: 3, // 8px*3=24px
              }}
            >
              Success
            </Alert>

            <Alert
              variant="contained"
              severity="success"
              sx={{
                marginTop: 3, // 8px*3=24px
              }}
            >
              Success
            </Alert>

            <Alert
              variant="outlined"
              severity="success"
              sx={{
                marginTop: 3, // 8px*3=24px
              }}
            >
              Success
            </Alert>

            <Alert
              variant="outlined"
              severity="error"
              sx={{
                marginTop: 3, // 8px*3=24px
              }}
            >
              Error
            </Alert>

            <Alert
              variant="outlined"
              severity="warning"
              sx={{
                marginTop: 3, // 8px*3=24px
              }}
            >
              Warning
            </Alert>

            <Alert
              variant="outlined"
              severity="info"
              sx={{
                marginTop: 3, // 8px*3=24px
              }}
            >
              Info
            </Alert>
          </Grid>
        </Grid>
      </Container>

      {/* KART */}
      <AppBar position="static" style={{ marginTop: 40 }}>
        <Toolbar>
          <Typography variant="h5" style={{ flexGrow: 1 }}>
            Material
          </Typography>
        </Toolbar>
      </AppBar>

      <Container style={{ marginTop: "5px" }}>
        <Card>
          <CardContent>
            <Typography variant="h5" component="h5" color="textSecondary">
              Kart Data
            </Typography>
            <Typography color="">İçerikler</Typography>
          </CardContent>
        </Card>
      </Container>

      <Container style={{marginTop:'25px'}}>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="right">ID</TableCell>
                  <TableCell align="right">Adı</TableCell>
                  <TableCell align="right">Soyadı</TableCell>
                  <TableCell align="right">No</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell align="right">1</TableCell>
                  <TableCell align="right">Adı4</TableCell>
                  <TableCell align="right">Soyadı4</TableCell>
                  <TableCell align="right">No4</TableCell>

                </TableRow>
              </TableBody>
          </Table>
        </TableContainer>
      </Container>

      <br />
      <hr />

      {/* Context API */}
      <div style={styles[theme]}>
        <h2>{theme === "light" ? "Light Theme" : "Dark Theme"}</h2>
        <p style={{ fontSize: "1rem", textAlign: "justify" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          tenetur voluptates eius quas ad accusamus adipisci hic non, labore
          praesentium a suscipit eveniet quia inventore autem ex nisi. Odio,
          ratione. Explicabo aliquam unde quaerat tempora, eos veritatis officia
          beatae odio doloremque praesentium fuga mollitia quis quidem. Ex
          dolore omnis error, neque, consequuntur commodi perferendis obcaecati
          tenetur aliquam odio magni adipisci. Reprehenderit nulla voluptatibus
          impedit officiis voluptates iste soluta cumque ea illum dolor cum
          inventore eius nostrum doloribus tempora mollitia consectetur, laborum
          vel fuga! Nesciunt a, iusto impedit libero dignissimos id! Enim
          architecto aperiam aliquam fugiat non fuga perferendis qui similique
          iusto quos ipsum, quisquam temporibus officiis, nemo dolorum illo
          quibusdam iure, quo corporis nobis repellendus. Similique facilis
          earum quia laborum. Earum explicabo doloribus, quia voluptatem
          repellendus incidunt, deserunt libero ex et dolores doloremque
          nesciunt aliquam. Nesciunt optio deleniti beatae natus cumque eius
          quas voluptates, quidem mollitia dolor assumenda totam similique.
          Sapiente sunt distinctio fugiat a explicabo aspernatur blanditiis
          voluptatum aperiam nostrum facilis corporis doloribus molestiae
          accusantium amet ratione maiores, nemo aut asperiores delectus ipsum
          impedit, repellendus porro omnis atque? Et.
        </p>
      </div>
    </React.Fragment>
  );
}
