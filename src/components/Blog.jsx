import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import * as React from "react";
import { BASE_URL } from "../services/Helper";

const Blog = ({ blog }) => {
  return (
    <React.Fragment>
      <Box>
        <Card
          sx={{
            border: 1,
            borderColor: "#F2F3F4",
            borderRadius: "5px",
            padding: "20px",
          }}
        >
          <CardMedia
            component="img"
            height="225"
            src={BASE_URL + "/post/image/" + blog.imageName}
            alt="blog-image"
          />
          <Grid container spacing={2} sx={{ marginTop: "5px" }}>
            <Grid item xs={2}>
              <Typography variant="body1" color="primary.dark">
                {blog.category.categoryTitle}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Box display="flex" justifyContent="flex-end">
                <Typography
                  variant="body2"
                  color="secondary.dark"
                  dangerouslySetInnerHTML={{
                    __html: blog.addedDate.substring(0, 12),
                  }}
                />
              </Box>
            </Grid>
          </Grid>
          <Typography
            variant="h1"
            fontWeight="800"
            sx={{ fontSize: "20px", marginTop: "10px" }}
          >
            {blog.title}
          </Typography>
          <Typography
            variant="body1"
            dangerouslySetInnerHTML={{
              __html: blog.content.substring(0, 100),
            }}
            sx={{ marginTop: "10px" }}
          />
          <CardActions disableSpacing sx={{ marginTop: "50px" }}>
            <Avatar
              alt="user-profile-image"
              src={BASE_URL + "/user/profile/" + blog.user.profileImage}
              sx={{ marginLeft: "-10px" }}
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
