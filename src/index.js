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
    let wikiUrl = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${dinoName}&limit=1&namespace=0&format=json`

    request.onreadystatechange = function load() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        console.log(response);
      }
    };
    request.open("GET", dinoUrl, wikiUrl, true);
    request.send();

    function forEachDinos(){
      response[0].forEach(element => {
        let dinoName = element;
        load()
        $('div#links').append(`<a href="https://en.wikipedia.org/wiki/${element}_(dinosaur)">${element}</a><br>`);
        console.log(element)
      });
    }
  });
});