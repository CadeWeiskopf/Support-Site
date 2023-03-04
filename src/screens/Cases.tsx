import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../AppContext";

export default function Cases() {
  const { user, apiRequester, setCases, cases, selectedCase, setSelectedCase } =
    useContext(AppContext);

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
    return () => setSelectedCase(null);
  }, []);

  return (
    <>
      <h2>Cases</h2>
      <div className="case-list-div">
        {cases?.map((c, index) => {
          return (
            <p
              key={`case${index}`}
              className="case-list-element"
              onClick={async (e) => {
                if (selectedCase !== null) {
                  return;
                }
                let targetNode = e.target as HTMLElement;
                while (
                  targetNode.classList[0] !== `case-list-element` &&
                  targetNode.parentElement
                ) {
                  targetNode = targetNode.parentElement;
                }
                targetNode.classList.add(`selected`);
                setSelectedCase(c);
                await new Promise((resolve) => setTimeout(resolve, 250));
                navigate(`/case/${c.id}/${c.guid}`);
              }}
            >
              <div className="case-container-div">
                <div className="case-container-box-div">Case #{c.number}</div>
                <div className="case-container-box-div">Status: {c.status}</div>
                <div className="case-container-box-div">
                  <small>
                    Created{" "}
                    {c.dateCreated.toLocaleString("en-US", {
                      month: "numeric",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </small>
                </div>
                <div className="case-container-box-div">
                  {c.dateClosed &&
                    `Date Created: ${c.dateCreated.toLocaleString("en-US", {
                      month: "numeric",
                      day: "numeric",
                      year: "numeric",
                    })}`}
                </div>
              </div>
            </p>
          );
        })}
      </div>
    </>
  );
}
