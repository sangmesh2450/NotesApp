//console.log("Hello world");
displayNotes();
document.querySelector(".input-btn").addEventListener("click", (e) => {

  //  console.log("insdie the textwindow")
  displayNotes();
});

function cardMaker(text, i) {
  return `        <div class="cardNote" style="width: 18 rem; height: 20 rem; margin: 3px">
                       <div class="card-body">
                        <h5 class="noteId">Note ${i}</h5>
                        <p id ="savedTextP">${text}</p>
                       <button id ="${i}" class="deleteBtn btn btn-primary" onclick="deleteNote(this.id)">Delete Note</button>
                    </div>
                    </div>`;
}
// displaying notes using localStorage class
function displayNotes() {
  const text = document.querySelector("#inputText").value;
  let notes = localStorage.getItem("#notes");
  if (notes === null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  //console.log(text);
  if (text !== "") {
    notesObj.push(text);
    localStorage.setItem("#notes", JSON.stringify(notesObj));
    document.querySelector("#inputText").value = "";
  }

  innerhtml = "";
  for (let i = 0; i < notesObj.length; i++) {
    innerhtml += cardMaker(notesObj[i], i + 1);
  }
  if (notesObj.length !== 0)
    document.querySelector("#notes").innerHTML = innerhtml;
  else {
    document.querySelector(
      "#notes"
    ).innerHTML = `<h1>Enter your note to display</h1>`;
  }
}
// used to delete notes using the index id of button tag
function deleteNote(index) {
  let notes = localStorage.getItem("#notes");
  if (notes === null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.splice(index-1,1)
  localStorage.setItem("#notes", JSON.stringify(notesObj));
  displayNotes();
}
// this function is used to seach text in the app
search = document.getElementById('searchTxt');
search.addEventListener("input",()=>{
    searchtext = search.value.toLowerCase();
    //console.log(searchtext);
    card = document.getElementsByClassName("cardNote");
    for (let element of card){
      text = (element.getElementsByTagName("p")[0].innerText);
      if(text.includes(searchtext)){
      element.style.display="block";}
      else
      element.style.display="none";
    }

  });
