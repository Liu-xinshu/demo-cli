export default {
  install(Vue) {
    Vue.mixin({
      methods: {
        /**
         * 防抖
         * @param {function} callback 回调函数
         * @param {number} delay 延时时间
         */
        antiShake: (() => {
          let time;
          return (callback, delay = 0) => {
            clearTimeout(time);
            time = setTimeout(callback, delay);
          };
        })(),
        /**
         * @description:节流函数
         * @param {function} callback 回调函数
         * @param {number} interval	触发频率
         */
        throttle: (() => {
          let time = new Date();
          return function(fn, interval = 300) {
            let now = new Date();
            if (now - time >= interval) {
              fn.apply(this);
              time = now;
            }
          };
        })(),
      },
    });
  },
};
