import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class AboutComponent {
  skills = [
    { category: 'Frontend', items: ['Angular', 'TypeScript', 'JavaScript (ES6+)', 'RxJS', 'HTML5', 'CSS/SCSS', 'Bootstrap', 'Storybook'] },
    { category: 'Backend', items: ['Node.js (Express)', 'Java (Spring Boot)', 'REST APIs', 'PHP', 'Event-driven Architecture'] },
    { category: 'Cloud & DevOps', items: ['AWS Lambda', 'API Gateway', 'DynamoDB', 'IoT Core', 'EventBridge', 'Step Functions', 'CloudWatch', 'S3', 'Cognito', 'CloudFormation'] },
    { category: 'Databases & Tools', items: ['DynamoDB', 'MySQL', 'Firebase / Firestore', 'GitHub', 'GitLab', 'Jira', 'Jest', 'JUnit', 'Mockito'] },
  ];

  certifications = [
    'AWS Certified Cloud Practitioner',
    'Google Cloud Certified – Cloud Digital Leader',
    'Oracle Cloud Infrastructure Associate',
    'TOEFL ITP – 613',
    'Infosys Global Agile Certification',
  ];
}
