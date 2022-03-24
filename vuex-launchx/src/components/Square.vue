<template>
    <div class="square">
    {{ $store.state.counter }} <sup>2</sup> = {{$store.getters.square}}
    </div>
</template>

<script>
export default {
    name: 'Square'
}
</script>