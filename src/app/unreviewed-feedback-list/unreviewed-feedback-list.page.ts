import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../services/feedback.service';
import { AlertController, ModalController } from '@ionic/angular';
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
  d: any;

  constructor(private service: FeedbackService, private modalController: ModalController, private alert: AlertController) {

    service.unReviewedFeedbackList()
    service.UnReviewedList.subscribe(x => {
      this.List = x;
      this.data = x;
    })
    this.totalRecords = this.List.length

  }

  async Review(info) {
    this.service.getFeedbackId(info)
    this.d = this.service.Feedback
    const alert = await this.alert.create({
      header: 'Customer Feedback :',
      subHeader: this.d,
      message: '<div class="comment">Manager Comments:</div>',
      cssClass: 'textarea',
      inputs: [
        {
          name: 'comment',
          type: 'textarea',
          placeholder: 'Please enter your comments'
        }
      ],
      buttons: [
        {
          text: 'Ok',
          handler: (data) => {
            console.log(data.comment)
            this.isReviewed(data.comment, info)
          }
        }
      ]
    })
    await alert.present()
  }

  progress(overall) {
    this.progressed = (overall / 100).toFixed(1)
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

  isReviewed(review, info) {
    console.log(info)
    if (review == '') {
      this.alert.dismiss()
      this.alerting('No')

    }
    else {
      this.service.updateFeedback(review)
      this.alert.dismiss()
      this.alerting('')
      this.update(info)
    }
  }

  async alerting(no) {
    const alert = await this.alert.create({
      subHeader: no + ' Comments added',
      buttons: [
        {
          text: 'Ok',
          handler: () => {

          }
        }
      ]
    });
    await alert.present();
  }

  update(info) {
    console.log('got')
    for (let i = 0; i < this.List.length; i++) {
      if (this.List[i].PhoneNumber == info.PhoneNumber) {
        this.List.splice(i, 1)
      }
    }
    this.data = this.List;
  }

  ngOnInit() {
  }

}
