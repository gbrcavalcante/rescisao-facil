import { Outlet } from "react-router";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="flex flex-col justify-between w-full max-w-[1920px] h-screen px-4 py-8 gap-8 m-auto">
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
}

export default App;
