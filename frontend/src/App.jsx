import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./components/Body";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Feed from "./components/Feed";
import Connections from "./components/Connections";
import Requests from "./components/Requests";
import LandingPage from "./components/Landingpage/Landingpage";
import Login2 from "./components/LoginComp/Login2";

function App() {
  return (
    <>
<Provider store={appStore}>
  <BrowserRouter basename="/">
    <Routes>
      {/* Separate layout for LandingPage */}
      <Route path="/" element={<LandingPage />} />
      
      {/* Parent Route with NavBar and Footer */}
      <Route element={<Body />}>
        <Route path="home" element={<Feed />} />
        <Route path="login" element={<Login2 />} />
        <Route path="profile" element={<Profile />} />
        <Route path="connections" element={<Connections />} />
        <Route path="requests" element={<Requests />} />
      </Route>
    </Routes>
  </BrowserRouter>
</Provider>

    </>
  );
}

export default App;
