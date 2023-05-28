import { useState } from "react";
import { ImArrowUp, ImArrowDown } from "react-icons/im";
import { BiComment } from "react-icons/bi";
import Comments from "./Comments";

function Post() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleComments = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="shadow-lg flex p-6">
      <div className="flex flex-col">
        <ImArrowUp />
        <span>14</span>
        <ImArrowDown />
      </div>
      <div className="ml-6 grow">
        <h2 className="text-xl">
          Amazing performance at Cannes by Alina Baikova from Ukraine.
        </h2>
        <img
          src="https://i.redd.it/f0bkw28y1h2b1.png"
          className="my-4 w-full"
        />
        <hr />
        <div className="flex items-center justify-between mt-4 mx-4">
          <span className="text-blue">esberat</span>
          <span className="text-gray-600">13 hours ago</span>
          <span className="flex items-center">
            <BiComment
              color="blue"
              className="mr-2 hover:cursor-pointer hover:bg-gray-100 rounded w-8 h-8 p-1"
              onClick={toggleComments}
            />
            <span className="text-gray-600">1.3k</span>
          </span>
        </div>

        {isOpen && <Comments />}
      </div>
    </div>
  );
}

export default Post;
