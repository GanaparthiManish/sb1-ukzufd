import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight, Coins } from 'lucide-react';
import { useStore } from '../store/useStore';

export function Watch() {
  const { incrementAdsWatched, adsWatched, coins } = useStore();
  const [isWatching, setIsWatching] = React.useState(false);

  const handleWatchAd = () => {
    setIsWatching(true);
    setTimeout(() => {
      incrementAdsWatched();
      setIsWatching(false);
    }, 5000); // Simulated 5-second ad
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-pink-900">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-black/40 rounded-2xl p-8 backdrop-blur-sm">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 mb-4">
              Watch & Earn
            </h1>
            <p className="text-gray-300 text-lg">
              Watch ads to earn coins. Every ad watched brings you closer to rewards!
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="bg-purple-900/50 rounded-xl p-6 flex items-center space-x-4">
              <Coins className="w-8 h-8 text-yellow-400" />
              <div className="text-white">
                <p className="text-sm">Your Balance</p>
                <p className="text-2xl font-bold">{coins} Coins</p>
              </div>
            </div>
          </div>

          <div className="max-w-md mx-auto bg-white/10 rounded-xl p-6 backdrop-blur-sm">
            <div className="text-center text-white mb-6">
              <p className="text-lg mb-2">Ads Watched: {adsWatched}/10</p>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-pink-500 to-purple-500 h-2 rounded-full transition-all"
                  style={{ width: `${(adsWatched % 10) * 10}%` }}
                />
              </div>
              <p className="text-sm text-gray-400 mt-2">
                {10 - (adsWatched % 10)} more ads until next reward
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleWatchAd}
              disabled={isWatching}
              className={`w-full ${
                isWatching
                  ? 'bg-gray-600'
                  : 'bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600'
              } text-white py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all`}
            >
              {isWatching ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                  <span>Watching Ad...</span>
                </>
              ) : (
                <>
                  <Play className="w-5 h-5" />
                  <span>Watch Ad</span>
                </>
              )}
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}