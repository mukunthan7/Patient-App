import { Outlet } from "react-router-dom"
import HeroNav from "./components/HeroNav";


function App() {
  return (
    <>
      <HeroNav />
      <Outlet />
    </>
  );
}

export default App;
