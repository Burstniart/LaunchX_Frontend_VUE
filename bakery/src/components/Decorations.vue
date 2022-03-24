<template>
<div class="decorations">
    <h2>Make it extra special with custom decorations</h2>
    <div class="decoration">
    <div class="card">
        <img src="../assets/frosting.jpg" alt="Frosting" >
        <h1>{{ $store.getters.getMenuTops.frosting.name }}</h1>
        <p class="price">$ {{ $store.getters.getMenuTops.frosting.price }}</p>
        <p>Buttercream mix that can be dyed any color</p>
    </div>
    <div class="card">
        <img src="../assets/fondant.jpg" alt="Fondant topping" >
        <h1>{{ $store.getters.getMenuTops.fondant.name }}</h1>
        <p class="price">$ {{ $store.getters.getMenuTops.fondant.price }}</p>
        <p>Beautiful handmade decorations</p>
    </div>
    <div class="card">
        <img src="../assets/caramel.jpg" alt="Caramel topping" >
        <h1>{{ $store.getters.getMenuTops.caramel.name }}</h1>
        <p class="price">$ {{ $store.getters.getMenuTops.caramel.price }}</p>
        <p>Full cover of sweet caramel and nuts</p>
    </div>
    </div>
</div>
</template>
<script>
export default {
    name: 'Decorations',
}
</script>
<style scoped>
.decoration {
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
.card h1{
    padding: 0px 0px 30px 0px;
}
.card img {
    max-width: 200px;
    max-height: 200px;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.price {
  color: grey;
  font-size: 22px;
  margin: 0px 0px 10px 0px;
}

@media only screen and (max-width: 600px) {

    .card {
        margin: 20px 0px;
        background-color:#ffeffe;
    }
    .decoration {
        width: 290px;
        flex-direction: column;
        text-align: center;
    }
}

</style>