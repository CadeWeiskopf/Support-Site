import { useContext, useEffect } from "react";
import AppContext from "../AppContext";

export default function Cases() {
  const { user, apiRequester, setCases, cases } = useContext(AppContext);

  useEffect(() => {
    if (user === null) {
      return;
    }
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
                console.log(`clicked`, e);
                (e.target as HTMLElement).classList.add(`selected`);
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
