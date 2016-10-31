//business logic
function Chore(task, userName, time) {
  this.task = task;
  this.userName = userName;
  this.time = time;
}

// user interface logic
$(document).ready(function() {
  $("form#inputForm").submit(function(event) {
    event.preventDefault();

    var inputtedTask = $("input#userTask").val();
    var inputtedUserName = $("input#userName").val();
    var inputtedTime = $("input#userTime").val();

    var newChore = new Chore(inputtedTask, inputtedUserName, inputtedTime);

    $("ul#output").append("<li><span class='userChore'>" + newChore.task + "</span></li>");

    $(".userChore").last().click(function() {
      $("#show-chore").show();
      $(".choreSpan").text(newChore.task);
      $(".nameSpan").text(newChore.userName);
      $(".timeSpan").text(newChore.time);
    });

    $("input#task").val("");
    $("input#userName").val("");
    $("input#time").val("");
  });
});
