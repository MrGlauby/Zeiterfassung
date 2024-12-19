import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  UserCreate,
  ZeiterfassungUserListService,
} from '@zeiterfassung/user-list-data-access';
import { Dialog } from '@angular/cdk/dialog';
import { ZeiterfassungUserCreateModalComponent } from '@zeiterfassung/user-create-modal';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'lib-user-list-feature',
  standalone: true,
  templateUrl: './user-list-feature.component.html',
  styleUrl: './user-list-feature.component.css',
  imports: [CommonModule, RouterLink],
})
export class UserListFeatureComponent {
  userListService = inject(ZeiterfassungUserListService);
  changeDetectorRef = inject(ChangeDetectorRef);
  dialog = inject(Dialog);

  // hier kommt der cdkDilaog rein!
  public createUser(): void {
    const dialogRef = this.dialog.open<UserCreate>(
      ZeiterfassungUserCreateModalComponent,
      {
        data: { message: 'Neuer Benutzer erstellen?' },
      }
    );

    dialogRef.closed.subscribe((result) => {
      console.log(result);
      if (result) {
        this.userListService.create(result);
        this.changeDetectorRef.detectChanges();
        console.log('User hinzugefügt:', result);
      }
    });
  }

  public userDetails() {
    console.log('Navigation zu UserDetails');
  }
}
