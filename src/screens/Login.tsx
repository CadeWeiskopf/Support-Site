import { useContext } from "react";
import AppContext from "../AppContext";
import { User } from "../interfaces/User";

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
  const { setUser } = useContext(AppContext);
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
