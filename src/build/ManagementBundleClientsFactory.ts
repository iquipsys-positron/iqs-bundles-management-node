import { DefaultContainerFactory } from 'pip-services3-container-node';
import { CloudwatchClientFactory } from 'iqs-clients-cloudwatch-node';

export class ManagementBundleClientsFactory extends DefaultContainerFactory {

    public constructor() {
        super();

        this.add(new CloudwatchClientFactory);

    }

}
