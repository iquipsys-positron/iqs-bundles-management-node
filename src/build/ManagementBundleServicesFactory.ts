import { DefaultContainerFactory } from 'pip-services3-container-node';

import { CloudwatchServiceFactory } from 'iqs-services-cloudwatch-node';

export class ManagementBundleServicesFactory extends DefaultContainerFactory {

    public constructor() {
        super();

        this.add(new CloudwatchServiceFactory);

    }

}
