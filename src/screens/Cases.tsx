import { useContext } from "react";
import AppContext from "../AppContext";

export default function Cases() {
  const { user } = useContext(AppContext);
  if (user === null) {
    return (
      <p>
        You are not signed in. Please <a href="/login">login</a>.
      </p>
    );
  }
  return (
    <>
      <h2>Cases</h2>
      <p>TODO: List cases.</p>
    </>
  );
}
