import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";

import FoodItems from "./Components/FoodItems";
import ErrorMessage from "./Components/ErrorMessage";
import Container from "./Components/Container";
import FoodInput from "./Components/FoodInput";
import { useState } from "react";

function App() {
  // let [textShow, setTextShow] = useState();
  let [foodItems, setFoodItems] = useState([
    // "Roasted Meat",
    // "Boil Egg",
    // "Grilled Fish",
  ]);

  // console.log(`Current VAlue of textShow : ${textShow}`);
  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
      event.target.value = "";
      console.log(`Food value ${newFoodItem}`);
    }
  };
  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Foods</h1>
        <FoodInput handleKeyDown={onKeyDown} />

        <ErrorMessage items={foodItems} />
        <FoodItems items={foodItems} />
      </Container>
      {/* <Container>
        <p>Above is the healty food list</p>
      </Container> */}
    </>
  );
}

export default App;
