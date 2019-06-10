var searchFormWindow = document.querySelector('.hotel-search');
var buttonSearch = document.querySelector('.button-search');

buttonSearch.addEventListener("click", function (evt) {
  evt.preventDefault();
  searchFormWindow.classList.toggle("hidden");
});

var searchForm = document.querySelector('.hotel-search-form');
var arrivalDate = document.querySelector('#arrival-date');
var departureDate = document.querySelector('#departure-date');

var adults = document.querySelector('#adults-count');
var children = document.querySelector('#children-count'); 

var isStorageSupport = true;
var storage = "";
var adultsCount;
var childrenCount;

try {
  adultsCount = localStorage.getItem('adults');
  childrenCount = localStorage.getItem('children');
} catch (err) {
  isStorageSupport = false;
}

if (adultsCount) {
  adults.value = adultsCount;
};

if (childrenCount) {
  children.value = childrenCount;
};

arrivalDate.focus();

searchForm.addEventListener("submit", function(evt) {
  if(!arrivalDate.value || !departureDate.value) {
    evt.preventDefault();
    console.log("Нужно ввести дату заезда и дата выезда");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("adults", adults.value);
      localStorage.setItem("children", children.value);
    }
  }
});