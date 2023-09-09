import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout.component";
import Home from "./pages/Home.component";

export enum Page {
  Home = "home",
  Ksiegowi = "ksiegowi",
}

export const PAGES_PATH = {
  [Page.Home]: "/",
  [Page.Ksiegowi]: "/ksiegowi",
};

function App() {
  return (
    <Layout>
      <Routes>
        <Route path={PAGES_PATH[Page.Home]} element={<Home />} />
        <Route path={PAGES_PATH[Page.Ksiegowi]} element={<Home />} />
      </Routes>
    </Layout>
  );
}

export default App;
