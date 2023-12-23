import { Box } from "@mui/material";
import { Post } from "../components/components";

const Feed = () => {
  return (
    <>
      <Box flex={4} p={2}>
        <Post />
        <Post />
        <Post />
      </Box>
    </>
  );
};

export default Feed;
