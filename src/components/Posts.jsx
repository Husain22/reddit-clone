import { useMemo } from "react";
import useAxios from "../hooks/useAxios";
import moment from "moment";
import { useParams } from "react-router-dom";

import { Post } from ".";

function Posts() {
  const { name, query } = useParams();

  const url = useMemo(() => {
    if (name && !query) {
      return `https://www.reddit.com/r/${name}.json`;
    } else if (!name && !query) {
      return "https://www.reddit.com/r/Home.json";
    } else {
      return `https://www.reddit.com/search.json?q=${query}`;
    }
  }, [name, query]);

  const { data, error, isLoading } = useAxios(url);

  if (isLoading) {
    return (
      <div className="loading my-32  mx-auto">
        <div className="spinner"></div>
        <div className="mt-4">Loading Posts...</div>
      </div>
    );
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
