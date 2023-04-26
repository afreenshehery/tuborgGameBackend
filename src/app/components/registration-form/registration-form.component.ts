import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})

export class RegistrationFormComponent implements OnInit {
subject_obj:any={}
  constructor() { }

  ngOnInit(): void {
  }

  submit(){
    console.log(this.subject_obj)
    localStorage.setItem('name',this.subject_obj.name)
    localStorage.setItem('age',this.subject_obj.age)
    localStorage.setItem('email',this.subject_obj.email)
    localStorage.setItem('city',this.subject_obj.City)
    localStorage.setItem('phone',this.subject_obj.phone)
  }
}
