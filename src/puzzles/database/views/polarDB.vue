<template>
  <div class="page">{{ moment().format("MMMM Do YYYY, h:mm:ss a") }}

      <BaseHome />
  </div>
</template>

<script>
import moment from "moment";
import BaseHome from "@components/BaseHome";

export default {
  components: {
    BaseHome: BaseHome
  },
  data() {
    return {
      moment: moment
    };
  },
  created() {
    console.log(moment);
  }
};
</script>
