import { Route, Routes } from "react-router-dom";
import AllAvatar from "./allAvatarPage/AllAvatar";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<AllAvatar />} />
        <Route path="/fullAvatar" element={<AllAvatar />} />
        <Route path="/fullAvatar/humanBased" element={<AllAvatar />} />
        <Route path="/fullAvatar/humanBased/male" element={<AllAvatar />} />
        <Route path="/fullAvatar/humanBased/female" element={<AllAvatar />} />
        <Route path="/fullAvatar/humanBased/unisex" element={<AllAvatar />} />
      </Routes>
    </div>
  );
}

export default App;
