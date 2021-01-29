import { BrowserRouter, Route, Switch } from "react-router-dom";
import AllPosts from "./components/AllPosts/AllPosts.js";
import OnePost from "./components/OnePost/OnePost.js";
import Footer from "./components/Footer/Footer.js";
import NavBar from "./components/NavBar/NavBar.js";
import Home from "./components/Home/Home.js";
import Design from "./components/Design/Design.js";
import OneDesign from "./components/OneDesign/OneDesign.js";
import PageNotFound from "./components/404/PageNotFound.js";

 
function App() {
  
  return (
    <BrowserRouter>
      <NavBar />
      {/* the switch is used so that the linked are directed to the right component */}
        <Switch>
          {/* slug is to display the correct blogpost from the sanity studio */}
          <Route component={Home} path="/" exact />
          <Route component={Design} path="/design" />
          <Route component={AllPosts} path="/work" />
          <Route component={PageNotFound} path="/pageNotFound" /> 
          <Route component={OnePost} path="/:slug" />
          <Route component={OneDesign} path="/:slug" />
        </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
