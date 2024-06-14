<template>
  <div id="app">
    <LeadsTable />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LeadsTable from "./components/LeadsTable.vue";

export default defineComponent({
  components: {
    LeadsTable,
  },
});
</script>
