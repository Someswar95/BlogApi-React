import * as React from "react";
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardMedia,
  Typography,
} from "@mui/material";
import { BASE_URL } from "../services/Helper";

const Blog = ({ blog }) => {
  return (
    <React.Fragment>
      <Box>
        <Card
          sx={{
            border: 1,
            borderColor: "#F2F3F4",
            borderRadius: "3px",
          }}
        >
          <CardMedia
            component="img"
            height="200"
            src={BASE_URL + "/post/image/" + blog.imageName}
            alt="blog-image"
          />
          {/* <Box sx={{ p: 1 }}> */}
          <Typography
            variant="h1"
            fontWeight="700"
            sx={{ fontSize: "18px", mt: 1, p: 1 }}
          >
            {blog.title}
          </Typography>
          <Typography
            variant="caption"
            color="primary.dark"
            display="inline"
            sx={{ mt: 0, p: 1 }}
          >
            {blog.category.categoryTitle}
          </Typography>
          <Typography
            variant="caption"
            color="secondary.dark"
            display="inline"
            sx={{ mt: 0, p: 1 }}
            dangerouslySetInnerHTML={{
              __html: blog.addedDate.substring(0, 21),
            }}
          />
          <Typography
            variant="body1"
            dangerouslySetInnerHTML={{
              __html: blog.content.substring(0, 100),
            }}
            sx={{ mt: 0, p: 1 }}
          />
          <CardActions sx={{ mt: 3 }}>
            <Avatar
              variant="square"
              alt="user-profile-image"
              src={BASE_URL + "/user/profile/" + blog.user.profileImage}
            />
            <Typography
              variant="body2"
              fontWeight={600}
              sx={{ marginLeft: "10px" }}
            >
              {blog.user.name}
            </Typography>
          </CardActions>
        </Card>
      </Box>
    </React.Fragment>
  );
};

export default Blog;
