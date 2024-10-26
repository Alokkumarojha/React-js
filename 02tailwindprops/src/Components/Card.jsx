import React from "react";

function Card({ username, btntext = "Visit me" }) {
  return (
    <div className="md:flex">
      <div className="md:flex-shrink-0">
        <img
          className="h-48 w-full object-cover md:h-full md:w-48"
          src="https://images.pexels.com/photos/28974077/pexels-photo-28974077/free-photo-of-close-up-of-two-polar-bears-on-rocky-terrain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Placeholder"
        />
      </div>
      <div className="p-8">
        <h3 className="block mt-1 text-lg leading-tight font-medium text-black">
          {username}
        </h3>
        <p className="mt-2 text-gray-500">
          This is a description of the card content. It provides details about
          the content and purpose of the card.
        </p>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
          {btntext}
        </button>
      </div>
    </div>
  );
}

export default Card;
