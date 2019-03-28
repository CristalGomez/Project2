//   $('#myModal').modal({ show: true })
// })
// $('#myModal').on('shown.bs.modal', function () {

// $(document).on("click","#openModal", function(){
//   console.log("hi")
//   $("#myModal").modal({show: true})


var hoverBtn1 = document.getElementById("card1");
var hoverBtn2 = document.getElementById("card2");
var hoverBtn3 = document.getElementById("card3");
var body = document.body;

hoverBtn1.onmouseover = function(){
  body.className = "austin";
}

hoverBtn2.onmouseover = function(){
  body.className = "houston";
}

hoverBtn3.onmouseover = function(){
  body.className = "dallas";
}
hoverBtn1.onmouseout = function(){
  body.className = ""
}
hoverBtn2.onmouseout = function(){
  body.className = ""
}
hoverBtn3.onmouseout = function(){
  body.className = ""
}

