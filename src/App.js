import { BrowserRouter, Route, Switch } from "react-router-dom";
import AllPosts from "./components/AllPosts/AllPosts.js";
import OnePost from "./components/OnePost/OnePost.js";
import Footer from "./components/Footer/Footer.js";
import NavBar from "./components/NavBar/NavBar.js";
import TopNav from "./components/TopNav/TopNav.js";
import Contact from "./components/Contact/Contact.js";
import SchoolProjects from "./components/SchoolProjects/SchoolProjects.js";
import Internship from "./components/Internship/Internship.js";


function App() {
  return (
    <BrowserRouter>
      <TopNav />
      <NavBar />
      {/* the switch is used so that the linked are directed to the right component */}
        <Switch>
          <Route component={AllPosts} path="/" exact />
          {/* slug is to display the correct blogpost from the sanity studio */}
          <Route component={OnePost} path="/:slug" />
          <Route component={Contact} path="/contact" />
          <Route component={SchoolProjects} path="/schoolProjects" />
          <Route component={Internship} path="/internship" />
        </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
