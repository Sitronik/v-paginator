<template>
  <div id="app">
    <div style="margin-left: 50px; margin-top: 50px">
      <h3 style="margin-left: 8px;">
        Example 1
      </h3>
      <br>
      <h6 style="margin-left: 8px;">
        Current page: {{ currentPage }}
      </h6>
      <br>
      <v-paginator :per-page="paginator.perPage"
                   :total="paginator.items.length"
                   :layout="paginator.template"
                   :query="true"
                   @changePage="changePage"
      ></v-paginator>
    </div>

    <div style="margin-left: 50px; margin-top: 50px">
      <h3 style="margin-left: 8px;">
        Example 2
      </h3>
      <br>
      <h6 style="margin-left: 8px;">
        Current page: {{ currentPage2 }}
      </h6>
      <br>
      <v-paginator :per-page="paginator2.perPage"
                   :total="paginator2.items.length"
                   :layout="paginator2.template"
                   :query="true"
                   @changePage="changePage2"
      ></v-paginator>
    </div>
  </div>
</template>

<script>
import VPaginator from '../src/index';
import {template} from './template';
import {template2} from './template2';

export default {
  components: {VPaginator},
  data () {
    return {
      currentPage: 1,
      paginator: {
        template,
        perPage: 2,
        items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
      },
      currentPage2: 1,
      paginator2: {
        template: template2,
        perPage: 2,
        items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
      }
    };
  },
  methods: {
    changePage(page) {
      this.currentPage = page;
    },
    changePage2(page) {
      this.currentPage2 = page;
    }
  }
};
</script>
