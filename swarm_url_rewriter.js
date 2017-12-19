/**
 * Swarm url rewriter script
 *
 * Ethereum Swarm uses bzz:// urls, but browsers don't understand the bzz
 * protocol. With this bzz:// urls are automatically rewritten to
 * http://swarm-gateways.net/bzz:/ urls after the user clicks on them.
 * urls, and the page will be served by the public swarm gateway.
 */

if (document.addEventListener) {
    document.addEventListener('click', handleClick);
} else if (document.attachEvent) {
    document.attachEvent('onclick', handleClick);
}

function handleClick(event) {
    var target = event.target || event.srcElement;
    if (target.tagName == "A" && target.protocol == "bzz:") {
        event.preventDefault();
        window.location.href = target.href.replace("bzz://", "/bzz:/");
    }
}
