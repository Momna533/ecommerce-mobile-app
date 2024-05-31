import "./App.css";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import { useState } from "react";
import { AppProvider } from "./context/Context";

const App = () => {
  const [amount, setAmount] = useState(0);

  return (
    <AppProvider>
      <div className="main">
        <Navbar amount={amount} setAmount={setAmount} />
        <CartContainer amount={amount} setAmount={setAmount} />
      </div>
    </AppProvider>
  );
};

export default App;
