function Comment() {
  return (
    <div className="flex flex-col hover:shadow-lg bg-lightGrey p-4 my-2">
      <div className="flex items-center justify-between px-4 mb-4">
        <span className="text-blue">CalculatingLao</span>
        <span className="text-gray-600">7 days ago</span>
      </div>
      <p className="text-gray-600">
        I wonder how many of those 30 million are bots or just long dormant
        accounts. It would be interesting to see the number of active users.
      </p>
    </div>
  );
}

export default Comment;
