import { Header, SideBar, Posts } from "./components/";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex justify-between p-4 mt-4">
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/subreddit/:name" element={<Posts />} />
          <Route path="/:query" element={<Posts />} />
        </Routes>

        <div className="hidden sm:flex shadow-lg ml-4 md:min-w-[25%] w-fit h-fit">
          <SideBar />
        </div>
      </main>
    </div>
  );
}

export default App;
