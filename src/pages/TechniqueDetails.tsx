import React from 'react';
import { useParams, Link } from 'react-router-dom';
import CTAButton from '../components/CTAButton';
import { Helmet } from 'react-helmet-async';

const techniques = [
  {
    id: 'pomodoro',
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
    details: `The Pomodoro Technique is a time management method that encourages people to work with the time they have—rather than against it. Using this method, you break your workday into 25-minute chunks separated by five-minute breaks. These intervals are referred to as pomodoros. After about four pomodoros, you take a longer break of 15–30 minutes. This technique helps you stay focused and productive while avoiding burnout.`,
  },
  {
    id: '52-17',
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
    details: `The 52/17 Rule is based on the idea that humans can only focus for a limited amount of time before their productivity starts to decline. By working for 52 minutes and then taking a 17-minute break, you can maintain high levels of productivity throughout the day. This method is particularly effective for tasks that require deep focus and creativity.`,
  },
  {
    id: 'desktime',
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
    details: `The DeskTime Method is based on the idea that working for 88 minutes followed by a 17-minute break aligns with the brain's natural rhythms. This method is particularly effective for tasks that require deep focus and problem-solving. By structuring your workday in this way, you can achieve more while avoiding burnout.`,
  },
  {
    id: 'ultradian',
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
    details: `The Ultradian Rhythm method is based on the natural cycles of energy and focus that occur throughout the day. By working for 90 minutes and then taking a 20-minute break, you can align your work schedule with your body's natural rhythms. This method is particularly effective for creative tasks and decision-making.`,
  },
];

const TechniqueDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const technique = techniques.find((tech) => tech.id === id);

  if (!technique) {
    return (
      <div className="container mx-auto py-16 px-6 text-center">
        <h1 className="text-3xl font-bold text-base-900 dark:text-base-100">Technique Not Found</h1>
        <p className="text-base-600 dark:text-base-300 mt-4">
          The technique you're looking for doesn't exist. Please go back to the <Link to="/" className="text-primary-500 hover:underline">homepage</Link>.
        </p>
      </div>
    );
  }

  // Filter out the current technique to display other techniques
  const otherTechniques = techniques.filter((tech) => tech.id !== id);

  return (
    <div className="bg-base-50 dark:bg-base-800 py-16 px-6 rounded-lg shadow-md">
      <Helmet>
        <title>{technique.title} - OnlyFoc</title>
        <meta name="description" content={technique.subtitle} />
      </Helmet>
      
      <div className="container mx-auto max-w-7xl">
        {/* Main Technique Details */}
        <h1 className="text-4xl font-bold text-base-900 dark:text-base-100 mb-6">{technique.title}</h1>
        <p className="text-lg text-primary-600 dark:text-primary-400 mb-4">{technique.subtitle}</p>
        <img
          src={technique.image}
          alt={technique.title}
          className="w-full h-[40rem] object-cover rounded-lg mb-6"
        />
        <p className="text-base-600 dark:text-base-300 mb-6">{technique.story}</p>
        <h2 className="text-2xl font-semibold text-base-900 dark:text-base-100 mb-4">Key Benefits</h2>
        <ul className="list-disc list-inside text-base-600 dark:text-base-300 mb-6">
          {technique.benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
        <h2 className="text-2xl font-semibold text-base-900 dark:text-base-100 mb-4">Details</h2>
        <p className="text-base-600 dark:text-base-300">{technique.details}</p>
      </div>

      {/* Other Techniques Section */}
      <div className="container mx-auto max-w-7xl mt-16">
        <h2 className="text-3xl font-bold text-base-900 dark:text-base-100 mb-8 text-center">Explore Other Techniques</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherTechniques.map((tech) => (
            <div
              key={tech.id}
              className="bg-white dark:bg-base-900 rounded-lg shadow-lg overflow-hidden transform transition hover:scale-105"
            >
              <img
                src={tech.image}
                alt={tech.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-base-900 dark:text-base-100">{tech.title}</h3>
                <p className="text-base-600 dark:text-base-300 mt-2">{tech.subtitle}</p>
                <Link
                  to={`/techniques/${tech.id}`}
                  className="inline-block mt-4 text-primary-500 hover:underline"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
            <CTAButton label="Get Started Now" route="/" />
        </div>
      </div>
    </div>
  );
};

export default TechniqueDetails;