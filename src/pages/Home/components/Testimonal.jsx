import React from 'react';

const TestimonalItem = ({ text, author }) => {
  return (
    <div className="bg-accent dark:bg-[#ffffff0d] rounded-lg p-6 mt-5 w-full sm:w-[calc(50%-20px)] transition-transform duration-300 ease-in-out hover:translate-y-[-5px]">
      <p className="text-lg mb-4 text-primaryBg">{`"`}{text}{`"`}</p>
      <p className="font-semibold text-primaryBg">- {author}</p>
    </div>
  );
};

const Testimonal = () => {
  return (
    <section className="mt-20 px-4 text-center">
      <h2 className="mb-5 text-3xl font-semibold">What Our Users Say</h2>
      <div className="flex flex-wrap justify-center gap-6">
        <TestimonalItem
          text="BookAI revolutionized my writing process. I completed my debut novel in just two weeks!"
          author="Sarah J., Author"
        />
        <TestimonalItem
          text="The AI-generated ideas helped me overcome writer's block. It's like having a co-author at your fingertips."
          author="Mark T., Aspiring Writer"
        />
      </div>
    </section>
  );
};

export default Testimonal;