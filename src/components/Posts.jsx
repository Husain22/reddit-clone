import useAxios from "../hooks/useAxios";
import moment from "moment";

import { Post } from ".";

function Posts() {
  const { data, error, isLoading } = useAxios(
    "https://www.reddit.com/r/Home.json"
  );

  if (isLoading) {
    return <div>Loading posts...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="grow">
      {data?.data?.children?.map((post, index) => (
        <Post
          key={index}
          title={post.data.title}
          num_comments={post.data.num_comments}
          comments={post.data.permalink}
          author={post.data.author}
          image={post.data.url}
          score={post.data.score}
          time={moment(post.data.created_utc * 1000).fromNow()}
        />
      ))}
    </div>
  );
}

export default Posts;
