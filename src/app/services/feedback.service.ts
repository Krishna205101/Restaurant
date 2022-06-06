import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from './authentication.service';


@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  today = new Date();
  average: number;
  user: any
  id: number
  date: any
  Feedback: any

  private reviewed = new BehaviorSubject<any>([]);
  private unreviewed = new BehaviorSubject<any>([]);


  public reviewedList = this.reviewed.asObservable();
  public UnReviewedList = this.unreviewed.asObservable();

  constructor(private http: HttpClient, private service: AuthenticationService) {
    this.service.user.subscribe(x => this.user = x)
    this.date = this.today.getMonth() + '/' + (this.today.getDate() + 1) + '/' + this.today.getFullYear()
  }

  getFeedbackId(feedback) {
    this.Feedback = feedback.FeedbackComment
    this.id = feedback.Id
  }

  saveCustomerFeedback(feedback) {
    this.average = (feedback.CustomerFeedback.FoodRating + feedback.CustomerFeedback.ServiceRating + feedback.CustomerFeedback.AmbienceRating) * 100 / 30
    this.http.post(environment.baseurl + "Feedback/Save", {
      CustomerID: feedback.CustomerId,
      VisitedDate: this.date,
      StaffID: null,
      ServiceAreas: "Table1",
      FeedbackComment: feedback.Comments,
      ManagerComment: " ",
      IsReviewed: false,
      ReviewedBy: " ",
      ReviewedDate: " ",
      Customer: {
        Id: feedback.CustomerId,
        FirstName: feedback.CustomerFirstName,
        LastName: feedback.CustomerLastName,
        EmailId: feedback.CustomerEmail,
        PhoneNumber: feedback.CustomerMobile
      },
      FeedbackScoreRecord: {
        Id: null,
        FeedBackId: null,
        FoodRating: feedback.CustomerFeedback.FoodRating,
        ServiceRating: feedback.CustomerFeedback.ServiceRating,
        AmbienceRating: feedback.CustomerFeedback.AmbienceRating,
        Overall: this.average.toFixed()
      },
      EventVariable: {
        Id: null,
        CustomerId: null,
        EventTypeId: feedback.EventType,
        EventDateTime: feedback.EventDate
      }
    }).toPromise()
  }

  updateFeedback(review) {
    this.http.post(environment.baseurl + 'Feedback/Update', { Id: this.id, IsReviewd: true, ReviewDate: this.date, ManagerComment: review, ReviewedBy: 1 }).toPromise()
  }

  reviewedFeedbackList() {
    this.http.post(environment.baseurl + 'Feedback/ReviewedList', {}).toPromise().then(
      x => {
        this.reviewed.next(x)
      }
    )

  }

  unReviewedFeedbackList() {
    this.http.post(environment.baseurl + 'Feedback/UnReviewedList', {}).toPromise().then(
      x => {
        this.unreviewed.next(x)
      }
    )
  }

}
