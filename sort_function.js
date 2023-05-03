sort.onchange = sortingValue;

function sortingValue(){
    location.href("index.html?sort=") + sort.value
}