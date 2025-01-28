const OneSignal = require("onesignal-node");
// const oneSignalClient = require("./../index");

// const client = new OneSignal.Client(process.env.APP_ID, process.env.KEY_ID);

// Function to send notification
async function sendPushNotification(userId, message, deepLinkUrl) {
  try {
    const oneSignalClient = new OneSignal.Client(
      process.env.APP_ID,
      process.env.KEY_ID
    );

    let notification = {
      contents: {
        en: message,
      },
      // included_segments: [userId],
      include_player_ids: [userId],
      // url: deepLinkUrl,
    };
    if (deepLinkUrl) {
      notification["url"] = deepLinkUrl;
    }

    try {
      await oneSignalClient.createNotification(notification);
    } catch (error) {
      console.error("Error sending notification:", error);
    }
  } catch (e) {
    console.log("Error at sending notification", e);
  }
}
module.exports = sendPushNotification;
