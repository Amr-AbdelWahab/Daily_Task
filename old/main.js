// get all elements
let ProjectName = document.getElementById('ProjectName');
let Path = document.getElementById('Path');
let TaskDescription = document.getElementById('TaskDescription');

let create = document.getElementById('create');

let tbody = document.getElementById('tbody');

let delAllContainer = document.getElementById('delAllContainer');

let mode = 'create';
let tmp;


// create task

if(localStorage.tasks != null  ){
    tasksData = JSON.parse(localStorage.tasks) 
}else{
    let tasksData =[];
    } 


create.onclick = function(){
    let task = {
        ProjectName:ProjectName.value,
        Path:Path.value,
        TaskDescription:TaskDescription.value
    }
    if(mode === 'create'){
        tasksData.push(task);
    }else{
        tasksData[tmp] = task;
    }
    mode = 'create';
    create.innerHTML = '+ Create Task +';

    // save local storage
    localStorage.setItem('tasks', JSON.stringify(tasksData));
    clearInputs();
    showData();
}


// clear inputs 
function clearInputs(){
    ProjectName.value = '';
    Path.value = '';
    TaskDescription.value = '';
}

// read
function showData(){
    let tRow = '';
    for ( let i = 0 ; i < tasksData.length ; ++i){
        tRow += 
        `
            <tr>
                <td>${i+1}</td>
                <td>${tasksData[i].ProjectName}</td>
                <td>${tasksData[i].TaskDescription}</td>
                <td>${tasksData[i].Path}</td>
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
                <td><button onclick = "updateTask(${i})" >update</button></td>
                <td><button onclick = "deleteTask(${i})" class = "big Btn">delete</button></td>
            </tr>
`
    }
    tbody.innerHTML = tRow;
    if( tasksData.length>0){
        delAllContainer.innerHTML = `
        <button onclick = "deleteAll()" class = "deleteAll">Delete All (${tasksData.length})</button>
        `
    }else{
        delAllContainer.innerHTML = '';
    }
    
}
showData();

// delete / delete all
function deleteTask(i)
{
    tasksData.splice(i,1);
    localStorage.tasks = JSON.stringify(tasksData);
    showData();
}

function deleteAll()
{
    tasksData.splice(0);
    localStorage.tasks = JSON.stringify(tasksData);
    showData();
}

// update
function updateTask(i)
{
    ProjectName.value = tasksData[i].ProjectName;
    Path.value = tasksData[i].Path;
    TaskDescription.value = tasksData[i].TaskDescription;
    create.innerHTML = 'update task data';
    // create.style.backgroundColor = 'var(--Dark-B-even-color)';
    ProjectName.focus;
    mode = 'update';
    tmp = i;
    scroll({
        top:0,
        behavior:'smooth'
    })


}
// search
// clean