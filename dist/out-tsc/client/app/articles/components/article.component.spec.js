import { async, TestBed } from '@angular/core/testing';
import { ArticleComponent } from './article.component';
describe('ArticleComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ArticleComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ArticleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/home/cherifaghersi/Bureau/meanjs-2/client/client/app/articles/components/article.component.spec.js.map