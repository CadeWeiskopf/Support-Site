import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../AppContext";

export default function Account() {
  const { user } = useContext(AppContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (user === null) {
      navigate(`/login`);
      return;
    }
  }, [navigate]);
  return (
    <>
      <h2>Account</h2>
      <p>TODO: Account settings.</p>
    </>
  );
}
