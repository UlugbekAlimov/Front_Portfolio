<template>
    <div class="h-[740px] flex bg-[#24263B]">
      <div class="w-[50%] mt-[110px]">
        <div class="z-10 flex justify-center relative">
            <backSvg>
     
            </backSvg>
              <img class="w-[400px] top-32 h-auto absolute" src="src\assets\img\0e1d05bbf3b7a962d5dda53ddcfacfa9.png" alt="">
        </div>
      </div>
  
      <div class="w-[50%] mt-[86px]">
        <div class="border-1 border-[#000000] bg-[#181a2c] rounded-2 text-center h-[30px] w-[125px] ">
          <p class="text-white text-[18px]"><strong>About me🫡</strong></p>
        </div>
        <div class="text-white mt-[30px] text-[36px]">
            <p><strong>Alimov Ulugbek</strong></p>
            <div class="text-[18px] w-[80%] leading-8 text-white">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur dignissimos impedit aliquam magnam quos eius quo temporibus aspernatur, assumenda repellendus eaque ex esse quisquam laboriosam facere, illo alias, dolor eligendi.</p>
            </div>
            <div class="leading-[50px] text-[18px]">
                <p>Bithday: 11.11.2004</p>
                <p> Phone : +992 988431860</p>
                <p>Study : Polytechnical institute (Khujand)</p>
                <p>Mail : <a href="#">alimovu966@gmail.com</a> </p>
                <p>Instagramm : <a href="#">Alimov U</a> </p>
                <p>Study : Polytechnical institute (Khujand)</p>
            </div>
        </div>
        <div>
            <a href="#" class="btn-download border-1 w-[170px] rounded-3 h-[60px] flex items-center text-gray font-bold text-lg">
                    <svg class="mx-2 svg-icon" style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M486.4 637.44V179.2a25.6 25.6 0 0 1 51.2 0v458.24l101.12-101.12a25.6 25.6 0 0 1 36.1984 36.1984L512 735.4368l-162.9184-162.9184a25.6 25.6 0 0 1 36.1984-36.1984L486.4 637.44z m409.6 28.16a25.6 25.6 0 0 1 51.2 0v204.8a76.8 76.8 0 0 1-76.8 76.8H153.6A76.8 76.8 0 0 1 76.8 870.4v-204.8a25.6 25.6 0 0 1 51.2 0v204.8a25.6 25.6 0 0 0 25.6 25.6h716.8a25.6 25.6 0 0 0 25.6-25.6v-204.8z" fill="#9DA7B2" /></svg>
                <span class="ml-2 text-white hover:underline">Download CV</span>
            </a>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import backSvg from '../components/backSvg.vue';
  export default {
  components:{
    backSvg
  }
  }
  </script>
  
  <style scoped>
  .btn-download {
    transition: background-color 0.3s ease, 
    border-color 0.3s ease, 
    color 0.3s ease, 
    box-shadow 0.3s ease;
  }


  .btn-download:hover {
  opacity: 100%;
  background-color: brighter-color; 
  border-color: brighter-border-color;
  color: brighter-text-color;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.5); 
}
  </style>
  