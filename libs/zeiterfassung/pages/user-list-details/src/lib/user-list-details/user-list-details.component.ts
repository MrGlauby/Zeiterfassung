import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'lib-user-list-details',
  standalone: true,
  templateUrl: './user-list-details.component.html',
  styleUrl: './user-list-details.component.css',
  imports: [CommonModule, ReactiveFormsModule],
})
export class UserListDetailsComponent {
  form = new FormGroup({
    hour: new FormControl(''),
  });

  users = [{ name: '', lastname: '', group: '', hour: 0 }];

  addHours() {
    const hourValue = this.form.get('hour')?.value;
    if (hourValue && !isNaN(Number(hourValue))) {
      // Update Stunden für den ersten Benutzer
      this.users[0].hour = Number(hourValue);
      console.log('Stunden hinzugefügt:', hourValue);
      this.form.reset(); // Inputfeld leeren
    } else {
      console.log('Bitte eine gültige Zahl eingeben!');
    }
  }
}
