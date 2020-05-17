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
      email: new FormControl(),
      name: new FormControl()
    });

  }
  sendFeedback() {
    this.feedback = Object.assign({}, this.feedbackForm.value);
    this.feedback.debug = false;
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
  this.alertify.success('Good to know!');
  this.feedbackForm.patchValue({
    feedbackRating: 'good',
  });
 }
 setReactValue2() {
  this.alertify.message('How can we improve?');
  this.feedbackForm.patchValue({
    feedbackRating: 'neutral'
  });
 }
 setReactValue3() {
  this.alertify.error('Sorry to hear this, help us improve!');
  this.feedbackForm.patchValue({
    feedbackRating: 'bad'
  });
 }

}
