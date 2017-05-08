const serverUrl = 'https://iavi.me/';
const API = {
  translate: serverUrl + 'translate'
}

var Popup = Popup || createTranslationPopup();


document.addEventListener('dblclick', function(event) {
  var selection = document.getSelection();
  console.log('Dobule click', getTextSelection());

  sendGetRequest('?word='+selection+'&to=ru')
  .then(function(data) {
    console.log('Got Response', data);
    Popup.show(data.from.language.iso + " : " +data.text);
  })
  .catch(function(err) {
    console.error('Ouch!', err);
  });
});

document.addEventListener('click', function(event) {
  Popup.hide();
});

function createTranslationPopup() {
  var translationPopup = document.createElement('div');
  translationPopup.id = 'poly-vocab-ext-translation-popup';

  var textSpan = document.createElement('span');
  translationPopup.appendChild(textSpan);

  translationPopup.show = function(text) {
    translationPopup.classList.add('poly-vocab-ext-show');
    textSpan.innerHTML = text;
  }

  translationPopup.hide = function() {
    translationPopup.classList.remove('poly-vocab-ext-show');
  }

  document.body.appendChild(translationPopup);
  return translationPopup;
}

function getTextSelection() {
  return (document.selection && document.selection.createRange().text) ||
         (window.getSelection && window.getSelection().toString()) || null;
}

function sendGetRequest(query, callback) {
  return fetch(API.translate+query)
    .then(res => res.json());
}
