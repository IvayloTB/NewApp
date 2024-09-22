import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { RegisterComponent } from './user/register/register.component';
import { LogInComponent } from './user/log-in/log-in.component';

export const routes: Routes = [
    { path: "app-home-page",component:HomePageComponent,},
    {path: "app-register",component:RegisterComponent},
    {path:"app-log-in",component:LogInComponent}
];
