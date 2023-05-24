let wafflesimage = document.querySelector(".waffles");
let eggs = document.querySelector(".eggs");
let frenchtoastimage = document.querySelector(".french-toast");
let steak = document.querySelector(".steak");
let burger = document.querySelector(".burger");
let tacos = document.querySelector(".tacos");
const japanAnswer = document.querySelector(".japan-answer")
let test = 'test'
let breakfast = ""
let dinner = ""

const handleSubmit = () => {
  if (breakfast === "" || dinner === "") {
    return
  }
  if (breakfast === 'waffles') {
    if (dinner === "steak") {
      japanAnswer.style.display = "block"
    } else if (breakfast === 'waffles') {
      if (dinner === "burgers") {
        brazilAnswer.style.display = "block"
      }
    } else ( breakfast === 'waffles') {
      
    }
      
    }
  } else if (breakfast === 'eggs') {
    
  } else {
    
  }


  
}
wafflesimage.onclick = function() {
  breakfast = "waffles"
  console.log(breakfast)
  handleSubmit()
  window.scrollTo(0, document.body.scrollHeight);
};


frenchtoastimage.onclick = function() {
  breakfast = "frenchtoast"
  console.log(breakfast)
  handleSubmit()
  window.scrollTo(0, document.body.scrollHeight);
};
eggs.onclick = function() {
  breakfast = "eggs"
  console.log(breakfast)
  handleSubmit()
  window.scrollTo(0, document.body.scrollHeight);
};

steak.onclick = function() {
  dinner = "steak"
  console.log(dinner)
  handleSubmit()
  window.scrollTo(0, document.body.scrollHeight);
};


burger.onclick = function() {
  dinner = "burger"
  console.log(dinner)
  handleSubmit()
  window.scrollTo(0, document.body.scrollHeight);
};
tacos.onclick = function() {
  dinner = "tacos"
  console.log(dinner)
  handleSubmit()
  window.scrollTo(0, document.body.scrollHeight);
};





