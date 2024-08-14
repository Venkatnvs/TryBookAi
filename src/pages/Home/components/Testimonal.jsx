import React from 'react'

const TestimonalItem = ({text, author}) => {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] rounded-lg p-5 mt-5 basis-[calc(50%-20px)] transition-transform duration-300 ease-in-out hover:transform hover:translate-y-[-5px]">
      <p>{text}</p>
      <p><strong>- {author}</strong></p>
    </div>
  )
}

const Testimonal = () => {
  return (
    <section className="mt-20 text-center">
        <h2 className='mb-10 text-2xl text-white text-center font-semibold'>What Our Users Say</h2>
        <div className="flex justify-between flex-wrap mt-10">
          <TestimonalItem
            text={`"BookAI revolutionized my writing process. I completed my debut
            novel in just two weeks!"`}
            author="Sarah J., Author"
          />
          <TestimonalItem
            text={`"The AI-generated ideas helped me overcome writer's block. It's
            like having a co-author at your fingertips."`}
            author="Mark T., Aspiring Writer"
          />
        </div>
      </section>
  )
}

export default Testimonal