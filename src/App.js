import Header from "./common/Header/Header";
import Layout from "./common/Layout/Layout";
import Online from "./components/Online/Online";
import NewOrder from "./components/NewOrder/NewOrder";

function App() {
  return (
    <>
      <Layout>
        <Header />
        <Online />
        <NewOrder />
      </Layout>
    </>
  );
}

export default App;
