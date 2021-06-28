import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BACKEND_URL, CREATE_DEVELOPER, GET_ASSETS, GET_LICENSES, EDIT_DEVELOPERS, ADD_LICENSE, DELETE_LICENSE, DISABLE_DEVELOPER, DELETE_ASSET, ADD_ASSET, GET_ALL_DEVELOPERS } from 'src/app/commons/applicationConstants';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AdminService {

    respuesta = {};
    constructor(private http: HttpClient) { }

    getAllDevelopers(): Observable<any> {
        return this.http.get(BACKEND_URL + GET_ALL_DEVELOPERS);
    }

    getAssets(): Observable<any> {
        return this.http.get(BACKEND_URL + GET_ASSETS);
    }

    getLicenses(): Observable<any> {
        return this.http.get(BACKEND_URL + GET_LICENSES);
    }

    editDeveloper(Developer: any): Observable<any> {
        return this.http.put(BACKEND_URL + EDIT_DEVELOPERS, Developer);
    }

    createDeveloper(Developer: any): Observable<any> {
        return this.http.post(BACKEND_URL + CREATE_DEVELOPER, Developer);
    }

    disableDeveloper(DeveloperId: any): Observable<any> {
        return this.http.put(BACKEND_URL + DISABLE_DEVELOPER, {devId: DeveloperId});
    }

    addAsset(devId: any): Observable<any> {
        return this.http.post(BACKEND_URL + ADD_ASSET, devId);
    }

    deleteAsset(devId: any): Observable<any> {
        return this.http.delete(BACKEND_URL + DELETE_ASSET + devId);
    }

    addLicense(devId: any): Observable<any> {
        return this.http.post(BACKEND_URL + ADD_LICENSE, devId);
    }

    deleteLicense(devId: any): Observable<any> {
        return this.http.delete(BACKEND_URL + DELETE_LICENSE + devId);
    }
}