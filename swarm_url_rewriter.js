/**
 * Swarm url rewriter script
 *
 * Ethereum Swarm uses bzz:// urls, but browsers don't understand the bzz
 * protocol. You can rewrite bzz:// urls to http://swarm-gateways.net/bzz:/
 * urls, and the page will be served by the public swarm gateway.
 */

var GATEWAY_URL = "http://swarm-gateways.net/";

if (document.addEventListener) {
    document.addEventListener('click', handleClick);
} else if (document.attachEvent) {
    document.attachEvent('onclick', handleClick);
}

function handleClick(event) {
    var target = event.target || event.srcElement;
    if (target.tagName == "A" && target.protocol == "bzz:") {
        event.preventDefault();
        window.location.href = GATEWAY_URL + target.href;
    }
}
