import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

ProtectedRoutev1.propTypes = {
  user: PropTypes.object,
  children: PropTypes.func
};

function ProtectedRoutev1(props) {
  const { children, user } = props;

  return user ? children : <Navigate to="/"></Navigate>;
}

export default ProtectedRoutev1;
