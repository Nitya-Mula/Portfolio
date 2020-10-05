import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contactme',
  templateUrl: './contactme.component.html',
  styleUrls: ['./contactme.component.css']
})

export class ContactmeComponent implements OnInit {

  backendURL = 'https://morning-lowlands-37229.herokuapp.com';
  // backendURL = 'http://localhost:5000';
  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {

  }

onSubmit(form: NgForm): void {

  const formData = {
    name: form.value.name,
    email: form.value.email,
    message: form.value.message
  };

  console.log(formData);
  this.http.post(this.backendURL + '/email', formData).subscribe(
    (response) => console.log(response),
    (error) => console.log(error)
  );

  form.reset();
}
}
