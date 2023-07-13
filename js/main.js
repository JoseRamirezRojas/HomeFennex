/** 
 * Functions that displays scroll back to top button
 */
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
}

const { createApp } = Vue
  createApp({
    data() {
      return {
        isMobile:/Mobile/.test(navigator.userAgent),
        currentSection:'',
        carouselStyle: {
          transform: ""
        },
        carouselItems : [],
        itemWidth: 0,
        currentPosition: 0
      };
    },
    mounted(){
      // fading in images from below
      var tags1 = document.querySelectorAll(".tag-up");
      const options1 = {
        root: null,
        rootMargin: '0px',
        threshold: .1  // percentage of visibility to trigger animation 
      }
      const callbacks1 = (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting){
            entry.target.classList.add('visible');
          }
          else {
            entry.target.classList.remove('visible'); //animates whenever elements return to viewport
          }
        });
      }
      let observer1 = new IntersectionObserver(callbacks1, options1); // checks if element intersect viewport
      tags1.forEach(element => {
        observer1.observe(element);
      });

      // fading in images from left
      var tags2 = document.querySelectorAll(".tag-right");
      const options2 = {
        root: null,
        rootMargin: '0px',
        threshold: .1  // percentage of visibility to trigger animation 
      }
      const callbacks2 = (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting){
            entry.target.classList.add('visible');
          }
          else {
            entry.target.classList.remove('visible'); //animates whenever elements return to viewport
          }
        });
      }
      let observer2 = new IntersectionObserver(callbacks2, options2); // checks if element intersect viewport
      tags2.forEach(element => {
        observer2.observe(element);
      });

      // fading in images from right
      var tags3 = document.querySelectorAll(".tag-left");
      const options3 = {
        root: null,
        rootMargin: '0px',
        threshold: .1   // percentage of visibility to trigger animation 
      }
      const callbacks3 = (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting){
            entry.target.classList.add('visible');
          }
          else {
            entry.target.classList.remove('visible'); //animates whenever elements return to viewport
          }
        });
      }
      let observer3 = new IntersectionObserver(callbacks3, options3); // checks if element intersect viewport
      tags3.forEach(element => {
        observer3.observe(element);
      });

      // *****************************************
      // ****************CAROUSEL*****************
      // *****************************************
      const items1 = document.querySelectorAll(".carousel-1-item");
      const items2 = document.querySelectorAll(".carousel-2-item");
      const mediaQueryPhone = 600; //600px phone
      const mediaQueryTabPort = 900; //900px tab-port
      const mediaQueryTabLand = 1200; //1200px tab-land
      const mediaQueryDesktop = 1800; // 1800px desktop

      let elemPerView;

      //Scroll counters
      let scrollsLeft1;
      let scrollsRight1;
      let maxScrolls1;
      let scrollsLeft2;
      let scrollsRight2;
      let maxScrolls2;

      //Detect currrent MEDIAQUERY
      const mediaSensor = function (width, height) {
        if ( height <= 412 || width <= mediaQueryPhone ) {
          return mediaQueryPhone;
        } else if (width <= mediaQueryTabPort) {
          return mediaQueryTabPort;
        } else if (mediaQueryTabPort < width) {
          return mediaQueryDesktop;
        }
      };

      //Get the current MEDIAQUERY
      let currentQuery = mediaSensor(window.innerWidth, window.innerHeight);

      //Build the carousel according with MEDIAQUERY
      const carouselInit = function () {

        //For phone
        if (currentQuery <= mediaQueryPhone) {
          //only one card in carousel per view
          elemPerView = 1;
        } 
        
        //For Tab-port
        else if (currentQuery <= mediaQueryTabPort) {
          //only two cards in carousel per view
          elemPerView = 2;
        } 
        
        //For Desktop
        else if (currentQuery <= mediaQueryDesktop) {
          //Three cards per view
          elemPerView = 3;
        }
        //Determine how many scrolls are allowed according with cards per view
        maxScrolls1 = Math.ceil(items1.length / elemPerView) - 1;
        scrollsLeft1 = maxScrolls1;
        scrollsRight1 = 0;
        maxScrolls2 = Math.ceil(items2.length / elemPerView) - 1;
        scrollsLeft2 = maxScrolls2;
        scrollsRight2 = 0;


        //Change size of cards
        items1.forEach((c, i) => {
          c.style.left = `${(100 / elemPerView) * i }%`;
          c.style.width = `${100 / elemPerView }%`;
        });
        items2.forEach((c, i) => {
          c.style.left = `${(100 / elemPerView) * i }%`;
          c.style.width = `${100 / elemPerView }%`;
        });
      };
      carouselInit();

      //Detect change in width of the window
      window.addEventListener("resize", function () {
        if (currentQuery != mediaSensor(window.innerWidth, window.innerHeight)) {
          currentQuery = mediaSensor(window.innerWidth, window.innerHeight);
          carouselInit();
        }
      });

      //BUTTONS CONTROLS
      //Move to right
      btnRight1.addEventListener("click", function () {
        //If you're not in max of scrolls
        if (scrollsRight1 != maxScrolls1) {
          //Translate all cards to left
          items1.forEach((item) => {
            item.style.left = `calc(${item.style.left} + ${-100}%)`;
          });
          //Update scrolls counters
          scrollsLeft1--;
          scrollsRight1++;
        }
      });

      //Move to left
      btnLeft1.addEventListener("click", function () {
        //if you're not in max of scrolls
        if (scrollsLeft1 != maxScrolls1) {
          //Translate all cards to right
          items1.forEach((item) => {
            item.style.left = `calc(${item.style.left} + ${100}%)`;
          });
          //Update scrolls counters
          scrollsLeft1++;
          scrollsRight1--;
        }
      });

      btnRight2.addEventListener("click", function () {
        //If you're not in max of scrolls
        if (scrollsRight2 != maxScrolls2) {
          //Translate all cards to left
          items2.forEach((item) => {
            item.style.left = `calc(${item.style.left} + ${-100}%)`;
          });
          //Update scrolls counters
          scrollsLeft2--;
          scrollsRight2++;
        }
      });

      //Move to left
      btnLeft2.addEventListener("click", function () {
        //if you're not in max of scrolls
        if (scrollsLeft2 != maxScrolls2) {
          //Translate all cards to right
          items2.forEach((item) => {
            item.style.left = `calc(${item.style.left} + ${100}%)`;
          });
          //Update scrolls counters
          scrollsLeft2++;
          scrollsRight2--;
        }
      });
    },
    methods:{
        /**
         * Display the clicked menu in mobile view
         * @param {String} type - Type of menu
         */
        showMenu(type){
            // Check the type menu and add or remove class to show menu
            (type=="burger" && this.curretSection=="graph") ? (navigationMenu.classList.toggle("show-menu"),settingsButton.classList.toggle("hide-button")) :
             type=="burger"                            ?  navigationMenu.classList.toggle("show-menu") 
                                                       :  settingsMenu.classList.toggle("show-menu");

            // Explicit code for burger menu                                           
            // if (type=="burger" && this.currentSection=="graph") {
            //     navigationMenu.classList.toggle("show-menu")
            //     settingsButton.classList.toggle("hide-button")
            // }else if( type=="burger"){
            //     navigationMenu.classList.toggle("show-menu")
            // }else{
            //     settingsMenu.classList.toggle("show-menu");
            // }

            // Remove scroll in body in desktop, more estetic
            if (!this.isMobile) {
                body.classList.toggle("non-scroll")
            }
        },
        // Vue.js app methods

        scrollBack() {
          document.body.scrollTop = 0; // Safari
          document.documentElement.scrollTop = 0; // Chrome, Firefox, IE and Opera
        },
    },
    destroyed() {
        window.removeEventListener('scroll', this.scrollFunction);
    },
  }).mount('#app')