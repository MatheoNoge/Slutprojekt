// const reviewsEl = document.querySelector(".reviews");


// function renderReviews() {
//     reviews.forEach((review) => {
//       reviewsEl.innerHTML += `
//               <div class="item">
//                   <div class="item-container">
//                       <div class="item-img">
//                           <img src="${review.imgSrc}" href="${review.link}" alt="${review.name}">
//                       </div>
//                       <div class="title">
//                           <a href="${review.link}">${review.name}</a>
//                       </div>
//                       <div class="score">
//                       <h2>Accessibility Score:
//                     ${review.accessibilityScore}/5</h2>
//                       </div>
//                   </div>
//               </div>
//           `;
//     });
//   }
// renderReviews()

// const params = new URLSearchParams(window.location.search)
// const sortid = params.get("sort")
// sort.value = sortid;


// let sorting_function = (a, b) => 0;

// if (sortid === "a-z") {
//    sorting_function = (a, b) => (a.name > b.name ? 1: -1);
// }


// sort.onchange = sortingValue;

// function sortingValue(){
//     location.href("index.html?sort=") + sort.value
// }a


/*
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
                      <h2>Accessibility Score:
                    ${review.accessibilityScore}/5</h2>
                      </div>
                  </div>
              </div>
          `;
    });
}

renderReviews();

const params = new URLSearchParams(window.location.search);
const sortid = params.get("sort");
sort.value = sortid;

let sorting_function = (a, b) => 0;

if (sortid === "a-z") {
   sorting_function = (a, b) => (a.name > b.name ? 1: -1);
}

sort.onchange = sortingValue;

function sortingValue(){
    location.href = "index.html?sort=" + sort.value;
}
*/

const reviewsEl = document.querySelector(".reviews");
const params = new URLSearchParams(window.location.search);
const sortid = params.get("sort");
const sort = document.getElementById("sort");
sort.value = sortid;

let sorting_function = (a, b) => 0;

if (sortid === "a-z") {
  sorting_function = (a, b) => (a.name > b.name ? 1 : -1);
}

if (sortid === "score-high-low") {
  sorting_function = (a, b) =>
    b.accessibilityScore - a.accessibilityScore;
}
if (sortid === "z-a") {
    sorting_function = (a, b) => (b.name > a.name ? 1 : -1);
  }
  
  if (sortid === "score-low-high") {
    sorting_function = (a, b) =>
      a.accessibilityScore - b.accessibilityScore;
  }

reviews.sort(sorting_function);

function renderReviews() {
  reviewsEl.innerHTML = ""; // Clear existing reviews
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
            <h2>Accessibility Score: ${review.accessibilityScore}/5</h2>
          </div>
        </div>
      </div>
    `;
  });
}

renderReviews();

sort.onchange = sortingValue;

function sortingValue() {
  location.href = "index.html?sort=" + sort.value;
}