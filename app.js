const takeRisk = document.getElementsByClassName("take-risk-btn")[0];
const input = document.getElementsByClassName("input")[0];
const ulList = document.querySelector(".List");

function addTodo() {
  if (input.value === "") {
    Swal.fire({
      icon: "warning",
      title: "Oops! Bucket's Empty!",
      text: "Even Biden has bigger plans! What's your dream?",
      footer: '<a href="#">Need inspiration? Ask Joe!</a>',
    });
    
  } else {
    let liElement = document.createElement("li");
    liElement.className = "bucket-item";
    
    
    let todoDiv = document.createElement("div");
    todoDiv.textContent = input.value;
    todoDiv.className="todoDiv";
    liElement.appendChild(todoDiv);

   
    let deleteButton = document.createElement("span");
    deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    deleteButton.className = "delete-btn";
    liElement.appendChild(deleteButton);


    ulList.appendChild(liElement);


    input.value = "";


    deleteButton.onclick = function() {
      liElement.remove();
    }
  }
}

takeRisk.addEventListener("click", addTodo);