import { TestBed, inject } from '@angular/core/testing';
import { ArticlesService } from './articles.service';
describe('ArticlesService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [ArticlesService]
        });
    });
    it('should ...', inject([ArticlesService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=/home/cherifaghersi/Bureau/meanjs-2/client/client/app/articles/services/articles.service.spec.js.map