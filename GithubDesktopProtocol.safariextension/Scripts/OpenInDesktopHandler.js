/*
 * Copyright (c) 2012-2017 David Herzina <me@davidherzina.com>
 * This file is part of GithubDesktopProtocol.safariextension.
 *
 * $project.nam can not be copied and/or distributed without the express
 * permission of David Herzina
 */

if (window.location.host === 'github.com') {

	var links, thisLink, find, replace;

	links = document.evaluate("//a[@href]",
		document,
		null,
		XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
		null);

	for (var i = 0; i < links.snapshotLength; i++) {

		thisLink = links.snapshotItem(i);

		find = 'x-github-client:\/\/(.*)';
		replace = 'github-mac://$1';

		thisLink.href = thisLink.href.replace(RegExp(find), replace);
	}
}