

$(document).ready(function () {


  // var hoverBtn1 = document.getElementById("card1");
  // var hoverBtn2 = document.getElementById("card2");
  // var hoverBtn3 = document.getElementById("card3");
  // var body = document.body;


  // $(document).on("mouseover", "#card1", function(){
  //   body.className = "austin"
  // })

  // $(document).on("mouseover", "#card2", function(){
  //   body.className = "houston"
  // })

  // $(document).on("mouseover", "#card3", function(){
  //   body.className = "dallas"
  // })


  
  // $(document).on("mouseout", "", function(){
  //   body.className = ""
  // })

  // $(document).on("mouseout", "", function(){
  //   body.className = ""
  // })

  // $(document).on("mouseout", "", function(){
  //   body.className = ""
  // })


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
    $.post("/bars/", Bars, function () {

      window.location.reload()
    })
  }

  $("#updateForum").on("click", function (event) {
    event.preventDefault()
    // var forum = $("#forumModal");
    var forumInput = $("#forumInput")[0].value;
    var forumBarId = $("#barId")[0].value;
    console.log(forumInput)
    // var barForum = ("#barNameForum");


    var newForum = {
      body: forumInput,
      barId: forumBarId
    };
    console.log(newForum);
    postForum(newForum);
  });


  //capturing the information from the update modal in the forum page
  function postForum(Post) {
    $.post("/forum/"+ Post.barId, Post, function () {
      window.location.reload();
    })
  }
});