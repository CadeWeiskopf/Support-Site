import { useContext, useEffect } from "react";
import AppContext from "../AppContext";
import { User } from "../interfaces/User";
import { useNavigate } from "react-router-dom";

const formSubmit = async (
  setUser: React.Dispatch<React.SetStateAction<User | null>>
) => {
  console.log(`submit`);
  setUser({
    id: "1",
    firstName: "test",
    lastName: "jones",
    email: "test@test.com",
  });
};

export default function Login() {
  const { user, setUser } = useContext(AppContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (user !== null) {
      navigate(`/`);
    }
  }, [navigate]);
  return (
    <>
      <h2>Login</h2>
      <div className="form-div">
        <form
          className="login-form"
          onSubmit={(e) => {
            e.preventDefault();
            formSubmit(setUser);
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
