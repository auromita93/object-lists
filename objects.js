'use strict';
var information = [];
//stores all people and their info

$("#addNew").click(function(){
    formPage();
});

$("#cancel").click(function(){
    dataPage();
})

$("#submit").click(function(){
    event.preventDefault();
    information.push({
        name: $("#name").val(),
        age: $("#age").val()
});
dataPage();
displayData();
$("input").val();
});

//table data showcase
function displayData(){
 $("#dataPage").empty();
 var tr, td, button;
    for(var i = 0; i < information.length; i++){
    tr = $("<tr>");
    
    td = $("<td>");
    td.text(information[i].name);
    tr.append(td);
    
    td = $("<td>");
    td.text(information[i].age);
    
    //adding edit/delete button in tbody
    td =$("<td>");
    button = $("<button type='button' class='edit'");
    button.text("Edit");
    td.append(button);
    button = $("<button type='button' class='delete'");
    button.text("Delete");
    td.append(button);
    tr.append(td);
    
    $("#dataPage").append(tr);  
    }
}

//delete button
$(".delete").click(function() {
    $(this).parents("tr").remove();
    var deleteButton = $(this).parents().siblings(":first").text();
    information = information.filter(function(inf) {
        return inf.name !== deleteButton;
    });
  
});

//edit button
$(".edit").click(function() {
    var editButton = $(this).parents().siblings(":first").text();
    var editInfo = $.grep(information, function(inf) {
        return inf.name === editButton;
    }) [0];
    formPage();
    $("#name").val(editInfo.name);
    $("#age").val(editInfo.age);  
    information = information.filter(function(inf) {
        return inf.title !==editButton;
    });

});


//on click show form page
function formPage(){
   $("#dataPage").hide();
   $("#enterForm").show();
}

//on click show data page
function dataPage (){
    $("#dataPage").show();
    $("#enterForm").hide();
}









                        





                        