import styled from "@emotion/styled";
import {
  Add,
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { useState } from "react";
import pImg from "../assets/p-img.jpg";
const AddPost = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Box
        sx={{
          position: "fixed",
          bottom: 20,
          left: {
            xs: "calc(50% - 25px)",
            md: 40,
          },
        }}
      >
        <Tooltip title="Add" onClick={(e) => setOpen(true)}>
          <Fab
            sx={{ color: "#fff", backgroundColor: "#252525" }}
            aria-label="add"
          >
            <Add />
          </Fab>
        </Tooltip>
        <StyledModal
          open={open}
          onClose={(e) => setOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={{
              width: { xs: "20rem", md: "30rem", lg: "30rem" },
              height: "25rem",
              bgcolor: "#fff",
              padding: "2rem",
              borderRadius: "10px",
            }}
          >
            <Typography
              variant="h6"
              fontWeight="500"
              textAlign="center"
              color="gray"
            >
              Create new post
            </Typography>
            <Box
              sx={{
                alignItems: "center",
                justifyItems: "space-between",
                justifySelf: "center",
                display: "flex",
                margin: "1rem 0",
                gap: "10px",
              }}
              onClick={(e) => setOpen(true)}
            >
              <Avatar
                src={pImg}
                sx={{
                  marginRight: "5px",
                  width: "3rem",
                  height: "3rem",
                }}
              />
              <Typography variant="h6" component="h6" sx={{}}>
                Alex
              </Typography>
            </Box>
            <TextField
              sx={{ width: "100%" }}
              id="standard-multiline-static"
              multiline
              rows={3}
              placeholder="Write about something"
              variant="standard"
            />
            <Stack direction="row" gap={1} mt={2} mb={3}>
              <EmojiEmotions sx={{ color: "#cedb1a" }} />
              <Image sx={{ color: "#18af04" }} />
              <VideoCameraBack sx={{ color: "#252525" }} />
              <PersonAdd colour="primary" />
            </Stack>
            <ButtonGroup
              fullWidth
              variant="contained"
              aria-label="outlined primary button group"
            >
              <Button>Post</Button>
              <Button sx={{ width: "100px" }}>
                <DateRange />
              </Button>
            </ButtonGroup>
          </Box>
        </StyledModal>
      </Box>
    </>
  );
};

const StyledModal = styled(Modal)({
  display: "grid",
  justifyContent: "center",
  alignItems: "center",
});
export default AddPost;
