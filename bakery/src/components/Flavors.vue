<template>
<div class="flavors">
    <h2>Our signature cake mix flavors</h2>
    <div class="flavor">
    <div class="card">
        <img src="../assets/chocoCake.jpg" alt="Chocolate cake" >
        <h1>{{ $store.getters.getMenuFlavors.chocolate.name }}</h1>
        <p class="price">$ {{ $store.getters.getMenuFlavors.chocolate.price }}</p>
        <p>Delicious organic chocolate mix that's sure to send you to the moon</p>
    </div>
    <div class="card">
        <img src="../assets/tresLeches.jpg" alt="Tres Leches Cake" >
        <h1> {{ $store.getters.getMenuFlavors.tresLeches.name }}</h1>
        <p class="price">$ {{ $store.getters.getMenuFlavors.tresLeches.price }}</p>
        <p>Sweet creamy mix full of flavor for those with a sweet tooth</p>
    </div>
    <div class="card">
        <img src="../assets/mochaCake.jpg" alt="Mocha Cake" >
        <h1>{{ $store.getters.getMenuFlavors.mocha.name }}</h1>
        <p class="price">$ {{ $store.getters.getMenuFlavors.mocha.price }}</p>
        <p>Perfect to kickstart your birthday, graduation, celebration or just any other day</p>
    </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Flavors'
}
</script>

<style scoped>
.flavor {
    width: 900px;
    display: inline-flex;
    align-content: center;
    justify-content: center;
}
.card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    max-width: 270px;
    width: 100%;
    height: 450px;
    padding: 10px;
    margin: 20px 20px;
    text-align: center;
    font-family: arial;
    position: relative;
    background-color:#ffeffe;

}
.card img {
    max-width: 200px;
    max-height: 200px;
    width: 100%;
    height: 100%;
    object-fit: fill;
}
.price {
  color: grey;
  font-size: 22px;
  margin: 50px 0px 50px 0px;
}
@media only screen and (max-width: 600px) {
    .card {
        margin: 20px 0px;
        background-color:#ffeffe;
    }
    .flavor {
        width: 290px;
        flex-direction: column;
        text-align: center;
    }
}

</style>