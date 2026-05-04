import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent {
  skills = ['Angular', 'TypeScript', 'Node.js', 'AWS', 'Java', 'Spring Boot', 'DynamoDB', 'Docker'];

  projects = [
    {
      name: 'BrewFlow',
      desc: 'Serverless coffee ordering platform with a full order lifecycle, real-time admin dashboard, and cloud-native AWS architecture.',
      tags: ['Angular', 'Node.js', 'AWS Lambda', 'DynamoDB', 'API Gateway'],
      github: 'https://github.com/alfonsoleonm/brewflow-web-app',
      live: null
    },
    {
      name: 'Resume Analyzer',
      desc: 'AI-powered tool that analyzes your resume against a job description and returns match score, skill gaps, and improvement suggestions.',
      tags: ['Angular', 'Node.js', 'Gemini AI', 'Netlify', 'Render'],
      github: null,
      live: 'https://resume-analyzer-webapp.netlify.app'
    },
    {
      name: 'Habit Tracker',
      desc: 'Full-stack productivity app with calendar grid, custom habits, and streak tracking. Angular frontend with AWS Lambda and DynamoDB backend.',
      tags: ['Angular', 'AWS Lambda', 'DynamoDB', 'Cognito'],
      github: 'https://github.com/alfonsoleonm/habit-tracker',
      live: 'https://habit-tracker-tan-eight.vercel.app/'
    },
  ];
}
