import React from 'react'

const NewsLetter = () => {
  return (
    <section className="mt-20 text-center bg-[rgba(255,255,255,0.05)] rounded-lg p-10">
        <h2 className='mb-10 text-2xl text-white text-center font-semibold'>Stay Updated</h2>
        <p>
          Subscribe to our newsletter for the latest AI writing tips and BookAI
          updates.
        </p>
        <form className="flex justify-center mt-5">
        <input
          type="email"
          placeholder="Your email address"
          className="p-2 border-none rounded-l-lg w-[60%] max-w-[300px]"
        />
        <button
          type="submit"
          className="bg-gradient-1 text-textPrimary border-none p-2 px-5 rounded-r-lg cursor-pointer transition-transform duration-300 ease-in-out hover:transform hover:translate-y-[-3px]"
        >
          Subscribe
        </button>
      </form>
      </section>
  )
}

export default NewsLetter