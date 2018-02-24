export default class vModule {
  constructor () {
    this.module = {
      state: {},
      getters: {},
      mutations: {},
      actions: {},
      computed: {}
    }
  }

  getModule () {
    return this.module;
  }
}
