import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AppContext from "../AppContext";

export default function Case() {
  const { id, guid } = useParams();
  const { user } = useContext(AppContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (user === null) {
      navigate(`/login`);
      return;
    }
  }, [navigate]);
  useEffect(() => {
    console.log(`get case ${id}, ${guid} & validate user`);
  }, []);
  return <></>;
}
