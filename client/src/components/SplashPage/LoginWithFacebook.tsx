import React from 'react'
import { Stytch, SDKProductTypes, OAuthProvidersTypes, OneTapPositions } from '@stytch/stytch-react'
const STYTCH_PUBLIC_TOKEN = process.env.REACT_APP_STYTCH_PUBLIC_TOKEN;
const LOGIN_REDIRECT_URL = process.env.REACT_APP_LOGIN_REDIRECT_URL

const loginOrSignupViewConfig = {
  oauthOptions: {
    loginRedirectURL: LOGIN_REDIRECT_URL,
    signupRedirectURL: LOGIN_REDIRECT_URL,
    providers: [
      {
        type: OAuthProvidersTypes.Facebook,
        custom_scopes: ['user_photos']
      }
    ]
  },
  products: [SDKProductTypes.oauth]
}
const LoginWithFacebook = ({ cancel }: {cancel: () => void}) => (
  <div className='flex flex-col justify-center items-center mx-auto p-4'>
    <div className='mb-[25%] w-full'>
      <img src='/images/logo.png' alt='logo' />
    </div>
    <button
      className='self-start mb-12 text-naturalGrey-400 hover:text-primaryGreen-600'
      onClick={cancel}>
      {'< Back'}
    </button>
    <Stytch loginOrSignupView={loginOrSignupViewConfig} publicToken={STYTCH_PUBLIC_TOKEN}/>
  </div>
)

export default LoginWithFacebook
