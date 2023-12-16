<template>
  <nav class="bg-[#181a2c] relative flex flex-wrap items-center justify-between px-2 py-3">
    
    <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
      <div class="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
        <a class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white" href="#pablo">
          ulugbek
        </a>
        <button class="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button" v-on:click="toggleNavbar()">
          <svg class="w-[30px] h-[30px]" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
            <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27  A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
          </svg>
        </button>
      </div>
      <div v-bind:class="{'hidden': !showMenu, 'flex': showMenu}" class="lg:flex lg:flex-grow items-center">
        <ul class="flex flex-col lg:flex-row list-none ml-auto">
          <li class="nav-item">
            <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
              <i class="fab fa-facebook-square text-lg leading-lg text-white opacity-75" /><span class="ml-2">Home</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
              <i class="fab fa-twitter text-lg leading-lg text-white opacity-75" /><span class="ml-2">About me</span>
            </a>
          </li>
          <li class="nav-item ">
            <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
              <i class="text-lg leading-lg text-white opacity-75" /><span class="ml-2">Services</span>
            </a>
          </li>
          <li class="nav-item ">
            <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
              <i class="text-lg leading-lg text-white opacity-75" /><span class="ml-2">Resume</span>
            </a>
          </li>
          <li class="nav-item ">
            <a class="btn-contact shadow-[10px] px-3 py-2 flex items-center text-xs uppercase font-bold border-1 w-[105px] border-[#FE461C] rounded-3 leading-snug text-white hover:bg-[#FE461C]" href="#pablo">
              <i class="text-lg leading-lg text-white opacity-75" /><span class="ml-2">Contact</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  
</template>

<script>
export default {
  name: "pink-navbar",
  data() {
    return {
      showMenu: false
    }
  },
  methods: {
    toggleNavbar: function(){
      this.showMenu = !this.showMenu;
    }
  }
}
</script>

<style>
.btn-contact {
  transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease;
}

.btn-contact:hover {
  opacity: 100%;
  background-color: brighter-color; 
  border-color: brighter-border-color;
  color: brighter-text-color;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.5); 
}

</style>
