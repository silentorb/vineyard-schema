"use strict";
var library_1 = require('./library');
var loading_1 = require("./loading");
var Schema = (function () {
    function Schema(definitions) {
        if (definitions === void 0) { definitions = undefined; }
        this.trellises = {};
        this.library = new library_1.Library();
        if (definitions) {
            this.define(definitions);
        }
    }
    Schema.prototype.define = function (definitions) {
        loading_1.load_schema(definitions, this.trellises, this.library);
    };
    return Schema;
}());
exports.Schema = Schema;
//# sourceMappingURL=scheming.js.map