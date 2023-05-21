import * as React from "react";

const BlogFeed = React.lazy(() => import("../components/BlogFeed"));

const Home = () => {
  return (
    <>
      <React.Suspense fallback={<div>Page is Loading...</div>}>
        <BlogFeed />
      </React.Suspense>
    </>
  );
};

export default Home;
