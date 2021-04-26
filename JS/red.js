
  const mainmenu = document.getElementById("menuItem");


  function menutoggle(){
      	const menuu = document.querySelector(".menu");

   	if (mainmenu.style.visibility === "visible")
   		{
   		mainmenu.style.visibility = "hidden";

   		}
   		else 
   		{
   			mainmenu.style.visibility = "visible";
   		}

    }


    const showcase = document.querySelector(".imageshowcase");
      const sale = document.querySelectorAll(".forsale");

    function change1(){

      showcase.innerHTML = "<img src = images/product-1.jpg>" 
  
    

    }

    function change2(){

      document.querySelector('.imageshowcase').innerHTML = "<img src = images/newproduct2.jpg>";

    }


    function change3(){

      showcase.innerHTML = "<img src = images/newproduct3.jpg>";

    }

     function change4(){

      showcase.innerHTML = "<img src = images/newproduct4.jpg>";
}




// This is the javascript for account.html and account.css //




  const loginn = document.getElementById('login')
  const registerr = document.getElementById('register')
  const button = document.getElementById('colorr')
  

function register(){
  loginn.style.display = "none";
  registerr.style.display = "block";
  button.style.left = "110px"
  
}


function login(){
  loginn.style.display = "block";
  registerr.style.display = "none";
  button.style.left = "0px"
  
}
   

