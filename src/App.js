import { BrowserRouter, Route, Switch } from "react-router-dom";
import AllPosts from "./components/AllPosts/AllPosts.js";
import OnePost from "./components/OnePost/OnePost.js";
import Footer from "./components/Footer/Footer.js";
import NavBar from "./components/NavBar/NavBar.js";
import TopNav from "./components/TopNav/TopNav.js";

function App() {
  return (
    <BrowserRouter>
    <TopNav />
    <NavBar />
      <Switch>
        <Route component={AllPosts} path="/" exact />
        {/* slug is to display the correct blogpost from the sanity studio */}
        <Route component={OnePost} path="/:slug" />
      </Switch>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
