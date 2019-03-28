<<<<<<< HEAD
// Get references to page elements
var $exampleText = $("#example-text");
var $exampleDescription = $("#example-description");
var $submitBtn = $("#submit");
var $exampleList = $("#example-list");

// The API object contains methods for each kind of request we'll make
var API = {
  saveExample: function (example) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/examples",
      data: JSON.stringify(example)
    });
  },
  getExamples: function () {
    return $.ajax({
      url: "api/examples",
      type: "GET"
    });
  },
  deleteExample: function (id) {
    return $.ajax({
      url: "api/examples/" + id,
      type: "DELETE"
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshExamples = function () {
  API.getExamples().then(function (data) {
    var $examples = data.map(function (example) {
      var $a = $("<a>")
        .text(example.text)
        .attr("href", "/example/" + example.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": example.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $exampleList.empty();
    $exampleList.append($examples);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function (event) {
  event.preventDefault();

  var example = {
    text: $exampleText.val().trim(),
    description: $exampleDescription.val().trim()
  };

  if (!(example.text && example.description)) {
    alert("You must enter an example text and description!");
    return;
  }

  API.saveExample(example).then(function () {
    refreshExamples();
  });

  $exampleText.val("");
  $exampleDescription.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function () {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteExample(idToDelete).then(function () {
    refreshExamples();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$exampleList.on("click", ".delete", handleDeleteBtnClick);
=======
//   $('#myModal').modal({ show: true })
// })
// $('#myModal').on('shown.bs.modal', function () {

// $(document).on("click","#openModal", function(){
//   console.log("hi")
//   $("#myModal").modal({show: true})

>>>>>>> bb2004f5d927113c2df25602c1b3fe66b542edc4

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

//capturing the information from the add modal in the bars page

var barCity = window.location.city;
var barName = $("#usr");
var barImg = $("#barImg");
var barForm = $("#barForm");

console.log(barForm)
$(barForm).on("submit", function postBar(evnet){
  event.preventDefault();

  if (!barName.val().trim() || !barImg.val().trim()){
    return;
  }

  var newBar = {
    city: barCity.val().trim(),
    name: barName.val().trim(),
    img: barImg.val().trim()
  };
  console.log(newBar);

  submitBar(newBar)
});

function submitBar(Post){
  $.post("/api/bars/", Post, function(){
    window.location.href = "/bars"
  })
}

//capturing the information from the update modal in the forum page