import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/api/service.service';
import { AlertifyService } from 'src/app/api/alertify.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Feedback } from 'src/app/_models/feedback';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {
feedbackForm: FormGroup;
feedback: Feedback;
  constructor(private service: ServiceService, private alertify: AlertifyService
            , private router: Router) { }

  ngOnInit() {
    this.feedbackForm = new FormGroup({
      feedbackRating: new FormControl(),
      feedback: new FormControl(),
      email: new FormControl()
    });

  }

  sendFeedback() {
    this.feedback = Object.assign({}, this.feedbackForm.value);
    this.service.sendFeedback(this.feedback).subscribe(() => {
       console.log('Message Saved Successfully');
       this.alertify.success('Feedback Sent Successfully');
      }, error => {
        this.alertify.error(error);
        console.log('Message Not Saved Successfully');
      }, () => {
          this.router.navigate(['/dashboard']);
      });
 }

 setReactValue1() {
  this.feedbackForm.patchValue({
    feedbackRating: '1',
  });
 }
 setReactValue2() {
  this.feedbackForm.patchValue({
    feedbackRating: '2'
  });
 }
 setReactValue3() {
  this.feedbackForm.patchValue({
    feedbackRating: '3'
  });
 }

}