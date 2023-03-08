import { useContext, useEffect } from "react";
import AppContext from "../AppContext";
import { User } from "../interfaces/User";
import { useNavigate } from "react-router-dom";
import { ApiRequests } from "../ApiRequests";

const formSubmit = async (
  setUser: React.Dispatch<React.SetStateAction<User | null>>,
  apiRequester: ApiRequests
) => {
  console.log(`submit`);
  const email = (document.getElementsByName(`email`)[0] as HTMLInputElement)
    .value;
  const password = (
    document.getElementsByName(`password`)[0] as HTMLInputElement
  ).value;
  const user = await apiRequester.login(email, password);
  setUser(user);
  /*setUser({
    id: "1",
    firstName: "test",
    lastName: "jones",
    email: "test@test.com",
  });*/
};

export default function Login() {
  const { user, setUser, apiRequester } = useContext(AppContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (user !== null) {
      navigate(`/`);
    }
  }, [navigate, user]);
  return (
    <>
      <h2>Login</h2>
      <div className="form-div">
        <form
          className="login-form"
          onSubmit={(e) => {
            e.preventDefault();
            formSubmit(setUser, apiRequester);
          }}
        >
          <input
            name="email"
            required
            type="email"
            placeholder="Email@domain.com"
          />
          <input
            name="password"
            required
            type="password"
            placeholder="Password"
          />
          <button>Submit</button>
        </form>
      </div>
    </>
  );
}
