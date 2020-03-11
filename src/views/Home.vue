<template>
  <div class="home">
    <div class="container">
      <form>
        <div class="form-group">
          <label for="fname">First Name *</label>
          <input
            type="text"
            id="fname"
            name="fname"
            class="form-control"
            placeholder="First Name"
            maxlength="99"
          />
          <span
            class="field-validation-error"
            data-valmsg-for="First_Name"
            data-valmsg-replace="true"
          >
            <span id="fname-error" class=""></span>
          </span>
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss"></style>

<script>
  export default {
    name: "home",
    components: {},
    data() {
      return {};
    },
    methods: {},
    created() {}
  };
</script>
