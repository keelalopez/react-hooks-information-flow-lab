import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function onDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
    console.log('ouch')
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header 
        onDarkModeClick={onDarkModeClick} 
        setIsDarkMode={setIsDarkMode}
        isDarkMode={isDarkMode}/>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
