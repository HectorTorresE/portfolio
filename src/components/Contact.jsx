import React from "react";

function Contact() {
  return (
    <div className="flex flex-col items-center md:flex-row md:justify-center">
      <div className="flex justify-center items-center w-3/4 my-10 md:w-2/3 md:my-20 flex-col md:flex-row">
        <div className="font-inter text-outro text-3xl font-bold my-20 mx-4 text-center md:text-4xl md: md:w-1/3 md:text-start md:self-start md:mt-2">
          I'm always interested in hearing about new projects, so if you'd like
          to chat please get in touch.
        </div>
        <form
          action="https://getform.io/f/17dc54c9-2b2a-4195-87a0-05e795975858"
          method="POST"
          className="flex flex-col w-full md:w-7/12"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="p-2 bg-transparent border-2 rounded-md focus:outline-none text-outro"
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none text-outro"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="5"
            className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none text-outro"
          />
          <button
            type="submit"
            className="px-8 py-3 text-lg text-white bg-orange font-inter font-semibold w-fit ml-4 self-center md:self-auto md:ml-0"
          >
            Get in touch
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
