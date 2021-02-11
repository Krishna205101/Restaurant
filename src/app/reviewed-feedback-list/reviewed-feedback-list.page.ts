import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../services/feedback.service';

@Component({
  selector: 'app-reviewed-feedback-list',
  templateUrl: './reviewed-feedback-list.page.html',
  styleUrls: ['./reviewed-feedback-list.page.scss'],
})
export class ReviewedFeedbackListPage implements OnInit {

  List = <any>[];
  page = 1;
  totalRecords: number;
  color = ''
  foodColor: string;
  serviceColor: string;
  ambienceColor: string;
  progressed: any;
  progressColor : string
  data = <any>[]

  constructor(private service: FeedbackService) {

    this.service.reviewedFeedbackList()
    service.reviewedList.subscribe(x => {
      this.List=x;
      this.data=x;
      console.log(this.List)
    })

    this.totalRecords = this.List.length
  }

  search(ev: any) {
    this.List = this.data
    const val = ev.target.value;
    if (val && val.trim() != '') {
      this.List = this.List.filter((item) => {
        return (item.FirstName.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }


  progress(v) {
    this.progressed = (v / 100).toFixed(1)
    // console.log(this.progressed)
    if(v>=75){
      this.progressColor='success'
    }
    else if(v<=74 && v>=50){
      this.progressColor='warning'
    }
    else{
      this.progressColor='danger'
    }
  }


  getFoodRating(food) {
    if (food == 10) {
      this.foodColor = 'success'
      
    }
    else if (food == 7) {
      this.foodColor = 'warning'
    }
    else {
      this.foodColor = 'danger'
    }
    // console.log(food)
  }

  getServiceRating(service) {
    if (service == 10) {
      this.serviceColor = 'success'
    }
    else if (service == 7) {
      this.serviceColor = 'warning'
    }
    else {
      this.serviceColor = 'danger'
    }
  }

  getAmbienceRating(ambience) {
    if (ambience == 10) {
      this.ambienceColor = 'success'
    }
    else if (ambience == 7) {
      this.ambienceColor = 'warning'
    }
    else {
      this.ambienceColor = 'danger'
    }
  }

  ngOnInit() {
  }

}
