/**
 * Swarm url rewriter script
 *
 * Ethereum Swarm uses bzz:// urls, but browsers don't understand the bzz
 * protocol. With this bzz:// urls are automatically rewritten to
 * http://swarm-gateways.net/bzz:/ urls after the user clicks on them.
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
