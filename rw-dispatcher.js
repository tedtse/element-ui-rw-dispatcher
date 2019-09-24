import { __decorate, __extends } from "tslib";
import Vue from 'vue';
import OPTIONS from './options';
var camelCase = require('camel-case');
var namespace = OPTIONS.namespace;
export function RWDispacherProvide(key) {
    return function (target, propertyKey, descriptor) {
        var Ctor = typeof target === 'function'
            ? target
            : target.constructor;
        if (!Ctor.__decorators__) {
            Ctor.__decorators__ = [];
        }
        Ctor.__decorators__.push(function (options) {
            var provide = options.provide;
            if (typeof provide !== 'function' || !provide.managed) {
                var original_1 = options.provide;
                provide = options.provide = function () {
                    var rv = Object.create((typeof original_1 === 'function' ? original_1.call(this) : original_1) || null);
                    for (var i in provide.managed) {
                        if (i === '__rwDispacherProvider__') {
                            rv[provide.managed[i]] = this;
                        }
                        else {
                            rv[provide.managed[i]] = this[i];
                        }
                    }
                    return rv;
                };
                provide.managed = {};
            }
            provide.managed[propertyKey] = key || propertyKey;
        });
    };
}
var RWDispatcher = /** @class */ (function (_super) {
    __extends(RWDispatcher, _super);
    function RWDispatcher() {
        var _this = _super.call(this) || this;
        _this.__rwDispacherProvider__ = _this;
        _this[camelCase(namespace) + "State"] = 'write';
        _this[camelCase(namespace) + "Config"] = {};
        return _this;
    }
    RWDispatcher.prototype.setRWDispatcherState = function (state) {
        this[camelCase(namespace) + "State"] = state;
    };
    RWDispatcher.prototype.getRWDispatcherState = function () {
        return this[camelCase(namespace) + "State"];
    };
    RWDispatcher.prototype.setRWDispatcherConfig = function (config) {
        this[camelCase(namespace) + "Config"] = config;
    };
    RWDispatcher.prototype.getRWDispatcherConfig = function () {
        return this[camelCase(namespace) + "Config"];
    };
    __decorate([
        RWDispacherProvide(camelCase(namespace) + "Provider")
    ], RWDispatcher.prototype, "__rwDispacherProvider__", void 0);
    return RWDispatcher;
}(Vue));
export { RWDispatcher };
