import { Link } from "react-router-dom";

function Subreddit({ name, borderColor, icon }) {
  return (
    <Link to={`/subreddit/${name}`}>
      <li className="text-sm text-gray-600 flex items-center hover:bg-gray-100 hover:cursor-pointer p-4 w-full">
        <img
          src={
            icon
              ? icon
              : "https://b.thumbs.redditmedia.com/6EKfzU5PYmvE4USNgMZaBR6iCS5NnJ3YFTkZyPbXnZM.png"
          }
          height={30}
          width={30}
          style={{ borderColor: borderColor }}
          className="border-2 mr-2 rounded-full"
          alt={name}
        />
        {name}
      </li>
    </Link>
  );
}

export default Subreddit;
