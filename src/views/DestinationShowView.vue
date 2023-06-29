<template>
  <section v-if="destination" class="destination">
    <h1>{{ destination.name }}</h1>
    <div class="destination-details">
      <img :src="`/images/${destination.image}`" :alt="destination.name" />
      <p>{{ destination.description }}</p>
    </div>
  </section>
  <section class="experiences">
    <h1>Top experiences in {{ destination.name }}</h1>
    <div class="cards">
      <RouterLink 
       v-for="experience in destination.experiences"
          :key="experience.slug" 
          :to="{name:'experience.show', params:{experienceSlug:experience.slug}}">
        <ExperienceCard
          :experience="experience"
        ></ExperienceCard>
      </RouterLink>
    </div>
    <router-view />
  </section>
</template>
<script>
import sourceData from "../data.json";
import ExperienceCard from "@/components/ExperienceCard.vue";
export default {
  props: {
    id: { Number, required: true }
  },
  components: { ExperienceCard },
  data() {
    return {};
  },
  computed: {
    destination() {
      return sourceData.destinations.find(
        (destination) => destination.id === this.id
      );
    }
  }
};
</script>
