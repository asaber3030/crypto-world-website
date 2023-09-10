import Home from "./pages/home/home";
import Market from "./pages/market/market";
import Layout from "./layout";
import ChooseUs from "./pages/choose-us/choose-us";
import JoinUs from "./pages/join/join";

function App() {
  return (
    <Layout>
      <Home />
      <Market />
      <ChooseUs />
      <JoinUs />
    </Layout>
  );
}

export default App;
