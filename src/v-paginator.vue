<script>
export default {
  name: 'Paginator',
  props: {
    perPage: Number,
    total: Number,
    layout: String,
    activeClass: String,
    disabledClass: String,
    limitButtons: {type: Number, default: 4},
    query: Boolean
  },
  watch: {
    $route(to) {
      if (to.query.page !== this.page) {
        this.page = +to.query.page;
        this.$emit('changePage', +to.query.page);
      }
      if (!to.query.page) {
        this.page = 1;
        this.$emit('changePage', 1);
      }
    },
    perPage: {
      handler() {
        this.$emit('changePage', 1);
        this.$parent.$emit('changePage', 1);
      }
    }
  },
  methods: {
    injectLayout() {
      let layout = this.layout.replace(/\n/g, ' ');

      const searchReplace = /">$/;
      const list = [
        {match: 'main', replaceValue: '" v-if="totalPages">'},
        {match: 'prev', replaceValue: `" href="#" ${layout.includes('vue-paginator-prev-disabled') ? '' : 'v-if="page !== 1"'}  title="Prev page" @click.prevent.stop="paginate(page - 1)">`},
        {match: 'next', replaceValue: `" href="#" ${layout.includes('vue-paginator-next-disabled') ? '' : 'v-if="totalPages !== page"'} title="Next page" @click.prevent.stop="paginate(page + 1)">`},
        {match: 'item', replaceValue: '" v-for="n in pages" :key="n">'},
        {match: 'active', replaceValue: `" :class="n === page ? \'${this.activeClass ? this.activeClass : 'active'}\' : \'\'">`},
        {
          match: 'number',
          replaceValue: '" :title="\'Go to page \' + n" :href="\'?page=\' + n" @click.prevent.stop="paginate(n)">{{ n }}<\/a>',
          searchReplace2: '<.*class="vue-paginator-number.*?><\\/a>'
        }
      ];

      if (layout.includes('vue-paginator-prev-disabled')) {
        list.push({match: 'prev-disabled', replaceValue: `" :class="page === 1 ? 'disabled' : '' ? \'${this.disabledClass ? this.disabledClass : 'disabled'}\' : \'\'">`});
      }

      if (layout.includes('vue-paginator-next-disabled')) {
        list.push({match: 'next-disabled', replaceValue: `" :class="page === totalPages ? 'disabled' : '' ? \'${this.disabledClass ? this.disabledClass : 'disabled'}\' : \'\'">`});
      }

      for (const item of list) {
        const match = layout.match(new RegExp(`<.*vue-paginator-${item.match}.*?>`));
        if (!match) {
          return {status: false, message: `class vue-paginator-${item.match} not found`};
        }

        let value = match[0].replace(searchReplace, item.replaceValue);
        if (!value.includes(item.replaceValue)) {
          const data = value.replace(new RegExp(`(vue-paginator-${item.match}.*")\\s.*?>`), '\$1>');
          value = data.replace(searchReplace, item.replaceValue);
        }

        layout = layout.replace(new RegExp(!item.searchReplace2 ? `<.*vue-paginator-${item.match}.*?>` : item.searchReplace2), value);
      }

      return layout;
    }
  },
  render(createElement) {
    if (!this.layout) {
      return createElement('div', {}, 'layout attribute not found');
    }

    const self = this;
    const layout = this.injectLayout();
    if (typeof layout !== 'string' && !layout.status) {
      return createElement('div', {}, layout.message);
    }

    // react
    const data = {total: this.total, perPage: this.perPage};

    const component = {
      template: layout,
      computed: {
        startPage() {
          return this.$route && parseInt(this.$route.query.page, 10) || 1;
        }
      },
      data() {
        return {
          page: self.page,
          pages: [],
          limitButtons: self.limitButtons || 4,
          totalPages: self.totalPages,
          total: data.total,
          perPage: data.perPage
        };
      },
      created() {
        this.page = this.startPage;
        this.createPages(this.page);
      },
      methods: {
        createPages(start = 1) {
          if (this.pages.length) {
            this.pages = [];
          }

          const value = this.total / this.perPage;
          this.totalPages = Math.ceil(value);

          let page = 1;
          if (this.limitButtons < start) {
            page = start;
          }

          for (let i = 0; i < this.limitButtons; i++) {
            if (i !== 0) {
              page += 1;
            }

            if (page > this.totalPages) {
              const item = this.pages[0];
              item > 1 ? this.pages.splice(0, 0, item - 1) : '';
              continue;
            }

            this.pages.push(page);
          }
        },
        paginate(pageTo) {
          if (this.page === pageTo) {
            return;
          }

          if (this.pages[0] === this.page && pageTo < this.page || this.pages[this.pages.length - 1] === this.page && pageTo > this.page) {
            this.createPages(pageTo);
          }

          this.page = pageTo;

          // ssr
          this.$emit('changePage', this.page);
          this.$parent.$emit('changePage', this.page);

          if (self.query && this.$router) {
            this.$router.push({
              query: {
                ...this.$route.query,
                page: pageTo
              }
            });
          }
        }
      }
    };

    return createElement(component);
  }
};
</script>
