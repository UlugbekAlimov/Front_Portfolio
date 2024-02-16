<template>
    <div class="container mx-auto">
      <div class="flex justify-center items-center">
        <div class="mt-[101px]">
          <img src="src\assets\img\Mask group (1).png" alt="">
          <p class="flex justify-center font-semibold mt-[102px]">OTP VERIFICATION</p>
          <p class="flex justify-center text-[14px] mt-[14px]">Enter the OTP sent to - +91-8976500001</p>
          <div class="flex justify-center mt-[30px]">
            <input ref="input1" class="w-[60px] bg-[#fcfcfc] h-[60px] text-center border rounded-lg mr-[10px] shadow-inner" type="text" maxlength="1" @input="moveToNextInput(1)">
            <input ref="input2" class="w-[60px] bg-[#fcfcfc] h-[60px] text-center border rounded-lg mr-[10px] shadow-inner" type="text" maxlength="1" @input="moveToNextInput(2)">
            <input ref="input3" class="w-[60px] bg-[#fcfcfc] h-[60px] text-center border rounded-lg mr-[10px] shadow-inner" type="text" maxlength="1" @input="moveToNextInput(3)">
            <input ref="input4" class="w-[60px] bg-[#fcfcfc] h-[60px] text-center border rounded-lg shadow-inner" type="text" maxlength="1">
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      moveToNextInput(inputNumber) {
        const nextInput = this.$refs[`input${inputNumber + 1}`];
        if (nextInput) {
          nextInput.focus();
        }
      }
    }
  }
  </script>
  
  <style>
  input {
  /* Ваши текущие стили для инпутов */
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
  /* Добавляем внутреннюю тень */
  box-shadow: inset 0 0 5px rgba(0,0,0,0.1);
}

/* Дополнительные стили для разделения инпутов */
input:not(:last-child) {
  margin-right: 10px;
}

  </style>
  