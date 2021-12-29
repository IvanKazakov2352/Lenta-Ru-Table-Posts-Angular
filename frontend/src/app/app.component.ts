import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'frontend';
  accordionData = [
    {
      title: 'Personal Data',
      firstName: 'John',
      lastName: 'Smith',
      birthYear: 1986,
    },
    {
      title: 'Contacts',
      phone: '(555)555-5555',
      email: 'John.Smith@example.com',
    },
    {
      title: 'Address',
      state: 'CA',
      city: 'San Francisco',
      street: 'Stanford Ave',
    },
  ];
  getItemKeys(item: any) {
    return Object.keys(item);
  }
}
