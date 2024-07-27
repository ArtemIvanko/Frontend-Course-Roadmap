import { HeaderComponent } from "./HeaderComponent";
import { MainComponent } from "./MainComponent";
import { FooterComponent } from "./FooterComponent";
import { Route, Routes } from "react-router";

export const Container = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HeaderComponent/>}/>
        <Route path="/main" element={<MainComponent/>}/>
        <Route path="/footer" element={<FooterComponent/>}/>
      </Routes>
    </div>
  );
};
