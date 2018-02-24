/**
 * Хранилище для виджета
 *
 * @example Модули с внешнего мира должны иметь такой вид
 * {
 *  module.name: string,
 *  module.getters: [],
 *  module.mutations: [],
 *  module.actions: [],
 *  module.computed: [],
 *  module.plugin: clojure(Arrow-function)
 * }
 *
 * @author Keroosha
 */

import Vuex from "vuex";

export default (modules) => {
  let buildedStore = {
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    computed: {},
    plugins: []
  };

  for (let module in modules) {
    if (!modules[module].module.name) {
      console.log("%cМодуль не был загружен (Не указано имя модуля для импорта в поле module.name): ", "color: red; font-size: 15px;");
      console.log(modules[module]);
      break;
    }

    if (modules[module].module.state) {
      buildedStore.state[modules[module].module.name] = modules[module].module.state;
    }

    if (modules[module].module.getters) {
      Object.assign(buildedStore.getters, modules[module].module.getters);
    }

    if (modules[module].module.mutations) {
      Object.assign(buildedStore.mutations, modules[module].module.mutations);
    }

    if (modules[module].module.actions) {
      Object.assign(buildedStore.actions, modules[module].module.actions);
    }

    if (modules[module].computed) {
      Object.assign(buildedStore.computed, modules[module].module.computed);
    }
    if (modules[module].module.plugin) {
      buildedStore.plugins.push(modules[module].module.plugin);
    }
  }

  console.log("%c[DEBUG VUEX]: Outputing builded model", "color: blue; font-size: 13px;");
  console.log(buildedStore);

  return new Vuex.Store(buildedStore);
}
