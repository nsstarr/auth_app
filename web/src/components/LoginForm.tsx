interface LoginFormProps {}

function LoginForm({}: LoginFormProps) {
  return (
    <section className="flex flex-col mt-20 items-center justify-center">
      <div className="text-left w-96 ">
        <h2 className="text-3xl py-3 font-bold font-display tracking-wide">Login</h2>
        <p className="py-2 text-orange cursor-pointer font-bold hover:underline">
          Not purchased from us before? Register a new account here.
        </p>
        <h4 className="py-2">
          Please enter your email and password to access your account.
        </h4>
      </div>
      <form className="">
        <div className="flex flex-col w-96 py-4 space-y-4 rounded-md ">
          <input
            type="email"
            placeholder="Email"
            className="p-2 border border-medium_grey rounded-md hover:border-dark_grey"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-2 border  border-medium_grey rounded-md hover:border-dark_grey"
          />
          <button className="bg-orange tracking-wider p-4 font-bold bg-blue-500 rounded-md text-white hover:bg-dark_orange active:bg-dark_orange">
            LOGIN
          </button>
          <p>Forgot password?</p>
        </div>
      </form>
    </section>
  );
}

export default LoginForm;
