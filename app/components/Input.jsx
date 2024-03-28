const Input = () => {
  return (
    <div>
      <section className="bg-transparent backdrop-blur-sm lg:backdrop-blur-3xl rounded-xl z-10 m-auto  ">
        <div className="max-w-3xl px-6 py-16 mx-auto text-center">
          <h1 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 640 512"
              className="w-14 m-auto"
            >
              <path d="M192 64C86 64 0 150 0 256S86 448 192 448H448c106 0 192-86 192-192s-86-192-192-192H192zM496 168a40 40 0 1 1 0 80 40 40 0 1 1 0-80zM392 304a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zM168 200c0-13.3 10.7-24 24-24s24 10.7 24 24v32h32c13.3 0 24 10.7 24 24s-10.7 24-24 24H216v32c0 13.3-10.7 24-24 24s-24-10.7-24-24V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h32V200z" />
            </svg>
            Control Center{" "}
          </h1>
          <p className="max-w-md mx-auto mt-5 text-gray-500 dark:text-gray-300 ">
            Not actually a control center, just some useful(to me) links !{" "}
            {/* <img
              className="h-6 w-6"
              src="https://cdn-icons-png.flaticon.com/512/260/260221.png"
            /> */}
          </p>
          <div className="flex flex-col mt-8 space-y-3 sm:space-y-0 sm:flex-row sm:justify-center sm:-mx-2">
            <input
              id="pass"
              type="password"
              className="px-4 py-2 text-gray-700 bg-white border rounded-md sm:mx-2 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
              placeholder="Password"
            />
            <button className="px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-700 rounded-md sm:mx-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
              Sign in
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Input;
