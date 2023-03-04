import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../AppContext";
import { Case } from "../interfaces/Case";

export default function Cases() {
  const { user, apiRequester, setCases, cases } = useContext(AppContext);
  const [selectedCase, setSelectedCase] = useState<Case | null>(null);
  const navigate = useNavigate();
  useEffect(() => {
    if (user === null) {
      navigate(`/login`);
      return;
    }
  }, [navigate]);
  useEffect(() => {
    const getCases = async () => {
      const cases = await apiRequester.getCases();
      setCases(cases);
    };
    getCases();
  }, []);

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
      <>
        {cases?.map((c, index) => {
          return (
            <p
              key={`case${index}`}
              className="selectable-element"
              onClick={(e) => {
                if (selectedCase !== null) {
                  return;
                }
                console.log(`clicked`, e, c);
                (e.target as HTMLElement).classList.add(`selected`);
                setSelectedCase(c);
              }}
            >
              {JSON.stringify(c)}
            </p>
          );
        })}
      </>
    </>
  );
}
