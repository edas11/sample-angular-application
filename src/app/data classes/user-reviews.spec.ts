import { UserReviews } from './user-reviews';

describe('UserReviews', () => {

  it('should give information about user reviews', () => {
    const input = {avgRating: 3.3, reviewsNumber: 100};
    const userReviews = new UserReviews(input);
    expect(userReviews.avgRating).toEqual('3.3');
    expect(userReviews.reviewsNumber).toEqual('100');
  });

  it('should give defaults if avgRating is not between 0 an 10', () => {
    let input = {avgRating: -1, reviewsNumber: 100};
    let userReviews = new UserReviews(input);
    expect(userReviews.avgRating).toEqual('0.0');

    input = {avgRating: 11, reviewsNumber: 100};
    userReviews = new UserReviews(input);
    expect(userReviews.avgRating).toEqual('0.0');
  });

  it('should give defaults if reviewsNumber is not positive integer', () => {
    let input = {avgRating: 4, reviewsNumber: 5.5};
    let userReviews = new UserReviews(input);
    expect(userReviews.reviewsNumber).toEqual('0');

    input = {avgRating: 4, reviewsNumber: -1};
    userReviews = new UserReviews(input);
    expect(userReviews.reviewsNumber).toEqual('0');
  });

});
