/*
Log that we received the message.
Then display a notification. The notification contains the URL,
which we read from the message.
*/
function notify(message) {
	let title = message.title;
	let content = message.body;
	browser.notifications.create({
		"type": "basic",
		"iconUrl": browser.runtime.getURL("icons/icw-32.ico"),
		"title": title,
		"message": content
	});
}

/*
Assign `notify()` as a listener to messages from the content script.
*/
browser.runtime.onMessage.addListener(notify);
