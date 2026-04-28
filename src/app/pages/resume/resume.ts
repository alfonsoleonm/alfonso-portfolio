import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-resume',
  imports: [RouterLink],
  templateUrl: './resume.html',
  styleUrl: './resume.scss'
})
export class ResumeComponent {
  experience = [
    {
      role: 'Full Stack Developer',
      company: 'Grupo Salinas',
      period: 'Jan 2024 – Jan 2026',
      bullets: [
        'Designed and maintained backend services for real-time monitoring and automation platforms using Node.js, TypeScript, and AWS serverless infrastructure.',
        'Built and consumed RESTful APIs with endpoint design, validation, error handling, IAM auth, and integration with DynamoDB and S3.',
        'Created event-based automations using EventBridge and Lambda triggers for real-time processing of IoT and robotics data streams.',
        'Integrated Angular frontends end-to-end with scalable backend services and cloud resources.',
        'Monitored production systems via CloudWatch metrics and alarms; troubleshot incidents and improved platform reliability.',
        'Owned features end-to-end, collaborating with cross-functional stakeholders to deliver scalable solutions.'
      ],
      tags: ['Angular', 'Node.js', 'TypeScript', 'AWS Lambda', 'DynamoDB', 'EventBridge', 'IoT Core', 'Step Functions', 'CloudWatch']
    },
    {
      role: 'Systems Engineer / Full Stack Developer',
      company: 'Infosys',
      period: 'Jan 2022 – Jan 2024',
      bullets: [
        'Built and maintained full-stack web applications using Java (Spring Boot), Node.js (Express), Angular, and TypeScript for a US-based client.',
        'Designed and consumed REST APIs across controllers, services, and persistence layers.',
        'Built complete frontend features including forms, routing, guards, and async data handling.',
        'Worked in Scrum sprints, participating in code reviews, technical discussions, and Agile ceremonies.',
        'Implemented unit tests with JUnit, Mockito, and Jest to increase coverage and maintainability.',
        'Delivered optimizations that reduced bugs, improved load performance, and enhanced user experience.'
      ],
      tags: ['Java', 'Spring Boot', 'Angular', 'Node.js', 'TypeScript', 'JUnit', 'Mockito', 'Jest', 'GitLab', 'CI/CD']
    },
    {
      role: 'Full Stack Developer & Project Lead',
      company: 'El Liberal de Jiquilpan',
      period: 'Aug 2020 – Jan 2021',
      bullets: [
        'Led end-to-end development of a custom news platform — architecture, backend (PHP), frontend (HTML/CSS/JS/Bootstrap), and database (MySQL).',
        'Deployed and operated the application on AWS, managing hosting, configuration, and updates.',
        'Coordinated development tasks and communicated directly with stakeholders through delivery.',
        'Completed as part of a university social service engineering program.'
      ],
      tags: ['PHP', 'JavaScript', 'MySQL', 'AWS', 'Bootstrap']
    }
  ];

  education = [
    {
      degree: 'B.S. in Computer Engineering',
      school: 'Universidad Autónoma del Estado de México (UAEMex)',
      period: '2016 – 2021',
      note: 'Academic Excellence Scholarship "Ing. José Yurrieta Valdés" — Awarded for highest GPA and top academic performance in the class.'
    }
  ];

  certifications = [
    'AWS Certified Cloud Practitioner',
    'Google Cloud Certified – Cloud Digital Leader',
    'Oracle Cloud Infrastructure Associate',
    'TOEFL ITP – 613',
    'Infosys Global Agile Certification',
  ];
}
