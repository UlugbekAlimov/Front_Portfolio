<template>
  <section class="h-[660px] bg-[#181a2c] text-white py-24">
    <div class="max-w-7xl w-full sm:pl-[128px] pl-[50px]">
        <div class="absolute top-[130px] ml-[800px] animate-vue hidden sm:block">
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="450px" height="450px"><polygon fill="#81c784" points="23.987,17 18.734,8 2.974,8 23.987,44 45,8 29.24,8"/><polygon fill="#455a64" points="29.24,8 23.987,17 18.734,8 11.146,8 23.987,30 36.828,8"/></svg>
        </div>
        <div class="absolute animate-pulse">
            <svg width="204" height="204" viewBox="0 0 204 204" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle id="Ellipse 3" cx="102" cy="102" r="102" fill="#BBC5D3" fill-opacity="0.08"/>
            </svg>
        </div>
        <div class="mx-">
          <h4 class="text-[20px] font-bold text-[#FE461C] lg:leading-[94px] lg:text-[34px]">Hello 🖐️, I'm Ulugbek</h4>
          <p class="text-[35px] mt-3 font-bold lg:text-[65px] lg:leading-[64px]">
              <text></text>
              <span ref="typed"></span>
          </p>
        </div>
        <p class=" text-gray font-normal text-base w-[85%] sm:w-[50%] mt-9">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis exercitationem dolorem sed vel nobis. Corporis natus,
            fuga <span class="underline font-semibold">Pabloo</span> consequatur minus, minima maiores cupiditate eos facilis, assumenda eum rerum tempora omnis sequi.
        </p>
        <div class="mt-14">
            <div class="mt-10 flex items-center">
                <a href="#" class="btn-email btn-primary hover:bg-[#FE461C] border-1 border-[#FE461C] text-white rounded-3 py-3 px-6 text-lg font-medium mr-4">Email</a>
                <a href="#" class=" btn-download border-1 w-[170px] rounded-3 h-[60px] flex items-center text-gray font-bold text-lg">
                    <svg class="mx-2 svg-icon" style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M486.4 637.44V179.2a25.6 25.6 0 0 1 51.2 0v458.24l101.12-101.12a25.6 25.6 0 0 1 36.1984 36.1984L512 735.4368l-162.9184-162.9184a25.6 25.6 0 0 1 36.1984-36.1984L486.4 637.44z m409.6 28.16a25.6 25.6 0 0 1 51.2 0v204.8a76.8 76.8 0 0 1-76.8 76.8H153.6A76.8 76.8 0 0 1 76.8 870.4v-204.8a25.6 25.6 0 0 1 51.2 0v204.8a25.6 25.6 0 0 0 25.6 25.6h716.8a25.6 25.6 0 0 0 25.6-25.6v-204.8z" fill="#9DA7B2" /></svg>
                <span class=" ml-2 text-white hover:underline">Download CV</span>
                </a>
            </div>
            <!-- <div class="mt-[75px]">
            </div> -->
        </div>
    </div>
  </section>
</template>

<script>
import Typed from 'typed.js';

export default {
  mounted() {
    this.typed = new Typed(this.$refs.typed, {
      strings: [ 'Frontend Developer', 'Video Editor'],
      typeSpeed: 80,
      backSpeed: 50,
      loop: true,
    });
  },
  beforeDestroy() {
    this.typed.destroy();
  },
};
</script>

<style>
@keyframes pulse {
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-20px);
    }
    100% {
        transform: translateY(0);
    }
}

.animate-pulse {
  animation: pulse 3s infinite;
}
@keyframes pulse {
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-20px);
    }
    100% {
        transform: translateY(0);
    }
}

.animate-vue {
  animation: pulse 2s infinite;
}

.btn-email {
    transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease;
  }


  .btn-email:hover {
  opacity: 100%;
  background-color: brighter-color; 
  border-color: brighter-border-color;
  color: brighter-text-color;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.5); 
}
.btn-download {
    transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease;
  }


  .btn-download:hover {
  opacity: 100%;
  background-color: brighter-color; 
  border-color: brighter-border-color;
  color: brighter-text-color;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.5); 
}
</style>
