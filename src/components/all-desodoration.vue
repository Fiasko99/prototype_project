<template>
  <div>
    <div class="container">

      <div class="row h-40px mb-4">
        <div class="col-12 bg-secondary pt-2">
          <router-link to="/" class="text-white h5">Главная</router-link>
          <span class="text-white h5"> » </span>
          <router-link to="/desodoration" class="text-white h5">Дезодорация</router-link>
          <span class="text-white h5"> » </span>
          <span class="text-white h5"> Все разделы </span>
        </div>
      </div>

      <div class="card-columns">
          <div class="card">
            <img class="card-img-top" src="../assets/img/cold.jpg" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Холодный туман</h5>
              <router-link to="/cold-fog" class="card-text">Подробнее »</router-link>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src="../assets/img/hot.jpg" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Горячий туман</h5>
              <router-link to="/hot-fog" class="card-text">Подробнее »</router-link>
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
