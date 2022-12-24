<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md fit">
      <q-table
        style="height: calc(100vh - 100px)"
        class="my-sticky-dynamic"
        title="Treats"
        :rows="items"
        row-key="index"
        virtual-scroll
        :virtual-scroll-item-size="48"
        :virtual-scroll-sticky-size-start="48"
        :rows-per-page-options="[0]"
      />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { useCounterStore } from "src/stores/example-store";
import { storeToRefs } from "pinia";

export default defineComponent({
  name: "IndexPage",
  setup() {
    const { getItems } = useCounterStore();
    const { items } = storeToRefs(useCounterStore());
    getItems();
    return {
      items,
    };
  },
});
</script>
