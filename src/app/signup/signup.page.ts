import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
    selector: 'app-signup',
    templateUrl: './signup.page.html',
    styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
    filled: boolean;
    signupForm = this.fb.group({
        email: ['', Validators.required],
        password: ['', Validators.required],
    });

    constructor(private fb: FormBuilder) {
    }


    onChanges(): void {
        this.signupForm.valueChanges.subscribe(data => {
            this.filled = this.signupForm.valid;
        });
    }

    ngOnInit() {
        this.onChanges();
    }

    register() {
        console.log(this.signupForm.valid);
    }
}
