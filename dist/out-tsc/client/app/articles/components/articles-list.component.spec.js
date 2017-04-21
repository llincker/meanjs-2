import { async, TestBed } from '@angular/core/testing';
import { ArticlesComponent } from './articles.component';
describe('ArticlesComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ArticlesComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ArticlesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/home/cherifaghersi/Bureau/meanjs-2/client/client/app/articles/components/articles-list.component.spec.js.map