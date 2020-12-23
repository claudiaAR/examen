// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import AllPosts from "./components/AllPosts/AllPosts.js";
import OnePost from "./components/OnePost/OnePost.js";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route component={AllPosts} path="/" exact />
        {/* slug is to display the correct blogpost from the sanity studio */}
        <Route component={OnePost} path="/:slug" />
      </div>
    </BrowserRouter>
  );
}

export default App;
