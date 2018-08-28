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
        this._avgRating = input.avgRating;
        this._reviewsNumber = input.reviewsNumber;
        validateSync(this).forEach( (error) => {
            this[error.property.toString()] = 0;
        });
    }

    get avgRating(): String {
        return this._avgRating.toFixed(1);
    }

    get reviewsNumber(): String {
        return this._reviewsNumber.toFixed(0);
    }
}
