import React, { useState, useEffect } from 'react';
"use client";

export default function Contact() {
  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
  };

  const inputClassNames = (value) => {
    return value
      ? 'absolute text-lg p text-emerald-500 -top-2 duration-300 transform  scale-75  left-2.5 z-10 origin-[0]'
      : 'absolute opacity-0 text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 left-2.5 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0';
  };

  return (
    <section className=' py-5 '>
      <div className='container'>
        <div className='text-center text-slate-700'>
          <h2 className='text-4xl uppercase font-bold font-display mt-32'>
            Contact Section
          </h2>
          <div className='icon-contact my-5'>
            <i className="fa-solid fa-star"></i>
          </div>
        </div>
        <div className="relative w-2/4 mx-auto">
          <div className="relative">
            <input
              type="text"
              id="userName"
              name='userName'
              value={userName}
              onChange={handleInputChange(setUserName)}
              className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 peer"
              placeholder="  User Name "
            />
            <label
              htmlFor="userName"
              className={inputClassNames(userName)}
            >
              User Name:
            </label>
          </div>

          <div className="relative mt-4">
            <input
              type="number"
              id="userAge"
              name='userAge'
              value={userAge}
              onChange={handleInputChange(setUserAge)}
              className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 peer"
              placeholder=" User Age "
            />
            <label
              htmlFor="userAge"
              className={inputClassNames(userAge)}
            >
              User Age:
            </label>
          </div>

          <div className="relative mt-4">
            <input
              type="email"
              id="userEmail"
              name='userEmail'
              value={userEmail}
              onChange={handleInputChange(setUserEmail)}
              className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 peer"
              placeholder=" User Email "
            />
            <label
              htmlFor="userEmail"
              className={inputClassNames(userEmail)}
            >
              User Email:
            </label>
          </div>

          <div className="relative mt-4">
            <input
              type="password"
              id="userPassword"
              name='userPassword'
              value={userPassword}
              onChange={handleInputChange(setUserPassword)}
              className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 peer"
              placeholder="   User Password "
            />
            <label
              htmlFor="userPassword"
              className={inputClassNames(userPassword)}
            >
              User Password:
            </label>
          </div>
          
          <button
            type="button"
            className="focus:outline-none duration-100 mt-5 text-white bg-emerald-300 hover:bg-emerald-300 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-emerald-500 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
}

