import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DialogRef } from '@angular/cdk/dialog';
import { UserGroup } from '@zeiterfassung/user-list-data-access';

@Component({
  selector: 'ze-user-create-modal',
  standalone: true,
  templateUrl: './user-create-modal.component.html',
  styleUrl: './user-create-modal.component.css',
  imports: [CommonModule, ReactiveFormsModule],
})
export class ZeiterfassungUserCreateModalComponent {
  dialogRef = inject(DialogRef);

  form = new FormGroup({
    name: new FormControl(''),
    lastname: new FormControl(''),
    group: new FormControl<UserGroup>('employee'),
  });

  public submit() {
    this.dialogRef.close(this.form.value);
    console.log('jo gejht', this.form.value);
  }
}
