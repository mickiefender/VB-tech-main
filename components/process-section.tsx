'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const steps = [
  {
    number: '01',
    title: 'Identify and Understand the Problem',
    description: 'We understand your business needs and develop a comprehensive solution strategy tailored to your vision and goals.',
    image: '/procedure/Identify and Understand the Problem.png',
  },
  {
    number: '02',
    title: 'Design the Software Solution',
    description: 'Create detailed designs and technical specifications for your project with modern UI/UX principles and best practices.',
    image: '/procedure/Design the Software Solution.png',
  },
  {
    number: '03',
    title: 'Develop and Test the System',
    description: 'Build robust solutions with rigorous testing, quality assurance, and continuous integration throughout the process.',
    image: '/procedure/Develop and Test the System.jpeg',
  },
  {
    number: '04',
    title: 'Deploy, Monitor, and Improve',
    description: 'Deploy your solution and provide ongoing maintenance, support, and updates to ensure continued success.',
    image: '/procedure/Deploy, Monitor, and Improve.jpeg',
  },
];

export default function ProcessSection() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentStep((prev) => (prev + 1) % steps.length);
        setIsTransitioning(false);
      }, 300);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const step = steps[currentStep];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-in-down">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
            Our Procedures <span className="text-accent">In Problem Solving</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A structured approach to delivering excellence at every step
          </p>
        </div>

        {/* Carousel Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="relative h-96 sm:h-[500px] rounded-2xl overflow-hidden bg-gray-100 shadow-2xl animate-slide-in-left order-2 lg:order-1">
            <Image
              src={step.image}
              alt={step.title}
              fill
              className={`object-cover transition-opacity duration-300 ${
                isTransitioning ? 'opacity-0' : 'opacity-100'
              }`}
              priority
            />
          </div>

          {/* Right side - Content */}
          <div className="space-y-8 order-1 lg:order-2">
            {/* Timeline dots */}
            <div className="flex flex-col lg:flex-col gap-4 lg:gap-6 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0">
              {steps.map((s, i) => (
                <div
                  key={i}
                  className={`flex lg:flex-col flex-row items-start gap-6 cursor-pointer transition-all duration-500 flex-shrink-0 lg:flex-shrink ${
                    i === currentStep ? 'opacity-100' : 'opacity-40'
                  }`}
                  onClick={() => {
                    setIsTransitioning(true);
                    setTimeout(() => {
                      setCurrentStep(i);
                      setIsTransitioning(false);
                    }, 300);
                  }}
                >
                  {/* Timeline connector */}
                  <div className="flex lg:flex-col flex-row items-center gap-0 lg:gap-0">
                    <div
                      className={`w-6 h-6 rounded-full border-2 transition-all duration-500 flex-shrink-0 ${
                        i === currentStep
                          ? 'bg-accent border-accent shadow-lg shadow-accent/50'
                          : 'border-gray-300 bg-white'
                      }`}
                    />
                    {i < steps.length - 1 && (
                      <div
                        className={`lg:w-1 lg:h-16 w-16 h-1 transition-colors duration-500 ${
                          i < currentStep ? 'bg-accent' : 'bg-gray-200'
                        }`}
                      />
                    )}
                  </div>

                  {/* Step content */}
                  <div className="pt-1 flex-1">
                    <div className={`text-sm font-semibold transition-colors duration-500 ${
                      i === currentStep ? 'text-accent' : 'text-gray-400'
                    }`}>
                      {s.number}
                    </div>
                    <h3 className={`text-2xl font-bold mb-2 transition-all duration-500 ${
                      i === currentStep
                        ? 'text-primary opacity-100 translate-y-0'
                        : 'text-gray-400 opacity-70'
                    }`}>
                      {s.title}
                    </h3>
                    <div className={`overflow-hidden transition-all duration-500 ${
                      i === currentStep ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <p className="text-gray-600 leading-relaxed">
                        {s.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Progress indicator */}
            <div className="flex items-center gap-2 mt-8">
              {steps.map((_, i) => (
                <div
                  key={i}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    i === currentStep ? 'w-8 bg-accent' : 'w-2 bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
