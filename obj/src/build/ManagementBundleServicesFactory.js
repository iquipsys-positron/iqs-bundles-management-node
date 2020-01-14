"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_container_node_1 = require("pip-services3-container-node");
const iqs_services_cloudwatch_node_1 = require("iqs-services-cloudwatch-node");
class ManagementBundleServicesFactory extends pip_services3_container_node_1.DefaultContainerFactory {
    constructor() {
        super();
        this.add(new iqs_services_cloudwatch_node_1.CloudwatchServiceFactory);
    }
}
exports.ManagementBundleServicesFactory = ManagementBundleServicesFactory;
//# sourceMappingURL=ManagementBundleServicesFactory.js.map