"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _scope = require("@dekproject/scope");

var _elasticsearch = require("elasticsearch");

var _elasticsearch2 = _interopRequireDefault(_elasticsearch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
    try {
        var env = process.env;
        var hosts = env.ELASTICSEARCH_HOST.indexOf(",") > -1 ? env.ELASTICSEARCH_HOST.split(",") : env.ELASTICSEARCH_HOST;
        var elasticsearch = new _elasticsearch2.default.Client({ hosts: hosts });

        if (process.env.DEBUG == 'true') console.log("[ Elasticsearch ] - Elasticsearch successfully signed");

        _scope.$.set("elasticsearch", elasticsearch);
    } catch (e) {
        console.log("[ Elasticsearch ] - " + e.message);
    }
};
//# sourceMappingURL=index.js.map