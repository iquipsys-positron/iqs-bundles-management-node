"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_container_node_1 = require("pip-services3-container-node");
const pip_services3_rpc_node_1 = require("pip-services3-rpc-node");
const pip_services3_aws_node_1 = require("pip-services3-aws-node");
const ManagementBundleServicesFactory_1 = require("../build/ManagementBundleServicesFactory");
const ManagementBundleClientsFactory_1 = require("../build/ManagementBundleClientsFactory");
class ManagementBundleProcess extends pip_services3_container_node_1.ProcessContainer {
    constructor() {
        super("iqs-bundles-management", "Management bundle for iQuipsys Positron");
        this._factories.add(new ManagementBundleServicesFactory_1.ManagementBundleServicesFactory);
        this._factories.add(new ManagementBundleClientsFactory_1.ManagementBundleClientsFactory);
        this._factories.add(new pip_services3_rpc_node_1.DefaultRpcFactory);
        this._factories.add(new pip_services3_aws_node_1.DefaultAwsFactory);
    }
}
exports.ManagementBundleProcess = ManagementBundleProcess;
//# sourceMappingURL=ManagementBundleProcess.js.map