import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class ProjectsComponent {
  projects = [
    {
      num: '01',
      name: 'Resume Analyzer',
      subtitle: 'AI-powered resume analysis tool',
      desc: 'A full-stack web app that analyzes resumes against job descriptions using AI. Upload a PDF resume, paste a job description, and get instant feedback on match score, skill gaps, and improvement suggestions.',
      problem: 'Job seekers struggle to tailor their resumes to specific roles and rarely get actionable feedback before applying.',
      solution: 'Built a Node.js backend with Gemini AI integration that parses PDF resumes and runs structured analysis. Angular frontend delivers results in a clean, readable format. Deployed on Netlify (frontend) and Render (backend).',
      tags: ['Angular', 'Node.js', 'TypeScript', 'Gemini AI', 'Netlify', 'Render'],
      github: null,
      live: 'https://resume-analyzer-webapp.netlify.app',
      type: 'Solo project · AI integration, frontend, backend, deployment'
    },
    {
      num: '02',
      name: 'Habit Tracker',
      subtitle: 'Personal productivity app',
      desc: 'A full-stack habit tracking app with a calendar-based grid view, custom habit creation per month, and a stats dashboard showing completion rates and streaks. Built with Angular on the frontend and a serverless AWS backend.',
      problem: 'Most habit trackers are either too simple or too complex. I wanted something that gave a clear visual picture of consistency over time without the noise.',
      solution: 'Built a calendar grid UI where each day shows habit completion at a glance. Backend uses AWS Lambda + DynamoDB for persistence, with Cognito handling authentication. Deployed frontend on Vercel, backend as a Lambda function.',
      tags: ['Angular', 'TypeScript', 'AWS Lambda', 'DynamoDB', 'Cognito', 'Node.js', 'Vercel'],
      github: 'https://github.com/alfonsoleonm/habit-tracker',
      live: 'https://habit-tracker-tan-eight.vercel.app/',
      type: 'Solo project · Full stack, cloud architecture, UX design'
    },
    {
      num: '03',
      name: 'BrewFlow',
      subtitle: 'Serverless coffee ordering platform',
      desc: 'A full-stack MVP for a coffee shop ordering system, designed with a focus on scalable cloud architecture and clean UX. Customers browse a menu, place orders, and track their status in real time. Staff manage the queue through an admin dashboard.',
      problem: 'Coffee shop ordering is often disjointed — no clear status tracking, no clean separation between customer and staff workflows, and most solutions are either too simple or too heavy to deploy.',
      solution: 'Designed a serverless architecture on AWS that scales automatically and costs nothing at rest. Defined a consistent order lifecycle (RECEIVED → PREPARING → READY → COMPLETED) and structured DynamoDB to support both fast admin queries and lightweight customer writes without overengineering the frontend state.',
      tags: ['Angular', 'TypeScript', 'Node.js', 'AWS Lambda', 'API Gateway', 'DynamoDB', 'S3', 'CloudFront', 'CloudWatch'],
      github: 'https://github.com/alfonsoleonm/brewflow-web-app',
      live: null,
      type: 'Solo project · Product design, frontend, backend, and AWS architecture'
    },
    {
      num: '04',
      name: 'AL Store',
      subtitle: 'Personal e-commerce side project',
      desc: 'A personal web app built to list and sell watches from my own collection. Buyers browse listings and reach out via Facebook Messenger to close the sale. Built with Angular and Firebase for a fully managed, real-time backend with no server maintenance.',
      problem: 'Selling items from a personal collection through social media is messy — posts get buried, inventory is hard to track, and there\'s no clean browsing experience for buyers.',
      solution: 'Built a lightweight SPA with Firebase Authentication and Firestore for real-time inventory management. Firebase Hosting keeps it always live with zero ops overhead. Simple, intentional, and exactly as complex as it needed to be.',
      tags: ['Angular', 'TypeScript', 'Firebase', 'Firestore', 'Firebase Hosting', 'SCSS'],
      github: null,
      live: 'https://al-store-web-page.web.app/',
      type: 'Solo project · Personal side hustle'
    },
    {
      num: '05',
      name: 'El Liberal de Jiquilpan',
      subtitle: 'Custom news platform · Full Stack & Project Lead',
      desc: 'End-to-end development of a custom news platform for a regional newspaper in Jiquilpan, Michoacán. Led the project from requirements and architecture through delivery, completed as a university social service engineering program.',
      problem: 'The newspaper had no digital presence and was losing reach to younger audiences. They needed a content platform their non-technical staff could manage independently after handoff.',
      solution: 'Built a custom platform from scratch using PHP, JavaScript, Bootstrap, and MySQL — no off-the-shelf CMS. Designed and implemented the relational database to manage content, users, and site operations. Deployed on AWS and handed off with full technical documentation so the team could operate it independently.',
      tags: ['PHP', 'JavaScript', 'HTML/CSS', 'Bootstrap', 'MySQL', 'AWS'],
      github: null,
      live: 'https://elliberaldejiquilpan.com/web-semanario/',
      type: 'Project lead · Aug 2020 – Jan 2021'
    },
  ];
}
