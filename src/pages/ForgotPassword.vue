<template>
  <div class="container mx-auto">
    <div class="flex justify-center items-center">
      <div class="mt-[112px]">
        <div>
          <img src="src\assets\img\Mask group.png" alt="">
          <p class="font-semibold text-[27px] mt-[113px]">Forgot <br>Password?</p>
          <p class="mt-[18px] text-[16px]">Don’t worry! It happens. Please enter the phone<br> number we will send the OTP in this phone number.</p>
        </div>
        <div>
          <input v-model="phoneNumber" class="w-[370px] mt-[51px] border rounded-md h-[61px] p-4" placeholder="Enter the phone Number" type="text">
        </div>
        <div class="flex justify-center">
          <button @click="continueClicked" class="border text-white rounded-md mt-[41px] w-[370px] h-[55px] bg-[#167EE6]">
            Continued
          </button>
        </div>
        <div class="flex justify-center">
          <button @click="backToHome" class="mt-[41px] text-[12px]">
            Back
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phoneNumber: ''
    };
  },
  methods: {
    backToHome() {
      this.$router.push('/home');
    },
    continueClicked() {
      if 
      (this.phoneNumber === '9812345678') {
        this.$router.push('/TheVerification');
      }
       else 
      {
        alert('Incorrect phone number');
      }
    }
  }
}
</script>

<style>

</style>
