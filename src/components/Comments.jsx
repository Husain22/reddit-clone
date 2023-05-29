import { Comment } from ".";
import useAxios from "../hooks/useAxios";
import moment from "moment";

const dump = [1, 2, 3, 4];
function Comments({ comments }) {
  const { data, error, isLoading } = useAxios(
    `https://www.reddit.com/${comments}.json`
  );

  if (isLoading) {
    return (
      <>
        {dump.map((_, i) => (
          <div
            key={i}
            className="w-full bg-gray-100 animate-pulse h-4 rounded my-2"
          />
        ))}
      </>
    );
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
