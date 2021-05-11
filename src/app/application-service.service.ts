import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApplicationServiceService {

  constructor(private http: HttpClient) { }

/**
   * function to get task info
   * @param params: query params
   */
  getTaskInfo = (params?: any, headers?: any): Observable<any> => {
    return this.http.get('http://localhost:9000/aliens/', { params, headers })
      .pipe(
        map((response: any) => {
          if (response) {
            return response;
          }
          return null;
        })
      );
  }


  /**
   * function to save task info
   * @param payload: data to send in payload
   * @param params: query params
   * @param headers: headers if any
   */

  saveTaskInfo = (payload: any, params?: any, headers?: any): Observable<any> => {
    return this.http
            .post('http://localhost:9000/aliens', payload, { params, headers })
            .pipe(
              map((response: any) => {
                return response;
              })
            );
  }

  patchTaskInfo=( param: any,payload:any): Observable<any> =>{

    return this.http
        .patch('http://localhost:9000/aliens/'+param,payload)
        .pipe(
          map((response: any) => {
            return response;
          })
        );
    }



}
