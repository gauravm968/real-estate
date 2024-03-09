import React from 'react'

export default function Login() {

  function submitHandler(){
    console.log("Form submitted successfully");
  }
  return (
    <div className='w-full h-full flex justify-center items-center bg-[var(--smoothWhite)]'>

        <form action='/' onSubmit={submitHandler} className='flex flex-col h-min w-[20rem] max-md:w-min gap-4'>
            <input type="email" placeholder="Enter Email" name='email' className='outline-none border border-[var(--mainBlue)] px-4 py-3 text-[1rem] rounded-md focus:text-[var(--mainBlue)]'></input>
            <input type="password" placeholder="Enter Password" name='password' className='outline-none border border-[var(--mainBlue)] px-4 py-3 text-[1rem] rounded-md focus:text-[var(--mainBlue)]'></input>
           
            <input type='submit' value='Submit' className='border border-[var(--mainBlue)] bg-[var(--mainBlue)] hover:text-[var(--mainBlue)] hover:bg-white transition all duration-300 px-4 py-3 text-[1.2rem] font-semibold rounded-md text-white cursor-pointer'></input>
        </form>

    </div>
  )
}
