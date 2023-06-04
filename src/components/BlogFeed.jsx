import * as React from "react";
import { Box, Grid, Typography } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";
import { loadAllPosts } from "../services/PostService";
import { toast } from "react-toastify";

// dynamic import
const Blog = React.lazy(() => import("./Blog"));

const BlogFeed = () => {
  const [postContent, setPostContent] = React.useState({
    content: [],
    totalPages: "",
    totalElements: "",
    pageSize: "",
    lastPage: false,
    pageNumber: "",
  });

  const [currentPage, setCurrentPage] = React.useState(0);

  React.useEffect(() => {
    changePage(currentPage);
  }, [currentPage]);

  const changePage = (pageNumber = 0, pageSize = 15) => {
    if (pageNumber > postContent.pageNumber && postContent.lastPage) {
      return;
    }
    if (pageNumber < postContent.pageNumber && postContent.pageNumber === 0) {
      return;
    }

    loadAllPosts(pageNumber, pageSize)
      .then((data) => {
        setPostContent({
          content: [...postContent.content, ...data.content],
          totalPages: data.totalPages,
          totalElements: data.totalElements,
          pageSize: data.pageSize,
          lastPage: data.lastPage,
          pageNumber: data.pageNumber,
        });
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
        // toast.error("Error in loading posts");
      });
  };

  const changePageInfinite = () => {
    setCurrentPage(currentPage + 1);
  };
  return (
    <React.Fragment>
      <Box
        sx={{
          margin: "30px 85px 25px 85px",
        }}
      >
        <InfiniteScroll
          dataLength={postContent.content.length}
          next={changePageInfinite}
          hasMore={!postContent.lastPage}
          loader="loading..."
          endMessage={
            <Typography textAlign={"center"} variant="body2">
              Yay! You have seen it all
            </Typography>
          }
        >
          <Grid container spacing={4}>
            {postContent.content.map((blog, index) => (
              <Grid key={index} item xs={4}>
                {/* <Suspense> */}
                <Blog blog={blog} key={index} />
                {/* </Suspense> */}
              </Grid>
            ))}
          </Grid>
        </InfiniteScroll>
      </Box>
    </React.Fragment>
  );
};

export default BlogFeed;
