import React from 'react';
import Image from 'react-bootstrap/Image';
import James from '../store/James.jfif';
import Trevor from '../store/Trevor.jpg';
import Greg from '../store/Greg.jfif'; // Ensure this path is correct

const TeamMemberCard = ({ image, name, description }) => {
  return (
    <div className="px-8">
      <div className="flex flex-col items-center border border-indigo-600 p-4">
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
              objectFit: 'contain', // Maintain aspect ratio without cropping
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
      image: James, // Placeholder image
      name: 'James Pattison',
      description: 'Lobortis leo pretium facilisis amet nislat nec. Scelerisque risus tortor donec ipsum consequat semper adipiscing ultrices.',
    },
    {
      image: Greg, // Placeholder image
      name: 'Greg Stuart',
      description: 'Vestibulum, cum nam non amet consectetur morbi amet. Ultricies integer nunc neque accumsan laoreet.',
    },
    {
      image: Trevor, // Ensure this path is correct
      name: 'Trevor Mitchell',
      description: 'Ut tristique vivera sed porttitor. A facilisis metus pretium ut habitant lorem. Vel bibendum eget aliquet sem id.',
    },
  ];

  return (
    <div className="flex flex-col items-center">
      {/* Add the headings */}
      

     
  <p className="text-blue-600 text-center  ">#TESTIMONIALS</p>
  <p className="text-4xl text-center font-lg leading-relaxed">What our clients say about us.</p>

      <div className="flex flex-row justify-center space-x-8 p-8">
        {members.map((member, index) => (
          <TeamMemberCard
            key={index}
            image={member.image}
            name={member.name}
            description={member.description}
          />
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
