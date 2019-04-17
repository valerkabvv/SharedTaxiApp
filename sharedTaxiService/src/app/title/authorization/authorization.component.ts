import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
// @ts-ignore
import {IAuthForm} from '../interfaces/iregform';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {

  @Output() Auth = new EventEmitter<IAuthForm>();
  @Output() Change = new EventEmitter();
  isSubmitted = false;
  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      login: ['',
        Validators.required,
      ],
      password: ['',
        Validators.required
      ],

    });
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.form.invalid || !this.form.value.agree) {
      return;
    }
    const filledForm: IAuthForm = {
      login: this.form.value.login,
      password: this.form.get('passwords').value.password,
    };
    this.Auth.emit(filledForm);
    this.form.reset();
  }

  onClick() {
    this.Change.emit();
  }


}
