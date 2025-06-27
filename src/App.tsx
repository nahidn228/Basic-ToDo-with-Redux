import { Outlet } from "react-router";
import Navbar from "./components/layout/Navbar";

// import { decrement, increment } from "./redux/features/counter/counterSlice";

// import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  // const dispatch = useAppDispatch();
  // const { count } = useAppSelector((state) => state.counter.value);

  // const handleIncrement = () => {
  //   dispatch(increment());
  // };

  // const handleDecrement = () => {
  //   dispatch(decrement());
  // };

  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
