/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { AppToolbarComponent } from './app-toolbar.component';
describe('AppToolbarComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [AppToolbarComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(AppToolbarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/home/cherifaghersi/Bureau/meanjs-2/client/client/app/core/components/app-toolbar/app-toolbar.component.spec.js.map