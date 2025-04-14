import React from 'react';
import { Timer, Brain, Coffee, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTAButton from './CTAButton';

const About: React.FC = () => {
  const techniques = [
    {
      id: 'pomodoro',
      icon: <Timer className="w-10 h-10 text-primary-500" />,
      title: 'The Pomodoro Technique',
      subtitle: '25 minutes of focus, 5 minutes of rest',
      image: '/images/pomodoro.jpg',
      story: `In the late 1980s, a university student named Francesco Cirillo was struggling to focus on his studies. He grabbed a tomato-shaped kitchen timer (pomodoro means tomato in Italian) and challenged himself to work for just 10 minutes. This simple experiment led to the birth of the Pomodoro Technique.`,
      benefits: [
        'Reduces mental fatigue',
        'Improves time management',
        'Increases productivity',
        'Helps maintain focus',
        'Prevents burnout',
      ],
    },
    {
      id: '52-17',
      icon: <Brain className="w-10 h-10 text-green-500" />,
      title: 'The 52/17 Rule',
      subtitle: '52 minutes of work, 17 minutes of rest',
      image: '/images/52-17.jpg',
      story: `The 52/17 rule emerged from a fascinating study by the productivity app DeskTime. They analyzed millions of data points from their users and discovered something remarkable: the most productive people weren't working longer hours—they were working smarter.`,
      benefits: [
        'Optimizes natural attention span',
        'Maintains consistent productivity',
        'Reduces decision fatigue',
        'Improves work quality',
        'Supports long-term sustainability',
      ],
    },
    {
      id: 'desktime',
      icon: <Coffee className="w-10 h-10 text-amber-500" />,
      title: 'The DeskTime Method',
      subtitle: '88 minutes of deep work, 17 minutes of rest',
      image: '/images/desktime.jpg',
      story: `Inspired by data from the DeskTime app, this method was developed after studying the work patterns of top performers at companies like Apple and Google.`,
      benefits: [
        'Enables deep work',
        'Supports complex problem-solving',
        'Reduces context switching',
        'Improves creative thinking',
        'Maintains high productivity',
      ],
    },
    {
      id: 'ultradian',
      icon: <Zap className="w-10 h-10 text-purple-500" />,
      title: 'The Ultradian Rhythm',
      subtitle: '90 minutes of work, 20 minutes of rest',
      image: '/images/ultradian.jpg',
      story: `This method follows our body's natural 90-minute energy cycle, known as the Ultradian Rhythm. Performance coach Tony Schwartz popularized this approach after studying the work patterns of elite athletes and CEOs.`,
      benefits: [
        'Aligns with natural energy cycles',
        'Supports peak performance',
        'Enhances creativity',
        'Improves decision-making',
        'Reduces mental fatigue',
      ],
    },
  ];

  return (
    <div className="min-h-screen rounded-lg dark:bg-base-800 bg-white from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center my-12">
            <h1 className="text-5xl font-extrabold text-base-900 dark:text-white">
              The Science of Productivity
            </h1>
            <p className="text-lg text-base-600 dark:text-base-300 mt-4 max-w-2xl mx-auto">
              Unlock your potential with proven techniques to maximize focus, maintain energy, and achieve peak productivity.
            </p>
            {/* CTA Button */}
            <CTAButton label="Get Back to Work" route="/"/>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {techniques.map((technique) => (
            <div
              key={technique.id}
              className="bg-white-600 dark:bg-base-900 rounded-lg shadow-lg overflow-hidden transform transition hover:scale-105"
            >
              <img
                className="h-64 w-full object-cover"
                src={technique.image}
                alt={technique.title}
              />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  {technique.icon}
                  <h2 className="text-xl font-bold text-base-900 dark:text-white">
                    {technique.title}
                  </h2>
                </div>
                <p className="text-sm text-primary-600 dark:text-primary-400 mb-4">
                  {technique.subtitle}
                </p>
                <p className="text-base-600 dark:text-base-300 text-sm mb-6">
                  {technique.story}
                </p>
                <h3 className="text-lg font-semibold text-base-900 dark:text-white mb-3">
                  Key Benefits:
                </h3>
                <ul className="space-y-2">
                  {technique.benefits.map((benefit, index) => (
                    <li
                      key={index}
                      className="flex items-center text-base-600 dark:text-base-300 text-sm"
                    >
                      <span className="mr-2 text-green-500">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
                {/* Learn More Button */}
                <Link
                  to={`/techniques/${technique.id}`}
                  className="inline-block mt-4 text-primary-500 hover:underline"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;