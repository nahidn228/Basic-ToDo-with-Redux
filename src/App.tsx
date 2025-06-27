import { Outlet } from "react-router";
import { Button } from "./components/ui/button";

function App() {
  return (
    <div>
      <h1>Basic Todo With Redux</h1> <Button>Test</Button>
      <Outlet />
    </div>
  );
}

export default App;
