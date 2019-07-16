import dotenv from "dotenv";

import { $, plugins, elasticsearch } from "@dekproject/scope";

(async () => {
    await dotenv.config();
    await plugins("./build");

    $.wait("elasticsearch").then(() => {
        elasticsearch.cluster.health({}, (err,resp,status) => {
            console.log(resp);
        });
    }).catch((err) => {
        console.log(err)
    });
})();
