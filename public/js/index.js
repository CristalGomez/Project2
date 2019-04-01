$(document).ready(function () {


  // var hoverBtn1 = document.getElementById("card1");
  // var hoverBtn2 = document.getElementById("card2");
  // var hoverBtn3 = document.getElementById("card3");
  // var body = document.body;

  // hoverBtn1.onmouseover = function(){
  //   body.className = "austin";
  // }

  // hoverBtn2.onmouseover = function(){
  //   body.className = "houston";
  // }

  // hoverBtn3.onmouseover = function(){
  //   body.className = "dallas";
  // }
  // hoverBtn1.onmouseout = function(){
  //   body.className = ""
  // }
  // hoverBtn2.onmouseout = function(){
  //   body.className = ""
  // }
  // hoverBtn3.onmouseout = function(){
  //   body.className = ""
  // }

  //capturing the information from the add modal in the bars page
 
  $('#addBars').on("click", function (event) {
    event.preventDefault();
    var barForm = $("#barForm");
    var barImg = $("#barImg");
    console.log(barForm)
    var barCity = barForm.data('city');
    var barName = $("#barName")[0].value;
    var barImg = $("#barImg")[0].value;

    console.log(barCity, barName)
    console.log(barImg)
    console.log($("#barName")[0].value)
    


    var newBar = {
      city: barCity,
      title: barName,
      image: barImg
    };
    console.log(newBar);

    submitBar(newBar)


  });

 

  function submitBar(Bars) {
    $.post("/api/bars/", Bars, function () {

      window.location.reload()
    })
  }

  $("#updateForum").on("click", function (event) {
    event.preventDefault()
    // var forum = $("#forumModal");
    var forumInput = $("#forumInput")[0].value;
    var forumBarId = $("#barId")[0];
    console.log(forumInput)
    console.log(forumBarId)
    // var barForum = ("#barNameForum");


    var newForum = {
      body: forumInput,
      barId:forumBarId
    };
    console.log(newForum);
    postForum(newForum);
  });

  //capturing the information from the update modal in the forum page
  function postForum(Post) {
    $.post("/forum/"+ Post.barId, Post.body, function () {
      window.location.reload();
    })
  }
});