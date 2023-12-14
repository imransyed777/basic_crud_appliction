var selectedRow = null

function onFormSubmit(e) {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
}

//Retrieve the data
function readFormData() {
    var formData = {};
    formData["enterName"] = document.getElementById("enterName").value;
    formData["emAil"] = document.getElementById("emAil").value;
    // formData["age"] = document.getElementById("age").value;
    var ageInput = document.getElementById("age").value;
    if (/^\d{1,2}$/.test(ageInput)) {
        formData["age"] = ageInput;
    } else {
        alert("Please enter a valid age with at most two digits.");
        return null; // Return null to indicate validation failure
    }
    formData["dob"] = document.getElementById("dob").value;
    return formData;
}
//ID AUTO INCREMENT
var currentId = 1; // Initialize the current ID

//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    
    // Increment the current ID
    data.id = currentId++;

    // Insert cells and set innerHTML
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.id;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.enterName;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.emAil;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.age;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.dob;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

function checknum(){
    if(document.getElementById("enterName").value>=0||document.getElementById("enterName").value<=0){
        window.alert("please enter a valid name")
    }
    else{

    }
}
//Edit the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("enterName").value = selectedRow.cells[1].innerHTML;
    document.getElementById("emAil").value = selectedRow.cells[2].innerHTML;
    document.getElementById("age").value = selectedRow.cells[3].innerHTML;
    document.getElementById("dob").value = selectedRow.cells[4].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.enterName;
    selectedRow.cells[1].innerHTML = formData.product;
    selectedRow.cells[2].innerHTML = formData.age;
    selectedRow.cells[3].innerHTML = formData.dob;
}

//Delete the data
function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset the data
function resetForm() {
    document.getElementById("enterName").value = '';
    document.getElementById("emAil").value = '';
    document.getElementById("age").value = '';
    document.getElementById("dob").value = '';
    selectedRow = null;
}
