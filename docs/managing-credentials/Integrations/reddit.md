---
sidebar_position: 1
title: Reddit
---

### How it works

[API Rules & Resources](https://github.com/reddit-archive/reddit/wiki/API)

[API Endpoint Documentation](https://www.reddit.com/dev/api)

You can apply for and receive a set of credentials to Reddit's API using developer apps, which are linked to your Reddit user account.

If your intended usage has commercial purposes, Reddit requires that you fill out a form stating your intended usage.

That form can be found here: [Form](https://old.reddit.com/wiki/api)

### Creating your first app

First, login to your Reddit account.

From there, you're able to go to the Apps page. On the Reddit redesign, it's well hidden.

[Reddit Apps page](https://www.reddit.com/prefs/apps/)

Find the button on the bottom of the page that says, 'Create Another App' or 'Create App'.

![Developer Portal](/img/docs/managing-credentials/reddit/reddit_auth.png)

If you see here, you'll want to give your app a name. You can't put 'Reddit' in the app title as shown, so make sure it doesn't have that.

We don't need to use this app to provide user login access to other users via browser or mobile app. Therefore, choose the script type. 

Reddit asks for something called a redirect_uri, which is used to provide Reddit-based social media login. Again, we don't need that feature, so you can just enter a localhost value exactly as shown here:

**http://localhost:8080**

And that should take care of that.

Now that you've created an app, you should see your app's details as below:

![Developer Portal](/img/docs/managing-credentials/reddit/reddit_auth_2.png)

---

### Our objective: Get 2 Items
  
  - Reddit app ID
  - Reddit app secret

---

You can find the ID directly under 'personal use script' in the image above. Reddit will also email the ID of your app to the email address linked to your account. Convenient. Copy that down somewhere.

The app secret is labeled as 'secret'. Copy that as well.

### Add the app ID and secret to your Wordparrot account


### Revoke access to Reddit

If you need to stop Wordparrot from accessing the Reddit API with your account, you can come to the apps page on Reddit and simply delete your app. 

It is easy to create a new one should you change your mind, but you will need to go through this process again.