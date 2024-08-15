import React from 'react';

const NewsLetter = () => {
  return (
    <section className="mt-20 text-center bg-accent dark:bg-[#ffffff0d] rounded-lg p-10">
      <h2 className="mb-10 text-2xl text-center font-semibold text-white">
        Stay Updated
      </h2>
      <p
        className="text-[#e1e1e1d0] max-w-[400px] mx-auto"
      >
        Subscribe to our newsletter for the latest AI writing tips and BookAI
        updates.
      </p>
      <form className="flex flex-col sm:flex-row justify-center mt-5 gap-3 sm:gap-0">
        <div className="flex justify-center sm:justify-end w-full sm:w-auto">
          <input
            type="email"
            placeholder="Your email address"
            className="p-2 border-none rounded-lg w-[90%] max-w-[300px] sm:rounded-l-lg sm:rounded-r-none"
          />
        </div>
        <div className="flex justify-center sm:justify-start w-full sm:w-auto mt-3 sm:mt-0">
          <button
            type="submit"
            className="bg-gradient-1 text-textPrimary border-none p-2 px-5 rounded-lg sm:rounded-l-none sm:rounded-r-lg cursor-pointer transition-transform duration-300 ease-in-out hover:transform hover:scale-105"
          >
            Subscribe
          </button>
        </div>
      </form>
    </section>
  );
};

export default NewsLetter;
