import { IReferences } from 'pip-services3-commons-node';
import { ProcessContainer } from 'pip-services3-container-node';
import { DefaultRpcFactory } from 'pip-services3-rpc-node';
import { DefaultAwsFactory } from 'pip-services3-aws-node';

import { ManagementBundleServicesFactory } from '../build/ManagementBundleServicesFactory';
import { ManagementBundleClientsFactory } from '../build/ManagementBundleClientsFactory';

export class ManagementBundleProcess extends ProcessContainer {

    public constructor() {
        super("iqs-bundles-management", "Management bundle for iQuipsys Positron");
        this._factories.add(new ManagementBundleServicesFactory);
        this._factories.add(new ManagementBundleClientsFactory);
        this._factories.add(new DefaultRpcFactory);
        this._factories.add(new DefaultAwsFactory);
    }

}
