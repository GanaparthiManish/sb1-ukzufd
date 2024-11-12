import React from 'react';
import { motion } from 'framer-motion';
import { X, Mail, Smartphone, LogIn } from 'lucide-react';
import { useStore } from '../store/useStore';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'login' | 'signup';
}

export function AuthModal({ isOpen, onClose, type }: AuthModalProps) {
  const { login } = useStore();
  const [authMethod, setAuthMethod] = React.useState<'email' | 'phone' | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [formData, setFormData] = React.useState({
    email: '',
    phone: '',
    username: '',
    password: ''
  });

  const handleGoogleAuth = async () => {
    setIsLoading(true);
    // Simulated auth delay
    setTimeout(() => {
      login({
        email: 'user@example.com',
        username: 'User' + Math.floor(Math.random() * 1000)
      });
      onClose();
      setIsLoading(false);
    }, 1500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      login({
        email: authMethod === 'email' ? formData.email : undefined,
        phone: authMethod === 'phone' ? formData.phone : undefined,
        username: formData.username || 'User' + Math.floor(Math.random() * 1000)
      });
      onClose();
      setIsLoading(false);
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
    >
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        className="bg-white rounded-xl p-6 w-full max-w-md relative"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-2xl font-bold mb-6">
          {type === 'login' ? 'Welcome Back!' : 'Create Account'}
        </h2>

        {!authMethod ? (
          <div className="space-y-4">
            <button
              onClick={handleGoogleAuth}
              disabled={isLoading}
              className="w-full flex items-center justify-center space-x-2 bg-white border-2 border-gray-200 text-gray-800 py-3 rounded-lg hover:bg-gray-50 transition"
            >
              {isLoading ? (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-800" />
              ) : (
                <>
                  <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
                  <span>Continue with Google</span>
                </>
              )}
            </button>

            <button
              onClick={() => setAuthMethod('email')}
              className="w-full flex items-center justify-center space-x-2 bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition"
            >
              <Mail className="w-5 h-5" />
              <span>Continue with Email</span>
            </button>

            <button
              onClick={() => setAuthMethod('phone')}
              className="w-full flex items-center justify-center space-x-2 bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700 transition"
            >
              <Smartphone className="w-5 h-5" />
              <span>Continue with Phone</span>
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {authMethod === 'email' ? (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Enter your email"
                  required
                />
              </div>
            ) : (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Username
              </label>
              <input
                type="text"
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Choose a username"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Enter your password"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 transition"
            >
              {isLoading ? (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
              ) : (
                <>
                  <LogIn className="w-5 h-5" />
                  <span>{type === 'login' ? 'Login' : 'Sign Up'}</span>
                </>
              )}
            </button>
          </form>
        )}
      </motion.div>
    </motion.div>
  );
}