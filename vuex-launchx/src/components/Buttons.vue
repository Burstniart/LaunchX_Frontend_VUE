<template>
    <div class="buttons">
    <button @click="$store.dispatch('countDown')">-</button>
    <!--// commit is for mutiations -->
    <button @click="$store.dispatch('countUp')">+</button>
    </div>
</template>

<script>
export default {
    name: 'Buttons',
}
</script>