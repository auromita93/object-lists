var information = [];
//stores all people 

function createNewEntries(entry){
   //how data will be shown on the table
    var tr = $('<tr>');
    var td = $('<td>').text(entry.name);
    tr.append(td);
    td = $('<td>').text(entry.age);
    tr.append(td);
    td = $('<td>').text(entry.color);
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
  entry.color = $('#color').val();
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
                        