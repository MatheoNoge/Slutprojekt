const reviewsEl = document.querySelector(".reviews");


function renderReviews() {
    reviews.forEach((review) => {
      reviewsEl.innerHTML += `
              <div class="item">
                  <div class="item-container">
                      <div class="item-img">
                          <img src="${review.imgSrc}" href="${review.link}" alt="${review.name}">
                      </div>
                      <div class="title">
                          <a href="${review.link}">${review.name}</a>
                      </div>
                      <div class="score">
                      <h2>${review.accessibilityScore}</h2>
                      </div>
                  </div>
              </div>
          `;
    });
  }
  renderReviews()