import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from  './components/home/home.component';
import { HeroesComponent } from  './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { HeroeComponent } from './components/heroe/heroe.component';

const APP_ROUTES = [
    {path : 'home', component : HomeComponent},
    {path : 'heroes', component : HeroesComponent},
    {path : 'about', component : AboutComponent},
    {path : 'heroes', component : HeroesComponent}, 
    {path : 'heroe/:id', component : HeroeComponent}, 
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
