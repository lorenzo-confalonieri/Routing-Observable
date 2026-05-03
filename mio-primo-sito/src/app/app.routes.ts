import { Routes } from '@angular/router';
import { AnimalsComponent } from './animals-component/animals-component';
import { FruitsComponent } from './fruits-component/fruits-component';
import { GenericComponent } from './generic-component/generic-component';

export const routes: Routes = [
  { path: '', redirectTo: '/animals', pathMatch: 'full' },
  { path: 'animals', component: AnimalsComponent },
  { path: 'fruits', component: FruitsComponent },
  { path: 'generic/:id', component: GenericComponent },
];