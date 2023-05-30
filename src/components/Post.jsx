import { useState } from "react";
import { ImArrowUp, ImArrowDown } from "react-icons/im";
import { BiComment } from "react-icons/bi";
import Comments from "./Comments";

function Post({ title, num_comments, image, author, score, time, comments }) {
  const [isOpen, setIsOpen] = useState(false);
  const [like, setLike] = useState("text-gray-700");
  const toggleComments = () => {
    setIsOpen(!isOpen);
  };

  function isImageUrl(url) {
    const regex = /\.(jpg|jpeg|png|gif)$/i;
    return regex.test(url);
  }

  return (
    <div className="shadow-lg flex p-6">
      <div className="flex flex-col items-center">
        <ImArrowUp
          onClick={() => setLike("text-green-500")}
          className={`${
            like == "text-green-500" ? like : "text-gray-400"
          } hover:bg-gray-200 hover:cursor-pointer p-1 h-6 w-6 hover:text-green-500`}
        />
        <span className={like + " text-sm sm:text-base"}>{score}</span>
        <ImArrowDown
          onClick={() => setLike("text-red-500")}
          className={`${
            like == "text-red-500" ? like : "text-gray-400"
          } hover:bg-gray-200 hover:cursor-pointer p-1 h-6 w-6 hover:text-red-500`}
        />
      </div>
      <div className="ml-2 sm:ml-6 grow">
        <h2 className="text-base sm:text-xl">{title}</h2>
        <img
          src={
            isImageUrl(image)
              ? image
              : "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
          }
          className="my-4 w-full md:max-h-[32rem]"
        />
        <hr />
        <div className="flex items-center justify-between mt-4 mx-4 text-xs sm:text-sm">
          <span className="text-blue">{author}</span>
          <span className="text-gray-600">{time}</span>
          <span className="flex items-center">
            <BiComment
              color="blue"
              className="mr-2 hover:cursor-pointer hover:bg-gray-100 rounded w-8 h-8 p-1"
              onClick={toggleComments}
            />
            <span className="text-gray-600">{num_comments}</span>
          </span>
        </div>

        {isOpen && <Comments comments={comments} />}
      </div>
    </div>
  );
}

export default Post;
