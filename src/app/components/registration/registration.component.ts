import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiCallerService } from 'src/app/services/api-caller.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  title = 'task';
  @ViewChild('registrationForm')
  registrationForm!: NgForm;
  registerData : any = {};
  submitted: boolean = false;

  constructor (
    private router: Router,
    private apiCallerService: ApiCallerService
  ) {
      if (sessionStorage.getItem('user')) {
        this.router.navigate(['/profile']);
      }
  }

  ngOnInit(): void {
  }

  submit() {
    this.submitted = true;
    console.log(this.registrationForm.value);
  }
}
