import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AddictivesService {

  private _data$: BehaviorSubject<any> = new BehaviorSubject(null);
  data$: Observable<any> = this._data$.asObservable();

  constructor(private _http: HttpClient) { }

  async load () {
    const data = await this._http.get<{additives?: any}>(environment.url).pipe(
      map((reponse) => reponse?.additives),
    ).toPromise();

    this._data$.next(data)
  }

  async getItemById(id: string){
    const data = this._data$.value;
    if (!data) {
      await this.load();
    }

    const result = this._data$.value.find(element => element.id === id)

    if (!result) {
      return alert('no data')
    }

    return result;
  }
}
