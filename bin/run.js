let ManagementBundleProcess = require('../obj/src/container/ManagementBundleProcess').ManagementBundleProcess;

try {
    new ManagementBundleProcess().run(process.argv);
} catch (ex) {
    console.error(ex);
}