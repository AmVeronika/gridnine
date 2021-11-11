<template>
  <div id="app">
    <FilterComponents></FilterComponents>
    <FlightList></FlightList>
  </div>
</template>

<script>
import FilterComponents from "./components/FilterComponents";
import FlightList from "./components/FlightList";

export default {
  components: {
    FilterComponents,
    FlightList,
  },
};
</script>

<style lang="scss">
#app {
  display: grid;
  grid-template-columns: 310px 1fr;
  min-height: 100vh;
}
</style>
