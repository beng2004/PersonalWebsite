import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../App.css'; // Import the CSS file
interface Experience {
  date: string;
  title: string;
  subtitle: string;
  description: string;
}


const Timeline: React.FC = () => {
  const experiences: Experience[] = [
    {
      date: 'Jan 2023 - Current',
      title: 'TCNJ',
      subtitle: 'Research - Machine Learning & Computer Vision',
      description: 'Click for more details',
    },
    {
      date: 'May 2023 - Jan 2024',
      title: 'BAE Systems',
      subtitle: 'Internship - SWE & Data Analytics',
      description: 'Click for more details',
    },
    
    {
      date: 'Sept 2023 - Current',
      title: 'TCNJ',
      subtitle: 'Position as computer Science peer mentor/tutor',
      description: 'Click for more details',
    },
    {
      date: 'May 2024 - Current',
      title: 'Prudential Financial',
      subtitle: 'Internship - Software Engineering',
      description: 'Click for more details',
    },
  ];

  return (
    <VerticalTimeline>
      {experiences.map((experience, index) => (
        <VerticalTimelineElement
          key={index}
          className='timeline-element lg:w-full'
          contentStyle={{ textWrap: 'pretty', background: '#61697e', textAlign: 'center', padding: '20px', borderRadius: '8px', border: '2px solid #5f686b', boxShadow: '0 0 15px 2px #000', maxWidth: '600px', transition: 'transform 0.3s ease-in-out', }}
          contentArrowStyle={{ margin: '2px', borderRight: '11px solid  #ca6a93',  opacity: '.5'}}
          date={experience.date}
          iconStyle={{ background: '#ca6a93', color: '#fff', scale: '.8', boxShadow: '0 0 8px 4px #000', }}
          icon={<i className="fas fa-briefcase" />}
          dateClassName='mx-7 text-left '
        >
          <div className="timeline-content">
            <h3 className="text-2xl font-bold md:text-lg">{experience.title}</h3>
            <h4 className="text-lg md:text-sm">{experience.subtitle}</h4>
            <p className='md:text-sm'>{experience.description}</p>
          </div>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};

export default Timeline;
