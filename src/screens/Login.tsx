export default function Login() {
  return (
    <>
      <h2>Login</h2>
      <div className="form-div">
        <form className="login-form">
          <input
            type="email"
            placeholder="Email@domain.com"
          />
          <input
            type="password"
            placeholder="Password"
          />
          <button>Submit</button>
        </form>
      </div>
    </>
  );
}
