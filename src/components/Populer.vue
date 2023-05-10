<template>
    <!-- <ul> -->
      <div v-for="item in items" :key="item.id"><slot></slot>      <br>
      <br>
  </div>

    <!-- </ul> -->
  </template>
  
  <script>
  export default {
    data() {
      return {
        items: [
          { id: 1, title: "" },
          // { id: 2, title: "" },
          // { id: 3, title: "" }
        ]
      };
    }
  };
  </script>
  