import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZeiterfassungUserListService } from '@zeiterfassung/user-list-data-access';

@Component({
  selector: 'lib-user-list-feature',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list-feature.component.html',
  styleUrl: './user-list-feature.component.css',
})
export class UserListFeatureComponent {

  userListService = inject(ZeiterfassungUserListService);

  public createUser():void{
    this.userListService.create({name:'Max', lastname:'Mustermann', group:'employee' });
    console.log('jo geht')
  };

}
