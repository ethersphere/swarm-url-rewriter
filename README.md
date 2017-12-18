# swarm-url-rewriter

Ethereum Swarm uses `bzz://` urls, which are not supported by the browsers out there.
However, it is still recommended to use `bzz://` links to Swarm pages. To make these `bzz://` links work in the current browser environment, you can use this small JS snippet to rewrite the links in the page using the `http://swarm-gateways.net/` public gateway.
Because the script rewrites the urls only when the user clicks on them, it works well with complex dynamic web apps and not just with static htmls.
