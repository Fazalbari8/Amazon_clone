import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const LocationModal = ({ closeModal }) => {
  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md md:max-w-lg relative">
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-black"
          onClick={closeModal}
        >
          <AiOutlineClose size={24} />
        </button>
        
        {/* Modal Content */}
        <h2 className="text-lg font-bold mb-4">Choose your location</h2>
        <p className="text-sm text-gray-500 mb-6">
          Delivery options and delivery speeds may vary for different locations
        </p>

        <div className="mb-4">
          <a href="#" className="text-blue-500 text-sm mb-4 block">
            Manage address book
          </a>
        </div>

        {/* US ZIP Code */}
        <div className="flex mb-4">
          <input
            type="text"
            placeholder="or enter a US zip code"
            className="border border-gray-300 p-2 w-full rounded-md mr-2"
          />
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-md">
            Apply
          </button>
        </div>

        <p className="text-center text-gray-500 mb-4">or ship outside the US</p>

        {/* Dropdown for country */}
        <div className="mb-6">
          <select
            className="border border-gray-300 p-2 w-full rounded-md"
            defaultValue="Pakistan"
          >
            <option value="Pakistan">Pakistan</option>
            <option value="United States">United States</option>
            <option value="Canada">Canada</option>
            <option value="India">India</option>
            {/* Add other countries as needed */}
          </select>
        </div>

        {/* Done Button */}
        <div className="text-center">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded-full">
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <button
        onClick={handleOpenModal}
        className="bg-gray-800 text-white px-4 py-2 rounded-md"
      >
        Choose Location
      </button>

      {isModalOpen && <LocationModal closeModal={handleCloseModal} />}
    </div>
  );
};

export default App;
