import React, { useState } from 'react';
import { Phone, MessageSquare, FolderPlus } from 'lucide-react';

const Contact = () => {
  // State for handling live chat
  const [messages, setMessages] = useState([
    { text: 'Hello! How can we assist you today?', sender: 'support' },
  ]);
  const [userMessage, setUserMessage] = useState('');

  // Function to handle user sending a message
  const handleSendMessage = () => {
    if (userMessage.trim()) {
      setMessages([...messages, { text: userMessage, sender: 'user' }]);
      setUserMessage('');
      // Simulate a response from support
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: 'Thanks for reaching out! How can we help you?', sender: 'support' },
        ]);
      }, 1000); // Simulate a delay for the response
    }
  };

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
          <h2 className="text-lg font-semibold uppercase mb-4">By Mail</h2>
          <p className="text-sm text-gray-600 mb-6">
          (Monday to Friday, 9am to 6pm PST)
          <p className="font-medium">Mail:</p>

            ostouraa33@mail.com
          </p>
          
        </div>

        {/* Live Chat */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-4">
            <MessageSquare className="w-12 h-12 text-orange-500" />
          </div>
          <h2 className="text-lg font-semibold uppercase mb-4">Live Chat</h2>
          <p className="text-sm text-gray-600 mb-6">Chat with a member of our in-house team.</p>

          {/* Chat Window */}
          <div className="bg-white w-full max-w-md p-4 rounded-lg shadow-md">
            <div className="space-y-4 mb-4">
              {/* Displaying Messages */}
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs p-2 rounded-lg ${msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center">
              <input
                type="text"
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
                className="flex-grow p-2 border border-gray-300 rounded-l-lg"
                placeholder="Type your message..."
              />
              <button
                onClick={handleSendMessage}
                className="bg-orange-500 text-white px-4 py-2 rounded-r-lg hover:bg-orange-600"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
