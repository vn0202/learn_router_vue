<template>
  <section v-if="experience" class="destination">
    <h1>{{ experience.name }}</h1>
    <div class="destination-details">
      <img :src="`/images/${experience.image}`" :alt="experience.name" />
      <p>{{ experience.description }}</p>
    </div>
  </section>
</template>
<script>
import sourceData from "../data.json";
export default {
  props: {
    id: { type: Number, required: true },
    experienceSlug: { type: String, required: true }
  },
  computed: {
    destination() {
      return sourceData.destinations.find(
        (destination) => destination.id === this.id
      );
    },
    experience() {
      return this.destination.experiences.find(
        (ex) => ex.slug === this.experienceSlug
      );
    }
  }
};
</script>
