import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import PropTypes from 'prop-types';

PrivatePage.propTypes = {
    user : PropTypes.object
};

function PrivatePage(props) {
    
    const {user} = props;

    const handleSignUp = () => {
        signOut(auth)
          .then(() => console.log("Sign Out"))
          .catch((error) => console.log(error));
      };

    return (
        <section>
        <h2>Private Page : {user.email}</h2>
        <button onClick={handleSignUp}>SignOut</button>
      </section>
    );
}

export default PrivatePage;
