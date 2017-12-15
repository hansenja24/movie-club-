import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent }   from './about/about.component';
import { UserListComponent } from './user-list/user-list.component';
import { AdminComponent } from './admin/admin.component';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';





const appRoutes: Routes = [  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'userlist',
    component: UserListComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'userlist/:id',
    component: ProfileDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
