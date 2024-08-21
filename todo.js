const localName = localStorage.getItem("name");
const input = document.getElementsByClassName("input")[0];
input.placeholder = localName + "'s to-do list";
const buttonAdd = document.getElementsByClassName("buttonAdd")[0];
let todolist = document.getElementsByClassName("todolist")[0];
let containerDone = document.createElement("div");
containerDone.className = "container";
document.body.appendChild(containerDone);
containerDone.innerText = "Done";
function create() {
  if (input.value != "") {
    const dateContainer = document.createElement("div");
    const date = new Date();
    const formatter = new Intl.DateTimeFormat("en-GB", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    const formattedTime = formatter.format(date);
    dateContainer.innerHTML = formattedTime;
    dateContainer.className = "dateContainer";
    const editor = document.createElement("div");
    editor.className = "editor";
    const edit = document.createElement("button");
    edit.className = "edit";
    edit.innerHTML = "edit";
    const dlt = document.createElement("button");
    dlt.className = "dlt";
    dlt.innerHTML = "delete";
    const done = document.createElement("button");
    done.className = "done";
    done.innerHTML = "done";
    const todo = document.createElement("div");
    const text = document.createElement("div");
    const styleDiv = document.createElement("div");
    styleDiv.className = "stylee";
    text.innerHTML = input.value;
    text.className = "text";
    todo.className = "todo";
    editor.appendChild(edit);
    editor.appendChild(dlt);
    editor.appendChild(done);
    styleDiv.appendChild(text);
    styleDiv.appendChild(dateContainer);
    todolist.appendChild(todo);
    styleDiv.appendChild(editor);
    todo.appendChild(styleDiv);
    input.value = "";
    dlt.addEventListener("click", function () {
      todo.remove();
    });
    done.addEventListener("click", function () {
      if (todo.childElementCount == 2) {
        alert("edit is working");
      } else {
        containerDone.appendChild(todo);
        editor.remove();
      }
    });
    console.log(styleDiv.childElementCount);
    edit.addEventListener("click", function () {
      // const editedText = prompt("editlesen zuilee oruulna uu", text.innerText);
      // text.innerText = editedText;
      const roww = document.createElement("div");
      edit.style.pointerEvents = "none";
      const editInput = document.createElement("input");
      roww.appendChild(editInput);
      const doneButton = document.createElement("button");
      doneButton.innerHTML = "done";
      roww.appendChild(doneButton);
      todo.appendChild(roww);
      editInput.value = text.innerHTML;
      console.log(styleDiv.childElementCount);
      doneButton.addEventListener("click", function () {
        if (editInput.value == "") {
          alert("Empty");
        } else {
          text.innerHTML = editInput.value;
          editInput.style.display = "none";
          doneButton.style.display = "none";
          edit.style.pointerEvents = "auto";
          roww.remove();
        }
      });
    });
  }
}

buttonAdd.onclick = create;
