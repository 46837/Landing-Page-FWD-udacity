

//create section 4 dynamically

let element = document.getElementsByClassName("landing__container")[3];


element.innerHTML = "<h2> section 4 </h2> <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>  <p> Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non. </p>";




// navbar global variables
let Nav = document.getElementById('navbar__list');
let scrol = document.getElementsByClassName("menu__link");


// sections global variables

let sectionNav = document.querySelectorAll('section');



//build the nav
let navlist = " ";
function createNavItem(idItem,dataItem) {
    navlist += `<li> <a class="menu__link"  href="#${idItem}">${dataItem}</a> </li>`;
    Nav.innerHTML=navlist;
  }

for(let i=0;i<sectionNav.length;i++){
    console.log("section nav data",sectionNav[0].dataset.nav);
    createNavItem(sectionNav[i].id,sectionNav[i].dataset.nav);




}

//scroll smooth in the page

for (let scrols of scrol) {

  scrols.addEventListener("click", clickHandler);

  function clickHandler(leo) {
    leo.preventDefault();
    let link = leo.currentTarget.getAttribute("href");
    window.scrollTo({
      top: document.querySelector(link).offsetTop,
      behavior: "smooth"
    });
  }
}

// Add class 'active' to section when near top of viewport

//define viewport by getBoundingClientRect() method......
const view = (port) => {
  let bound = port.getBoundingClientRect();
 return(bound.top <window.innerHeight /4 && bound.top>-200) ;

}


//define global variables
let active = document.getElementsByClassName('your-active-class');
//................................................................
const  getActive =  () => {

//add and remove class from all sections

  sectionNav.forEach(section => {

// if condition to test sections.....

    if (view(section)){

  //add active class
  section.classList.add('your-active-class');
  //add active when the section is in the view (highlighted nav item)
  document.querySelector(`[href="#${section.getAttribute('id')}"]`).classList.add('active');
  }
else{
  //remove active class
  section.classList.remove('your-active-class');
  //remove active when the section isn't in the view (highlighted nav item)
  document.querySelector(`[href="#${section.getAttribute('id')}"]`).classList.remove('active');   
}
});
}

//event to show the active 
document.addEventListener('scroll',getActive);




//create logo in navbar

let logo = document.createElement("img");

logo.src= "images/download.png";

document.body.appendChild(logo);


Nav.appendChild(logo);





//
for(var i=1; i<5;i++)

  {a++; i--;
   
  }
      
