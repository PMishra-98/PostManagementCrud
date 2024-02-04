<template>
  <!-- App.vue -->

  <v-app>


    <v-app-bar>

      <v-avatar color="teal" rounded size="56" tile >
        <v-icon dark>
          mdi-account-circle
        </v-icon><br/>
        ADD
      </v-avatar>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>

      <!-- Provides the application the proper gutter -->
      <v-container>

        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer>
      @Pallawi
    </v-footer>
  </v-app>
</template>

<script script>



</script>
