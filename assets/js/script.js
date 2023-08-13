'use strict';



/**
 * Add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * MOBILE NAVBAR TOGGLER
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");

const toggleNav = () => {
  navbar.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNav);



/**
 * HEADER ANIMATION
 * When scrolled donw to 100px header will be active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});



/**
 * SLIDER
 */

const slider = document.querySelector("[data-slider]");
const sliderContainer = document.querySelector("[data-slider-container]");
const sliderPrevBtn = document.querySelector("[data-slider-prev]");
const sliderNextBtn = document.querySelector("[data-slider-next]");

let totalSliderVisibleItems = Number(getComputedStyle(slider).getPropertyValue("--slider-items"));
let totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;

let currentSlidePos = 0;

const moveSliderItem = function () {
  sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px)`;
}

/**
 * NEXT SLIDE
 */

const slideNext = function () {
  const slideEnd = currentSlidePos >= totalSlidableItems;

  if (slideEnd) {
    currentSlidePos = 0;
  } else {
    currentSlidePos++;
  }

  moveSliderItem();
}

sliderNextBtn.addEventListener("click", slideNext);

/**
 * PREVIOUS SLIDE
 */

const slidePrevs = function () {
  if (currentSlidePos <= 0) {
    currentSlidePos = totalSlidableItems;
  } else {
    currentSlidePos--;
  }

  moveSliderItem();
}

sliderPrevBtn.addEventListener("click", slidePrevs);

/**
 * RESPONSIVE
 */
window.addEventListener("resize", function () {
  totalSliderVisibleItems = Number(getComputedStyle(slider).getPropertyValue("--slider-items"));
  totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;

  moveSliderItem();
});

/* IMAGE SLIDES */

let myIndex = 0;
carousel();

function carousel() {
  let x = document.getElementsByClassName('mySlides');
  for (let i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1
    myIndex++;
  }
  x[myIndex-1].style.display = 'block';
  setTimeout(carousel, 4000)
}

let myIndexMobile = 0;
carouselMobile();

function carouselMobile() {
  let x = document.getElementsByClassName('mySlidesMobile');
  for (let i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
  }
  // myIndex++;
  if (myIndexMobile > x.length) {
    myIndex = 1
    myIndex++;
  }
  x[myIndex-1].style.display = 'block';
  setTimeout(carouselMobile, 4000)
}


/*Project popup window */
const projectData = [
{
  id:'1',
  images: [
      './assets/images/kisiwani-one.jpg',
       './assets/images/kisiwani-two.jpg',
      './assets/images/kisiwani-three.jpg',

  ],
  captions: [
    'A picture showing the participatory critical mapping process of Kisiwani community elders drawing out their Island, Kilifi, Kenya',
    '- A picture showing the participatory critical mapping process of Kisiwani community elders drawing out their Island, Kilifi, Kenya',
    'A drone imagery of Kisiwani Island, Kilifi, Kenya. '
  ],
  clip: './assets/images/Overview-Amazing_x264.mp4',
  title: 'Kisiwani Island Project Participatory Mapping',
  content: 'The critical participatory mapping of Kisiwani Island focused on the spatialities and dwelling perspectives of the Giriama indigenous community inhabiting the island. The exercise captured and co-developed a more embedded narrative and spatial representation that focused mainly on the element of citizenship and their right to occupy the island, access to natural resources around them, and access to key social amenities, that are all currently missing for the virtue of the island being legally within a marine reserve. This was done together with a group of carefully selected elders and key participants from the respective communities found on the island. The mapping combined an overhead drone imagery lens with ground lenses of the actual situation of the respective dwelling cultures and additionally captured the participatory counter-mapping exercise, complimented with carefully selected oral narratives. All these aforementioned techniques helped in depicting the spatial violence inflicted upon the communities as a result of how maps and their agency co-produced new territories of inclusion and exclusion, and new realities that continuously disempower the vulnerable and already marginalized indigenous communities.'
},
{
  id:'2',
  images: [
    './assets/images/Creek1.jpg',
     './assets/images/Creek2.jpg',
     './assets/images/Creek3.jpg',
     './assets/images/Creek4.jpg',
     './assets/images/Creek5.jpg',
     './assets/images/Creek6.jpg',
  ],
  captions: [
      'View of the mangrove ecosystem',
      'Engaging the community members in the Dabaso area during a fieldwork survey, in Kilifi, Kenya',
      'A picture showing the coral blocks used for building modern houses at the expense of the coral reefs extraction and destruction, Kisiwani, Kenya',
      'An illustration showing the contrasting realities emanating from the imposed spatial restrictions in and around Mida Creek area, Kilifi, Kenya',
      'A Kobo collect map showing the areas covered by the primary data collection in and around Mida Creek Area, Kilifi, Kenya',
      '- An illustration showing the contrasting realities within the Mida Creek area, Kilifi County, Kenya',
  ],
  title: 'Mapping Spatialities in and around Mida Creek Area',
  content: 'The project was a fieldwork survey in and around Mida Creek are. It targeted villages around the creek area, trying to capture their spatialities and dwelling cultures, and oral historical narratives. The project used observation sheets, transect walks, semi-structured questionnaires and kobo collect as techniques for data collection. The field survey helped to draw out spatial inequalities existing in the area, struggle for access to their own resources, growing marginalization of the indigenous communities and the continuous displacement happening due to the burgeoning urbanization and primitive accumulation. The project aimed at drawing out and making visible these struggles persisting in the area as the first step to understanding and bringing out the day-to-day survival struggles of the subaltern population. '
},
{
  id:'3',
  images: [
     './assets/images/Coast1.jpg',
     './assets/images/Coast2.jpg',
     './assets/images/Coast3.jpg',
     './assets/images/Coast4.jpg',
     './assets/images/Coast5.jpg',
  ],
  captions: [
    'A map showing the network of community-based solidarity movements in and around Mida Creek Area, Kilifi County Kenya.',
    'An engagement with the Bidii Yetu women group boardwalk restaurant',
    'A community social hall built within the mangroves by the Dabaso conservation group',
    'A sculpture showing a tortoise trapped in plastic waste to raise awareness of the effects of plastic waste to marine life',
    'A conceptual section showing the importance and functionality of mangroves in the coastal ecosystem',
],
  title: 'Mapping Solidarity Networks in Mida Creek Area',
  content: 'The project mapped Community Based Organizations’ in and around Mida Creek. The intention of the project was as an initial step to make visible solidarity networks working tirelessly to survive around Mida Creek Area, living within strict and negotiated spatial restrictions emanating from conservatory efforts of both the Arabuko Sokoke National Park Forest and the Watamu Marine Park and reserve. The exercise involved mapping and profiling the organizations’ to understand their scope and nature of operations. The final map produced was submitted to Kenya Wildlife Service for their awareness of the community mobilization efforts to co-exist and survive in this precarious context. '
},
{
  id:'4',
  images: [
        './assets/images/Agency1.jpg',
        './assets/images/Agency2.jpg',
        './assets/images/Agency3.jpg',
        './assets/images/Agency4.jpg',
      ],
  captions: [
        'An illustrative diagram combining the historical timeline, and a diagrammatic expression of the different community occupations across the Coastal Kenya landscape, through space and time',
        'An alternative Coastal Kenya historical timeline diagram repositioning Mijikenda Community within their Territory',
        'An illustrative diagram showing the historical settlement transition and land ownership mechanisms of the Mijikenda Community, in Coastal Kenya',
        'A historical caricature section showing power dynamics and how they interacted with the Mijikenda community in Coastal Kenya, through time and space',
    ],
  title: 'Re-Writing History Through Cartographic Agency',
  content: 'The project proposed to re-write Coastal Kenya history through a critical reflection of how historical maps, their authors and the territories they produced, affected the indigenous Mijikenda community. It was an investigation of spatial dynamics and how maps propose new world views that do not necessarily favor indigenous communities. Through a robust historical and archival investigations, the project revealed a genealogy of spatial violence inflicted upon the Indigenous Mijikenda community through out history, and how, to a great extent, the same predicament is prevailing until now. It is a history that demonstrate the gradual de-communing process of the community’s commons through maps and their inherent mapping processes, that dispossessed the community their territory and rights to use their own resources. The project was an invitation to develop alternative historical narratives that are meant to demonstrate the continuous struggle for the indigenous communities to remain resilient through various epochs of hegemonies and their discourses. '
},
{
  id:'5',
  images: [
    './assets/images/kisiwani-one.jpg',
     './assets/images/kisiwani-two.jpg',
     './assets/images/Overview-compensating.jpg',
  ],
  title: 'Kisiwani Island Project Participatory Mapping',
  content: 'The critical participatory mapping of Kisiwani Island focused on the spatialities and dwelling perspectives of the Giriama indigenous community inhabiting the island. The exercise captured and co-developed a more embedded narrative and spatial representation that focused mainly on the element of citizenship and their right to occupy the island, access to natural resources around them, and access to key social amenities, that are all currently missing for the virtue of the island being legally within a marine reserve. This was done together with a group of carefully selected elders and key participants from the respective communities found on the island. The mapping combined an overhead drone imagery lens with ground lenses of the actual situation of the respective dwelling cultures and additionally captured the participatory counter-mapping exercise, complimented with carefully selected oral narratives. All these aforementioned techniques helped in depicting the spatial violence inflicted upon the communities as a result of how maps and their agency co-produced new territories of inclusion and exclusion, and new realities that continuously disempower the vulnerable and already marginalized indigenous communities.'
},
]

const projectSection = document.getElementById('proModal');
let closeBtn;


const openBtns = document.querySelectorAll('#openBtn');

  for (let i = 0; i < openBtns.length; i++) {
    openBtns[i].addEventListener('click', handleButtonClick)
  }




function generateDynamicImages(selectedProject) {
  const modalContainer = document.querySelectorAll('.modal-container');
  const slideContainer = document.querySelector('.slide-modal-container');
  slideContainer.innerHTML = '';

  // Add the dynamic images
  for (let i = 0; i < selectedProject.images.length; i++) {
    const slide = document.createElement('div');
    slide.classList.add('mySlidesz', 'fade');

    const imageSrc = selectedProject.images[i];
    const imageElement = document.createElement('img');
    imageElement.classList.add('mySlide-img');
    imageElement.src = imageSrc;
    imageElement.style.width = '100%';
    imageElement.addEventListener('click', function() {
      displayImageModal(this.src);
    });

    imageElement.addEventListener('click', function () {
      const caption = selectedProject.captions[i];
      displayImageModal(imageSrc, caption);
    });

    slide.appendChild(imageElement);
    slideContainer.appendChild(slide);

    const captions = document.createElement('div');
    const captionsMobile =document.createElement('div');
    captionsMobile.classList.add('text-mobile');
    captions.classList.add('text');
    captions.innerText = selectedProject.captions[i];
    captionsMobile.innerText = selectedProject.captions[i];
    slide.appendChild(captions);

  }

  // Add the video slide
  if (selectedProject.clip) {
    const videoSlide = document.createElement('div');
    videoSlide.classList.add('mySlidesz', 'fade');

    const videoElement = document.createElement('video');
    videoElement.classList.add('mySlide-video');
    videoElement.src = selectedProject.clip;
    videoElement.controls = true;// Add video controls (play, pause, etc.)
    videoElement.controlsList = 'nodownload';

    const videoCaptionText = document.createElement('div');
    videoCaptionText.classList.add('text');
    videoCaptionText.innerText = 'Video Clip Caption'; // Replace with the actual video caption text

    // Wrap the video and caption in a slide container
    const videoSlideContent = document.createElement('div');
    videoSlideContent.classList.add('slide-modal-container');
    videoSlideContent.appendChild(videoElement);
    videoSlideContent.appendChild(videoCaptionText);

    videoSlide.appendChild(videoSlideContent); // Add the slide container with video and caption
    slideContainer.appendChild(videoSlide);


  }


  const prevSlide = document.createElement('p');
  prevSlide.classList.add('prev');
  prevSlide.innerText  = '<'
  const nextSlide = document.createElement('p');
  nextSlide.classList.add('next');
  nextSlide.innerText  = '>';

  slideContainer.appendChild(prevSlide);
  slideContainer.appendChild(nextSlide);

  const dotContainer = document.querySelector('.dot-container');
  dotContainer.innerHTML = '';

  for (let i = 0; i < selectedProject.images.length; i++) {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    dot.addEventListener('click',function() {
      currentSlide(i + 1);
    });
    dotContainer.appendChild(dot);
  }


  // const prevSlide = document.querySelector('.prev');
  // const nextSlide = document.querySelector('.next');

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  prevSlide.addEventListener('click', () => {
    plusSlides(-1);
    console.log('prev');
  });

  nextSlide.addEventListener('click', () => {
    plusSlides(1);
  });


  // Call the function to handle slide functionality

  showSlides(slideIndex);
}


function handleButtonClick(event) {
  const button = event.target;
  const projectIndex = button.dataset.index;
  const selectedProject = projectData.find(project => project.id === projectIndex )

   // Update projectSection with the details of the selected project
   const projectDetailsHtml = `
   <span class="close" id="modalClose" >&times;</span>
   <div class="modal-container">
    <div class= "slide-modal-container">

      <div class="mySlidesz fade">
        <div class="numbertext">1 / ${selectedProject.images.length}</div>

        <div class="text">Caption Text</div>
      </div>

    </div>
        <div class="dot-container" style="text-align:center">
          <div class='dot'></div>
        </div>
   <br>

     <div class="modal-info-container">
       <h3 class = 'headline headline-3'>${selectedProject.title}</h3><br>
       <p class="modal-info">${selectedProject.content}</p>
     </div>
   </div>
 `;

 projectSection.innerHTML = projectDetailsHtml;

 // Display the projectSection (assuming it was hidden previously)
 projectSection.style.display = 'block';
  document.body.classList.add('disable-scroll');

  closeBtn =document.getElementById('modalClose');
  closeBtn.onclick = function() {
  projectSection.style.display = "none";
  document.body.classList.remove('disable-scroll');
  }
  generateDynamicImages(selectedProject);
  }



// Function to display the image modal
function displayImageModal(src) {
  const modal = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage');
  modalImage.src = src;
  modal.style.display = 'block';

  const closeModal = document.getElementById('closeImageModal');
  closeModal.onclick = function() {
    modal.style.display = 'none';
    modalImage.classList.remove('zoomed');
  };

  // Toggle zoom effect on click
  modalImage.onclick = function() {
    modalImage.classList.toggle('zoomed');
  };
}

// Add an event listener to close the zoomed image modal when the close button is clicked
const imageModalCloseBtn = document.getElementById('closeImageModal');
imageModalCloseBtn.addEventListener('click', () => {
  const modal = document.getElementById('imageModal');
  modal.style.display = 'none';
});


// /* SLIDE MODAL FUNCTION */


  let slideIndex = 1;
  const slides = document.getElementsByClassName('mySlidesz');
  const dots = document.getElementsByClassName('dot');

  function showSlides(n) {
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }

    // Remove active class from all dots
    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.remove('active');
    }

    // Display the current slide
    slides[slideIndex - 1].style.display = 'block';

    // Add active class to the corresponding dot
    dots[slideIndex - 1].classList.add('active');
  }

// Get references to all "Read more" buttons and hidden text sections
const readMoreButtons = document.querySelectorAll('#readBtn');

// Function to toggle the visibility of the hidden text for a specific button
function toggleHiddenText(event) {
  const button = event.target;
  const targetId = button.dataset.target;
  const targetText = document.getElementById(targetId);
  const targetDisplay = window.getComputedStyle(targetText).display;

  if (targetDisplay === 'none') {
    // Show the hidden text
    targetText.style.display = 'inline';
    button.textContent = 'Read less';
  } else {
    // Hide the hidden text
    targetText.style.display = 'none';
    button.textContent = 'Read more';
  }
}

// Add click event listeners to all "Read more" buttons
readMoreButtons.forEach((button) => {
  button.addEventListener('click', toggleHiddenText);
});

//ShowMore project Modal
// Add this to your existing JavaScript code
const projectModal = document.getElementById("showprojectModal");
const closeProjectModalBtn = document.getElementById("showcloseProjectModal");
const projectSlides = document.getElementById("showprojectSlides");
const prevSlideBtn = document.getElementById("showprevSlide");
const nextSlideBtn = document.getElementById("shownextSlide");
const projectTitle = document.getElementById("showprojectTitle");
const projectContent = document.getElementById("showprojectContent");

// Sample project data
const project = {
  id: "project1",
  images: [
    "./assets/images/Page_01.jpg",
    "./assets/images/Page_02.jpg",
    "./assets/images/Page_03.jpg",
    "./assets/images/Page_04.jpg",
    "./assets/images/Page_05.jpg",
    "./assets/images/Page_06.jpg",
    "./assets/images/Page_07.jpg",
    "./assets/images/Page_08.jpg",
    "./assets/images/Page_09.jpg",
    "./assets/images/Page_10.jpg",
    "./assets/images/Page_11.jpg",
    // Add more image URLs
  ],
};

// Function to open the project modal
function openProjectModal() {
  projectTitle.textContent = project.title;
  projectContent.textContent = project.content;

  // Create slide elements for each image
  projectSlides.innerHTML = project.images
    .map((image) => `<img src="${image}" alt="Project Image">`)
    .join("");

  projectModal.style.display = "block";
}

// Function to close the project modal
function closeProjectModal() {
  projectModal.style.display = "none";
}

// Slide functionality
let showslideIndex = 1;

function showSlide(n) {
  if (n > project.images.length) {
    showslideIndex = 1;
  }
  if (n < 1) {
    showslideIndex = project.images.length;
  }

  const slides = projectSlides.getElementsByTagName("img");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[showslideIndex - 1].style.display = "block";
}

function changeSlide(n) {
  showSlide((showslideIndex += n));
}

// Add event listeners
prevSlideBtn.addEventListener("click", () => changeSlide(-1));
nextSlideBtn.addEventListener("click", () => changeSlide(1));

// Open the project modal when the "Show More Projects" button is clicked
const showMoreButton = document.getElementById("showMoreButton");
showMoreButton.addEventListener("click", openProjectModal);

// Close the project modal when the close button is clicked
closeProjectModalBtn.addEventListener("click", closeProjectModal);

// Close the project modal when clicking outside the modal content
window.addEventListener("click", (event) => {
  if (event.target === projectModal) {
    closeProjectModal();
  }
});

function toggleImageZoom(image) {
  image.classList.toggle("zoomed");
}

// Add event listener to each image to toggle zoom
const showimages = projectSlides.getElementsByTagName("img");
for (let i = 0; i < images.length; i++) {
  showimages[i].addEventListener("click", function () {
    toggleImageZoom(this);
  });
}

const serviceButtons = document.querySelectorAll(".tag-btn");

serviceButtons.forEach(button => {
  const getInTouchButton = button.querySelector(".get-in-touch-btn");

  button.addEventListener("mouseenter", () => {
    getInTouchButton.style.transform = "translateY(0)";
  });

  button.addEventListener("mouseleave", () => {
    getInTouchButton.style.transform = "translateY(100%)";
  });
});







