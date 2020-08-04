import { $ } from "@dekproject/scope";
import Elasticsearch from 'elasticsearch';
import * as Client6 from 'es6';
import * as Client7 from 'es7';

export default () => {
    try{
        let env = process.env;
        let hosts = (env.ELASTICSEARCH_HOST.indexOf(",") > -1) ? env.ELASTICSEARCH_HOST.split(",") : env.ELASTICSEARCH_HOST;
        hosts = [...new Set(hosts)];//Fix duplicate hosts (@farchanjo)

        let client = null;

        switch(env.ELASTICSEARCH_VERSION){
            case "6": 
                if(Array.isArray(hosts))
                    client = new Client6.Client( { nodes: hosts }); 
                else
                    client = new Client6.Client( { node: hosts });
            break;
            case "7": 
                if(Array.isArray(hosts))
                    client = new Client7.Client( { nodes: hosts });
                else
                    client = new Client7.Client( { node: hosts }); 
            break;
            default: client = new Elasticsearch.Client( { hosts: hosts } ); break;
        }

        if(process.env.DEBUG == 'true')
            console.log(`[ Elasticsearch ] - Elasticsearch successfully signed`);

        $.set("elasticsearch", client);
    }
    catch (e) {
        console.log(`[ Elasticsearch ] - ${e.message}`, e);
    }
}
