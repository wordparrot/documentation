---
sidebar_position: 4
title: Authenticate with Credentials
---

### Create a Credential

This can be done by going to the Credentials page on your Wordparrot server.

Go to [YOUR DOMAIN NAME]/credentials or find the key icon from the Dashboard sidebar.

Once you've clicked through, select the app integration for which you want to create a credential.

### Attach Credential to Pipeline Nodes

Once you've successfully created a credential, you can attach it to pipeline nodes that are using actions from your app.

For example, this pipeline uses the 'Update spreadsheet' action.

### About API Authentication

Wordparrot is able to handle secure connections to third-party apps through API authentication. The method of authentication varies by app, but in most cases, it will involve the use of an API key or access token.

In the simplest example, you'll be prompted to go to the third-party app interface and generate an API key. This can be directly saved in Wordparrot for future use.

In a more complex, OAuth2-based authentication flow (such as Google's), you'll be redirected to the third-party app's page from Wordparrot and asked to login to your account again. When you successfully do so, you'll be redirected back to Wordparrot, where an access token will be saved for future use.

No matter what the manner of authentication may be, Wordparrot plugins will contain clear directions on how to obtain credentials.

