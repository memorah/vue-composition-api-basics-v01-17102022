import { reactive, computed, watch, onMounted, nextTick } from "vue";
export function useCounter () {
    const counterData = reactive({ count: 0, title: "My Counter" });

watch(
  () => counterData.count,
  (newCount, oldCount) => {
    if (newCount === 20) {
      alert("Way to do!");
    }
  }
);

const oddOrEven = computed(() => {
  if (counterData.count % 2 === 0) return "even";
  return "odd";
});

const increaseCounter = async (amount, e) => {
  counterData.count = counterData.count + amount;
  await nextTick();
  console.log("updated");
};

const decreaseCounter = (amount) => {
  counterData.count = counterData.count - amount;
};


return {counterData, oddOrEven, increaseCounter, decreaseCounter}
}