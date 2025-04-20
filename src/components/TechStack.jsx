import React from 'react';
import TechStackCard from './TechStackCard'; 

export default function TechStack() {
  const techSkills = [
    'REACT',
    'HTML',
    'CSS',
    'Javascript',
    'Bootstrap',
    'Tailwind',
    'Postgress',
    'Epress',
    'Node',
    'Java',
    'Python'
  ];

  return (
    <section className="mb-10 flex-1">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Tech Stack</h2>
      <div className="grid grid-cols-3 gap-4 overflow-y-auto max-h-96">
        {techSkills.map((tech, index) => (
          <TechStackCard key={index} tech={tech} />
        ))}
      </div>
    </section>
  );
}
