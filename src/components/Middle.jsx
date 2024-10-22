import React from 'react';
import Image from 'react-bootstrap/Image';
import phone from '../store/phonetick.jfif';
import ocr from '../store/ocr.png';
import time from '../store/Time.png'; // Ensure this path is correct

const TeamMemberCard = ({ image, name, description }) => {
  return (
    <div className="px-8">
      <div className="flex flex-col items-center p-4">
        {/* Circular Image */}
        <div
          style={{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img
            src={image}
            alt={name}
            style={{
              width: '100%',
              height: '100%', // Set to 100% to maintain circular bounds
              objectFit: 'cover', // Maintain aspect ratio and fill the circular space
            }}
          />
        </div>

        {/* Name */}
        <p className="text-lg font-semibold mb-1">{name}</p>
        {/* Description */}
        <p className="text-center text-gray-700">{description}</p>
      </div>
    </div>
  );
};

const TeamSection = () => {
  const members = [
    {
      image: time,
      name: 'Real-Time Translation',
      description: 'Experience instant translation as you upload or edit your documents.Our AI ensure you get the results you need without the wait',
    },
    {
      image: ocr,
      name: 'Multilingual OCR',
      description: 'Translation scanned documents and images within PDFs with our cutting -edge Optical Character Recognition technology',
    },
    {
      image: phone,
      name: 'Contexual Accuracy',
      description: 'Experience instant translation as you upload or edit your documents.Our AI ensure you get the results you need without hte wait',
    },
  ];

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row justify-center items-center space-x-4 p-8">
        {members.map((member, index) => (
          <React.Fragment key={index}>
            <TeamMemberCard
              image={member.image}
              name={member.name}
              description={member.description}
            />
            {/* Render vertical line only if not the last member */}
            {index < members.length - 1 && (
              <div
                style={{
                  width: '1px',
                  height: '200px', // Adjust the height as necessary
                  backgroundColor: 'black',
                  margin: '0 10px' // Adds space on both sides of the line
                }}
              />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Horizontal Line */}
      <div className="w-full mt-6">
        <hr className="border-t-2 border-black my-4" />
      </div>
    </div>
  );
};

export default TeamSection;
