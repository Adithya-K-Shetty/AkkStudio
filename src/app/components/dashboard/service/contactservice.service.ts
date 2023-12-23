import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactserviceService {
  private api = 'https://mailthis.to/docket734@gmail.com';
  constructor(private http: HttpClient) {}

  PostMessage(input: any) {
    return this.http.post(this.api, input, { responseType: 'text' }).pipe(
      map(
        (response) => {
          if (response) {
            return response;
          }
          return 'error';
        },
        (error: any) => {
          return error;
        }
      )
    );
  }
}
