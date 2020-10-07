<template>
  <div>
    <div class="container">

      <div class="row h-40px mb-4">
        <div class="col-12 bg-secondary pt-2">
          <router-link to="/" class="text-white h5">Главная</router-link>
          <span class="text-white h5"> » </span>
          <router-link to="/deratisation" class="text-white h5">Дератизация</router-link>
          <span class="text-white h5"> » </span>
          <span class="text-white h5"> Все разделы </span>
        </div>
      </div>

      <div class="card-columns">
          <div class="card">
            <img class="card-img-top" src="../assets/img/krisi.jpg" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Крысы</h5>
              <router-link to="/rat" class="card-text">Подробнее »</router-link>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src="../assets/img/mish.jpg" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Мыши</h5>
              <router-link to="/mouse" class="card-text">Подробнее »</router-link>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src="../assets/img/krot.jpg" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Кроты</h5>
              <router-link to="/mole" class="card-text">Подробнее »</router-link>
            </div>
          </div>
        </div>

    </div>
  </div>
</template>

<script>

export default {

}
</script>

<style>

</style>
