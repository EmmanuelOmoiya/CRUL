import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import { Showcase, GenerateImage } from "./pages";
import { LandingPage, Image , NotFound} from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="*" element={<NotFound /> }/>
          <Route path="/" element={<LandingPage />} />
          <Route path="/create-image" element={<GenerateImage />} />
          <Route path="/showcase" element={<Showcase />} />
          <Route path="/showcase/:id" element={<Image />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
};
export default App;
