import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import AllAvatarPage from "./Pages/AllAvatarPage";
import AvatarDetailsPage from "./Pages/AvatarDetailsPage";
import cartCountContext from "./context/cartCountContext";

function App() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <>
      <cartCountContext.Provider value={{ cartCount, setCartCount }}>
        <Routes>
          <Route path="/" element={<AllAvatarPage />} />
          <Route path="/fullAvatar" element={<AllAvatarPage />} />
          <Route path="/fullAvatar/humanBased" element={<AllAvatarPage />} />
          <Route
            path="/fullAvatar/humanBased/male"
            element={<AllAvatarPage />}
          />
          <Route
            path="/fullAvatar/humanBased/female"
            element={<AllAvatarPage />}
          />
          <Route
            path="/fullAvatar/humanBased/unisex"
            element={<AllAvatarPage />}
          />

          <Route path="/:id" element={<AvatarDetailsPage />} />
          <Route path="/fullAvatar/:id" element={<AvatarDetailsPage />} />
          <Route
            path="/fullAvatar/humanBased/:id"
            element={<AvatarDetailsPage />}
          />
          <Route
            path="/fullAvatar/humanBased/male/:id"
            element={<AvatarDetailsPage />}
          />
          <Route
            path="/fullAvatar/humanBased/female/:id"
            element={<AvatarDetailsPage />}
          />
        </Routes>
      </cartCountContext.Provider>
    </>
  );
}

export default App;
