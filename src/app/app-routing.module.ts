import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules  } from '@angular/router'; 
import { AppComponent } from './app.component';
import { AuthGuardService } from './auth-guard.service';

// import { PagesComponent } from './pages/pages.component';
// import { BlankComponent } from './pages/blank/blank.component';
// import { SearchComponent } from './pages/search/search.component';
// import { NotFoundComponent } from './pages/errors/not-found/not-found.component';
// import { ErrorComponent } from './pages/errors/error/error.component';

export const routes: Routes = [
    { 
        path: '', 
        component: AppComponent, children: [
            //{ path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
          
        ]
    },
    //{ path: 'landing', loadChildren: () => import('./pages/landing/landing.module').then(m => m.LandingModule) },
    { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
    { 
        path: 'homepage', 
        loadChildren: () => import('./homepage/homepage.module')
        .then(m => m.HomepageModule),
        canActivate : [AuthGuardService]
    },
    { path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule) },
    // { path: 'error', component: ErrorComponent, data: { breadcrumb: 'Error' } },
    // { path: '**', component: NotFoundComponent }
];
 

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            preloadingStrategy: PreloadAllModules,  // <- comment this line for activate lazy load
            useHash: true,
             // Restore the last scroll position
            scrollPositionRestoration: "enabled",
            scrollOffset: [0, 0],
            // Enable scrolling to anchors
            anchorScrolling: "enabled",
        })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }