# @dekproject/elasticsearch

Elasticsearch interface plugin for DEK

What does this plugin do?

* Control configuration for connection to Elasticsearch in production development mode in a simplified way with **dotenv**
* Performs connection implementation along the lines ES6 being pre requirement to start the project

## Instalation

To install the bootstrap we recommend using the CLI

```bash
$ yarn add @dekproject/elasticsearch --save
$ nano .env
```

In the .env file add the following settings

```
ELASTICSEARCH_HOST = http://localhost:9200,http://localhost:9200
```

## Usage

Using in the standard DEK skeleton

```js
import { $, app, elasticsearch } from "@dekproject/scope";

$.wait("elasticsearch").then(() => {
    elasticsearch.cluster.health({}, (err,resp,status) => {  
        console.log("-- Client Health --", resp);
    });
});
```
