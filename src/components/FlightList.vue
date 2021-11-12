<template>
  <div class="flight-list">
    <section class="flight-tickets" v-for="index in 2" :key="index">
      <header class="flight-tickets__header">
        <img class="flight-tickets__header-logo" src="../assets/img/logo_lot.png" alt="логотип авиакомпании" />
        <div class="flight-tickets__header-wrap">
          <p class="flight-tickets__header-price">21049 Р</p>
          <p class="flight-tickets__header-info">Стоимость для одного взрослого пассажира</p>
        </div>
      </header>
      <article class="flight-ticket" v-for="index in 2" :key="index">
        <div class="flight-ticket__rout">
          <p class="flight-ticket__rout-start fs-28">Москва, ШЕРЕМЕТЬЕВО <span>(SVO)</span></p>
          <img src="https://img.icons8.com/ios/40/0087c9/long-arrow-right.png" />
          <p class="flight-ticket__rout-finish fs-28">ЛОНДОН, Лондон, Хитроу <span>(LHR)</span></p>
        </div>
        <div class="flight-ticket__date">
          <p class="flight-ticket__date-time fs-18">20:40 <span>18 авг. вт</span></p>
          <div class="flight-ticket__travel-time">
            <img src="https://img.icons8.com/material-outlined/24/000000/clock--v1.png" />
            <p class="flight-ticket__travel-time-info fs-18">14 ч 45 мин</p>
          </div>
          <p class="flight-ticket__date-time fs-18">09:25 <span>19 авг. ср</span></p>
          <div class="flight-ticket__date-transfer fs-14">1 пересадка</div>
        </div>
        <div class="flight-ticket__company fs-12">Рейс выполняет:<span>LOT Polish AirLines</span>
          <p class="flight-ticket__company-border"></p></div>
      </article>
      <button class="flight-tickets-btn">ВЫБРАТЬ</button>
    </section>
  </div>
</template>

<script>
export default {
  name: "FlightList"
};
</script>

<style lang="scss">
.flight-list {
}

.flight-tickets {
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: $col-blue;
    color: $white;
    padding: 10px 20px;

    &-logo {
      width: 70px;
    }

    &-wrap {
      text-align: end;
    }
  }

  &-btn {
    width: 100%;
    margin: 0 auto 25px;
    padding: 10px;
    background: $col-orange;
    color: $white;
  }
}

.flight-ticket {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 15px;

  &__rout {
    border-bottom: 1px solid $form-bg;
  }

  &__rout, &__date {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
    width: 100%;

    &-start > span, &-finish > span {
      color: $col-blue;
    }
  }

  &__date {
    position: relative;
    padding-bottom: 15px;
    border-bottom: 2px solid $form-bg;

    &-time > span {
      color: $col-blue;
      font-size: 14px;
    }

    &-transfer {
      position: absolute;
      margin-left: auto;
      margin-right: auto;
      left: 0;
      right: 0;
      text-align: center;
      bottom: -10px;
      z-index: 5;
      background: white;
      width: max-content;
      padding: 0 7px;
      color: $col-orange;
    }
  }
  &__company {
    width: 100%;
    display: flex;
    gap: 5px;
    position: relative;
    &-border {
      position: absolute;
      left: 0;
      right: 0;
      bottom: -10px;
      width: 100%;
      height: 2px;
      background: $col-blue;
    }
  }
  &__travel-time {
    display: flex;
    align-items: center;
    gap: 5px;
  }


}
</style>
