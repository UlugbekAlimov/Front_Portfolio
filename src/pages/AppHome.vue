<template>
  <div class="relative flex justify-normal w-full h-[650px] bg-gradient-to-r from-[#1F2235] to-[#543f28]">
    <div>
      <p class="absolute text-[16px] mt-[180px] ml-[200px] text-[#ffff] z-10 animate-fade-in">Welcome My Portfolio
        <br>
        <strong class="text-[64px] leading-[60px]">Hello, I'm <span class="text-[#FE461C]">Ulugbek</span></strong>
        <br>
        <strong class="text-[64px] leading-[80px]"><span class="text-[#FE461C]">Frontend</span> Developer</strong>
        <br>
        <span class="leading-[20px]">"Creating beauty from code. Frontend, where each line is a particle of inspiration,<br> and 
          every element is a masterpiece in the world of web technologies."</span>
          <br> <br>
          <button class="text-[18px] w-[150px] h-[50px] border-[2px] bg-[#FE461C] border-[#FE461C] rounded"><strong>Hire Me</strong></button>
          <button class="text-[18px] w-[150px] h-[50px] border-[2px] ml-[30px] border-[#FE461C] rounded"><strong>Download CV</strong></button>
      </p>
    </div>
      <div>
        <svg class="circle_form w-[204px] h-[204px] mt-[150px] ml-[150px] z-1 animate-pulse-vertical" width="204" height="204" viewBox="0 0 204 204" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle id="Ellipse 3" cx="102" cy="102" r="102" fill="#BBC5D3" fill-opacity="0.08"/>
        </svg>
      </div>
    <div>
      <svg class="w-[450px] h-[450px] mt-[60px] ml-[550px] z-1 animate-pulse-vertical1" width="204" height="204" viewBox="0 0 204 204" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle id="Ellipse 3" cx="102" cy="102" r="102" fill="#BBC5D3" fill-opacity="0.08"/>
      </svg>
    </div>
  </div>
</template>

<style scoped>
@keyframes fade-in {
  0% {  
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.animate-fade-in {
  animation: fade-in 2s ease-in-out;
}

@keyframes pulse-vertical {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-30px);
  }
  100% {
    transform: translateY(0);
  }
}
@keyframes pulse-vertical1 {
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

.animate-pulse-vertical {
  animation: pulse-vertical 4s ease-in-out infinite;
}
.animate-pulse-vertical1 {
  animation: pulse-vertical 3s ease-in-out infinite;
}
</style>
