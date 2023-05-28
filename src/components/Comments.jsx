import { Comment } from ".";
import useAxios from "../hooks/useAxios";
import moment from "moment";
function Comments({ comments }) {
  const { data, error, isLoading } = useAxios(
    `https://www.reddit.com/${comments}.json`
  );

  if (isLoading) {
    return <div>Loading comments...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="flex flex-col my-2">
      {data?.[1]?.data?.children?.map((comment, index) => (
        <Comment
          key={index}
          author={comment.data.author}
          body={comment.data.body}
          time={moment(comment.data.created_utc * 1000).fromNow()}
        />
      ))}
    </div>
  );
}

export default Comments;
