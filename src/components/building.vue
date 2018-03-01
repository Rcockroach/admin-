<template>
    <div>
        <div id="building"></div>
    </div>
</template>

<script>

export default {
    data(){
      return {}
    },
}
</script>

<style>
#building {
    position: relative;
    left: 50%;
    width: 90%;
    height: 600px;
    margin-left: -45%;
    border: solid #D01257 1px;
    box-shadow: 0 0 8px #FB90B7;
    border-radius: 10px;
  }   
  @media screen and (max-width: 470px) {
    #building {
      height: 500px;
    }
  }
</style>
