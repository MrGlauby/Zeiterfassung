import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZeiterfassungUserListService } from '@zeiterfassung/user-list-data-access';
import { Dialog } from '@angular/cdk/dialog';
import { withDebugTracing } from '@angular/router';

@Component({
  selector: 'lib-user-list-feature',
  standalone: true,
  templateUrl: './user-list-feature.component.html',
  styleUrl: './user-list-feature.component.css',
  imports: [CommonModule],
})
export class UserListFeatureComponent {

  userListService = inject(ZeiterfassungUserListService);
  changeDetectorRef = inject(ChangeDetectorRef);
  dialog = inject(Dialog);

  public displayedColumns: string[] = ['name', 'group', 'lastname'];

  // hier kommt der cdkDilaog rein!
  public createUser(): void {
    this.userListService.create({
      name: 'Max',
      lastname: 'Mustermann',
      group: 'employee',
    });
    this.changeDetectorRef.detectChanges();
    console.log('User hinzugefügt:');
  }






}
