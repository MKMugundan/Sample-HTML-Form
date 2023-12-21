// // <form action="submit">
// <label for="name">Name:</label>
// <br>
// <input id="name" type="text" placeholder="Enter your name"></input>
// <br></br>
// <label for="name">Password:</label>
// <br>
// <input id="name" type="password" placeholder="Pls type the password"></input>
// <hr>
// <input type="checkbox"> -- Checkbox</input>
// <hr>
// <input type="button"> -- Button</input>
// <hr>
// <input type="email"> -- email</input>
// <hr>
// <input type="file"> -- File</input>
// <hr>
// <input type="image"> -- Image</input>
// <hr>
// <input type="number"> -- Number</input>
// <hr>
// <input type="range"> -- Range</input>
// <hr>
// <input type="time"> -- Time</input>
// <hr>
// <input type="date"> -- Date</input>
// <hr>
// <input type="datetime-local"> -- Local-Date</input>
// <hr>
// </form>

let button = document.getElementById('button');
button.addEventListener("click",click)

function click()
{
  document.getElementById('get_first_name').innerHTML = document.querySelector('#first_name').value;

  document.getElementById('get_second_name').innerHTML = document.querySelector('#second_name').value;

  document.getElementById('get_address').innerHTML = document.querySelector('#address').value;

  document.getElementById('get_pin').innerHTML = document.querySelector('#pin_code').value;

  document.getElementById('get_gender').innerHTML = document.querySelector('#human').value;

  document.getElementById('get_food').innerHTML = document.querySelector('#opinion_of_food').value;

  document.getElementById('get_state').innerHTML = document.querySelector('#opinion_of_state').value;

  document.getElementById('get_country').innerHTML = document.querySelector('#opinion_of_country').value;
}

