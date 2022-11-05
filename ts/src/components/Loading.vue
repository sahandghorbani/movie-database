<template>
  <div class="spinner-container">
  <div class="spinner">
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style>
  .spinner-container {
  width: 100%;
  height: 100%;
  z-index: 99999;
  text-align: center;
  position: relative;
}
.spinner {
  margin: auto;
  border: 1px solid #dbf2ff; 
  /*
  change to dotted for something cool.
  change width to 1px for tapered bar
  */
  width: 64px;
  height: 64px;
  display: inline-block;
  position: absolute;
  top: 300px;
  left: 450px;
  border-radius: 50%;
  border-right: 4px solid #018df7;
  text-align:center;
  animation-name: spin;
  animation-duration: 900ms;
  animation-iteration-count: infinite;
  /*animation-timing-function: linear; /*linear spin */
  animation-timing-function: cubic-bezier(0.53, 0.21, 0.29, 0.67);
}
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  /*50% {width:24px;height:24px} /*shrinking effect*/
  100% { -webkit-transform: rotate(360deg); }
}
@keyframes spin {
  0% { -webkit-transform: rotate(0deg);}
 /*50% {width:24px;height:24px} /*shrinking effect*/
  100% { -webkit-transform: rotate(360deg); }
}

</style>