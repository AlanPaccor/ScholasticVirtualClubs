import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { auth } from '../../../firebaseConfig';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';
import crocodile from '../../../public/crocodile-svgrepo-com.svg'
import elk from '../../../public/elk-svgrepo-com.svg'


interface LoginPanelProps {
  onClose: () => void;
  onSwitchToSignUp: () => void;
}

const LoginPanel: React.FC<LoginPanelProps> = ({ onClose, onSwitchToSignUp }) => {
  const [showEmailLogin, setShowEmailLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      onClose();
    } catch (error) {
      setError('Invalid email or password');
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      onClose();
    } catch (error) {
      setError('Failed to sign in with Google');
    }
  };

  const handleGithubLogin = async () => {
    const provider = new GithubAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      onClose();
    } catch (error) {
      setError('Failed to sign in with GitHub');
    }
  };

  const initialView = (
    <>
      <div className="flex justify-center">
        <Image src="/crocodile-svgrepo-com.svg" alt="Crocodile" width={150} height={150} />
      </div>
      <h2 className="text-3xl font-bold text-center mb-8">
        The best way to learn math and computer science.
      </h2>
      <button 
        className="w-full bg-white border border-gray-300 rounded-full py-2 px-6 flex items-center justify-center text-base font-medium mb-2"
        onClick={handleGoogleLogin}
      >
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48" className="mr-4">
          <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
        </svg>
        Log in with Google
      </button>
      <button 
        className="w-full bg-white border border-gray-300 rounded-full py-2 px-6 flex items-center justify-center text-base font-medium mb-2"
        onClick={handleGithubLogin}
      >
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30" className="mr-4">
          <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
        </svg>
        Log in with GitHub
      </button>
      <button 
        className="w-full bg-gray-900 text-white rounded-full py-4 px-6 mb-24 text-base font-medium"
        onClick={() => setShowEmailLogin(true)}
      >
        Log in with Email
      </button>
      <p className="text-center text-sm text-gray-600">
        New user? <a href="#" onClick={onSwitchToSignUp} className="text-blue-600 font-medium">Sign up</a>
      </p>
    </>
  );

  const emailLoginView = (
    <>
      <div className="flex justify-center mb-6">
        <Image src="/elk-svgrepo-com.svg" alt="Brilliant icon" width={150} height={150} />
      </div>
      <h2 className="text-3xl font-bold text-center mb-8">Login</h2>
      <form className="space-y-6" onSubmit={handleEmailLogin}>
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button
          type="submit"
          className="w-full bg-gray-900 text-white rounded-full py-3 px-6 text-base font-medium"
        >
          Log in
        </button>
      </form>
      <div className="mt-6 flex justify-between text-sm">
        <a href="#" className="text-blue-600 font-medium">Reset password</a>
        <a href="#" onClick={onSwitchToSignUp} className="text-blue-600 font-medium">New user? Sign up</a>
      </div>
      <p className="mt-8 text-center text-xs text-gray-500">
        This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply
      </p>
    </>
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-10 max-w-[500px] w-full mx-4 relative h-[700px] overflow-y-auto">
        <div className="h-full flex flex-col justify-between">
          {showEmailLogin ? emailLoginView : initialView}
        </div>
        <button 
          onClick={showEmailLogin ? () => setShowEmailLogin(false) : onClose} 
          className="absolute top-6 right-6 text-gray-400 hover:text-gray-600"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default LoginPanel;
