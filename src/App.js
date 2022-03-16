import Layout from "./components/layout/Layout";
import "antd/dist/antd.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "./actions/products";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <Layout />
    </>
  );
};

export default App;
