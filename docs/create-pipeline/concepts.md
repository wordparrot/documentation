---
sidebar_position: 6
---

In order to use pipelines, you should get familiar with several different concepts.

___

*The golden rule of pipelines:*

Simple and short is always better.

---

**Pipeline**

---
A series of programmable actions, which we call nodes.

Pipelines can be run manually, timed to run on a schedule, or set to run based on *events*.

Events are created when certain things happen. Designing events will let you get the most out of your pipelines.

For example, you can set an event to occur when you get an email in your inbox.

You can even set a pipeline to recieve an event when another pipeline finishes.

---

**Node**

--- 

These represent the actions your pipeline will carry out in sequence. 

For example, the 'Twitter' node contains different types of Twitter functionality - reading tweets, creating a tweet, even updating Twitter user settings. 

Nodes can be very simple or complex. They can run automatically, or you can set them to run only after specific conditions are met.

A functioning pipeline must have at least one node, but usually has two or more.

Nodes are set to run as a cascade. A node can only run if a previous node completes without errors.

---

**Repository** 

--- 

Where you store things that come from pipelines. These things should relate thematically.

For example, you can create a Movie Repository to save a daily set of posts from your favorite movie database.

Repositories are necessary to have. Your pipeline doesn't save anything on its own.

For example, you can create a two-node Twitter pipeline. The first node should collect the Twitter data, and the second node should write the data to a repository of your choice.

This will allow you to access this data at at a later time, or use it in another part of the app.

You can have as many repositories as you want.

---

**Tags** 

--- 
Use these to further categorize things in your repository and give them meaning. One item can have multiple tags attached to it.

Example:

On Pipeline A, node 1, collect Twitter data about horror movies and attach with the 'Horror' tag.

Then on Pipeline B, node 1, collect Twitter data about action movies and attach with the 'Action' tag.

Set both Pipeline A and B to write to the Movies Repository in node 2.

Now you have a repository that is tag-sortable!

---

**Credentials** 

--- 

These are the special keys you'll often need to access services like Twitter via their APIs. 

While we can't create credentials for you, we can help you through the process of getting them. In most cases, you'll only need to do this once.

 We can then securely store them to use in your pipelines.

You'll never have to give us your passwords. Most often, we'll redirect you to the platform in question, where you'll be asked to log in. 

After you log in, that service will issue us a key that we can store for your use. That's it!

Refer to the section 'Getting Credentials' to see how you can obtain API keys for your favorite platform. The process is different for each.
