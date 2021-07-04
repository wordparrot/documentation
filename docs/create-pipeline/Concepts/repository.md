---
sidebar_position: 3
title: Repository
---

![Repository](/img/docs/create-pipeline/concepts/repository.png)

Where you store things that come from pipelines, whether it is raw data, social media posts, files, or anything else. They should share a theme.

For example, the 'Movie Repository' can store all movie-related data from multiple pipelines fetching from a movie database.

Repositories are necessary to have. Your pipeline doesn't save anything on its own.

For example, you can create a two-node Twitter pipeline. The first node should collect the Twitter data, and the second node should write the data to a repository of your choice.

This will allow you to access this data at at a later time, or use it in another part of the app.

You can have as many repositories as you want.