import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';

export const routes: Routes = [
        {
        path:'',
        redirectTo:"homePage",
        pathMatch:'full',
        title:'Home Page'
    },
    {
        path:'homePage',
        component: HomePageComponent,
        title:'Home Page'
    },
];
