document.getElementById("submitButton").addEventListener("click", addPost);
document.getElementById("removeButton").addEventListener("click", removeCompletedPosts);

function addPost() {
    let table = document.getElementById("todoTable");
    let row = table.insertRow();
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let formData = new FormData(document.getElementById("newTaskForm"));
    if(formData.get("newTask")=="") {
        cell1.innerHTML = "Empty";
    } else {
        cell1.innerHTML = formData.get("newTask");
    }
    cell2.innerHTML = formData.get("complete");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "Completion";
    checkbox.id = "completion";
    if(formData.get("complete")=="No") {
        cell3.appendChild(checkbox);
    } else {
        checkbox.defaultChecked = "true";
        cell3.appendChild(checkbox);
    }
    
}

function removeCompletedPosts() {
    for(let i=0; i<document.getElementById("todoTable").rows.length; i++) {
        let text = document.getElementById("todoTable").rows[i].cells[1];
        let checkbox = document.getElementById("todoTable").rows[i].cells[2].children[0].checked;
        if(text.textContent.trim() == "Yes") {
            document.getElementById("todoTable").deleteRow(i);
            i--;
        } else if(checkbox) {
            document.getElementById("todoTable").deleteRow(i);
            i--;
        }
    }
}