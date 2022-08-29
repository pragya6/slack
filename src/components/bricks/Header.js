import * as React from "react";
import MuiAppBar from "@mui/material/AppBar";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import {
  Divider,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Dropdown from "../reusables/Dropdown";
import style from "styled-components";
import { styled } from "@mui/material/styles";
import { createTheme, ThemeProvider } from "@mui/material";

const Icon = style.i`
  @media (max-width: 900px) {
    display: none;
  }
`;

const ColIcon = style.i`
  @media (min-width: 900px) {
    display: none;
  }
`;

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1040,
      lg: 1210,
      xl: 1400,
    },
  },
});

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

const pages = ["Solutions", "Enterprise", "Resources", "Pricing"];
const settings = ["Solutions", "Enterprise", "Resources", "Pricing", "Sign in"];

const Header = () => {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Grid container justifyContent="center">
      <Grid item xl={10} lg={11} md={12} xs={12}>
        <ThemeProvider theme={theme}>
          <AppBar
            position="static"
            elevation={0}
            sx={{ md: { width: "100%" }, lg: { width: "75%" } }}
            style={{ backgroundColor: "transparent" }}
          >
            <Container maxWidth="xl">
              <Toolbar disableGutters>
                <Icon
                  className="fa-brands fa-slack fa-2x"
                  style={{ marginRight: "0.5rem" }}
                ></Icon>
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                    mr: 2,
                    display: { xs: "none", md: "flex" },
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  Slack
                </Typography>

                <Box
                  sx={{
                    flexGrow: 1,
                    display: { xs: "flex", md: "none" },
                    position: "absolute",
                    right: "1rem",
                  }}
                >
                  <IconButton
                    size="large"
                    color="inherit"
                    aria-label="open drawer"
                    edge="end"
                    onClick={handleDrawerOpen}
                    sx={{ ...(open && { display: "none" }) }}
                  >
                    <MenuIcon />
                  </IconButton>
                </Box>
                <ColIcon
                  className="fa-brands fa-slack fa-2x"
                  style={{ marginRight: "0.5rem" }}
                ></ColIcon>
                <Typography
                  variant="h5"
                  noWrap
                  component="a"
                  href=""
                  sx={{
                    mr: 2,
                    display: { xs: "flex", md: "none" },
                    flexGrow: 1,
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  Slack
                </Typography>
                <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                  <Dropdown />
                  {pages.map((page) => (
                    <Button
                      key={page}
                      sx={{
                        my: 2,
                        color: "white",
                        display: "block",
                        ":hover": {
                          bgcolor: "transparent",
                          fontSize: "0.95rem",
                          textDecoration: "underline",
                          textUnderlineOffset: "0.5rem",
                        },
                      }}
                    >
                      {page}
                    </Button>
                  ))}
                </Box>

                <Box sx={{ flexGrow: 0, display: "block" }}>
                  <Button
                    sx={{
                      my: 2,
                      mx: { xs: 4, sm: 4, md: 1 },
                      color: "white",
                      display: "block",
                    }}
                  >
                    <SearchIcon />
                  </Button>
                </Box>

                <Box
                  sx={{
                    flexGrow: 0,
                    display: { xs: "none", sm: "none", md: "flex", lg: "flex" },
                  }}
                >
                  <Button
                    sx={{
                      my: 2,
                      mx: 1,
                      color: "white",
                      display: "block",
                      textTransform: "none",
                    }}
                  >
                    Sign In
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{
                      my: 2,
                      mx: 1,
                      py: 1,
                      borderColor: "white",
                      color: "white",
                      display: { md: "none", lg: "block" },
                      textTransform: "none",
                    }}
                  >
                    Talk To Sales
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      my: 2,
                      mx: 1,
                      py: 1,
                      backgroundColor: "white",
                      color: "#611F69",
                      display: "block",
                      textTransform: "none",
                    }}
                  >
                    Try for free
                  </Button>
                </Box>
              </Toolbar>
            </Container>
          </AppBar>
        </ThemeProvider>
        <Drawer
          sx={{
            width: "100%",
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: "100%",
            },
          }}
          variant="persistent"
          anchor="right"
          open={open}
        >
          <DrawerHeader>
            <IconButton
              onClick={handleDrawerClose}
              sx={{ position: "absolute", right: "0.5rem" }}
            >
              <CloseIcon />
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {settings.map((text) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemText
                    primary={
                      <Typography style={{ fontWeight: "bold" }}>
                        {text}
                      </Typography>
                    }
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Stack
            spacing={2}
            direction={{ xs: "column", sm: "row", md: "row" }}
            position="absolute"
            sx={{ padding: "2.5rem 1rem", width: "100%" }}
            bottom={0}
            right={0}
            style={{ boxShadow: "1px 0px 20px 3px #D3D3D3" }}
          >
            <Button
              style={{
                color: "#611F69",
                border: "solid",
                borderWidth: "1",
                borderColor: "#611F69",
                width: "100%",
              }}
              variant="outlined"
            >
              Sign In
            </Button>
            <Button
              style={{
                backgroundColor: "#611F69",
                color: "white",
                fontWeight: "bold",
                width: "100%",
              }}
              variant="contained"
            >
              Download Slack
            </Button>
          </Stack>
        </Drawer>
      </Grid>
    </Grid>
  );
};

export default Header;
