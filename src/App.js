import "./App.css";

import "antd/dist/antd.css";

import Intro from "./components/Intro";
import Ecosystem from "./components/Ecosystem";
import Partner from "./components/Partner";
import InThePress from "./components/InThePress";
import Team from "./components/Team";
import GetInTouch from "./components/GetInTouch";
import Header from "./components/Header/desktop";
import Layout from "./components/Layout";
import Footer from "./components/Footer";
import Roadmap from "./components/Roadmap";
import NFT from "./components/NFT";

// import "@fontsource/montserrat";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundColor: "#EDEDF2",
        display: "block",
        paddingTop: "20px",
      }}
    >
      <Header />
      <Layout>
        <Intro />
        <NFT />
        <Ecosystem />
        <Roadmap />
        <Partner />
        <InThePress />
        <Team />
        <GetInTouch />
        <Footer />
      </Layout>
    </div>
  );
}

export default App;
