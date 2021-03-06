const content = document.querySelector('.content');

var request = new XMLHttpRequest();

request.open('GET', './components/tasklist');

request.onload = function() {
  let data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
    console.log(data[0].taskDescription);

    data.forEach(function(task) {
      let card = document.createElement('div');
      card.setAttribute('class', 'card');
      card.setAttribute('data-tilt', 'true');

      let heading = document.createElement('h1');
      heading.textContent = task.taskDescription;

      let description = document.createElement('p');
      description.textContent = task.dueDate;

      card.appendChild(heading);
      card.appendChild(description);

      content.appendChild(card);
    })






  } else {
    let errorMessage = document.createElement('p');
    errorMessage.textContent = "Error, unable to process your API Status: " + request.status;
    content.appendChild(errorMessage);
  }
}

request.send()