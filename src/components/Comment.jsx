function Comment({ author, body, time }) {
  return (
    <div className="flex flex-col hover:shadow-lg bg-lightGrey p-4 my-2">
      <div className="flex items-center justify-between px-4 mb-4">
        <span className="text-blue">{author}</span>
        <span className="text-gray-600">{time}</span>
      </div>
      <p className="text-gray-600">{body}</p>
    </div>
  );
}

export default Comment;
