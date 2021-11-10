<template>
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
    <div>
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
      <div>
        <h5 class="fs-18s">Цена</h5>
        <div class="filter-components__category-wrap">
          <label> От <input type="number" value="0" /> </label>
          <label> До <input type="number" value="10000" /> </label>
        </div>
      </div>
      <div>
        <h5 class="fs-18s">Авиакомпании</h5>
        <div class="filter-components__category-wrap">
          <label>
            <input type="checkbox" name="airline" value="LOT" />
            - LOT Polish Airlines
          </label>
          <label>
            <input type="checkbox" name="airline" value="AIR" />
            - Аэрофлот - российские авиалинии
          </label>
        </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "FilterComponents",
};
</script>

<style lang="scss">
.filter-components {
  display: flex;
  flex-direction: column;
  padding: 30px 20px;
  color: $form-bg;
}
</style>
