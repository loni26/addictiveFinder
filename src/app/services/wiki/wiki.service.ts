import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class WikiService {

  constructor(private _http: HttpClient) { }

  getByAddictive(id:string):Promise<any> {
    return this._http.get<{extract_html?: string}>('https://fr.wikipedia.org/api/rest_v1/page/summary/e' + id).pipe(
      map(reponse => reponse?.extract_html)
    ).toPromise()
    .catch(err => {
      return err;
    })
  }
}
