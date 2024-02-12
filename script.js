'use strict';

// Selectors
const rateEl = document.querySelectorAll('.rate');
const btnSubmit = document.querySelector('#btn-submit');
const card = document.querySelector('.card');
const ratingEl = document.querySelector('#rating');
const errorEl = document.querySelector('.error');

let rating;

rateEl.forEach((el) => {
    el.addEventListener('click', function () {
        rateEl.forEach((el) => el.classList.remove('active'));
        errorEl.classList.add('hidden');
        this.classList.add('active');
        rating = this.dataset.rate;
    });
});

btnSubmit.addEventListener('click', function () {
    if (!rating) {
        errorEl.classList.remove('hidden');
    } else if(rating < 1 || rating > 5) {
        errorEl.classList.remove('hidden');
        errorEl.textContent = 'Invalid Rating, rating must be between 1 to 5!'
    } else {
        card.classList.add('rotated');
        ratingEl.textContent = rating;
    }
});
