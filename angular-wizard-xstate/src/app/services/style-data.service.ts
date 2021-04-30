import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QuestionnaireVM } from '../models/questionnaire-vm';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class StyleDataService {

  constructor(private http: HttpClient) { }

  getStyleData(): Observable<JSON> {   

    return this.http.get<JSON>("http://localhost:4200/assets/style-data.json")
      .pipe(
        tap((resp: JSON) => {
          return resp
        }),
        catchError((e: any) => {          
          return throwError(e);
        }));
  }

}
