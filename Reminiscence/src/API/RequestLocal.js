const baseUri = 'http://218.158.195.201:5000';

const reviewUri = `${baseUri}/get/review/list`;
const myRatedUri = `${baseUri}/my/rated`;
const myWishlistUri = `${baseUri}/my/wish/list`;
const removeReview = `${baseUri}/remove/review`;

const requestReviews = async (uid) => {
  return await fetch(`${reviewUri}/${uid}`)
    .then(res => {
      return res.ok ? res.json() : null;
    })
    .catch(err => {});
};

const requestMyRated = async uid => {
  return await fetch(`${myRatedUri}/${uid}`)
    .then(res => {
      return res.ok ? res.json() : null;
    })
    .catch(err => {});
};

const requestMyWishlist = async uid => {
  return await fetch(`${myWishlistUri}/${uid}`)
    .then(res => {
      return res.ok ? res.json() : null;
    })
    .catch(err => {});
};

const reqReviewRemove = async item => {
  return await fetch(removeReview, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(item),
  })
    .then(res => {
      return res.ok ? res.json() : null;
    })
    .catch(err => {});
};

export {requestReviews, requestMyRated, requestMyWishlist, reqReviewRemove};
