$(function(){


  function buildPost(post){
    var html = `<div class="content">
                  ${post.text}
                </div>`
    return html;
  }


  $('#new_post').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: `JSON`,
      processData: false,
      contentType: false
    })
    .done(function(post){
      var html = buildPost(post);
      debugger
    })
    .fail(function(){

    })
  });
});