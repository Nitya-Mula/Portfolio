import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroComponent } from './intro/intro.component';
import { MyservicesComponent } from './myservices/myservices.component';
import { MyworkComponent } from './mywork/mywork.component';
import { ContactmeComponent } from './contactme/contactme.component';
import { ExperienceComponent } from './experience/experience.component';


import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo:'/AboutMe', pathMatch:'full'},
  {path: 'AboutMe', component: IntroComponent },
  {path: 'MyServices', component: MyservicesComponent},
  {path: 'Experience', component: ExperienceComponent},
  {path: 'MyWork', component: MyworkComponent},
  {path: 'ContactMe', component: ContactmeComponent}

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
