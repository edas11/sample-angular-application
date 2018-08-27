import { UserReviewsInput } from './user-reviews-input';
import {validateSync , IsInt, Min, Max} from 'class-validator';

export class UserReviews {

    @Min(0)
    @Max(10)
    private _avgRating: Number;

    @IsInt()
    @Min(0)
    private _reviewsNumber: Number;

    constructor(input: UserReviewsInput) {
        if (input) {
            this._avgRating = input.avgRating;
            this._reviewsNumber = input.reviewsNumber;
        } else {
            this._avgRating = 0;
            this._reviewsNumber = 0;
        }
        validateSync(this).forEach( (error) => {
            this[error.property.toString()] = 0;
        });
    }

    get avgRating() {
        return this._avgRating;
    }

    get reviewsNumber() {
        return this._reviewsNumber;
    }
}
