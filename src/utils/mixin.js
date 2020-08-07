
export default {
	install(Vue) {
		Vue.mixin({
			methods: {
				/**
				 * 防抖
				 * @param {回调函数} callback
				 * @param {延时时间} delay
				 */
				antiShake: (() => {
					let time;
					return (callback, delay = 0) => {
						clearTimeout(time);
						time = setTimeout(callback, delay);
					};
				})(),
				/*
					节流
					@params {回调函数} fn
					@params {间隔时间} interval
				*/
				throttle: (() => {
					let time = new Date();
					return function(fn, interval = 300) {
						let now = new Date();
						if (now - time >= interval) {
							fn.apply(this);
							time = now;
						}
					}
				})()
			}
		});
	},
};
