import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User, ZeiterfassungUserListService } from '@zeiterfassung/user-list-data-access';
import { Hour } from '@zeiterfassung/time-data-access';

import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { TimeDataAccessService } from '@zeiterfassung/time-data-access';

@Component({
  selector: 'lib-user-detail-feature',
  standalone: true,
  templateUrl: './user-detail-feature.component.html',
  styleUrl: './user-detail-feature.component.css',
  imports: [CommonModule, ReactiveFormsModule],
})
export class UserDetailFeatureComponent {
  private userListService = inject(ZeiterfassungUserListService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private timeDataService = inject(TimeDataAccessService);

  formHour = new FormGroup({
    from: new FormControl(''),
    to: new FormControl(''),
    description: new FormControl(''),
  });

  public user!: User;

  constructor() {
    const idParam: string | null = this.route.snapshot.paramMap.get('id');

    if (typeof idParam === 'string') {
      const userId: number = +idParam;
      const user = this.userListService.getUser(userId);
      if (!user) {
        this.router.navigate(['/userlist']);
      } else {
        this.user = user;
      }
    } else {
      this.router.navigate(['/userlist']);
    }
  }

  ////----> älterer CODE aber schon Reflektiert!

  // ich möchte um typbasiert zu arbeiten das id vom type number ist und auf das interface User

  // class member user !
  // parent scope vom Constructor scope!
  //   public user!: User;

  //   formHour = new FormGroup({
  //     from: new FormControl(''),
  //     to: new FormControl(''),
  //     description: new FormControl(''),
  //   });

  //   constructor() {
  //     const idParam: string | null = this.route.snapshot.paramMap.get('id');
  //     if (typeof idParam === 'string') {
  //       const userId: number = +idParam;
  //       const user = this.userListService.getUser(userId);
  //       if (!user) {
  //         // navigate import mit router!
  //         this.router.navigate(['/userlist'])
  //         console.log('ne is nciht da!!!!!!!!!!!!!!!');
  //       } else {
  //         // ich kann von außen die Konstante user zuweisen und aus den constructor rausgeben (Das child kan infos an den Paretn rausgeben!)!
  //         this.user = user;
  //         console.log('ist da!');
  //       }
  //     } else {
  //       this.router.navigate(['/userlist'])
  //       console.log(idParam);
  //     }
  //   }

  //   // SCOPES !!
  //   // if typoef ist der parent SCOPE vom if USER!

  //   UserDetailFeatureComponent {
  //     constructor() {
  //         if(typeof idParam === 'string') {
  //             if(!user) {

  //             }
  //         }
  //     }
  // }
}
