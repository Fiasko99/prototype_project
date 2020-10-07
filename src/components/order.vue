<template>
  <div>
    <div class="container">
      <div class="row h-40px mb-4">
        <div class="col-12 bg-secondary pt-2">
          <router-link to="/" class="text-white h5">Главная</router-link>
          <span class="text-white h5"> » </span>
          <span class="text-white h5">Стоимость обработки</span>
        </div>
      </div>

      <h2 class="h2 text-right">Прайс-лист</h2>
      <h4 class="h4 text-center">Прайс-лист услуг по дезинсекции(уничтожения насекомых) для физических лиц</h4>
      <table class="table mb-1">
        <thead class="thead-dark">
          <tr>
            <th scope="col" class="text-uppercase">Вид обработки</th>
            <th scope="col" class="text-uppercase font-weight-bold">«Базовая обработка»</th>
            <th scope="col" class="text-uppercase font-weight-bold">«Усиленная обработка»</th>
            <th scope="col" class="text-uppercase font-weight-bold">«Комплексная обработка»</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" class="text-uppercase font-weight-bold">Гарантийное обслуживание</th>
            <td>12 месяцев<br>(1 год)</td>
            <td>24 месяцев<br>(2 года)</td>
            <td>60 месяцев<br>(5 лет)</td>
          </tr>
          <tr>
            <th scope="row" class="text-uppercase font-weight-bold">Используемые препараты</th>
            <td>1 препарат</td>
            <td>2 препарата</td>
            <td>3-4 препарата*</td>
          </tr>
          <tr>
            <th scope="row">1 ком. кв. (дом)</th>
            <td>1500,00 руб</td>
            <td>3000,00 руб</td>
            <td>4500,00 руб</td>
          </tr>
          <tr>
            <th scope="row">2 ком. кв. (дом)</th>
            <td>1900,00 руб</td>
            <td>3800,00 руб</td>
            <td>5700,00 руб</td>
          </tr>
          <tr>
            <th scope="row">3 ком. кв. (дом)</th>
            <td>2100,00 руб</td>
            <td>4200,00 руб</td>
            <td>6300,00 руб</td>
          </tr>
          <tr>
            <th scope="row">4 ком. кв. (дом)</th>
            <td>2400,00 руб</td>
            <td>4800,00 руб</td>
            <td>7200,00 руб</td>
          </tr>
          <tr>
            <th scope="row">5 ком. кв. (дом)</th>
            <td>2700,00 руб</td>
            <td>5400,00 руб</td>
            <td>8100,00 руб</td>
          </tr>
        </tbody>
      </table>
      <p>*зависит от вида обрабатываемых насекомых</p>

      <h4 class="h4 mt-4">VIP-ОБРАБОТКА препаратами класса - ЛЮКС</h4>

      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col" class="text-uppercase text-center">+100% оплаты к тарифу</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Обработка от тараканов, блох, муравьев, пауков: <span class="font-weight-bold">Аттрацид 26CS, Диптрон 15 СЦ</span></th>
          </tr>
          <tr>
            <th scope="row">Обработка от клопов: <span class="font-weight-bold">Сольфак Дуо СК 7,5%, Актибиол IGR флоу, Диптрон 15 СЦ</span></th>
          </tr>
        </tbody>
      </table>
      <ol>
        <li>Выезд за МКАД 300,00 руб.</li>
        <li>Выезд за 20км и более от МКАД 500-1000,00 руб.</li>
        <li>Обработка после 21:00 и до 8:00 ПОВЫШЕННЫЙ  +1500,00 руб.</li>
        <li>Услуга «отодвинуть мебель» 300,00 руб.</li>
        <li>Дополнительные спальные места 200,00 руб./шт (когда более 3-х спальных мест в комнате)</li>
      </ol>
    </div>
  </div>
</template>

<script>

export default {

}
</script>

<style>

</style>
