import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import pup2 from "../assets/pup2.jpg";
import pup3 from "../assets/pup3.jpg";
import pup4 from "../assets/pup4.jpg";
import pup5 from "../assets/pup4.jpg";
import React from "react";
const RightBar = () => {
  return (
    <>
      <Box
        sx={{
          display: {
            xs: "none",
            sm: "none",
            md: "block",
          },
        }}
        p={2}
        flex={2}
      >
        <Box position="fixed" sx={{ paddingRight: "1.5rem" }}>
          <Typography variant="h6" fontWeight={100} mb={2}>
            Online Friends
          </Typography>
          <AvatarGroup sx={{ display: "flex", justifyContent: "left" }} max={6}>
            <Avatar
              alt="Remy Sharp"
              src="https://material-ui.com/static/images/avatar/1.jpg"
            />
            <Avatar
              alt="Travis Howard"
              src="https://material-ui.com/static/images/avatar/2.jpg"
            />
            <Avatar
              alt="Cindy Baker"
              src="https://material-ui.com/static/images/avatar/3.jpg"
            />
            <Avatar
              alt="Agnes Walker"
              src="https://material-ui.com/static/images/avatar/4.jpg"
            />
            <Avatar
              alt="Trevor Henderson"
              src="https://material-ui.com/static/images/avatar/5.jpg"
            />
            <Avatar
              alt="Trevor Henderson"
              src="https://material-ui.com/static/images/avatar/6.jpg"
            />
            <Avatar
              alt="Trevor Henderson"
              src="https://material-ui.com/static/images/avatar/7.jpg"
            />
          </AvatarGroup>
          <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
            Latest Photos
          </Typography>
          <ImageList cols={2}>
            <ImageListItem>
              <img src={pup2} alt="" />
            </ImageListItem>
            <ImageListItem>
              <img src={pup3} alt="" />
            </ImageListItem>
            <ImageListItem>
              <img src={pup4} alt="" />
            </ImageListItem>
            <ImageListItem>
              <img src={pup5} alt="" />
            </ImageListItem>
          </ImageList>
          <Typography variant="h6" fontWeight={100} mt={2}>
            Latest Chats
          </Typography>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Remy Sharp"
                  src="https://material-ui.com/static/images/avatar/1.jpg"
                />
              </ListItemAvatar>
              <ListItemText
                primary="Brunch this weekend?"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Ali Connors
                    </Typography>
                    {" — I'll be in your neighborhood doing errands this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Travis Howard"
                  src="https://material-ui.com/static/images/avatar/2.jpg"
                />
              </ListItemAvatar>
              <ListItemText
                primary="Summer BBQ"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      to Scott, Alex, Jennifer
                    </Typography>
                    {" — Wish I could come, but I'm out of town this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Cindy Baker"
                  src="https://material-ui.com/static/images/avatar/3.jpg"
                />
              </ListItemAvatar>
              <ListItemText
                primary="Oui Oui"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Sandra Adams
                    </Typography>
                    {" — Do you have Paris recommendations? Have you ever…"}
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
        </Box>
      </Box>
    </>
  );
};

export default RightBar;
