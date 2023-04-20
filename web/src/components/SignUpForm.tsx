import { Link } from 'react-router-dom';
interface SignUpFormProps {}

function LoginForm({}: SignUpFormProps) {
  return (
    <section className="flex flex-col mt-20 items-center justify-center">
      <div className="text-left w-96 ">
        <h2 className="text-3xl py-3 font-bold font-display tracking-wide">
          Register Online Account
        </h2>
        <h4 className="py-2">
          We will use this information to secure your account and provide you
          with access to www.cromwell.co.uk
        </h4>
        <p className="py-2 text-orange cursor-pointer font-bold hover:underline">
          <Link to="/login">Already have an online account? Log in here.</Link>
        </p>
      </div>
      <form className="">
        <div className="flex flex-col w-96 py-4 space-y-4 rounded-md ">
          <input
            type="username"
            placeholder="Username"
            className="p-2 border border-medium_grey rounded-md hover:border-dark_grey"
          />
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
          <input
            type="confirm password"
            placeholder="Confirm Password"
            className="p-2 border  border-medium_grey rounded-md hover:border-dark_grey"
          />
          <small className="cursor-pointer text-orange font-bold text-right hover:underline">
          </small>
          <button className="bg-orange tracking-wider p-4 font-bold bg-blue-500 rounded-md text-white hover:bg-dark_orange active:bg-dark_orange">
            SIGN UP
          </button>
        </div>
      </form>
    </section>
  );
}

export default LoginForm;
