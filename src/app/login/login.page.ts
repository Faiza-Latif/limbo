import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    filled: boolean = false;
    loginForm = this.fb.group({
        email: [null, Validators.required],
        password: [null, Validators.required],
    });

    constructor(private fb: FormBuilder) {
    }

    ngOnInit() {
        this.onChanges();
    }

    login() {
        console.log(this.loginForm.valid);
    }

  onChanges(): void {
    this.loginForm.valueChanges.subscribe(data => {
      this.filled = this.loginForm.valid;
    });
  }
}
