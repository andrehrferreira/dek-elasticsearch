import { $ } from "@dekproject/scope";
import Elasticsearch from 'elasticsearch';
import * as Client6 from 'es6';
import * as Client7 from 'es7';

export default () => {
    try{
        let env = process.env;
        let hosts = (env.ELASTICSEARCH_HOST.indexOf(",") > -1) ? env.ELASTICSEARCH_HOST.split(",") : env.ELASTICSEARCH_HOST
        let elasticsearch = null;

        switch(env.ELASTICSEARCH_VERSION){
            case "6": elasticsearch = new Client6.Client( { node: hosts }); break;
            case "7": elasticsearch = new Client7.Client( { node: hosts }); break;
            default: elasticsearch = new Elasticsearch.Client( { hosts: hosts }); break;
        }

        if(process.env.DEBUG == 'true')
            console.log(`[ Elasticsearch ] - Elasticsearch successfully signed`);

        $.set("elasticsearch", elasticsearch);
    }
    catch (e) {
        console.log(`[ Elasticsearch ] - ${e.message}`);
    }
}
