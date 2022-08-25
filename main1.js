// get all elements
// create task
// save local storage
// clear inputs 
// read
// count
// delete
// update
// search
// clean



// get all elements
let ProjectName = document.getElementById('ProjectName');
let Client = document.getElementById('Client');
let Year = document.getElementById('Year');
let TaskDescription = document.getElementById('TaskDescription');

let Arch = document.getElementById('Arch');
let FS = document.getElementById('FS');
let RCP = document.getElementById('RCP');
let REQ = document.getElementById('REQ');

let ELEC = document.getElementById('ELEC');
let LC = document.getElementById('LC');
let FA = document.getElementById('FA');

let WS = document.getElementById('WS');
let DR = document.getElementById('DR');
let FF = document.getElementById('FF');

let AC = document.getElementById('AC');
let MV = document.getElementById('MV');

let create = document.getElementById('create');

let tbody = document.getElementById('tbody');

let delAllContainer = document.getElementById('delAllContainer');

// console.log(Arch.Value);

// create task

let tasksData;
if(localStorage.tasks != null){
    tasksData = JSON.parse(localStorage.tasks);
}else{
    tasksData =  [];
}


create.onclick = function (){
    let newTask = {
        ProjectName:ProjectName.value,
        Client:Client.value,
        Year:Year.value,
        TaskDescription:TaskDescription.value
        // Arch:Arch.value,
        // FS:FS.value,
        // RCP:RCP.value,
        // REQ:REQ.value,
        // ELEC:ELEC.value,
        // LC:LC.value,
        // FA:FA.value,
        // WS:WS.value,
        // DR:DR.value,
        // FF:FF.value,
        // AC:AC.value,
        // MV:MV.value,
    }
    tasksData.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(tasksData) );

    clearInputs();

    showData();

    console.log(tasksData);

}

// clear inputs 
function clearInputs(){
    ProjectName.value = '';
    Client.value = '';
    Year.value = '';
    TaskDescription.value = '';

    // console.log('done');
}


// read

function showData()
{
    let tRow = '';
    for(let i=0; i<tasksData.length; ++i ){
        tRow += 
        `
            <tr>
                <td>${i}</td>
                <td>${tasksData[i].ProjectName}</td>
                <td>${tasksData[i].TaskDescription}</td>
                <td>${tasksData[i].Client} </td>
                <td>${tasksData[i].Year}</td>
                <td>X</td>
                <td>X</td>
                <td>X</td>
                <td>X</td>
                <td>X</td>
                <td>X</td>
                <td>X</td>
                <td>X</td>
                <td>X</td>
                <td>X</td>
                <td>X</td>
                <td>X</td>
                <td><button>update</button></td>
                <td><button onclick="deleteTask(${i})">delete</button></td>
            </tr>
        `
    };
tbody.innerHTML = tRow;
// add delete all button 
if(tasksData.length > 0){
    delAllContainer.innerHTML = `
    <button class="bigBtn" onclick="deleteAll">delete all</button>
    `
}else{delAllContainer.innerHTML = '' }
}
showData();

// count

// delete
function deleteTask(i)
{
    tasksData.splice(i, 1);
    localStorage.tasks = JSON.stringify(tasksData);
    showData();
}


// delete all
// function deleteAll();



// update
// search
// clean
