/*
*   The script was written using ES6 syntax, therefore JSHint should be checked with EC6 enabled
 */
(function (global) {
    "use strict";

    global.addEventListener("message", function (e) {
        if (e.data.name === "Broadcasted") {
            global.BuyCrypto.isBroadcasted = true;
            global.BuyCrypto.txHash = e.data.txHash;
        }
    });

    function getUrlParam(name) {
        return new URLSearchParams(location.search).get(name);
    }

})(this);