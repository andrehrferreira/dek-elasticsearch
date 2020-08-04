'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _scope = require('@dekproject/scope');

var _elasticsearch = require('elasticsearch');

var _elasticsearch2 = _interopRequireDefault(_elasticsearch);

var _es = require('es6');

var Client6 = _interopRequireWildcard(_es);

var _es2 = require('es7');

var Client7 = _interopRequireWildcard(_es2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
    try {
        var env = process.env;
        var hosts = env.ELASTICSEARCH_HOST.indexOf(",") > -1 ? env.ELASTICSEARCH_HOST.split(",") : env.ELASTICSEARCH_HOST;
        var client = null;

        switch (env.ELASTICSEARCH_VERSION) {
            case "6":
                if (Array.isArray(hosts)) client = new Client6.Client({ nodes: hosts });else client = new Client6.Client({ node: hosts });
                break;
            case "7":
                if (Array.isArray(hosts)) client = new Client7.Client({ nodes: hosts });else client = new Client7.Client({ node: hosts });
                break;
            default:
                client = new _elasticsearch2.default.Client({ hosts: hosts });break;
        }

        if (process.env.DEBUG == 'true') console.log('[ Elasticsearch ] - Elasticsearch successfully signed');

        _scope.$.set("elasticsearch", client);
    } catch (e) {
        console.log('[ Elasticsearch ] - ' + e.message);
    }
};
//# sourceMappingURL=index.js.map