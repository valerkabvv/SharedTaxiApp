import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
// @ts-ignore
import {IRegForm} from '../interfaces/iregform';
import {ValidationServiceService} from '../validation-service.service';




@Component({
  selector: 'app-sing-in',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {
  @Output() addForm = new EventEmitter<IRegForm>();
  @Output() Change = new EventEmitter();
  isSubmitted = false;
  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private CustomValidator: ValidationServiceService
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      login: ['',
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(20)
      ],
      email: ['', [
        this.CustomValidator.emailValidation
      ]],
      passwords: this.formBuilder.group({
          password: ['',
            this.CustomValidator.passwordValidator
          ],
          password2: [''
          ]},
        { validators: this.CustomValidator.password2Validation}),
      agree: ['', [
        Validators.required,
      ]]
    });
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.form.invalid || !this.form.value.agree) {
      return;
    }
    const filledForm: IRegForm = {
      login: this.form.value.login,
      email: this.form.value.email,
      password: this.form.get('passwords').value.password,
    };
    this.addForm.emit(filledForm);
    this.isSubmitted = false;
    this.form.reset();
  }

  onClick() {
    this.Change.emit();
  }
}
