/**
 * 节流
 * @param {*执行的函数} fn 
 * @param {*延时} delay 
 * @param {*是否立即触发} isImmediate 
 */
var throttle = function (fn, delay, isImmediate) {
    var timer = null;
    // 默认立即触发
    isImmediate = typeof isImmediate === "undefined" ? true : isImmediate;

    return function () {
        var ctx = this, // 保存作用域
            args = arguments; // 保存参数
        if (!timer) { // timer为空时
            if (isImmediate) fn.apply(ctx, args); // 立即触发
            timer = setTimeout(function () {
                clearTimeout(timer);
                timer = null;
                if (!isImmediate) fn.apply(ctx, args); // delay时间后触发操作
            }, delay);
        }
    };
};