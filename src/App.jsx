import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./components/Body";
import Login from "./components/Login";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Profile from './components/Profile';
import Feed from "./components/Feed";
import Connections from "./components/Connections";
import Requests from "./components/Requests";
import Chat from "./components/Chat";

function App() {
  return ( 
    <Provider store={appStore}>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Body />}>
          <Route index element={<h1>Welcome to Home</h1>} /> {/* Default route */}
    
          <Route path="login" element={<Login />} /> {/* No leading '/' */}
          <Route path="feed" element={<Feed />} />
          <Route path="profile" element={<Profile />} />
          <Route path="connections" element = {<Connections/>} />
          <Route path="requests" element = {<Requests/>} />
          <Route path="chat" element = {<Chat/>} />
          
        </Route>
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
