import { Header, SideBar, Posts } from "./components/";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex justify-between p-4 mt-4">
        <Posts />
        <div className="hidden sm:flex shadow-lg ml-4">
          <SideBar />
        </div>
      </main>
    </div>
  );
}

export default App;
