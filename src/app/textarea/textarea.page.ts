import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { ReviewedFeedbackListPage } from '../reviewed-feedback-list/reviewed-feedback-list.page';
import { FeedbackService } from '../services/feedback.service';
import { UnreviewedFeedbackListPage } from '../unreviewed-feedback-list/unreviewed-feedback-list.page';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.page.html',
  styleUrls: ['./textarea.page.scss'],
})
export class TextareaPage implements OnInit {

  review: string
  Feedback: any

  constructor(private service: FeedbackService, private modal: ModalController, private alert: AlertController) {
    this.Feedback = this.service.Feedback
    
  }

  isReviewed() {
    if (this.review == null) {
      this.modal.dismiss()
      this.alerting('No')

    }
    else {
      this.service.updateFeedback(this.review)
      this.modal.dismiss()
      this.alerting('')
      this.update()
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

  update() {
    new ReviewedFeedbackListPage(this.service)
    // new UnreviewedFeedbackListPage(this.service, this.modal)
  }

  ngOnInit() {
  }

}
