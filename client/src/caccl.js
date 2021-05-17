import initCACCL from 'caccl/client/cached';

// Get CACCL instance or initialize CACCL with default settings
const caccl = initCACCL();

const api = caccl.api;
const getStatus = caccl.getStatus;
const sendPassback = caccl.sendPassback;
const sendRequest = caccl.clientSendRequest;

export default caccl;
export {
    api,
    getStatus,
    sendPassback,
    sendRequest,
};
