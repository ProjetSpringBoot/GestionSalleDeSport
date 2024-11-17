import React from 'react';
import { Phone, MessageSquare, FolderPlus } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-gray-100 py-16 px-4">
      <h1 className="text-3xl font-bold text-center mb-16">Contact Us</h1>
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Phone Contact */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-4">
            <Phone className="w-12 h-12 text-orange-500" />
          </div>
          <h2 className="text-lg font-semibold uppercase mb-4">By Phone</h2>
          <p className="text-sm text-gray-600 mb-2">(Monday to Friday, 9am to 6pm PST)</p>
          <div className="space-y-2">
            <div>
              <p className="text-sm text-gray-600">North America Toll-Free:</p>
              <p className="font-medium">1-877-930-7483</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">International:</p>
              <p className="font-medium">1-604-637-0780</p>
            </div>
          </div>
        </div>

        {/* New Case */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-4">
            <FolderPlus className="w-12 h-12 text-orange-500" />
          </div>
          <h2 className="text-lg font-semibold uppercase mb-4">Start a New Case</h2>
          <p className="text-sm text-gray-600 mb-6">
            Just send us your questions or concerns by starting a
            new case and we will give you the help you need.
          </p>
          <button className="bg-white text-black px-8 py-2 rounded-sm hover:bg-gray-50 transition-colors">
            START HERE
          </button>
        </div>

        {/* Live Chat */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-4">
            <MessageSquare className="w-12 h-12 text-orange-500" />
          </div>
          <h2 className="text-lg font-semibold uppercase mb-4">Live Chat</h2>
          <p className="text-sm text-gray-600 mb-6">
            Chat with a member of our in-house team.
          </p>
          <button className="bg-white text-black px-8 py-2 rounded-sm hover:bg-gray-50 transition-colors">
            START CHAT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;