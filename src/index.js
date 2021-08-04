import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
$(document).ready(function () {
  $('#weatherLocation').click(function () {
    let number = $('#number').val();
    $('#number').val('');
    $('div#links').html('');
    // const city = $('#location').val();
    $('#location').val("");

    let request = new XMLHttpRequest();
    let dinoUrl = `http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=1&words=${number}`;

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        console.log(response);
        response[0].forEach(element => {
          $('div#links').append(`<a href="https://en.wikipedia.org/wiki/${element}">${element}</a><br>`);
          console.log(element)
        });
      }
    };



    request.open("GET", dinoUrl, true);
    request.send();
  });
});