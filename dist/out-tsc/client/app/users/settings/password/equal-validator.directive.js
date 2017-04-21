var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Directive, forwardRef, Attribute } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
var EqualValidator = EqualValidator_1 = (function () {
    function EqualValidator(validateEqual, reverse) {
        this.validateEqual = validateEqual;
        this.reverse = reverse;
    }
    Object.defineProperty(EqualValidator.prototype, "isReverse", {
        get: function () {
            if (!this.reverse)
                return false;
            return this.reverse === 'true' ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    EqualValidator.prototype.validate = function (c) {
        // self value
        var v = c.value;
        console.log('v', v);
        // control vlaue
        var e = c.root.get(this.validateEqual);
        console.log('e', e.value);
        // value not equal
        if (e && e.value && v !== e.value && !this.isReverse) {
            return {
                validateEqual: false
            };
        }
        // value equal and reverse
        if (e && v === e.value && this.isReverse) {
            delete e.errors['validateEqual'];
            return {
                validateEqual: true
            };
        }
        // value not equal and reverse
        if (e && v !== e.value && this.isReverse) {
            e.setErrors({
                validateEqual: false
            });
        }
        return null;
    };
    return EqualValidator;
}());
EqualValidator = EqualValidator_1 = __decorate([
    Directive({
        selector: '[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
        providers: [
            { provide: NG_VALIDATORS, useExisting: forwardRef(function () { return EqualValidator_1; }), multi: true }
        ]
    }),
    __param(0, Attribute('validateEqual')),
    __param(1, Attribute('reverse')),
    __metadata("design:paramtypes", [String, String])
], EqualValidator);
export { EqualValidator };
var EqualValidator_1;
//# sourceMappingURL=/home/cherifaghersi/Bureau/meanjs-2/client/client/app/users/settings/password/equal-validator.directive.js.map