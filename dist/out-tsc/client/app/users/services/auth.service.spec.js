import { TestBed, inject } from '@angular/core/testing';
import { AuthService } from './auth.service';
describe('AuthService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [AuthService]
        });
    });
    it('should ...', inject([AuthService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=/home/cherifaghersi/Bureau/meanjs-2/client/client/app/users/services/auth.service.spec.js.map