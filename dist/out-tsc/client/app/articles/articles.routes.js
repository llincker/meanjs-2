import { RouterModule } from '@angular/router';
// ARTICLES COMPONENTS
import { ArticlesComponent, ArticleDetailsComponent } from './components/index';
import { Auth } from '../users/services/auth.service';
var ARTICLESROUTES = [{
        path: '',
        component: ArticlesComponent,
        canActivate: [Auth],
        data: {
            roles: ['user', 'admin']
        },
        children: [{
                path: 'article/:id',
                component: ArticleDetailsComponent,
                canActivateChild: [Auth],
                data: {
                    roles: ['user', 'admin']
                }
            }]
    }
];
export var ARTICLES_ROUTES = RouterModule.forChild(ARTICLESROUTES);
//# sourceMappingURL=/home/cherifaghersi/Bureau/meanjs-2/client/client/app/articles/articles.routes.js.map