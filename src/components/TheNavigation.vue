<template>
     <div id="nav">
     <router-link :to="{name:'home'}" id="logo">
        Vue-school-router
     </router-link>
    <router-link v-for="destination in destinations" 
    :key="destination.id"
     :to="{name:'destination.show',params:{id:destination.id, slug:destination.slug}}"
     >
     {{destination.name}}
    </router-link>
  </div>
</template>
<script>
import sourceData from "../data.json";
export default{
    data() {
        return {
            destinations: sourceData.destinations,
        };
    },
}
</script>
<style lang="css">
#nav .vue-school-router-active{
    color:red;
    border-bottom: 1px solid red;
}
</style>