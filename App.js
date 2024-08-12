


// import "./App.css";
// import Header from "./components/common/header/Header";
// import Footer from "./components/common/footer/Footer";
// import { BrowserRouter as Router, Switch, Route, useHistory, useLocation } from "react-router-dom";
// import About from "./components/about/About";
// import Pricing from "./components/pricing/Pricing";
// import Contact from "./components/contact/Contact";
// import Home from "./components/home/Home";
// import CourseHome from "./components/allcourse/CourseHome";
// import Login from "./components/login/Login";
// import Event from "./components/events/Event.jsx";
// import Register from "./components/register/Register";
// import Team from "./components/team/Team.jsx";



// function App() {
//   return (
//     <Router>
//       <Switch>
//         <Route exact path="/register" component={Register} />
//         <Route path="/">
//           <AppContent />
//         </Route>
//       </Switch>
//     </Router>
//   );
// }

// function AppContent() {
//   const location = useLocation();
//   return (
//     <>
//       {location.pathname !== "/" && location.pathname !== "/register" && <Header />}
//       <Switch>
//         <Route exact path="/" render={(props) => <Login header={false} footer={false} {...props} />} />
//         <Route exact path="/home" component={Home} />
//         <Route exact path="/about" component={About} />
//         <Route exact path="/courses" component={CourseHome} />
//         <Route exact path="/events" component={Event} />
//         <Route exact path="/pricing" component={Pricing} />
        
//         <Route exact path="/contact" component={Contact} />
//         <Route exact path="/team" element={Team } />
//       </Switch>
//       {location.pathname !== "/" && location.pathname !== "/register" && <Footer />}
//     </>
//   );
// }

// export default App;



import "./App.css";
import Header from "./components/common/header/Header";
import Footer from "./components/common/footer/Footer";
import { BrowserRouter as Router, Switch, Route, useHistory, useLocation } from "react-router-dom";
import About from "./components/about/About";
import Pricing from "./components/pricing/Pricing";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import CourseHome from "./components/allcourse/CourseHome";
import Login from "./components/login/Login";
import Event from "./components/events/Event.jsx";
import Register from "./components/register/Register";
import Team from "./components/team/Team.jsx";
import Checkout from "./components/checkout/Checkout.js";
import Profile from "./components/profile/Profile.jsx";
import EnrollNow from "./components/enrollnow/EnrollNow.js";
import Certificate from "./components/certificate/Certificate.js";
import VideoPlayer from "./components/videoplayer/VideoPlayer.jsx";
import TeacherDetails from "./components/gmeet/TeacherDetails.js";
import StaffPage from "./components/staff/StaffPage.jsx";


//import AddToCart from "./components/addtocart/AddToCart.jsx";


import AdminPage from "./components/admin/AdminPage.js";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route path="/">
          <AppContent />
        </Route>
      </Switch>
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  return (
    <>
      {location.pathname !== "/" && location.pathname !== "/register" && <Header />}
      <Switch>
        <Route exact path="/" render={(props) => <Login header={false} footer={false} {...props} />} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/courses" component={CourseHome} />
        <Route exact path="/events" component={Event} />
        <Route exact path="/pricing" component={Pricing} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/enroll-now" component={EnrollNow} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/certificate" component={Certificate} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/videoplayer" component={VideoPlayer} />
        <Route exact path="/teachers" component={TeacherDetails} />
        <Route path="/admin" component={AdminPage} />
        <Route path="/staff" component={StaffPage} />
      
        <Route exact path="/team" component={Team} />
      </Switch>
      {location.pathname !== "/" && location.pathname !== "/register" && <Footer />}
    </>
  );
}

export default App;
