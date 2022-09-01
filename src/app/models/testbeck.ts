import { FormGroup, FormControl, Validators } from '@angular/forms';

export class TestBeck {
    /*INIT PERSON*/
    p1!: number;
    p2!: number;
    p3!: number;
    p4!: number;
    p5!: number;
    p6!: number;
    p7!: number;
    p8!: number;
    p9!: number;
    p10!: number;
    p11!: number;
    p12!: number;
    p13!: number;
    p14!: number;
    p15!: number;
    p16!: number;
    p17!: number;
    p18!: number;
    p19!: number;
    p20!: number;
    p21!: number;

    static getForm(testbeck?: TestBeck): FormGroup {
        return new FormGroup({
            p1: new FormControl(testbeck?.p1, { validators: Validators.required }),
            p2: new FormControl(testbeck?.p2, { validators: Validators.required }),
            p3: new FormControl(testbeck?.p3, { validators: Validators.required }),
            p4: new FormControl(testbeck?.p4, { validators: Validators.required }),
            p5: new FormControl(testbeck?.p5, { validators: Validators.required }),
            p6: new FormControl(testbeck?.p6, { validators: Validators.required }),
            p7: new FormControl(testbeck?.p7, { validators: Validators.required }),
            p8: new FormControl(testbeck?.p8, { validators: Validators.required }),
            p9: new FormControl(testbeck?.p9, { validators: Validators.required }),
            p10: new FormControl(testbeck?.p10, { validators: Validators.required }),
            p11: new FormControl(testbeck?.p11, { validators: Validators.required }),
            p12: new FormControl(testbeck?.p12, { validators: Validators.required }),
            p13: new FormControl(testbeck?.p13, { validators: Validators.required }),
            p14: new FormControl(testbeck?.p14, { validators: Validators.required }),
            p15: new FormControl(testbeck?.p15, { validators: Validators.required }),
            p16: new FormControl(testbeck?.p16, { validators: Validators.required }),
            p17: new FormControl(testbeck?.p17, { validators: Validators.required }),
            p18: new FormControl(testbeck?.p18, { validators: Validators.required }),
            p19: new FormControl(testbeck?.p19, { validators: Validators.required }),
            p20: new FormControl(testbeck?.p20, { validators: Validators.required }),
            p21: new FormControl(testbeck?.p21, { validators: Validators.required }),
        });
    }
}
