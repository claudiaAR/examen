// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import AllPosts from "./components/AllPosts/AllPosts.js";
import OnePost from "./components/OnePost/OnePost.js";
import Footer from "./components/Footer/Footer.js";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route component={AllPosts} path="/" exact />
        {/* slug is to display the correct blogpost from the sanity studio */}
        <Route component={OnePost} path="/:slug" />
        <Route component={Footer} path="/" />
      </div>
    </BrowserRouter>
  );
}

export default App;
