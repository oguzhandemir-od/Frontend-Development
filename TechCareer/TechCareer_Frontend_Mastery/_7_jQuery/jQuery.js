// CSS
$(document).ready(function () {
  $("#btnChangeColor").css("display", "block");
  $("#btnChangeColor").click(function () {
    $(".box").css("background-color", "blue");
    $("#box1").css("border", "1px solid yellow");
  });
});

// HTML
$(document).ready(function () {
  $("#html_button").click(function () {
    $("#html_id p").html("<p><b><mark>Diğer Satır</mark></b></p>")
  });
});

// Text
$(document).ready(function () {
  $("#text_button").click(function () {
    $("#html_id p").html("<p>Text Diğer Satır</p>")
  });
});

// Attribute
$(document).ready(function () {
  $("#attr_button").click(function () {
    $("#attr_id").attr("href", "https://www.google.com")
  })
});

// Effect
$(document).ready(function () {
  $("#effect_button").click(function () {
    alert("Uyarı")
    $("#effect_id").animate({ left: '250px' });
  });
});

// Fade
$(document).ready(function () {
  $("#fadeout_id").click(function () {
    $("#fade_parag_id").fadeOut()
  });
  $("#fadein_id").click(function () {
    $("#fade_parag_id").fadeIn();
  });
});

// Show - Hide
$(document).ready(function () {
  $("#hide_button").click(function () {
    $("#effect_id").hide(1000);
  });
  $("#show_button").click(function () {
    $("#effect_id").show(1000);
  });
});

// Event
$(document).ready(function () {
  $("#click_event_id").click(function () {
    alert("Event Çalıştı")
  });
});

$(document).ready(function () {
  $("#dblclick_event_id").dblclick(function () {
    alert("Event Çalıştı")
  });
});

// Mouse
$(document).ready(function () {
  $("#mouse_id").mouseup(function () {
    alert("Mouse Çalıştı");
    $(this).css("background-color","red")
  });
});

// Keyboard
$(document).ready(function () {
  $("#keyboard_id").keydown(function () {
    alert("Keyboard Çalıştı");
    $(this).css("background-color","yellow")
  });
});



