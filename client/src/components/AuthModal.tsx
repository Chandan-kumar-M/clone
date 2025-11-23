
import React, { useState } from 'react';

interface AuthModalProps {
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center" onClick={onClose}>
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md" onClick={(e) => e.stopPropagation()}>
        <div className="p-6 relative">
          <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl font-bold">&times;</button>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">{isLogin ? 'Log in' : 'Sign up'}</h2>

          {isLogin ? (
            // Login Form
            <form>
              <div className="mb-4">
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <button type="submit" className="w-full bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors duration-300">Log in</button>
            </form>
          ) : (
            // Signup Form
            <form>
               <div className="mb-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
               <div className="mb-4 flex items-start">
                    <input type="checkbox" id="terms" className="mt-1 h-4 w-4 text-red-600 border-gray-300 rounded focus:ring-red-500" />
                    <label htmlFor="terms" className="ml-2 text-sm text-gray-600">I agree to the Zomato Terms of Service, Privacy Policy and Content Policies</label>
                </div>
              <button type="submit" className="w-full bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors duration-300">Create Account</button>
            </form>
          )}

          <div className="text-center mt-6">
            <button onClick={() => setIsLogin(!isLogin)} className="text-red-500 font-medium hover:underline">
              {isLogin ? "New to Zomato? Create account" : "Already have an account? Log in"}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AuthModal;
