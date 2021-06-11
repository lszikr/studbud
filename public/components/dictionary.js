// var searchButton = document.getElementById("searchButton");
// searchButton.addEventListener('click', function(event) {
//     wordSearch();
// });

// var reloadButton = document.getElementById("reloadButton");
// reloadButton.addEventListener('click', function(event) {
//     reloadPage();
// });

// function reloadPage() {
//     location.reload();
// }

// function wordSearch() {
//     document.getElementById('searchResult').style.visibility = 'visible';

//     var word = document.getElementById('word');
//     var definition = document.getElementById('definition');
//     var example = document.getElementById('example');
//     var synonym = document.getElementById('synonym');

//     var wordToSearch = document.getElementById('searchBox').Value;


//     var request = new XMLHttpRequest();
//     request.open('GET', 'https://developer.oxforddictionaries.com/documentation#!/Entries/get_entries_source_lang_word_id');
//     request.onload = function () {
//         var data = JSON.parse(this.response);
//         if (request.status >= 200 && request1.status < 400) {
//             var i = Math.ceil(Math.random() * 10);      //  get a random number from 1 to 10
//             word.innerHTML = data[i].word;      //  get a random definition
//             definition.innerHTML = data[i].text;
//         } else {
//             word.innerHTML = "Error";
//             definition.innerHTML = "Error";
//         }
//     }
//     request.send();