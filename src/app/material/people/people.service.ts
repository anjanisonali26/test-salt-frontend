import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

const routes = {
people: () => `https://picsum.photos/v2/list?page=2&limit=4`,
}; 

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private httpClient: HttpClient) { }

  getpeople(): Observable<string> {
    return this.httpClient.get(routes.people()).pipe(
      map((body: any) => body),
      catchError(() => of('Error'))
    );
  }
}
