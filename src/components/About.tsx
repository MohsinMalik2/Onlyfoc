import React from 'react';
import { Timer, Brain, Coffee, Zap, Settings } from 'lucide-react';

const About: React.FC = () => {
  const techniques = [
    {
      id: 'pomodoro',
      icon: <Timer className="w-8 h-8 text-blue-500" />,
      title: 'The Pomodoro Technique',
      subtitle: '25 minutes of focus, 5 minutes of rest',
      image: '/images/pomodoro.jpg',
      story: `In the late 1980s, a university student named Francesco Cirillo was struggling to focus on his studies. He grabbed a tomato-shaped kitchen timer (pomodoro means tomato in Italian) and challenged himself to work for just 10 minutes. This simple experiment led to the birth of the Pomodoro Technique.

The technique is beloved by developers, writers, and creators worldwide. Chris Winfield, a Forbes contributor, credits it for helping him achieve 40 hours of work in just 16 hours. The secret? Our brains work best in short, focused bursts. The 25-minute work period is long enough to get into a flow state but short enough to maintain peak concentration.

Best for: Tasks requiring deep focus, studying, writing, coding
Notable users: Developers at GitHub, writers at Medium, students worldwide`,
      benefits: [
        'Reduces mental fatigue',
        'Improves time management',
        'Increases productivity',
        'Helps maintain focus',
        'Prevents burnout'
      ]
    },
    {
      id: '52-17',
      icon: <Brain className="w-8 h-8 text-green-500" />,
      title: 'The 52/17 Rule',
      subtitle: '52 minutes of work, 17 minutes of rest',
      image: '/images/52-17.jpg',
      story: `The 52/17 rule emerged from a fascinating study by the productivity app DeskTime. They analyzed millions of data points from their users and discovered something remarkable: the most productive people weren't working longer hours—they were working smarter.

The study found that the top 10% of performers worked for 52 minutes, then took a 17-minute break. This rhythm is particularly effective for knowledge workers. Companies like Draugiem Group have adopted this method company-wide, reporting significant increases in productivity.

Best for: Knowledge work, creative tasks, problem-solving
Notable users: High-efficiency teams at tech companies, researchers, analysts`,
      benefits: [
        'Optimizes natural attention span',
        'Maintains consistent productivity',
        'Reduces decision fatigue',
        'Improves work quality',
        'Supports long-term sustainability'
      ]
    },
    {
      id: 'desktime',
      icon: <Coffee className="w-8 h-8 text-amber-500" />,
      title: 'The DeskTime Method',
      subtitle: '88 minutes of deep work, 17 minutes of rest',
      image: '/images/desktime.jpg',
      story: `Inspired by data from the DeskTime app, this method was developed after studying the work patterns of top performers at companies like Apple and Google. The research revealed that the most productive employees maintained 88 minutes of intense focus followed by 17-minute breaks.

This method is particularly effective for those who can sustain longer periods of deep work. Elon Musk is known for working in similar extended, focused chunks of time. The longer work period allows for more complex problem-solving and creative thinking.

Best for: Complex projects, deep work, strategic thinking
Notable users: Tech executives, researchers, analysts`,
      benefits: [
        'Enables deep work',
        'Supports complex problem-solving',
        'Reduces context switching',
        'Improves creative thinking',
        'Maintains high productivity'
      ]
    },
    {
      id: 'ultradian',
      icon: <Zap className="w-8 h-8 text-purple-500" />,
      title: 'The Ultradian Rhythm',
      subtitle: '90 minutes of work, 20 minutes of rest',
      image: '/images/ultradian.jpg',
      story: `This method follows our body's natural 90-minute energy cycle, known as the Ultradian Rhythm. Performance coach Tony Schwartz, author of "The Power of Full Engagement," popularized this approach after studying the work patterns of elite athletes and CEOs.

The 90-minute work period aligns with our natural energy cycles, while the 20-minute break allows for complete mental recovery. This method is particularly effective for creative work and strategic thinking.

Best for: Creative work, strategic planning, peak performance
Notable users: Elite athletes, CEOs, creative professionals`,
      benefits: [
        'Aligns with natural energy cycles',
        'Supports peak performance',
        'Enhances creativity',
        'Improves decision-making',
        'Reduces mental fatigue'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            The Science of Productivity
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover the proven techniques used by top performers worldwide to maximize focus, maintain energy, and achieve peak productivity.
          </p>
        </div>

        <div className="space-y-16">
          {techniques.map((technique) => (
            <div
              key={technique.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
            >
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                  <img
                    className="h-48 w-full md:w-48 object-cover"
                    src={technique.image}
                    alt={technique.title}
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    {technique.icon}
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {technique.title}
                    </h2>
                  </div>
                  <p className="text-lg text-blue-600 dark:text-blue-400 mb-4">
                    {technique.subtitle}
                  </p>
                  <div className="prose dark:prose-invert max-w-none">
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {technique.story}
                    </p>
                    <div className="mt-6">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        Key Benefits:
                      </h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {technique.benefits.map((benefit, index) => (
                          <li
                            key={index}
                            className="flex items-center text-gray-600 dark:text-gray-300"
                          >
                            <span className="mr-2">✓</span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Why These Techniques Work
          </h2>
          <div className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300 space-y-4">
            <p>
              Our brains aren't designed for continuous work. They need regular breaks to maintain peak performance. These techniques work because they:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Respect our natural attention spans</li>
              <li>Prevent decision fatigue</li>
              <li>Maintain consistent energy levels</li>
              <li>Support deep work and creativity</li>
              <li>Reduce the risk of burnout</li>
            </ul>
            <p className="mt-6">
              The key to success is finding the technique that best matches your work style and the type of tasks you're doing. Experiment with different methods and discover what works best for you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 