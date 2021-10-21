import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css'],
})
export class ReviewsComponent implements OnInit {
  constructor() {}
  ratings = [5, 4, 3, 2, 1];
  defaultRate = this.ratings[0];

  reviewForm: FormGroup;
  ngOnInit() {}
  allReviews = [
    {
      fullName: 'Fern Castro',
      email: 'fern.castro@ttec-demo.com',
      rating: 5,
      review:
        'Stunning and awesome gameplay. The game might be old, but it has stood the test of time.',
    },
    {
      fullName: 'Sophia Parsons',
      email: 'sophia.parsons@ttec-demo.com',
      rating: 4,
      review: 'Top-notch. Got a few life lessons here and there.',
    },
    {
      fullName: 'Trista Porter',
      email: 'trista.porter@ttec-demo.com',
      rating: 3,
      review: 'Really good game, overrated though.',
    },
    {
      fullName: 'Percival Conner',
      email: 'percival.conner@ttec-demo.com',
      rating: 5,
      review: 'Buying this below the full price was a mistake.',
    },
    {
      fullName: 'Ellen Swanson',
      email: 'ellen.swansons@ttec-demo.com',
      rating: 5,
      review:
        '2 decades of gaming, this is the greatest game I have ever played and will ever play.',
    },
  ];
  submitReview(review) {
    this.allReviews.push(review.value);
    console.log(review.value);
     review.resetForm();
  }
}
