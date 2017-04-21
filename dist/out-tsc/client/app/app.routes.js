import { RouterModule } from '@angular/router';
import { HomeComponent } from "./home";
var ROUTES = [
    { path: '', component: HomeComponent },
    { path: 'user', loadChildren: 'app/users/users.module#UsersModule' },
    { path: 'list-articles', loadChildren: 'app/articles/articles.module#ArticlesModule' },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
export var APP_ROUTES = RouterModule.forRoot(ROUTES);
//# sourceMappingURL=/home/cherifaghersi/Bureau/meanjs-2/client/client/app/app.routes.js.map