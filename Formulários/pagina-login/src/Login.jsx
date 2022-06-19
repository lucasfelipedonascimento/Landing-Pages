/** @format */
import background from "./background.svg";
import google from "./google.svg";

function Image() {
  return (
    <div>
      <img className="h-screen" src="src/background.svg" alt="" />
    </div>
  );
}

function LoginPage() {
  return (
    <div className="h-screen flex flex-col justify-center mx-auto">
      <span className="flex mb-2 font-light">Welcome back</span>
      <h2 className="mb-6 text-2xl font-bold">Login to your account </h2>

      <form action="" className="flex flex-col">
        <label className="my-4">Email</label>
        <input
          className="p-3 border rounded border-gray-400"
          type="email"
          name="email"
          placeholder="irineu@gmail.com"
        />
        <label className="my-4">Password</label>
        <input
          className="p-3 border rounded border-gray-400"
          type="password"
          name="password"
          placeholder="*******"
        />

        <div className="flex items-center justify-between my-10">
          <input type="checkbox" />
          <a href="#" className="text-blue-800">
            Forgot password?
          </a>
        </div>

        <button className="bg-green-600 hover:bg-green-800 rounded p-3 text-white font-semibold mb-5">
          Login
        </button>
        <button className="flex bg-gray-800 hover:bg-gray-900 rounded p-3 text-white font-semibold items-center justify-center gap-4">
          <img src="src/google.svg" alt="" />
          Or sign-in with google
        </button>
      </form>
      <span className="mt-10">
        Dont have an account?{" "}
        <a href="#" className="text-blue-800">
          Join free today
        </a>
      </span>
    </div>
  );
}

export default function Login() {
  return (
    <>
      <div className="flex">
        <Image />
        <LoginPage />
      </div>
    </>
  );
}
