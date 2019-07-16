import { $ } from "@dekproject/scope";
import Elasticsearch from 'elasticsearch';

export default () => {
    try{
        let env = process.env;
        let hosts = (env.ELASTICSEARCH_HOST.indexOf(",") > -1) ? env.ELASTICSEARCH_HOST.split(",") : env.ELASTICSEARCH_HOST
        let elasticsearch = new Elasticsearch.Client( { hosts: hosts });

        if(process.env.DEBUG == 'true')
            console.log(`[ Elasticsearch ] - Elasticsearch successfully signed`);

        $.set("elasticsearch", elasticsearch);
    }
    catch (e) {
        console.log(`[ Elasticsearch ] - ${e.message}`);
    }
}
