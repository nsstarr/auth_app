import Navbar from '../components/Navbar';

interface SignUpProps {}

function SignUp({}: SignUpProps) {
  return (
    <main>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="flex flex-col w-1/2 p-4 space-y-4 bg-beige rounded-lg shadow-lg">
          <input
            type="text"
            placeholder="Username"
            className="p-2 border border-gray-300 rounded-lg"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-2 border border-gray-300 rounded-lg"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-2 border border-gray-300 rounded-lg"
          />
          <button className="bg-dark_grey text-white p-2 bg-blue-500 rounded-lg text-white">
            LOG IN
          </button>
        </div>
      </div>
    </main>
  );
}

export default SignUp;
