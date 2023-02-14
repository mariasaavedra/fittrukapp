import React, { SyntheticEvent, useState } from 'react'
import LoginWithEmail from './LoginWithEmail'
import RegisterPage from '../RegisterPage/RegisterPage'
import useInput from '../../hooks/useInput'
import LoginWithFacebook from './LoginWithFacebook'
import Input from '../Input/Input'


const LoginPage = () => {
  const userName = useInput('', (t) => t.length > 1)
  const password = useInput('', (t) => t.length > 1)
  const [loggingMethod, setLoggingMethod] = useState('password')
  const login = (event: SyntheticEvent) => {
    event.preventDefault()

    if (userName.isValid && password.isValid) {
    //   dispatch({
    //     type: 'LOGIN',
    //     payload: {
    //       username: userName.value,
    //       password: password.value
    //     }
    //   })
    // } else {
    //   dispatch({ type: 'LOGIN_INPUT_ERROR' })
    }
  }

  return (
    <div className='flex w-full h-screen'>
      <div className='hidden lg:block '>
        <img src='/images/leftSideImage.png' alt='leftSideImage' className='object-cover h-full' />
      </div>
      {loggingMethod === 'password' && (
        <form className='p-4 md:p-12 flex flex-col grow justify-between' onSubmit={login}>
          <div className='py-12'>
            <img src='/images/logo.png' alt='logo' />
          </div>
          <div>
            <h1 className='font-bold text-xl mb-1'>LOGIN</h1>
            <span className='text-naturalGrey-400 font-semibold'>
              Welcome back. Lets get you into your account.
            </span>
            <h2 className='text-sm font-bold text-naturalGrey-800 mb-2 mt-10'>Username</h2>
            <Input placeholder='Enter Email or Phone Number' {...userName} />
            <h2 className='text-sm font-bold text-naturalGrey-800 mb-2 mt-3'>Password</h2>
            <div className='relative'>
              <Input type='password' placeholder='Enter Password' {...password} />
              <button className='absolute right-6 top-3 text-naturalGrey-400'>Ø</button>
            </div>
            <div className='flex justify-between w-full mt-4'>
              <label className='text-sm text-naturalGrey-500'>
                <input
                  type='checkbox'
                  className='hover:bg-lime-400 p-1 mr-2 -hue-rotate-90 brightness-150 rounded'
                />
                Remember me
              </label>
              <button className='font-semibold text-primaryGreen-400'>Reset password?</button>
            </div>
          </div>
          <div>
            <button className='rounded-2xl bg-naturalGrey-800 hover:bg-primaryGreen-700 text-white w-full py-2 mb-3 transition-all'>
              LOGIN
            </button>
            <button
              onClick={() => setLoggingMethod('email')}
              className='rounded-2xl border border-naturalGrey-400 text-primaryGreen-700 hover:bg-primaryGreen-700 hover:text-white hover:border-primaryGreen-700 w-full py-2 mb-3 transition-all flex justify-center items-center'>
              Login Passwordless with Email
              <svg
                width='15'
                height='11'
                viewBox='0 0 15 11'
                className='ml-1'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  fillRule='evenodd'
                clipRule='evenodd'
                  d='M6.97757 6.6359L1.44565 2.98455C1.11464 2.76618 0.916992 2.40072 0.916992 2.00693C0.916992 1.32808 1.47432 0.776332 2.15934 0.776306H13.1746C13.8597 0.776306 14.417 1.32805 14.417 2.00628C14.417 2.40072 14.2194 2.76618 13.8883 2.98455L8.35642 6.6359C8.14701 6.7741 7.90699 6.84322 7.66697 6.84322C7.42697 6.84322 7.18698 6.77412 6.97757 6.6359ZM7.66699 7.56349C8.06922 7.56349 8.45935 7.44631 8.79522 7.22463L14.3269 3.5734C14.3577 3.55312 14.3876 3.53195 14.417 3.51018V9.4933C14.417 10.167 13.8671 10.7237 13.1742 10.7237H2.15976C1.47927 10.7237 0.916992 10.1793 0.916992 9.4933V3.5102C0.946286 3.53192 0.976187 3.55304 1.00688 3.5733L6.53879 7.22463C6.87466 7.44631 7.26479 7.56349 7.66699 7.56349Z'
                  fill='#80BD02'
                />
              </svg>
            </button>
            <button
              className='rounded-2xl border border-naturalGrey-400 text-primaryGreen-700 hover:bg-primaryGreen-700 hover:text-white hover:border-primaryGreen-700 w-full py-2 mb-4 transition-all flex justify-center items-center'
              onClick={() => setLoggingMethod('facebook')}>
              Login With <strong className='text-blue-300 ml-2'>Facebook</strong>
            </button>
            <div className='flex justify-center mt-10'>
              Dont have an account?
              <button
                className='text-primaryGreen-500 ml-2 font-bold hover:text-primaryGreen-700'
                onClick={() => setLoggingMethod('registration')}>
                Join FITTRUCK
              </button>
            </div>
          </div>
        </form>
      )}
      {loggingMethod === 'email' && <LoginWithEmail cancel={() => setLoggingMethod('password')} />}
      {loggingMethod === 'facebook' && (
        <LoginWithFacebook cancel={() => setLoggingMethod('password')} />
      )}
      {loggingMethod === 'registration' && (
        <RegisterPage cancel={() => setLoggingMethod('password')} />
      )}
    </div>
  )
}

export default LoginPage
