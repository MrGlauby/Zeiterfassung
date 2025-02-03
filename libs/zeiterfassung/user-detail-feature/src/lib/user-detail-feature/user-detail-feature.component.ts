import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  User,
  ZeiterfassungUserListService,
} from '@zeiterfassung/user-list-data-access';
import { Hour } from '@zeiterfassung/time-data-access';

import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { TimeDataAccessService } from '@zeiterfassung/time-data-access';
import { Observable, tap, pipe, of } from 'rxjs';

@Component({
  selector: 'lib-user-detail-feature',
  standalone: true,
  templateUrl: './user-detail-feature.component.html',
  styleUrl: './user-detail-feature.component.css',
  imports: [CommonModule, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDetailFeatureComponent {
  private userListService = inject(ZeiterfassungUserListService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private timeDataService = inject(TimeDataAccessService);

  formHour = new FormGroup({
    from: new FormControl<string>(''),
    to: new FormControl<string>(''),
    description: new FormControl<string>(''),
  });

  public user!: User;
  public userHours: Hour[] = [];

  constructor() {
    const idParam: string | null = this.route.snapshot.paramMap.get('id');

    if (typeof idParam === 'string') {
      const userId: number = +idParam;
      this.userListService.getUser(userId).subscribe((user) => {
        if (!user) {
          this.router.navigate(['/userlist']);
        } else {
          this.user = user;
          this.timeDataService.getHours(userId).subscribe((hours) => {
            this.userHours = hours;
          });
        }
      });
    } else {
      this.router.navigate(['/userlist']);
    }
  }

  // public addHours(): void {
  //   this.timeDataService
  //     .addHours(this.user.id, this.formHour.value as any)
  //     .pipe(
  //       tap(() => {
  //         this.formHour.reset();
  //         this.timeDataService.getHours(this.user.id).subscribe((hours) => {
  //           this.userHours = hours;
  //         });
  //       })
  //     )
  //     .subscribe(() => {
  //       console.log('Stunden und Beschreibung wurde hinzugefügt!');
  //     });
  // }
}
