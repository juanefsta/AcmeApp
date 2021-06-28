import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  devForm: FormGroup = new FormGroup({fullname: new FormControl('', [Validators.required])});
  public assets!: Asset[];
  public selectedAsset: Asset | null | undefined;
  public selectedLicense: License | null | undefined;
  public licenses!: License[];
  public dev!: Developer;
  public isEdit: boolean = false;
  constructor(
    private _service: AdminService,
    private _snackBar: MatSnackBar, @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DeveloperComponent>) { this.setDataValues(); }

  setDataValues() {
    if (this.data != null) {
      this.assets = this.data.assets;
      this.licenses = this.data.licenses;
      if(this.data.developer != null){
        this.dev = this.data.developer;
        this.devForm.patchValue({fullname: this.dev.fullname});
        this.selectedAsset = this.dev.asset;
        this.selectedLicense = this.dev.license;
        this.isEdit = true;
      }
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

  hasError(controlName: string, errorName: string) {
    return this.devForm.controls[controlName].hasError(errorName);
  }

  edit(): void {
    this._map();
    this._service.editDeveloper(this.dev).subscribe((res => {
      if (res) {
        this.close();
      }
    }));
    this.dialogRef.close();
  }

  private _map(): void {
    this.dev.license = this.selectedLicense ? this.selectedLicense : null;
    this.dev.asset = this.selectedAsset ? this.selectedAsset : null;
    this.dev.fullname = this.devForm.value.fullname;
  }

  create(): void {
    const developer = new Developer();
    developer.asset = this.selectedAsset;
    developer.license = this.selectedLicense;
    developer.fullname = this.devForm.value.fullname; 
    this._service.createDeveloper(developer).subscribe((res => {
      if (res) {
        this.close();
      }
    }));
    this.dialogRef.close();
  }
}
