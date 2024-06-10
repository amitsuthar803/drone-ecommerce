import { useParams } from "react-router-dom";
import { useDroneData } from "../context/DroneContext";

function ProductDetail() {
  const { id } = useParams();

  const { dronesData } = useDroneData();

  const selectProduct = dronesData.filter((drone) => drone.id === Number(id));
  console.log(selectProduct);

  return <div>ProductDetail</div>;
}

export default ProductDetail;
