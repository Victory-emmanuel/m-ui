import { Box, Stack } from "@mui/material";
import {
  Feed,
  NavBar,
  RightBar,
  SideBar,
  AddPost,
} from "../components/components";
const Home = () => {
  return (
    <>
      <Box sx={{}}>
        <NavBar />
        <Stack direction="row" justifyContent="space-between" spacing={2}>
          <SideBar />
          <Feed />
          <RightBar />
        </Stack>
        <AddPost />
      </Box>
    </>
  );
};

export default Home;
