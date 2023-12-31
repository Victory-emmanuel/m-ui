import {
  AppBar,
  InputBase,
  Paper,
  Toolbar,
  Typography,
  styled,
  Badge,
  Avatar,
  Box,
  Menu,
  MenuItem,
} from "@mui/material";
import pImg from "../assets/p-img.jpg";
import { Pets, Mail, Notifications } from "@mui/icons-material";
import { useState } from "react";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          height: "6rem",
          display: "grid",
          alignItems: "center",
          backgroundColor: "#252525",
        }}
      >
        <StyledToolbar
          sx={{
            gridTemplateColumns: "25% 50% 25%",
          }}
        >
          <Box
            sx={{
              display: "grid",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                display: {
                  xs: "none",
                  sm: "block",
                },
                fontWeight: "bold",
                color: "#fff",
              }}
              variant="h4"
              component="h4"
            >
              Pawfect
            </Typography>
            <Pets
              sx={{
                display: {
                  xs: "block",
                  sm: "none",
                },
                color: "#fff",
              }}
            />
          </Box>

          <Search
            sx={{
              display: "grid",
              justifySelf: "center",
              alignItems: "center",
            }}
          >
            <InputBase placeholder="search..." />
          </Search>
          <Paper
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "flex",
              },
              alignItems: "center",
              padding: "10px",
              background: "none",
              gap: "20px",
              justifySelf: "center",
            }}
            elevation={0}
          >
            <Badge badgeContent={4} color="error">
              <Mail sx={{ color: "white" }} />
            </Badge>
            <Badge badgeContent={2} color="error">
              <Notifications sx={{ color: "white" }} />
            </Badge>
            <Avatar
              src={pImg}
              sx={{
                marginRight: "5px",
                width: "3rem",
                height: "3rem",
              }}
              onClick={(e) => setOpen(true)}
            />
          </Paper>
          <Box
            sx={{
              alignItems: "center",
              justifyItems: "space-between",
              justifySelf: "center",
              display: {
                xs: "flex",
                sm: "flex",
                md: "none",
              },
            }}
            onClick={(e) => setOpen(true)}
          >
            <Avatar
              src={pImg}
              sx={{
                marginRight: "5px",
                width: "3rem",
                height: "3rem",
                display: {
                  sm: "inline-block",
                  md: "none",
                },
              }}
            />
          </Box>
        </StyledToolbar>
        <Menu
          id="demo-positioned-menu"
          onClose={(e) => setOpen(false)}
          aria-labelledby="demo-positioned-button"
          open={open}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
      </AppBar>
    </>
  );
};

const StyledToolbar = styled(Toolbar)({
  display: "grid",
  gridGap: "10px",
});
const Search = styled("form")({
  backgroundColor: "#fff",
  padding: "2px 10px",
  borderRadius: "5px",
  color: "#252525",
  width: "80%",
  height: "fit-content",
  margin: "15px 0 auto 0",
});

export default NavBar;
