import React from 'react';

const Main = () => {
  return (
    <div className="text-center mt-[120px] relative">
      <h2 className="mb-4 text-5xl font-bold">Amazing furniture for<br /> your home</h2>

      <div className="sm:text-center mx-auto mt-10 mb-3">
        <span className="text-sm text-black-500">
          We think the chair is the most important piece of furniture in your home.
          Because if you love <br /> the chair you are sitting in chances are you will love the rest of the room.
        </span>
      </div>

      <div className="relative">
        <div className="max-w-md mx-auto shadow-xl shadow-gray-400 absolute top-0 left-0 right-0 ">
          <div className="relative flex items-center w-full h-16 focus-within:shadow-lg bg-white overflow-hidden">
            <input
              className="ml-3 peer h-full w-full outline-none text-sm text-gray-700 pr-2 rounded-none"
              type="text"
              id="search"
              placeholder="Search something.."
            />
            <button>
              <div className="grid place-items-center h-full w-12 text-gray-300">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className='mt-12'>
      <img className="UnsplashIh7wpsjwomc w-96 h-96 w-full object-cover" src="https://via.placeholder.com/1440x2436" alt="placeholder" />
      </div>
    </div>
  );
};

export default Main;
