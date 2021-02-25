import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

const routes = {
  info: () => `https://picsum.photos/id/1051/info`,
  dummy: () => `https://picsum.photos/v2/list?page=2&limit=5`,
  people: () => `https://dummyapi.io/data/api/user?limit=5`,
  doc: () => `https://picsum.photos/v2/list?page=2&limit=2`,

};
const httpHeaders: HttpHeaders = new HttpHeaders({
  'app-id': '603679fda221844a3c71d01a'
});

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private httpClient: HttpClient) { }

  getId(): Observable<string> {
    return this.httpClient.get(routes.info()).pipe(
      map((body: any) => body),
      catchError(() => of('eror'))
    );
  }

  getAll(): Observable<string> {
    return this.httpClient.get(routes.doc()).pipe(
      map((body: any) => body),
      catchError(() => of('Error'))
    );
  }

  getPeople(): Observable<string> {
    return this.httpClient.get(routes.people(),{ headers: httpHeaders }).pipe(
      map((body: any) => body),
      catchError(() => of('Error'))
    );
  }
}
