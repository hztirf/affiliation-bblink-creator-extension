/*
Modify the current URL and copy it to clipboard
*/
function createBBURL() {
	let ebay_input_link = window.location.href.toString().trim();
	
	// Check if we are really on a eBay item page
	/*const regex1 = new RegExp(".ebay.");
	const regex2 = new RegExp("/itm/");
	
	if (!regex1.test(ebay_input_link) || !regex2.test(ebay_input_link))
		return;
	*/
	const ebay_link = "https://www.ebay.com/itm/"
	const ebay_affiliate_id = "5335842975"
	const ebay_network_id = "9"
	const ebay_custom_id = "ICWEBAYBBLINK-FF-EXT"
	
	var ebay_affiliate_info = "?affiliate.trackingId=" + ebay_affiliate_id + "&affiliate.networkId=" + ebay_network_id + "&affiliate.customId=" + ebay_custom_id;

	let item_index = ebay_input_link.indexOf("/itm/") + 5;
	var ebay_item_number = ebay_input_link.substring(item_index, item_index + 12);
	
	var ebay_affiliate_link = ebay_link.concat(ebay_item_number, ebay_affiliate_info)
            
	var ebay_result_link = "[url=" + ebay_affiliate_link + "]eBay item " + ebay_item_number + "[/url]";
	
	if (ebay_result_link) {
		writeClipboardText(ebay_result_link);
		browser.runtime.sendMessage({"title": "Success", "body": "ICW-friendly link has been copied to your clipboard!"});
	}
}

/*
Write text to clipboard
*/
async function writeClipboardText(input) {
  try {
    await navigator.clipboard.writeText(input);
  } catch (error) {
    console.error(error.message);
  }
}

/*
Add getBBURL() as a listener to double click events.
*/
document.addEventListener("dblclick", createBBURL);
