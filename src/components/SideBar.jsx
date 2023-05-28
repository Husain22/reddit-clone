import { Subreddits } from ".";
function SideBar() {
  return (
    <aside className="flex flex-col bg-white items-center p-2 w-full">
      <h2 className="text-lg my-4">Subreddits</h2>
      <Subreddits />
    </aside>
  );
}

export default SideBar;
