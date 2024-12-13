import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZeiterfassungUserListService } from '@zeiterfassung/user-list-data-access';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'lib-user-detail-feature',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-detail-feature.component.html',
  styleUrl: './user-detail-feature.component.css',
})
export class UserDetailFeatureComponent {

  userListService = inject(ZeiterfassungUserListService);
  private route = inject(ActivatedRoute);
  user: any; // Variable für den Benutzer, der geladen werden soll




  ngOnInit(): void {
    const userId = Number(this.route.snapshot.paramMap.get('id')); 
    this.user = this.userListService.getUser(userId); 
  }


  public addHours(){
    console.log('füge Stunden hinzu!')
  }

  public getAll(){
    console.log('gib alle Daten aus!')
  }

}
