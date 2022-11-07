import { Spinner } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
export const LoadingComp = () => {
  return (
    <div>
      <h2>Loading...</h2>
      <Spinner color="primary" />
    </div>
  );
};
