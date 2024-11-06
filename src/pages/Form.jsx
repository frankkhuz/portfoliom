import React from 'react';
import Navbar from '../Navbar';

const Form = () => {
  return (
    <div>
      <Navbar />
      <div className="  bg-neutral-400 border border-slate-600 relative h-100vh flex flex-row justify-center align-center">
        
        <div className=" bg-slate-500 p-6 relative h-50vh w-50rem flex flex-row" >
          {/* Contact Section */}
          <div>
            <h2 className='  text-4xl'>Contact Dev Khuzz...</h2>
            <p>
              Feel free to contact me anytime, I’ll reach out to you as soon as possible.
            </p>
           <form action="" className="flex flex-col border border-slate-950 p-6 max-w-lg mx-auto">
              {/* Name Input */}
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  className="w-full border-b-2 border-gray-400 focus:outline-none focus:border-blue-500 transition-colors p-2"
                />
              </div>

              {/* Email Input */}
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  className="w-full border-b-2 border-gray-400 focus:outline-none focus:border-blue-500 transition-colors p-2"
                />
              </div>

              {/* Message Textarea */}
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Enter your message"
                  className="w-full border-b-2 border-gray-400 focus:outline-none focus:border-blue-500 transition-colors p-2"
                  rows="4"
                ></textarea>
              </div>

              {/* Send Button */}
              <button
                type="submit"
                className="w-full bg-black text-white font-bold py-2 rounded hover:bg-yellow-300 transition-colors tracking-wide: 0.025em"
              >
                Send
              </button>
             </form>

            
          </div>
          
        </div>
        <div className=' bg-yellow-300 h-100vh  w-1/4'> 
          
           </div>
        
      </div>
    </div>
  );
};

export default Form;
