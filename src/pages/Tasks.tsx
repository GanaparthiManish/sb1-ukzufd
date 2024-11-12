import React from 'react';
import { motion } from 'framer-motion';
import { Youtube, Instagram, MessageCircle, Send, ExternalLink, Coins, DollarSign } from 'lucide-react';
import { useStore } from '../store/useStore';

interface Task {
  id: string;
  title: string;
  icon: React.ElementType;
  description: string;
  reward: number;
  link: string;
  buttonText: string;
  adType: string;
}

export function Tasks() {
  const { addCoins } = useStore();
  const [completedTasks, setCompletedTasks] = React.useState<string[]>([]);

  const tasks: Task[] = [
    {
      id: 'youtube',
      title: 'YouTube',
      icon: Youtube,
      description: 'Watch video ads and earn per view',
      reward: 10,
      link: 'https://youtube.com',
      buttonText: 'Watch Ads',
      adType: 'Video Ads'
    },
    {
      id: 'instagram',
      title: 'Instagram',
      icon: Instagram,
      description: 'View sponsored posts and earn',
      reward: 5,
      link: 'https://instagram.com',
      buttonText: 'View Ads',
      adType: 'Sponsored Posts'
    },
    {
      id: 'whatsapp',
      title: 'WhatsApp',
      icon: MessageCircle,
      description: 'View status ads and earn coins',
      reward: 8,
      link: 'https://whatsapp.com',
      buttonText: 'View Status',
      adType: 'Status Ads'
    },
    {
      id: 'telegram',
      title: 'Telegram',
      icon: Send,
      description: 'View channel ads and earn',
      reward: 7,
      link: 'https://telegram.org',
      buttonText: 'View Channel',
      adType: 'Channel Ads'
    }
  ];

  const handleTaskComplete = (taskId: string, reward: number) => {
    if (!completedTasks.includes(taskId)) {
      setCompletedTasks([...completedTasks, taskId]);
      addCoins(reward);
    }
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
            Watch Ads & Earn Money
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            View ads across different platforms and earn real money! 1000 coins = ₹100
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {tasks.map((task) => (
            <motion.div
              key={task.id}
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500">
                    <task.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">{task.title}</h3>
                    <p className="text-gray-300">{task.description}</p>
                    <p className="text-sm text-gray-400 mt-1">Type: {task.adType}</p>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <div className="flex items-center space-x-1 text-yellow-400">
                    <Coins className="w-5 h-5" />
                    <span className="font-semibold">{task.reward}</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">Per view</p>
                </div>
              </div>

              <div className="mt-6">
                <motion.a
                  href={task.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleTaskComplete(task.id, task.reward)}
                  className={`w-full flex items-center justify-center space-x-2 py-2 px-4 rounded-lg font-semibold transition-all ${
                    completedTasks.includes(task.id)
                      ? 'bg-green-500 text-white cursor-default'
                      : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white'
                  }`}
                >
                  {completedTasks.includes(task.id) ? (
                    'Completed'
                  ) : (
                    <>
                      <span>{task.buttonText}</span>
                      <ExternalLink className="w-4 h-4" />
                    </>
                  )}
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-12 bg-white/5 backdrop-blur-sm rounded-xl p-6"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <DollarSign className="w-6 h-6 text-green-400" />
              <h2 className="text-2xl font-bold text-white">Earnings Calculator</h2>
            </div>
          </div>
          <div className="mt-4 grid md:grid-cols-3 gap-4">
            <div className="bg-white/5 p-4 rounded-lg">
              <p className="text-gray-300">1000 coins</p>
              <p className="text-xl font-bold text-white">₹100</p>
            </div>
            <div className="bg-white/5 p-4 rounded-lg">
              <p className="text-gray-300">5000 coins</p>
              <p className="text-xl font-bold text-white">₹500</p>
            </div>
            <div className="bg-white/5 p-4 rounded-lg">
              <p className="text-gray-300">10000 coins</p>
              <p className="text-xl font-bold text-white">₹1000</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}