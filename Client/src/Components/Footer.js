import React from 'react';
import { Facebook, Youtube, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const scheduleData = [
    { day: 'LUNDI', weekdayHours: '06:30 – 21:30', weekendHours: '08:00 – 16:00' },
    { day: 'MARDI', weekdayHours: '06:30 – 21:30', weekendHours: '08:00 – 16:00' },
    { day: 'MERCREDI', weekdayHours: '06:30 – 21:30', weekendHours: '08:00 – 16:00' },
    { day: 'JEUDI', weekdayHours: '06:30 – 21:30', weekendHours: '08:00 – 16:00' },
    { day: 'VENDREDI', weekdayHours: '06:30 – 21:30', weekendHours: '08:00 – 16:00' },
    { day: 'SAMEDI', weekdayHours: '08:00 – 16:00', weekendHours: '08:00 – 16:00' },
    { day: 'DIMANCHE', weekdayHours: '08:00 – 16:00', weekendHours: '08:00 – 16:00' },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Section */}
        <div>
          <h2 className="text-xl font-bold mb-6 relative">
            CONTACTEZ NOUS
            <span className="absolute bottom-0 left-0 w-16 h-0.5 bg-yellow-400 -mb-2"></span>
          </h2>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-gray-400" />
              <span>Maamoura manba3 l asatir</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-gray-400" />
              <span>tél : 20 354 629</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-gray-400" />
              <span>Mobile : 92 788 034</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-gray-400" />
              <span>Maamoura </span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-gray-400" />
              <span>92 788 031</span>
            </div>
            
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-blue-500">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500">
                <Youtube className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Montplaisir Schedule */}
        <div>
          <h2 className="text-xl font-bold mb-6 relative">
            HORAIRES manba3 l asatir
            <span className="absolute bottom-0 left-0 w-16 h-0.5 bg-yellow-400 -mb-2"></span>
          </h2>
          
          <div className="space-y-2">
            {scheduleData.map(({ day, weekdayHours }) => (
              <div key={day} className="flex justify-between items-center">
                <span className="text-yellow-400">{day}</span>
                <span>{weekdayHours}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Lafayette Schedule */}
        <div>
          <h2 className="text-xl font-bold mb-6 relative">
            HORAIRES manba3 l asatir
            <span className="absolute bottom-0 left-0 w-16 h-0.5 bg-yellow-400 -mb-2"></span>
          </h2>
          
          <div className="space-y-2">
            {scheduleData.map(({ day, weekendHours }) => (
              <div key={day} className="flex justify-between items-center">
                <span className="text-yellow-400">{day}</span>
                <span>{weekendHours}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-gray-800 mt-12 pt-8">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">Copyright © 2016 FARIDAA33 Gym.</p>
          <p className="text-gray-400">
            Powered by <span className="text-yellow-400">Gym FARIDAA33</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;