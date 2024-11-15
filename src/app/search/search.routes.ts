import { Routes } from '@angular/router';
import { SearchComponent } from './components/search/search.component';

export const searchRoutes: Routes = [{ path: 'search/:query', component: SearchComponent }];
