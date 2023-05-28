import useAxios from "../hooks/useAxios";

import { Subreddit } from ".";
function Subreddits() {
  const { data, error, isLoading } = useAxios(
    "https://www.reddit.com/reddits.json"
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <ul>
      {data?.data?.children?.map((subreddit, index) => (
        <Subreddit
          key={index}
          name={subreddit.data.display_name}
          borderColor={subreddit.data.primary_color}
          icon={subreddit.data.icon_img}
        />
      ))}
    </ul>
  );
}

export default Subreddits;
