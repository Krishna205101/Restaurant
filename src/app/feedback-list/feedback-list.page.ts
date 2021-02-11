import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback-list',
  templateUrl: './feedback-list.page.html',
  styleUrls: ['./feedback-list.page.scss'],
})
export class FeedbackListPage implements OnInit {

  constructor(private route : Router) { }

  ReviewedList(){
    this.route.navigate(['layout/FeedbackList/ReviewedList']);
  }

  UnreviewedList(){
    this.route.navigate(['layout/FeedbackList/UnreviewedList'])
  }

  ngOnInit() {
  }

}
