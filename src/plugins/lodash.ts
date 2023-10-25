import * as _ from 'lodash';

export default {
  install: (Vue) => {
      Vue.prototype.$_ = _;
  }
}