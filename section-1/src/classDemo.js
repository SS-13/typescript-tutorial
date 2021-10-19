var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Demo_num2;
var Demo = /** @class */ (function () {
    function Demo() {
        this.num = 1;
        // WeakMap
        _Demo_num2.set(this, 3);
    }
    Demo.prototype.getValue = function () {
        return this.num + __classPrivateFieldGet(this, _Demo_num2, "f");
    };
    return Demo;
}());
_Demo_num2 = new WeakMap();
var demo = new Demo();
demo.getValue();
// console.log(demo.num, demo.#num2);
var demos = [demo];
