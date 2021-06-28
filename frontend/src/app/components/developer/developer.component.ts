import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import Asset from 'src/app/model/asset.model';
import Developer from 'src/app/model/developer.model';
import License from 'src/app/model/license.model';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {
  public assets!: Asset[];
  public licenses!: License[];
  public dev!: Developer;
  constructor(
    private _service: AdminService,
    private _snackBar: MatSnackBar, @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DeveloperComponent>) { this.setDataValues(); }

  setDataValues() {
    if (this.data != null) {
      this.assets = this.data.assets;
      this.licenses = this.data.licenses;
      this.dev = this.data.developer;
    }
  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  
  close(): void {
    this.dialogRef.close();
  }
  
  edit(): void {
    this._service.editDeveloper(this.dev)
      .subscribe((developers: Developer[]) => {
        this.dataSource = new MatTableDataSource(developers);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
    this.dialogRef.close();
  }
}
