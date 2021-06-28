import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import Developer from 'src/app/model/developer.model';
import { AdminService } from 'src/app/services/admin.service';
import { DeveloperComponent } from '../developer/developer.component';
import Asset from 'src/app/model/asset.model';
import License from 'src/app/model/license.model';
import { DisableDeveloperComponent } from '../developer/disable-developer/disable-developer.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public username = "Admin";
  public displayedColumns: string[] = ['fullName', 'asset', 'license', 'edit', 'disable'];
  public dataSource!: MatTableDataSource<Developer>;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  public assets!: Asset[];
  public licenses!: License[];
  constructor(private _service: AdminService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.refresh()
    this.getLicenses();
    this.getAssets();
  }

  getLicenses(): void {
    this._service.getLicenses()
      .subscribe((licenses: License[]) => {
        this.licenses = licenses;
      });
  }
  
  getAssets(): void {
      this._service.getAssets()
      .subscribe((assets: Asset[]) => {
        this.assets = assets;
      });
  }

  refresh(): void {
    this._service.getAllDevelopers()
      .subscribe((developers: Developer[]) => {
        this.dataSource = new MatTableDataSource(developers);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }

  edit(developer: Developer): void {
    this.dialog.open(DeveloperComponent, {
      width: '800px',
      data: {
        developer: developer,
        licenses: this.licenses,
        assets: this.assets
      }
    }).afterClosed()
      .subscribe((res) => {
        this.refresh();
      });
  }

  createDeveloper(): void {
    console.log('pep')
    this.dialog.open(DeveloperComponent, {
      width: '800px',
      data: {
        licenses: this.licenses,
        assets: this.assets
      }
    }).afterClosed()
      .subscribe((res) => {
        this.refresh();
      });
  }

  disable(developer: Developer): void {
    const dialogRef = this.dialog.open(DisableDeveloperComponent, {
      width: '800px',
      data: developer._id
    }).afterClosed()
      .subscribe((res) => {
        this.refresh();
      });
  }
}
