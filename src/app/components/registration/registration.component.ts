import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  @ViewChild('registrationForm')
  registrationForm!: NgForm;
  registerData : any = {};
  submitted: boolean = false;

  constructor (
    private router: Router
) { }

  ngOnInit(): void { }

  submit() {
    this.submitted = true;
    // On Submit click sending data to Guard Service to make API call and determine the routing
    this.router.navigate(['profile', this.registrationForm.value], {skipLocationChange: true});
  }
}
