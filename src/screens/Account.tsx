import { useContext, useEffect } from "react";
import AppContext from "../AppContext";

export default function Account() {
  const { user } = useContext(AppContext);
  if (user === null) {
    return (
      <p>
        You are not signed in. Please <a href="/login">login</a>.
      </p>
    );
  }
  console.log(user);
  return (
    <>
      <h2>Account</h2>
      <p>TODO: Account settings.</p>
    </>
  );
}
