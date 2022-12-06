import { MainRoutes } from "./routes/MainRoutes";
import React from "react";
import { ShoppingList } from "./components/ShoppingList";
import {Footer} from './components/Footer'
function App() {
  return (
    <div className="App">
     <MainRoutes/>
     <ShoppingList/>
     <Footer />
    </div>
  );
}

export default App;
