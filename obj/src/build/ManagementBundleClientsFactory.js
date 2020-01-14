"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_container_node_1 = require("pip-services3-container-node");
const iqs_clients_cloudwatch_node_1 = require("iqs-clients-cloudwatch-node");
class ManagementBundleClientsFactory extends pip_services3_container_node_1.DefaultContainerFactory {
    constructor() {
        super();
        this.add(new iqs_clients_cloudwatch_node_1.CloudwatchClientFactory);
    }
}
exports.ManagementBundleClientsFactory = ManagementBundleClientsFactory;
//# sourceMappingURL=ManagementBundleClientsFactory.js.map