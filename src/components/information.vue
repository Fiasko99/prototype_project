<template>
  <div>
    <div class="container">
      <div class="row h-40px mb-4">
        <div class="col-12 bg-secondary pt-2">
          <router-link to="/" class="text-white h5">Главная</router-link>
          <span class="text-white h5"> » </span>
          <span class="text-white h5">Основные разделы</span>
        </div>
      </div>

      <div class="card w-50 m-4">
        <h2 class="h2 text-center" id="0">Перейти к:</h2>
        <ul>
          <li> <a href="#1" class="h5">Дезинсекция</a> </li>
          <li> <a href="#2" class="h5">Дезинфекция</a> </li>
          <li> <a href="#3" class="h5">Дератизация</a> </li>
          <li> <a href="#4" class="h5">Дезодорация</a> </li>
        </ul>
      </div>

      <hr class="border">

      <div class="position-relative">
        <h1 class="h1 mb-4" id="1">Дезинсекция</h1>
        <a href="#navbarNavAltMarkup" class="position-absolute r-0 t-0 mr-3 mt-3 h5">Наверх</a>
        <div class="card-columns">
          <div class="card">
            <img class="card-img-top" src="../assets/img/bloha.jpg" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Блохи</h5>
              <router-link to="/flea" class="card-text">Подробнее »</router-link>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src="../assets/img/klop.jpg" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Клопы</h5>
              <router-link to="/bedbugs" class="card-text">Подробнее »</router-link>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src="../assets/img/tarakan.jpg" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Тараканы</h5>
              <router-link to="/cockroach" class="card-text">Подробнее »</router-link>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src="../assets/img/muravej.jpg" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Муравьи</h5>
              <router-link to="/ant" class="card-text">Подробнее »</router-link>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src="../assets/img/kozheed.jpg" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Кожеед</h5>
              <router-link to="/leatherman" class="card-text">Подробнее »</router-link>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src="../assets/img/mol.jpg" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Моль</h5>
              <router-link to="/" class="card-text">Подробнее »</router-link>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src="../assets/img/mokricy.jpg" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Мокрицы</h5>
              <router-link to="/" class="card-text">Подробнее »</router-link>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src="../assets/img/cheshuinica.jpg" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Чешуйницы</h5>
              <router-link to="/" class="card-text">Подробнее »</router-link>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src="../assets/img/comar.jpg" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Комары</h5>
              <router-link to="/" class="card-text">Подробнее »</router-link>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src="../assets/img/koroed.jpg" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Короеды</h5>
              <router-link to="/" class="card-text">Подробнее »</router-link>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src="../assets/img/klesh.jpg" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Клещи</h5>
              <router-link to="/" class="card-text">Подробнее »</router-link>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src="../assets/img/osa.jpg" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Осы</h5>
              <router-link to="/" class="card-text">Подробнее »</router-link>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src="../assets/img/medvedka.jpg" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Медведки</h5>
              <router-link to="/" class="card-text">Подробнее »</router-link>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src="../assets/img/muha.jpg" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Мухи</h5>
              <router-link to="/" class="card-text">Подробнее »</router-link>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src="../assets/img/borshevik.jpg" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Борщевик</h5>
              <router-link to="/" class="card-text">Подробнее »</router-link>
            </div>
          </div>
        </div>
      </div>

      <hr class="border">

      <div class="position-relative">
        <h1 class="h1 mb-4" id="2">Дезинфекция</h1>
        <a href="#navbarNavAltMarkup" class="position-absolute r-0 t-0 mr-3 mt-3 h5">Наверх</a>
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

      <hr class="border">

      <div class="position-relative">
        <h1 class="h1 mb-4" id="3">Дератизация</h1>
        <a href="#navbarNavAltMarkup" class="position-absolute r-0 t-0 mr-3 mt-3 h5">Наверх</a>
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

      <hr class="border">

      <div class="position-relative">
        <h1 class="h1 mb-4" id="4">Дезодорация</h1>
        <a href="#navbarNavAltMarkup" class="position-absolute r-0 t-0 mr-3 mt-3 h5">Наверх</a>
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
  </div>
</template>

<script>

export default {

}
</script>

<style>
.card-columns .card {
  min-height: 400px;
}
</style>
