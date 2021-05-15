import { useParams, useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";

export const ProfileDetails = () => {
  const { id } = useParams();
  const history = useHistory();

  const navigateHome = () => {
    history.push("/");
  };

  const navigateBack = () => {
    history.goBack();
  };

  return (
    <div>
      <h2>Profile Details {id}</h2>
      <Button variant="outlined" onClick={navigateHome}>
        Navigate home
      </Button>
      <Button variant="outlined" onClick={navigateBack}>
        Go back
      </Button>
    </div>
  );
};