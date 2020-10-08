<template>
<v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-title>
          <div class="data-spinner">
            <div id="spinner"></div><br>
            <span class="text-spinner">Carregand Dados.....</span>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "Spinner"
};
</script>

<style>
#spinner {
  border: 8px solid rgba(0, 0, 0, 0.1);
  border-left-color: #0a0a01a8;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 1s linear infinite;

  left: 50%;
}

#data-spinner{
  text-align: center;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>