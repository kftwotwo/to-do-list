





function Item(item, name, time) {
  this.item = item;
  this.name = name;
  this.time = time;
  this.addListItem = function() {
    $("#output").append("<li> <label class='checkbox'><input type='checkbox' name='task'>" + item +"</li></label>");
  }
}

function click()








$(document).ready(function() {
  $('#inputForm').submit(function(event) {
    event.preventDefault();
    var validatedInput = $('#userInput').val().replace(/\s/g, '');
    if (validatedInput != "") {
      var item = new Item($('#userInput').val());
      item.addListItem();
    } else {
      alert("Please enter a value.");
    }
    $('#inputForm')[0].reset();
  });

  $('#deleteButton').click(function() {
    $("input:checkbox[name=task]:checked").each(function(){
          $(this).closest("li").remove();
    });
  })
});
