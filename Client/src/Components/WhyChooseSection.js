import React from 'react';

const WhyChooseSection = () => {
  return (
    <section className="why-choose-section flex flex-wrap bg-white p-8 rounded-lg shadow-md">
      {/* Image Section */}
      <div className="image-container flex-shrink-0 w-full md:w-1/2 p-4">
        <img
          src="path/to/your/image.jpg" // Replace with the image path or import the image if necessary
          alt="People training in a gym"
          className="rounded-lg w-full object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="text-container w-full md:w-1/2 p-4">
        <h2 className="text-2xl font-bold mb-4">Why Choose FitLife Studio?</h2>
        <p className="text-gray-600 mb-6">
          Discover the Benefits That Set Us Apart and Propel Your Fitness Journey Forward.
        </p>

        {/* Benefits List */}
        <ul className="space-y-4">
          <li className="flex items-start">
            <span className="text-orange-500 text-xl mr-2">✔️</span>
            <div>
              <h3 className="font-bold text-lg">Expert Trainers</h3>
              <p className="text-gray-600">
                Our certified trainers provide personalized guidance and expert advice to help you achieve your fitness goals.
              </p>
            </div>
          </li>

          <li className="flex items-start">
            <span className="text-orange-500 text-xl mr-2">✔️</span>
            <div>
              <h3 className="font-bold text-lg">State-of-the-Art Equipment</h3>
              <p className="text-gray-600">
                Work out with the latest and most advanced fitness equipment to maximize your results and enhance your experience.
              </p>
            </div>
          </li>

          <li className="flex items-start">
            <span className="text-orange-500 text-xl mr-2">✔️</span>
            <div>
              <h3 className="font-bold text-lg">Comprehensive Programs</h3>
              <p className="text-gray-600">
                Enjoy a variety of classes and programs tailored to all fitness levels, from beginner to advanced.
              </p>
            </div>
          </li>
        </ul>

        {/* Call-to-Action Button */}
        <button className="mt-6 bg-orange-500 text-white py-2 px-4 rounded-full hover:bg-orange-600 transition-colors duration-300">
          Free Trial Today
        </button>
      </div>
    </section>
  );
};

export default WhyChooseSection;
