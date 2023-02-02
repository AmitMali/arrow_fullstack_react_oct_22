import "./ProductCart.css";
import Button from "../ui_components/Button";
function ProductCart({ name, price }) {
  return (
    <div className="card">
      <div>
        <p>product :{name.toUpperCase()}</p>
        <p>rate :{price}</p>
        <Button />
      </div>
    </div>
  );
}

export default ProductCart;
