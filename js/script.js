$(document).ready(function() {
  $('#logo').on('click', function() {
    var collected = getSelectionText();
    if (collected != '' && collected.indexOf('Success! The text you collected was:') == -1) {
      $('#success').show();
      $('article').hide();
      $('#collected').text(collected);
      $('#result').show();
      $('#url').val('#success');
    }
    else {
      $('#failure').show();
      $('#extension').show();
    }
  });

  $('#home').on('click', function() {
    $('article').hide();
    $('#result').hide();
    $('#default').show();
    $('#url').val('#home');
  });

  $('#choices a').on('click', function() {
    var article = $(this).attr('href');
    $('#default').hide();
    $(article.substring(0, 9)).show();
    $('#url').val(article);
  })
});

$(document).mouseup(function(e) {
  if (!$('#extension').is(e.target) && $('#extension').has(e.target).length === 0) {
    $('#extension').hide();
    $('#success').hide();
    $('#failure').hide();
  } 
});

function getSelectionText() {
  var text = '';
  if (window.getSelection) {
    text = window.getSelection().toString();
  } else if (document.selection && document.selection.type != 'Control') {
    text = document.selection.createRange().text;
  }
  return text;
}