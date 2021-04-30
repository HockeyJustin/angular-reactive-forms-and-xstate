import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnotherPageComponent } from './another-page/another-page.component';
import { QuestionnairePageComponent } from './questionnaire-page/questionnaire-page.component';
import { StateMachinePageComponent } from './state-machine-page/state-machine-page.component';


const routes: Routes = [

  {
    path: 'questionnaire', component: QuestionnairePageComponent,
  },
  {
    path: 'statemachine', component: StateMachinePageComponent,
  },
  {
    path: 'colours', component: AnotherPageComponent,
  },
  { path: '**', redirectTo: '/questionnaire', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
