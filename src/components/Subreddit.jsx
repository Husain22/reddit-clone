function Subreddit({ name, borderColor, icon }) {
  console.log(`border border-${borderColor}-200 mr-2`);
  return (
    <li className="text-sm text-gray-600 flex items-center hover:bg-gray-100 hover:cursor-pointer p-4">
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
  );
}

export default Subreddit;
