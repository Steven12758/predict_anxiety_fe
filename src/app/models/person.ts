import { FormGroup, FormControl, Validators } from '@angular/forms';

export class Person {
    /*INIT PERSON*/
    age!: number;
    bmi!: number;
    total_test_beck!: number;
   
    static getForm(person?: Person): FormGroup {
        return new FormGroup({
            age: new FormControl(person?.age, { validators: Validators.required }),
            bmi: new FormControl(person?.bmi, { validators: Validators.required }),
            total_test_beck: new FormControl(person?.total_test_beck, { validators: Validators.required }),
        });
    }
}
