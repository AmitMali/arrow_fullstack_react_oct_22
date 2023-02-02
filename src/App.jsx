import ClassComponentExample from "../components/ClassComponentExample";
import ProductCart from "../components/ProductCart";
export default function App() {
  return (
    <div>
      <ProductCart name="Macbook Pro" price="140" />
      <ProductCart name="Macbook Air" price="100" />
      <ProductCart name="Macbook Ultra" price="160" />

      <ClassComponentExample msg="hello from class component" />
    </div>
  );
}
