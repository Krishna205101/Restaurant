import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../services/feedback.service';
import { ModalController } from '@ionic/angular';
import { TextareaPage } from '../textarea/textarea.page';


@Component({
  selector: 'app-unreviewed-feedback-list',
  templateUrl: './unreviewed-feedback-list.page.html',
  styleUrls: ['./unreviewed-feedback-list.page.scss'],
})
export class UnreviewedFeedbackListPage implements OnInit {

  List = <any>[];
  page = 1
  totalRecords: number
  progressed: any
  foodColor = ''
  serviceColor = ''
  ambienceColor = ''
  progressColor: string;
  data = <any>[]

  constructor(private service: FeedbackService, private modalController: ModalController) {

    service.unReviewedFeedbackList()
    service.UnReviewedList.subscribe(x => {
      this.List = x;
      this.data = x;
      console.log(x)
    })
    this.totalRecords = this.List.length

  }

  async Review(data) {
    this.service.getFeedbackId(data)
    console.log(data.Id)
    const modal = await this.modalController.create({
      component: TextareaPage,
      cssClass: 'textarea'
    });
    return await modal.present();
  }

  progress(overall) {
    this.progressed = (overall / 100).toFixed(1)
    // console.log(this.progressed)
    if (overall >= 75) {
      this.progressColor = 'success'
    }
    else if (overall <= 74 && overall >= 50) {
      this.progressColor = 'warning'
    }
    else {
      this.progressColor = 'danger'
    }
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
