---
sidebar_position: 3
title: Node
---

![Node](/img/docs/create-pipeline/concepts/node.png)

These represent the actions your pipeline will carry out in sequence. 

For example, the 'Twitter' node contains different types of Twitter functionality - reading tweets, creating a tweet, even updating Twitter user settings. 

Nodes can be very simple or complex. They can run automatically, or you can set them to run only after specific conditions are met.

A functioning pipeline must have at least one node, but usually has two or more.

Nodes are set to run as a cascade. A node can only run if an earlier node in the sequence completes without errors.