import { ref, reactive, computed } from 'vue';

export function usePlayerList() {

  const players = reactive(['Mbappe', 'Vinicius', 'Rodrygo', 'Valverde', 'Courtois']);

  const currentIndex = ref(0);

  const currentPlayer = computed(() => players[currentIndex.value]);

  const nextPlayer = () => {
    currentIndex.value = (currentIndex.value + 1) % players.length;
  };

  const prevPlayer = () => {
    currentIndex.value = (currentIndex.value - 1 + players.length) % players.length;
  };

  return { currentPlayer, nextPlayer, prevPlayer };
}
