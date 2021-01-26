import { BrowserRouter, Route, Switch } from "react-router-dom";
import AllPosts from "./components/AllPosts/AllPosts.js";
import OnePost from "./components/OnePost/OnePost.js";
import Footer from "./components/Footer/Footer.js";
import NavBar from "./components/NavBar/NavBar.js";
import TopNav from "./components/TopNav/TopNav.js"; 
import Contact from "./components/Contact/Contact.js";
import SchoolProjects from "./components/SchoolProjects/SchoolProjects.js";
// import Internship from "./components/Internship/Internship.js";
import Home from "./components/Home/Home.js";
import Design from "./components/Design/Design.js";

 
function App() {
  return (
    <BrowserRouter>
      <TopNav />
      <NavBar />
      {/* the switch is used so that the linked are directed to the right component */}
        <Switch>
          {/* slug is to display the correct blogpost from the sanity studio */}
          <Route component={Home} path="/" exact />
          {/* <Route component={AllPosts} path="/" exact /> */}
          <Route component={Design} path="/design" />
          <Route component={AllPosts} path="/work" />
          <Route component={SchoolProjects} path="/schoolProjects" />
          <Route component={OnePost} path="/:slug" />
          <Route component={Contact} path="/contact" />
        </Switch>
      
      <Footer />
    </BrowserRouter>
  );
}

export default App;
