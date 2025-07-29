import { Outlet } from "react-router";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="flex flex-col justify-between w-full max-w-[1920px] h-full min-h-screen p-6 gap-8 m-auto">
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
}

export default App;
