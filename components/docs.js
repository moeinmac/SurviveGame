const docsButton = document.querySelector(".docsButton");
const main = document.querySelector("main");

const docsPageRender = () => {

  docsButton.innerHTML = `
    <a href="app.html">
      PlAY GAME
      <img src="assets/play.png" />
    </a>
  `;
  main.classList.add("blog-slider");
  main.innerHTML = `
      <div class="blog-slider__wrp swiper-wrapper">
        <div class="blog-slider__item swiper-slide">
          <div class="blog-slider__img">
            <img
              src="assets/talented.png"
              alt="Talented" />
          </div>
          <div class="blog-slider__content">
            <span class="blog-slider__code">gifted but idle</span>
            <div class="blog-slider__title">Talented</div>
            <div class="blog-slider__text">
              We all know at least one person in our lives who is talented, intelligent, but unable to use what God has given them properly and misses out on life opportunities due to their laziness.
            </div>
            <div class="blog-slider__button" style="background-color: ${TData.color}">
              <i class="fa fa-low-vision"> ${TData.vision}</i>
              <i class="fa fa-cookie-bite"> ${TData.metabolism}</i>
              <i class="fa fa-user-hard-hat"> ${TData.diligence}</i>
              <i class="fa fa-sack"> ${TData.wealth}</i>
            </div>
          </div>
        </div>
        <div class="blog-slider__item swiper-slide">
          <div class="blog-slider__img">
            <img
              src="assets/hardworker.png"
              alt="" />
          </div>
          <div class="blog-slider__content">
            <span class="blog-slider__code">industrious and ambitions</span>
            <div class="blog-slider__title">Hard Worker</div>
            <div class="blog-slider__text">
              Some individuals in society are not born wealthy or talented but aspire to succeed and will do whatever it takes to achieve it, putting in relentless effort.
            </div>
             <div class="blog-slider__button" style="background-color: ${HWData.color}">
              <i class="fa fa-low-vision"> ${HWData.vision}</i>
              <i class="fa fa-cookie-bite"> ${HWData.metabolism}</i>
              <i class="fa fa-user-hard-hat"> ${HWData.diligence}</i>
              <i class="fa fa-sack"> ${HWData.wealth}</i>
            </div>
          </div>
        </div>

        <div class="blog-slider__item swiper-slide">
          <div class="blog-slider__img">
            <img
              src="assets/richkid.png"
              alt="" />
          </div>
          <div class="blog-slider__content">
            <span class="blog-slider__code">pleasant and wealthy</span>
            <div class="blog-slider__title">RichKid</div>
            <div class="blog-slider__text">
              You may have also seen individuals who were born wealthy or inherited a large fortune since childhood, and these individuals are usually lazy and enjoy their leisure time.
            </div>
             <div class="blog-slider__button" style="background-color: ${RKData.color}">
              <i class="fa fa-low-vision"> ${RKData.vision}</i>
              <i class="fa fa-cookie-bite"> ${RKData.metabolism}</i>
              <i class="fa fa-user-hard-hat"> ${RKData.diligence}</i>
              <i class="fa fa-sack"> ${RKData.wealth}</i>
            </div>
          </div>
        </div>

        <div class="blog-slider__item swiper-slide">
          <div class="blog-slider__img">
            <img
              src="assets/contented.png"
              alt="" />
          </div>
          <div class="blog-slider__content">
            <span class="blog-slider__code">non materialistic and unfortunate</span>
            <div class="blog-slider__title">Contented</div>
            <div class="blog-slider__text">
              This personality type is content with whatever they have in life and are not very materialistic. They enjoy life as it is and do not pursue wealth until they absolutely need it. They usually miss out on good opportunities in life . 
            </div>
            <div class="blog-slider__button" style="background-color: ${CData.color}">
              <i class="fa fa-low-vision"> ${CData.vision}</i>
              <i class="fa fa-cookie-bite"> ${CData.metabolism}</i>
              <i class="fa fa-user-hard-hat"> ${CData.diligence}</i>
              <i class="fa fa-sack"> ${CData.wealth}</i>
            </div>
          </div>
        </div>

        <div class="blog-slider__item swiper-slide">
          <div class="blog-slider__img">
            <img
              src="assets/robber.png"
              alt="" />
          </div>
          <div class="blog-slider__content">
            <span class="blog-slider__code">poor and dissatisfied</span>
            <div class="blog-slider__title">Robber</div>
            <div class="blog-slider__text">
              Thieves are usually not bad people. They were not born thieves, but society's circumstances have forced them to do so. Some of them have real talent but have never pursued it. But does anyone who does not have a good financial situation have to steal?
            </div>
             <div class="blog-slider__button" style="background-color: ${RData.color}">
              <i class="fa fa-low-vision"> ${RData.vision}</i>
              <i class="fa fa-cookie-bite"> ${RData.metabolism}</i>
              <i class="fa fa-user-hard-hat"> ${RData.diligence}</i>
              <i class="fa fa-sack"> ${RData.wealth}</i>
            </div>
          </div>
        </div>

      </div>
      <div class="blog-slider__pagination"></div>
  `;
  var swiper = new Swiper(".blog-slider", {
    spaceBetween: 30,
    effect: "fade",
    loop: true,
    mousewheel: {
      invert: false,
    },
    // autoHeight: true,
    pagination: {
      el: ".blog-slider__pagination",
      clickable: true,
    },
  });
};

docsButton.addEventListener("click", docsPageRender);
