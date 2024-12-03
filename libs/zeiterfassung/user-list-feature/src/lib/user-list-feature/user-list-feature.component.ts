import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZeiterfassungUserListService } from '@zeiterfassung/user-list-data-access';
import { User } from 'libs/zeiterfassung/user-list-data-access/src/lib/user.interface';
import { MatTableModule } from '@angular/material/table'; // Importiere das MatTableModule
import { CdkTableModule } from '@angular/cdk/table';

@Component({
  selector: 'lib-user-list-feature',
  standalone: true,
  templateUrl: './user-list-feature.component.html',
  styleUrl: './user-list-feature.component.css',
  imports: [CommonModule, MatTableModule, CdkTableModule],
})
export class UserListFeatureComponent {
  userListService = inject(ZeiterfassungUserListService);

  public users: User[] = [];
  public displayedColumns: string[] = ['name', 'group', 'lastname']; // Spaltennamen

  public createUser(): void {
    this.userListService.create({
      name: 'Max',
      lastname: 'Mustermann',
      group: 'employee',
    });
    this.users = this.userListService.getAll();
    console.log('User hinzugefügt:', this.users);
  }
}
