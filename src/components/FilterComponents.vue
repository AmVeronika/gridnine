<template>
  <div class="filter">
    <form class="filter-components">
      <div class="filter-components__category">
        <h5 class="fs-18s">Сортировать</h5>
        <div class="filter-components__category-wrap">
          <label>
            <input type="radio" name="sort" value="increase" />
            - по возрастанию цены
          </label>
          <label>
            <input type="radio" name="sort" value="decrease" />
            - по убыванию цены
          </label>
          <label>
            <input type="radio" name="sort" value="travel-time" />
            - по времени пути
          </label>
        </div>
      </div>
      <div class="filter-components__category">
        <h5 class="fs-18s">Фильтровать</h5>
        <div class="filter-components__category-wrap">
          <label>
            <input type="checkbox" name="filter" value="with-transfer" />
            - 1 пересадка
          </label>
          <label>
            <input type="checkbox" name="filter" value="without-transfer" />
            - без пересадки
          </label>
        </div>
      </div>
      <div class="filter-components__category">
        <h5 class="fs-18s">Цена</h5>
        <div class="filter-components__category-wrap">
          <label> От <input class="filter-components__category-input" type="number" placeholder="0" /> </label>
          <label> До <input class="filter-components__category-input" type="number" placeholder="10000" /> </label>
        </div>
      </div>
      <div class="filter-components__category">
        <h5 class="fs-18s">Авиакомпании</h5>
        <div class="filter-components__category-wrap">
          <label class="filter-components__category-company">
            <input type="checkbox" name="airline" value="LOT" />
            -  <p class="filter-components__category-name">LOT Polish Airlines</p><p class="filter-components__category-price"> от 21049 р. </p>
          </label>
          <label class="filter-components__category-company">
            <input type="checkbox" name="airline" value="AIR" />
            - <p class="filter-components__category-name">Аэрофлот - российские авиалинии</p> <p class="filter-components__category-price"> от 31733 р. </p>
          </label>
        </div>
      </div>
    </form>
  </div>

</template>

<script>
export default {
  name: "FilterComponents"
};
</script>

<style lang="scss">
.filter {
  background: $form-bg;
}

.filter-components {
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 30px 20px;
  color: $form-text;
  background: white;
  margin-top: 70px;

  &__category {
    h5 {
      margin-bottom: 15px;
    }

    &-wrap {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 5px;
    }

    label {
      cursor: pointer;
    }

    &-input {
      width: 85%;
      padding: 2px 7px;
      border: 1px solid $form-text;
      border-radius: 2px;
    }
    &-company {
           position: relative;
         }
    &-name {
      white-space: nowrap; /* Запрещаем перенос строк */
      overflow: hidden; /* Обрезаем все, что не помещается в область */
      text-overflow: ellipsis; /* Добавляем многоточие */
      width: 130px;
      position: absolute;
      top: 0;
      left: 27px;
    }

    &-price {
      width: max-content;
      position: absolute;
      top: 0;
      left: 177px;

    }
  }
}
</style>
