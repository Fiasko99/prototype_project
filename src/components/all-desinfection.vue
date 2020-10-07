<template>
  <div>
    <div class="container">

      <div class="row h-40px mb-4">
        <div class="col-12 bg-secondary pt-2">
          <router-link to="/" class="text-white h5">Главная</router-link>
          <span class="text-white h5"> » </span>
          <router-link to="/desinfection" class="text-white h5">Дезинфекция</router-link>
          <span class="text-white h5"> » </span>
          <span class="text-white h5"> Все разделы </span>
        </div>
      </div>

      <div class="card-columns">
        <div class="card">
          <img class="card-img-top" src="../assets/img/COVID19.jpg" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">COVID19</h5>
            <router-link to="/covid19" class="card-text">Подробнее »</router-link>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" src="../assets/img/apartment.jpg" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">Квартиры</h5>
            <router-link to="/flat" class="card-text">Подробнее »</router-link>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" src="../assets/img/public-place.jpg" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">Места общественного питания</h5>
            <router-link to="/publick-place" class="card-text">Подробнее »</router-link>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" src="../assets/img/plesen-gribok.jpg" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">Плесень и грибок</h5>
            <router-link to="/mold-fungus" class="card-text">Подробнее »</router-link>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" src="../assets/img/bakterij.jpg" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">Бактерии</h5>
            <router-link to="/bacteria" class="card-text">Подробнее »</router-link>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" src="../assets/img/lishaj.jpg" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">Лишай</h5>
            <router-link to="/lichen" class="card-text">Подробнее »</router-link>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" src="../assets/img/chumka.jpg" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">Чумка у домашних животных</h5>
            <router-link to="/chumka" class="card-text">Подробнее »</router-link>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" src="../assets/img/tuberculosis.jpg" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">Туберкулёз</h5>
            <router-link to="/tuberculosis" class="card-text">Подробнее »</router-link>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" src="../assets/img/rip.jpg" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">После смерти</h5>
            <router-link to="/rip" class="card-text">Подробнее »</router-link>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" src="../assets/img/car.jpg" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">Автотранспорт</h5>
            <router-link to="/car" class="card-text">Подробнее »</router-link>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" src="../assets/img/plane.jpg" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">Авиатранспорт</h5>
            <router-link to="/plane" class="card-text">Подробнее »</router-link>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" src="../assets/img/train.jpg" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">Ж/Д транспорт</h5>
            <router-link to="/train" class="card-text">Подробнее »</router-link>
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
