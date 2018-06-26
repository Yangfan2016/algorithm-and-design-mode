/**
 * 防抖动
 * @param {*执行的函数} fn 
 * @param {*延时} delay 
 * @param {*是否立即触发} isImmediate 
 */
var debounce = function (fn, delay, isImmediate) {
    var timer = null;
    // 默认不立即触发
    isImmediate = typeof isImmediate === "undefined" ? false : isImmediate;

    return function () {
        var ctx = this, // 保存作用域
            args = arguments; // 保存参数
        // 初始化清空所有定时器
        if (timer) {
            clearTimeout(timer);
        }
        // 如果是立即触发
        if (isImmediate) {
            if (!timer) { // timer为空时触发操作
                fn.apply(ctx, args);
            }
            // delay时间后置空timer
            timer = setTimeout(_ => {
                timer = null;
            }, delay);
        } else { // delay时间后触发操作
            timer = setTimeout(_ => {
                fn.apply(ctx, args);
            }, delay);
        }
    };
};
