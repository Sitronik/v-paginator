export const template2 = `<div id="style-3_paginate" class="vue-paginator-main dataTables_paginate paging_simple_numbers">
        <ul class="pagination">
          <li id="style-3_previous" class="vue-paginator-prev-disabled paginate_button page-item previous">
            <a aria-controls="style-3"
               data-dt-idx="0"
               tabindex="0"
               class="vue-paginator-prev page-link">
               <svg xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-arrow-left"
            ><line x1="19"
                   y1="12"
                   x2="5"
                   y2="12"
            ></line><polyline points="12 19 5 12 12 5"></polyline></svg></a>
          </li>

          <li class="vue-paginator-item vue-paginator-active paginate_button page-item">
            <a aria-controls="style-3"
               :data-dt-idx="n"
               tabindex="0"
               class="vue-paginator-number page-link"></a>
          </li>

          <li id="style-3_next"
              class="vue-paginator-next-disabled paginate_button page-item next">
            <a aria-controls="style-3"
               data-dt-idx="3"
               tabindex="0"
               class="vue-paginator-next page-link"><svg xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-arrow-right"
            ><line x1="5"
                   y1="12"
                   x2="19"
                   y2="12"
            ></line><polyline points="12 5 19 12 12 19"></polyline></svg></a>
          </li>
        </ul>
      </div>`;
