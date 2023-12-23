import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import puppies from "../assets/pups.jpg";

const Post = () => {
  return (
    <>
      <Box>
        <Card sx={{ margin: 5 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: " #252525" }} aria-label="recipe">
                A
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVert />
              </IconButton>
            }
            title="Alex"
            subheader="September 14, 2023"
          />

          <CardMedia
            component="img"
            height="490"
            image={puppies}
            alt="puppies"
          />

          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              quos unde veritatis repellendus accusantium, porro asperiores
              facilis perferendis minus neque nostrum quae minima eaque
              molestiae!
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <Checkbox
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite sx={{ color: "red" }} />}
              />
            </IconButton>
            <IconButton aria-label="share">
              <Checkbox
                icon={<Share />}
                checkedIcon={<Share sx={{ color: "skyblue" }} />}
              />
            </IconButton>
          </CardActions>
        </Card>
      </Box>
    </>
  );
};

export default Post;
