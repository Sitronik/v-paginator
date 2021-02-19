# v-paginator [![CDNJS version](https://img.shields.io/cdnjs/v/v-paginator.svg)](https://cdnjs.com/libraries/v-paginator)

The idea behind `v-paginator` is pretty simple. All you need to do is add 6 required classes to your html template for injecting pagination functionality. 

SSR support.

<img src="https://raw.githubusercontent.com/sitronik/v-paginator/master/img/example1.gif" width="350" />

# Installation

## NPM

    npm install v-paginator

import the script:

    import VPaginator from 'v-paginator';
    
# Usage

### Register the component globally or locally:

```js
Vue.component('v-paginator', VPaginator);
```

OR

```js
...
components: {
  VPaginator
}
...
```

Example template.js:
```js
export const template = `<div class="vue-paginator-main pagination">
    <a class="vue-paginator-prev pagination__prev icon-pagination">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 451.846 451.847" id="arrow-left">
        <path xmlns="http://www.w3.org/2000/svg" d="M106.405 203.554L300.692 9.274c12.36-12.366 32.397-12.366
       44.75 0 12.354 12.353 12.354 32.39 0 44.743l-171.914 171.91 171.91
       171.902c12.353 12.36 12.353 32.394 0 44.748-12.355 12.36-32.392 12.36-44.75
       0L106.4 248.293c-6.177-6.18-9.262-14.27-9.262-22.366 0-8.099 3.091-16.196 9.267-22.373z" data-original="#000000">
        </path>
      </svg>
   </a>

    <ul class="pagination__list">
      <li class="vue-paginator-item  pagination__item">
        <a class="vue-paginator-number vue-paginator-active pagination__number"></a>
      </li>
    </ul>

    <a class="vue-paginator-next pagination__next icon-pagination">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 451.846 451.847" id="arrow-right">
      <path d="M345.441 248.292L151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391
      0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359
      44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z"></path>
      </svg>
    </a>
  </div>`;
```
Required classes in template:

    vue-paginator-main
    vue-paginator-prev
    vue-paginator-item
    vue-paginator-number
    vue-paginator-active
    vue-paginator-next

HTML/JS:
```js
import {template} from './template.js'; // Your template with vue-paginator classes

{
    data() {
       return {
          template,
          perPage: 2,
          total: 500 
       }    
    }
}
```

```vue
<v-paginator :per-page="perPage" :layout="template" :total="total" @changePage="yourFunction"/>
```    
## Props

| Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Type | Description |
| ----------------- | :--- | :--- |
| `total`      | `Number` | Total counf of items for pagination. **required** |
| `layout`      | `String` | Html template. **required** |
| `perPage`    | `Number` | Number of items per page. **required** |
| `changePage`   | `Event` | The pagination event fires when the page changes. |
| `active-class`      | `String` | CSS class name for active page element **default** `active` |
| `disabled-class` | `String` | CSS class name for disabled `next` or `prev` element **default** `disabled` |
| `limit-buttons`      | `Number` | Number of displayed page buttons **default** `4` |
| `query` | `Boolean` | Adds the current page to the browser address bar `?page=` **default** `false` |

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2021 Sitronik
