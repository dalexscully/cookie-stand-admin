export default function LoginForm({ onLogin }) {

  async function handleSubmit(event) {
      event.preventDefault();
      onLogin(event.target.username.value, event.target.password.value);
  }

  return (
      <form 
      onSubmit={handleSubmit}
      className="w-1/2 p-8 mx-auto my-16 text-center bg-gray-200 rounded-md"
    >
      <h3>Username</h3>
      <input
        name="username"
        type="username"
        className="w-3/4 p-2 mt-2 rounded-md"
        // onChange={handleSubmit}
      />
      <h3 className="pt-8">Password</h3>
      <input
        name="password"
        type="password"
        className="w-3/4 p-2 mt-2 rounded-md"
        // onChange={handleSubmit}
      />
      <button className="w-3/4 p-3 mt-10 bg-gray-600 rounded-md">
        Sign In
      </button>
      </form>
  );
}
