  var $form = $('form#gform'),
  url = 'https://script.google.com/macros/s/AKfycbx_pLX5Q00aoAjl9yW3G3ZMn_ImGyp_IxF1e1SBtjEWgsmwYgo/exec'
  $.fn.serializeObject = function() {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
      if (o[this.name]) {
        if (!o[this.name].push) {
          o[this.name] = [o[this.name]];
        }
        o[this.name].push(this.value || '');
      } else {
        o[this.name] = this.value || '';
      }
    });
    return o;
  };
  $('#submitbtn').on('click', function(e) {
    e.preventDefault();
      var jqxhr = $.ajax({
        url: url,
        method: "GET",
        dataType: "json",
        data: $form.serializeObject()
      }).success(
      // $('#thankyou_message, #overlay').fadeIn()
      );
  })
