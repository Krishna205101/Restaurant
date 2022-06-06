import { Component, ElementRef, Renderer2 } from '@angular/core';
import { ThemeService } from '../services/theme.service';
import { AlertController, ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../services/customer.service';
import { FeedbackService } from '../services/feedback.service';
import { EventService } from '../services/event.service';
import { TablePage } from '../table/table.page'

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage {


  feedback = <any>[];
  eventsList = [];
  customersList = [];
  customerId = null;
  today = new Date()
  eventDate = String(this.today)

  get firstname() {
    return this.formGroup.get('firstname')
  }

  get lastname() {
    return this.formGroup.get('lastname')
  }

  get email() {
    return this.formGroup.get('email')
  }

  get mobile() {
    return this.formGroup.get('mobile')
  }




  public errorMessages = {
    firstname: [
      {
        type: 'required',
        message: 'First Name is required'
      }
    ],
    lastname: [
      {
        type: 'required',
        message: 'Last Name is required'
      }
    ],
    email: [
      {
        type: 'required',
        message: 'Email is required'
      },
      {
        type: 'pattern',
        message: 'Enter a valid email address'
      }
    ],
    mobile: [
      {
        type: 'required',
        message: 'Enter mobile number'
      },
      {
        type: 'pattern',
        message: 'Enter valid mobile number'
      },
    ]
  };

  formGroup: FormGroup;
  constructor(public formBuilder: FormBuilder,
    private theme: ThemeService,
    private alert: AlertController,
    private modalContoller: ModalController,
    private customerService: CustomerService,
    private feedbackService: FeedbackService,
    private eventService: EventService) {



    this.customerService.shareList.subscribe(x => {
      this.customersList = x
    })

    this.eventService.getEvents()

    this.formGroup = formBuilder.group({
      firstname: [
        "",
        [
          Validators.required
        ]
      ],
      lastname: [
        "",
        [
          Validators.required
        ]
      ],
      email: [
        "",
        [
          Validators.required,
          Validators.pattern("^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$")
        ]
      ],
      mobile: [
        "",
        [
          Validators.required,
          Validators.pattern('^[+]*[(]{0,1}[00-9\{1,4}[)]{0,1}[-s./0-9]{10,10}$')
        ]
      ],
      event: [""],
      eventDate: [this.eventDate],
      comments: [""],
      foodRating: ["", [Validators.required]],
      serviceRating: ["", [Validators.required]],
      ambienceRating: ["", [Validators.required]]

    });


    this.eventService.getEvents()
    this.eventService.EventTypesList.subscribe(x => {
      this.eventsList = x
    })
  }

  async Submission(formData: any) {


    this.feedback = {
      "CustomerId": this.customerId,
      "CustomerFirstName": formData.firstname,
      "CustomerLastName": formData.lastname,
      "CustomerEmail": formData.email,
      "CustomerMobile": formData.mobile,
      "EventType": parseInt(formData.event),
      "EventDate": formData.eventDate,
      "Comments": formData.comments,
      "CustomerFeedback": {
        "FoodRating": parseInt(formData.foodRating),
        "ServiceRating": parseInt(formData.serviceRating),
        "AmbienceRating": parseInt(formData.ambienceRating)
      }
    }

    this.feedbackService.saveCustomerFeedback(this.feedback)

    const alert = await this.alert.create({

      message: '<img src="assets/thanks.jpg" class="thanks">',
      // buttons: [
      //   {
      //     text: 'Ok',
      //     handler: () => {
      //       this.call()
      //       this.dismiss()
      //     }
      //   }
      // ]
    });

    await alert.present();
    setTimeout(() => {
      alert.dismiss()
      this.dismiss()
    }, 500);

  }

  dismiss() {
    this.modalContoller.dismiss()
  }

  call() {
    new TablePage(this.customerService, this.modalContoller);
  }

  checkCustomer(mobile) {
    
    for (let i = 0; i < this.customersList.length; i++) {
      if (mobile.value == this.customersList[i].PhoneNumber) {
        this.customerId = this.customersList[i].Id
        this.formGroup = this.formBuilder.group({
          firstname: [
            this.customersList[i].FirstName,
            [
              Validators.required
            ]
          ],
          lastname: [
            this.customersList[i].LastName,
            [
              Validators.required
            ]
          ],
          email: [
            this.customersList[i].EmailId,
            [
              Validators.required,
              Validators.pattern("^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$")
            ]
          ],
          mobile: [
            mobile.value,
          ],
          event: [""],
          eventDate: [this.eventDate],
          comments: [""],
          foodRating: ["", [Validators.required]],
          serviceRating: ["", [Validators.required]],
          ambienceRating: ["", [Validators.required]]
        });
        break;
      }
      else {
        this.customerId = null;
        this.formGroup = this.formBuilder.group({
          firstname: [
            "",
            [
              Validators.required
            ]
          ],
          lastname: [
            "",
            [
              Validators.required
            ]
          ],
          email: [
            "",
            [
              Validators.required,
              Validators.pattern("^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$")
            ]
          ],
          mobile: [
            mobile.value,
            [
              Validators.required,
              Validators.pattern('^[+]*[(]{0,1}[00-9\{1,4}[)]{0,1}[-s./0-9]{10,10}$')
            ]
          ],
          event: [""],
          eventDate: [this.eventDate],
          comments: [""],
          foodRating: ["", [Validators.required]],
          serviceRating: ["", [Validators.required]],
          ambienceRating: ["", [Validators.required]]

        });
      }
    }
  }

}
