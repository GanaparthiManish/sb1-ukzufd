import React from 'react';
import { motion } from 'framer-motion';
import { Shield, FileText, AlertTriangle } from 'lucide-react';

export function Terms() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
            Terms & Privacy Policy
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Please read these terms carefully before using our platform
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-8"
          >
            <div className="flex items-center space-x-3 mb-6">
              <FileText className="w-8 h-8 text-pink-400" />
              <h2 className="text-2xl font-semibold text-white">Terms of Service</h2>
            </div>
            <div className="space-y-6 text-gray-300">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">1. Acceptance of Terms</h3>
                <p>By accessing or using AdsBox, you agree to be bound by these terms and conditions.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">2. User Obligations</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>You must be at least 18 years old to use this service</li>
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the security of your account</li>
                  <li>Comply with all applicable laws and regulations</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">3. Earning & Rewards</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Rewards are subject to verification</li>
                  <li>We reserve the right to modify reward rates</li>
                  <li>Multiple accounts are strictly prohibited</li>
                  <li>Fraudulent activities will result in account termination</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">4. Prohibited Activities</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Using automated methods to watch ads or play games</li>
                  <li>Creating multiple accounts</li>
                  <li>Manipulating the referral system</li>
                  <li>Engaging in any fraudulent activities</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">5. Termination</h3>
                <p>We reserve the right to terminate or suspend accounts that violate our terms of service without prior notice.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-8"
          >
            <div className="flex items-center space-x-3 mb-6">
              <Shield className="w-8 h-8 text-purple-400" />
              <h2 className="text-2xl font-semibold text-white">Privacy Policy</h2>
            </div>
            <div className="space-y-6 text-gray-300">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">1. Information We Collect</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Personal information (name, email, phone number)</li>
                  <li>Device and usage information</li>
                  <li>Payment and transaction details</li>
                  <li>Activity and performance data</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">2. How We Use Your Information</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>To provide and improve our services</li>
                  <li>To process payments and rewards</li>
                  <li>To prevent fraud and abuse</li>
                  <li>To communicate important updates</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">3. Data Security</h3>
                <p>We implement appropriate security measures to protect your personal information from unauthorized access or disclosure.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">4. Third-Party Services</h3>
                <p>We may use third-party services for analytics, advertising, and payment processing. These services have their own privacy policies.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">5. Your Rights</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Access your personal information</li>
                  <li>Request data correction or deletion</li>
                  <li>Opt-out of marketing communications</li>
                  <li>File a complaint with relevant authorities</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 bg-yellow-500/10 backdrop-blur-sm rounded-xl p-6"
        >
          <div className="flex items-center space-x-3 text-yellow-400">
            <AlertTriangle className="w-6 h-6" />
            <p className="font-semibold">Important Notice</p>
          </div>
          <p className="mt-2 text-gray-300">
            These terms and conditions may be updated periodically. It is your responsibility to review them regularly. 
            Continued use of our service after changes constitutes acceptance of the updated terms.
          </p>
        </motion.div>
      </div>
    </div>
  );
}