//@ts-check

// check off todo list item on click
$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

// click on X to delete todo
$("ul").on("click", "span", function(event) {
  $(this)
    .parent("li")
    .fadeOut(500, function() {
      $(this).remove();
    });

  event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
  if (event.which === 13) {
    var text = $(this).val();
    $(this).val("");
    $("ul").append(
      '<li><span><i class="fa fa-trash"></i></span> ' + text + "</li>"
    );
  }
});

$(".fa-plus").click(function() {
  $("input[type='text']").fadeToggle();
});
