let todo = ["Work on code project", "Apply to jobs"];
let new_item = prompt("New to-do list item");
todo.push(new_item);

console.log("Current list: ");

for (let i = 0; i < todo.length; i++) {
    console.log(todo[i]);

    const new_point = document.createElement("li");
    new_point.textContent = todo[i];
    document.getElementById("todos").appendChild(new_point);    
}