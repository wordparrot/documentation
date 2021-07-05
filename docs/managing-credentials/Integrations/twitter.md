---
sidebar_position: 2
title: Twitter
---

### How it works

[Official API Documentation](https://developer.twitter.com/en/docs/twitter-api/getting-started/getting-access-to-the-twitter-api)

You can apply for and receive a set of credentials to Twitter's API using their Developer Portal.

Twitter's official documentation can get very technical, so we'll take your hand through the most important steps.

### Twitter Developer Portal

Key management is handled by Twitter's Developer Portal, found here:

[Developer Portal](https://developer.twitter.com/)

If you don't have a regular account to Twitter yet, you'll need to make one first and login with it on the Developer Portal.

### Approval required before proceeding

It's important to note that Twitter's API involves an application and a review process. If your application is rejected, you will not be given a reason and not be able to appeal the decision. It is important to be honest and forthright about your intended uses.

The more simple your use case, the likely easier it will be to gain access. Regardless, you'll need to submit an explanation for your intended uses and wait for approval. This may take at least a day or two and possibly longer.

### Agreeing to terms of service

Twitter is very conscious of abusive actors on their platform. Rules on aggregation, analysis, and creation of Twitter bots for automated tweeting are tighly enforced.

Be sure to familiarize yourself with Twitter's terms of service before proceeding.

### Sign up for an account

First, make sure you have a regular Twitter account for your personal use. If you don't yet, you can sign up for one:

[Signup here](https://twitter.com/i/flow/signup)

In order to proceed with API access, you'll need to link the account with your phone number. You can start with email for now, but you'll be prompted again later once you've gone to the Developer Portal.

### Proceed to the Twitter Developer Portal

![Developer Portal](/img/docs/managing-credentials/twitter/twitter_developer_platform.png)

[Developer Portal](https://developer.twitter.com/)

### Providing basic information

Once there, you'll follow a multi-step process for approval.

You'll first need to provide some basic information about yourself.

If you haven't verified your phone number at this point, you'll be asked to do so.

![Developer Portal](/img/docs/managing-credentials/twitter/twitter_developer_platform_2.png)

Indicate which type of use you intend by selecting 'Professional', 'Hobbyist', or 'Academic'. If not requesting access as part of your job or as part of academic research, or if you have no specific plan in mind, then you can pick Hobbyist -> Exploring the API.

![Developer Portal](/img/docs/managing-credentials/twitter/twitter_developer_platform_3.png)

### Providing a short statement on intended use

Twitter requires you to write out a statement on your intended use. At a minimum, you are asked to write about your intended purposes. More details will make for a better application.

If you are planning collect large amounts of data, perform data analytics, or write bots, you may need to further describe this use in detail.

If you are only planning to fetch data, and have no need for posting tweets or modifying user settings, you can opt for read-only access.

If none of these cases apply to you, you can indicate that it is for your personal use. 

For example, a personal use case would be: 'I'm just exploring the Twitter API for now and practicing with read-only operations and basic authentication. I'm eager to see whether it may be a good fit for future projects.'

### Submitting

When you have concluded with preparing your application, you can submit. The approval process will likely take longer than 24 hours to give a response.

### Twitter Developer Portal

If you are fortunate to have been granted access to the Twitter API, you can proceed with getting a copy of your API credential information.

Twitter's API confirms to the web-standard Oauth2 specification. If you'd like to read about that, you can find information below. If you don't need technical specifications, skip ahead.

[About OAuth2](https://oauth.net/2/)

In order for Wordparrot to connect to Twitter, it requires an 'access token'. You need to provide the client ID and client secret to Wordparrot so that it can contact Twitter and get an access token.

### Create a project

Now that you have access, login to the Developer Portal dashboard and create a project. You can call it anything you like. We've called ours "Wordparrot-test".

![Developer Portal](/img/docs/managing-credentials/twitter/twitter_developer_platform_6.png)


### Get all keys and secrets

Click on the icon that looks like a key and says 'Keys and Tokens'.

![Developer Portal](/img/docs/managing-credentials/twitter/twitter_developer_platform_7.png)

Here, we can see a few different items. You can use these to enable Wordparrot to make user requests on your behalf.

---

### Our objective: Get 4 Items
  
  - API key
  - API secret
  - Access token
  - Access token secret

---


Click on 'Regenerate' where it says 'API Key and Secret'.

![Developer Portal](/img/docs/managing-credentials/twitter/twitter_developer_platform_8.png)

Follow the same process with the Access Token and Secret:

![Developer Portal](/img/docs/managing-credentials/twitter/twitter_developer_platform_9.png)

We want to copy every item we have here and store them in a safe place. 

You are only allowed one pair per project. If you need to regenerate them again, the old pair that you have will no longer work.

### Generate a credential on Wordparrot

At this point, you're ready to get a credential that you can use with Wordparrot pipelines.

If you're logged in, you can proceed to credential storage:

https://my.wordparrot.com/dashboard/credentials/list


Click on 'Add New' to get started. Select "Twitter" from the dropdown menu.

Enter the four items that you have collected from Twitter, then submit.

Wordparrot will perform a request to Twitter to test that the keys work. If so, then you're all set!


### Revoking Wordparrot credentials

If for any reason you should wish to withdraw Wordparrot's access to the Twitter API with your keys, you can revoke these keys from the Twitter Developer Portal. This will ensure that Twitter access is no longer possible. 

Any requests made to Twitter at this point using these keys will fail.