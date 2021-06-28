import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-disable-developer',
  templateUrl: './disable-developer.component.html',
  styleUrls: ['./disable-developer.component.css']
})
export class DisableDeveloperComponent {

  constructor(
    private _service: AdminService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DisableDeveloperComponent>) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  close(): void {
    this.dialogRef.close();
  }

  disable(id: any) {
    console.log(id);
    this._service.disableDeveloper(id).subscribe(res => {
      if (res) {
        this.close();
      }
    });
  }
}
