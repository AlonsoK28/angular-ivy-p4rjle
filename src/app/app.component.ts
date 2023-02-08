import { Component, OnInit, VERSION } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

// fontawesome
import {
  faMagnifyingGlass,
  faShop,
  faFileExcel,
  faDesktopAlt,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  icons = {
    faDesktopAlt,
    faFileExcel,
    faShop,
    faMagnifyingGlass,
  };

  materoForm: FormGroup;
  htmlForm: FormGroup;
  randomAccountNumbers: Array<Number> = [];

  constructor() {
    this.materoForm = new FormGroup({
      example1: new FormControl('', [Validators.required]),
    });

    this.htmlForm = new FormGroup({
      example2: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.generateRandomNumbers();
    console.log(this.randomAccountNumbers);
    // this.exampleControl2.addValidators([this.validateAccountExist]);
  }

  generateRandomNumbers() {
    for (let i = 0; i < 500; i++) {
      let randomNum = '';
      for (let j = 0; j < 20; j++) {
        randomNum += Math.floor(Math.random() * 10);
      }
      this.randomAccountNumbers.push(+randomNum);
    }
  }

  // validateAccountExist(control: FormControl) {
  //   console.log(this.randomAccountNumbers);
  //   return this.randomAccountNumbers.includes(control.value)
  //     ? null
  //     : { selectedAccountNoExist: true };
  // }

  get exampleControl1() {
    return this.materoForm.get('example1') as FormControl;
  }

  get exampleControl2() {
    return this.htmlForm.get('example2') as FormControl;
  }
}
