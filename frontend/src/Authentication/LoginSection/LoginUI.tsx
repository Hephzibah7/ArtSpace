import React from 'react'

function LoginUI() {
  return (
    <div className='w-full h-screen'>
      <div className='grid grid-cols-3 '>
        <div className=' h-screen col-span-1 flex justify-center'>
            <div className='mt-10 p-20 text-center'>
                <h1 className='uppercase text-4xl font-bold'>welcome back</h1>
                <h3 className='text-wrap text-center text-sm  text-gray-500 mt-5'>Enter your email and password to access your account</h3>
                <div className='mt-10 flex flex-col gap-4'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-left' >Email</h1>
                        <input className='p-2 bg-gray-200 rounded' placeholder="jane@gmail.com"/>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-left' >Password</h1>
                        <input className='p-2 bg-gray-200 rounded' type='password'/>
                    </div>
                    <div className='uppercase bg-pink-600 rounded p-2 text-white'>Log In</div>
                </div>
                <div className='mt-2 text-gray-500'>Don't have an Account? <span className='text-yellow-600 font-bold'>Register Now</span></div>
            </div>
        </div>
        <div className='flex justify-center h-screen bg-red-100 col-span-2'>
            <img src="src/assets/pic1.jpeg"/>
        </div>
      </div>
    </div>
  )
}

export default LoginUI;
