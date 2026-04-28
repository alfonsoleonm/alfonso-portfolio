import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class ContactComponent {
  form = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  status = signal<'idle' | 'sending' | 'success' | 'error'>('idle');

  constructor(private http: HttpClient) {}

  async onSubmit() {
    if (!this.form.name || !this.form.email || !this.form.message) return;

    this.status.set('sending');

    this.http.post('/api/contact', this.form).subscribe({
      next: () => {
        this.status.set('success');
        this.form = { name: '', email: '', subject: '', message: '' };
      },
      error: () => {
        this.status.set('error');
      }
    });
  }
}
