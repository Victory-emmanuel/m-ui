import {
  AccountBox,
  Home,
  ModeNight,
  Pages,
  Person,
  Settings,
  Storefront,
} from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
  Typography,
} from "@mui/material";

const SideBar = () => {
  return (
    <>
      <Box
        flex={1}
        p={2}
        sx={{
          display: {
            xs: "none",
            sm: "none",
            md: "block",
          },

          color: "#252525",
          fontWeight: "bold",
        }}
      >
        <Box position="fixed">
          <List>
            <ListItem sx={{ marginBottom: "12px" }} disablePadding>
              <ListItemButton component="a" href="#home">
                <ListItemIcon>
                  <Home sx={{ color: "#252525" }} />
                </ListItemIcon>
                <Typography
                  sx={{ fontWeight: "bold" }}
                  variant="span"
                  component="span"
                >
                  Homepage
                </Typography>
              </ListItemButton>
            </ListItem>
            <ListItem sx={{ marginBottom: "12px" }} disablePadding>
              <ListItemButton component="a" href="#home">
                <ListItemIcon>
                  <Settings sx={{ color: "#252525" }} />
                </ListItemIcon>
                <ListItemText sx={{}} primary="Settings" />
              </ListItemButton>
            </ListItem>
            <ListItem sx={{ marginBottom: "12px" }} disablePadding>
              <ListItemButton component="a" href="#home">
                <ListItemIcon>
                  <AccountBox sx={{ color: "#252525" }} />
                </ListItemIcon>
                <ListItemText sx={{}} primary="Profile" />
              </ListItemButton>
            </ListItem>
            <ListItem sx={{ marginBottom: "12px" }} disablePadding>
              <ListItemButton component="a" href="#home">
                <ListItemIcon>
                  <Person sx={{ color: "#252525" }} />
                </ListItemIcon>
                <ListItemText sx={{ fontWeight: "bold" }} primary="Friends" />
              </ListItemButton>
            </ListItem>
            <ListItem sx={{ marginBottom: "12px" }} disablePadding>
              <ListItemButton component="a" href="#home">
                <ListItemIcon>
                  <Pages sx={{ color: "#252525" }} />
                </ListItemIcon>
                <ListItemText sx={{ fontWeight: "bold" }} primary="Pages" />
              </ListItemButton>
            </ListItem>
            <ListItem sx={{ marginBottom: "12px" }} disablePadding>
              <ListItemButton component="a" href="#home">
                <ListItemIcon>
                  <Storefront sx={{ color: "#252525" }} />
                </ListItemIcon>
                <ListItemText primary="Marketplace" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#home">
                <ListItemIcon>
                  <ModeNight sx={{ color: "#252525" }} />
                </ListItemIcon>
                <Switch />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Box>
    </>
  );
};

export default SideBar;
