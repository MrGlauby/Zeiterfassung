import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule, FormControl } from '@angular/forms';
import {
  Hour,
  ZeiterfassungHourService,
  ZeiterfassungUserListService,
} from '@zeiterfassung/user-list-data-access';

@Component({
  selector: 'lib-user-list-details',
  standalone: true,
  templateUrl: './user-list-details.component.html',
  styleUrl: './user-list-details.component.css',
  imports: [CommonModule, ReactiveFormsModule],
})
export class UserListDetailsComponent {
  // hier sollen dann der service Hour importiert werden und die Methoden etc mit rein!

  hourService = inject(ZeiterfassungHourService);
  userListService = inject(ZeiterfassungUserListService);

  userId: number = 1;
  form = new FormGroup({
    from: new FormControl(''),
    to: new FormControl(''),
    description: new FormControl(''),
  });

  users = [{ name: '', lastname: '', group: '', hour: 0 }];

  public addHours() {
    const from = this.form.get('from')?.value || '';
    const to = this.form.get('to')?.value || '';
    const description = this.form.get('description')?.value || '';

    const hour: Hour = { from, to, description };
    this.hourService.addHours(this.userId, hour);
    this.form.reset();
  }

  public getUserHours() {
    const hours = this.hourService.getHours(this.userId);
    console.log(hours);
  }
}
