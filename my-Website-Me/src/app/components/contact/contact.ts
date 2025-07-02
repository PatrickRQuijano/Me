import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  onSubmit(event: Event) {
    event.preventDefault();
    // Here you can handle form submission logic, e.g.:
    // - Validate inputs
    // - Send data to backend or email service
    // - Show success/failure messages
    alert('Thanks for reaching out! I will get back to you soon.');
    (event.target as HTMLFormElement).reset();
  }
}
