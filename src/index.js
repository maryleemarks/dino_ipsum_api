import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
$(document).ready(function () {
  $('#weatherLocation').click(function () {
    let number = $('#number').val();
    $('#number').val('');
    $('div#links').html('');

    fetch(`http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=1&words=${number}`)
    .then(response => response.json())
    .then(data => data[0].forEach(element => {
      fetch(`https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=${element}_(dinosaur)&format=json&`)
      .then(response => response.json())
      .then(data => {
        let str = JSON.stringify(data[3]);//get and stringify 0th index of wiki search query
        if(!str.includes('http')){//if the query contains the characters http
          console.log(element+' is unique');//debug
          // console.log('non-specific url here:' + str);//debug
          $('div#links').append(`<a href="https://en.wikipedia.org/wiki/${element}">${element}</a><br>`);//append to DOM as specific dino type
        } else {
          console.log(element + " " + data[3]);
          $('div#links').append(`<a href="${data[3]}">${element}</a><br>`);//append to DOM based on API result
        }
      });
    }));
  });

});