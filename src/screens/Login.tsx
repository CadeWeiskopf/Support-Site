const formSubmit = async () => {
  console.log(`submit`);
};

export default function Login() {
  return (
    <>
      <h2>Login</h2>
      <div className="form-div">
        <form
          className="login-form"
          onSubmit={(e) => {
            e.preventDefault();
            formSubmit();
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
