<template>
  <div class="container">
    <div class="input">
      <input
        autocomplete="off"
        type="search"
        placeholder="Search todos..."
        @keyup="search($event)"
      />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    search(event) {
      this.$emit('search', event.target.value)
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  min-height: 70px;
  background-color: #fff;
  box-shadow: 0px 0px 5px 1px rgba(145, 145, 145, 0.75);
  border-radius: 10px;
  padding: 0 5px;
  margin: 5px;

  input {
    width: calc(100% - 85px);
    margin: 20px 0 10px 45px;
    border: 0;
    border-bottom: 1px solid slategray;
    outline: none;
    height: 25px;

    &::placeholder {
      font-family: 'Roboto';
      font-size: 20px;
      transition: 0.1s ease;
    }

    &:focus {
      &::placeholder {
        color: transparent;
      }
    }

    &.error {
      color: red;
      border-bottom: 1px solid red;

      &::placeholder {
        color: red;
      }

      &:focus {
        &::placeholder {
          color: transparent;
        }
      }
    }
  }
}
</style>
