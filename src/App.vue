<template>

  <div id="app">
    <header>
      <nav class="navbar navbar-expand-lg navbar-dark bg-danger">
        <router-link class="navbar-brand" to="/">Главная</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <router-link class="nav-item nav-link" to="/info">Основные разделы</router-link>
            <router-link class="nav-item nav-link" to="/about">Наши реквизиты</router-link>
            <router-link class="nav-item nav-link" to="/contacts">Контакты</router-link>
          </div>
        </div>
      </nav>
      <div class="container-fluid">
        <div class="bg-img-set position-relative">
          <div class="btn bg-danger rounded-0 position-absolute b-0 r-0 m-2">
            <span class="navbar-text text-white">Моб. тел. 8 800 555 35 35</span>
          </div>
          <div class="rounded ">
            <img src="./assets/img/logo.jpg" alt="logo is not found" class="rounded-lg logo-set">
            <span class="navbar-text text-white display-4 font-weight-bold">KlopBusters</span>
          </div>
        </div>
        <div class="row">

          <div class="col-md-3">
            <div class="btn-group dropdown w-100">
              <router-link to="/desinsection" class="btn btn-danger rounded-0">
                Дезинсекция
              </router-link>

              <button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split rounded-0 border-rigth" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class="sr-only">Toggle Dropdown</span>
              </button>
              <div class="dropdown-menu dropdown-menu-right bg-danger rounded-0 p-1 text-center">
                <router-link class="btn bg-danger text-white rounded-0" to="/all-desinsection"><big>Все разделы</big></router-link><br>
                <router-link class="btn bg-danger text-white rounded-0" to="/bedbugs">Клопы</router-link>
                <router-link class="btn bg-danger text-white rounded-0" to="/cockroach">Тараканы</router-link>
                <router-link class="btn bg-danger text-white rounded-0" to="/ant">Муравьи</router-link>
                <router-link class="btn bg-danger text-white rounded-0" to="/leatherman">Кожеед</router-link>
                <router-link class="btn bg-danger text-white rounded-0" to="/flea">Блохи</router-link>
                <router-link class="btn bg-danger text-white rounded-0" to="/moth">Моль</router-link>
                <router-link class="btn bg-danger text-white rounded-0" to="/multiped">Мокрицы</router-link>
                <router-link class="btn bg-danger text-white rounded-0" to="/silverfish">Чешуйницы</router-link>
                <router-link class="btn bg-danger text-white rounded-0" to="/mosquito">Комары</router-link>
                <router-link class="btn bg-danger text-white rounded-0" to="/bark-beetle">Короеды</router-link>
                <router-link class="btn bg-danger text-white rounded-0" to="/mite">Клещи</router-link>
                <router-link class="btn bg-danger text-white rounded-0" to="/wasp">Осы</router-link>
                <router-link class="btn bg-danger text-white rounded-0" to="/mole-cricket">Медведки</router-link>
                <router-link class="btn bg-danger text-white rounded-0" to="/fly">Мухи</router-link>
                <router-link class="btn bg-danger text-white rounded-0" to="/hogweed">Борщевик</router-link>
              </div>
              <div class="border border-warning bg-warning vertical-line-set text-center pr-1"></div>
            </div>
          </div>
          
          <div class="col-md-3">
            <div class="btn-group dropdown w-100">
              <router-link to="/desinfection" class="btn btn-danger rounded-0">
                Дезинфекция
              </router-link>

              <button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split rounded-0 border-rigth" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class="sr-only">Toggle Dropdown</span>
              </button>
              <div class="dropdown-menu dropdown-menu-right bg-danger rounded-0 p-1 text-center">
                <router-link class="btn bg-danger text-white rounded-0" to="/all-desinfection"><big>Все разделы</big></router-link><br>
                <router-link class="btn bg-danger text-white rounded-0" to="/covid19">COVID19</router-link>
                <router-link class="btn bg-danger text-white rounded-0" to="/flat">Квартиры</router-link>
                <router-link class="btn bg-danger text-white rounded-0" to="/public-place">Места общественного питания</router-link>
                <router-link class="btn bg-danger text-white rounded-0" to="/mold-fungus">Плесень и грибок</router-link>
                <router-link class="btn bg-danger text-white rounded-0" to="/bacteria">Бактерии</router-link>
                <router-link class="btn bg-danger text-white rounded-0" to="/lichen">Лишай</router-link>
                <router-link class="btn bg-danger text-white rounded-0" to="/chumka">Чумка у домашних питомцев</router-link>
                <router-link class="btn bg-danger text-white rounded-0" to="/tuberculosis">Туберкулёз</router-link>
                <router-link class="btn bg-danger text-white rounded-0" to="/rip">После смерти</router-link>
                <router-link class="btn bg-danger text-white rounded-0" to="/car">Автотранспорт</router-link>
                <router-link class="btn bg-danger text-white rounded-0" to="/plane">Авиатранспорт</router-link>
                <router-link class="btn bg-danger text-white rounded-0" to="/train">Ж/Д транспорт</router-link>
              </div>
              <div class="border border-warning bg-warning vertical-line-set text-center pr-1"></div>
            </div>
          </div>

          <div class="col-md-3">
            <div class="btn-group dropdown w-100">
              <router-link to="/deratisation" class="btn btn-danger rounded-0">
                Дератизация
              </router-link>

              <button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split rounded-0 border-rigth" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class="sr-only">Toggle Dropdown</span>
              </button>
              <div class="dropdown-menu dropdown-menu-right bg-danger rounded-0 p-1 text-center">
                <router-link class="btn bg-danger text-white rounded-0" to="/all-deratisation"><big>Все разделы</big></router-link><br>
                <router-link class="btn bg-danger text-white rounded-0" to="/rat">Крысы</router-link>
                <router-link class="btn bg-danger text-white rounded-0" to="/mouse">Мыши</router-link>
                <router-link class="btn bg-danger text-white rounded-0" to="/mole">Кроты</router-link>
              </div>
              <div class="border border-warning bg-warning vertical-line-set text-center pr-1"></div>
            </div>
          </div>

          <div class="col-md-3">
            <div class="btn-group dropdown w-100">
              <router-link to="/desodoration" class="btn btn-danger rounded-0">
                Дезодорация
              </router-link>

              <button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split rounded-0 border-rigth" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class="sr-only">Toggle Dropdown</span>
              </button>
              <div class="dropdown-menu dropdown-menu-right bg-danger rounded-0 p-1 text-center">
                <router-link class="btn bg-danger text-white rounded-0" to="/all-desodoration"><big>Все разделы</big></router-link><br>
                <router-link class="btn bg-danger text-white rounded-0" to="/cold-fog">Холодный туман</router-link>
                <router-link class="btn bg-danger text-white rounded-0" to="/hot-fog">Горячий туман</router-link>
              </div>
              <div class="border border-warning bg-warning vertical-line-set text-center pr-1"></div>
            </div>
          </div>

        </div>
      </div>
    </header>
    <main class="pb-2">
      <router-view></router-view>
      <div class="limiter"></div>
    </main>
    <footer class="bg-dark w-100">
      <div class="container">
        <div class="row">
          <div class="col-4 text-white"><small>ООО "Название" © 2020</small><br><small>Официальный сайт</small></div>
          <div class="col-4 text-white"><small>Адрес:</small><br><big>г. Москва, ул. А, д. Б</big></div>
          <div class="col-4 text-white"><small>Телефон:</small><br><big>8 (800) 555 35 35</big></div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {}
}
</script>

<style>
header .container-fluid {
  padding: 0;
  margin: 0;
}
header .container-fluid .row .col-md-3 {
  margin-bottom: 0 !important;
  padding: 0 !important;
}
.bg-img-set {
  background:  url('./assets/img/header-back.png') repeat-x purple bottom; 
  width: 100%;
  height: 300px;
}
header .container-fluid .row {
  margin: 0 !important;
}
.b-0 {
  bottom: 0;
}
.r-0 {
  right: 0;
}
.t-0 {
  top: 0;
}
.l-0 {
  left: 0;
}
.logo-set {
  width: 20%;
  max-width: 200px;
  margin: 50px 10px 10px 10px;
}
.bg-main {
    background-color: lemonchiffon;
}
main {
	box-sizing: border-box;
	min-height: calc(100vh - 446px);
	padding-bottom: 40px;
}
</style>
