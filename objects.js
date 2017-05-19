var information = [];
//stores all people and their info

function createNewEntries (entry) {
   //how data will be shown on the table
    'use strict'
    var tr = $('<tr>');
    var td = $('<td>').text(entry.name);
    tr.append(td);
    td = $('<td>').text(entry.age);
    tr.append(td);
    td = $('<td>').text(entry.food);
    tr.append(td);
    return tr;
}

//new info button handling
$('#addNew').on('click', newInfo);
//on click add new info
function newInfo (event){
    $('#dataPage').hide();
    $('#enterPage').show();
}

//submit and cancel button handling
$('#submit').on('click', submit)
function submit (event){
  $('#dataPage').show();
  $('#enterPage').hide();
  var entry = {};
  entry.name = $('#name').val();
  entry.age = $('#age').val();
  entry.food = $('#food').val();
  information.push(entry);
  populateData();
}
$('#cancel').on('click', cancel)
function cancel (event){
    $('#dataPage').show();
    $('#formPage').hide();
}


function populateData(){
    //actual population of the data
    var tbody = $('#dataPage');
    tbody.empty();
    information.forEach(function(i){
     var tr = createNewEntries(i)
     tbody.append (tr);
    });

}
                        