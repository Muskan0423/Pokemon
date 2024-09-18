let Load=document.querySelector(".submit")
let flipcard=document.querySelector(".flip-card")
let dataforpokemon=localStorage.getItem("data")
console.log(dataforpokemon,"dataforpokemon");

Load.addEventListener("click",getData)
function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');
  const array=Array.from(li)
  console.log(array);
  
  array.push(dataforpokemon)
    console.log(array);
    
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }



  function Function1() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }


  async function getData() {
    const url = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      console.log(json,"api response ");
      let data=json.results;
      console.log(data);
      localStorage.setItem("data",JSON.stringify(data))
      
    } catch (error) {
      console.error(error.message);
    }
  }
  