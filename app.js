const takeRisk = document.getElementsByClassName("take-risk-btn")[0];
const input = document.getElementsByClassName("input")[0];
const ulList = document.querySelector(".List");

function addTodo() {
  if (input.value === "") {
    Swal.fire({
        icon: "warning",
        title: "Hold up! Your bucket's lighter than a feather!",
        text: "Even couch potatoes have bigger plans! What's your secret mission?",
        footer: '<a href="#">Stuck? Time to phone a friend or ask the universe!</a>',
        confirmButtonText: "Challenge Accepted!",
        confirmButtonColor: "#8e7cc3"
      });
    
  } else {
    let liElement = document.createElement("li");
    liElement.className = "bucket-item";
    
    let flameIcon = document.createElement("i");
    flameIcon.className = "fa-solid fa-fire flame-icon"; 

    let todoDiv = document.createElement("div");
    todoDiv.textContent = input.value;
    todoDiv.className="todoDiv";
    liElement.appendChild(flameIcon);
    liElement.appendChild(todoDiv);

   
    let deleteButton = document.createElement("span");
    deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    deleteButton.className = "delete-btn";
    todoDiv.appendChild(deleteButton);


    ulList.appendChild(liElement);


    input.value = "";


    deleteButton.onclick = function() { //eger butona tiklanirsa span elementi olarak atadim baslangic icin en sonda olusturdugumuz lielementini silsin diyoruz.

        liElement.classList.add('fade-out');
        liElement.addEventListener('animationend', function () {

            liElement.remove();
        })


     
    }
  }
}

takeRisk.addEventListener("click", addTodo);


const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  addTodo();
});