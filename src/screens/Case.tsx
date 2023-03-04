import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AppContext from "../AppContext";

export default function Case() {
  const { id, guid } = useParams();
  const { user } = useContext(AppContext);
  // TODO: setup casedata interface, set on mount
  const [caseData, setCaseData] = useState<null>(null);
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
  return (
    <>
      <h2>Case #</h2>
    </>
  );
}
