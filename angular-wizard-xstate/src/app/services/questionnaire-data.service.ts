import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QuestionnaireVM } from '../models/questionnaire-vm';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class QuestionnaireDataService {

  constructor(private http: HttpClient) { }

  getQuestionnaireData(): Observable<QuestionnaireVM> {   

    return this.http.get<QuestionnaireVM>("http://localhost:4200/assets/questionnaire-data.json")
      .pipe(
        tap((resp: QuestionnaireVM) => {
          return resp
        }),
        catchError((e: any) => {          
          return throwError(e);
        }));
  }

}
