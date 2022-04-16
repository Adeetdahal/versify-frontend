import React from "react";
import "./App.css";
// import Nav from "./components/nav/Nav";
import ChatBody from "./components/chatBody/ChatBody";
import BasicForm from './components/login/Basicform';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="__main">
      <Router>
        <Routes>
          <Route path="/login" element={<BasicForm/>}/>
          {/* <Route path="/register" element={<Register/>}/> */}
          <Route path="/" element={<ChatBody/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
