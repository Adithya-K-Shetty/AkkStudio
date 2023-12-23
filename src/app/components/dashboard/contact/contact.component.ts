import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ContactserviceService } from '../service/contactservice.service';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  FormData!: FormGroup;
  constructor(
    private builder: FormBuilder,
    private contact: ContactserviceService
  ) {}
  ngOnInit(): void {
    this.FormData = this.builder.group({
      Fullname: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.required, Validators.email]),
      Comment: new FormControl('', [Validators.required]),
    });
  }

  onSubmit(FormData: any) {
    console.log(FormData);

    emailjs
      .send(
        '',
        '',
        {
          from_name: FormData.Fullname,
          to_name: 'Akk Studio',
          from_email: FormData.Email,
          message: FormData.Comment,
        },
        ''
      )
      .then((response) => {
        console.log('Email Sent Successfully');
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
