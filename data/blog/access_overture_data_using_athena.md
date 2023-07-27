---
title: "Accessing Overture Maps' Global Dataset using Athena (AWS)"
date: '2023-07-27'
tags: ['Overture', 'Data']
images: ['/static/images/athena_setuptable.jpg']
draft: false
summary: 'Hey there, fellow data enthusiasts! If you are eager to explore and utilize recently released data from Overture Maps but feel a bit overwhelmed by the process, this blog post will walk you through the steps to access and work with this exciting dataset.'
---

Hey there, fellow data enthusiasts! 👋 If you're eager to explore and utilize recently released data from Overture Maps but feel a bit overwhelmed by the process, don't worry! We're the same! 😅

To be completely transparent, I must admit that before writing this blog post, I had limited experience navigating Athena. I had heard about it before during [Jennings](https://twitter.com/jennings_in_geo)' talks about [Daylight OSM Distribution](https://aws.amazon.com/blogs/publicsector/querying-daylight-openstreetmap-distribution-amazon-athena/), but I never delved deep into it until now. However, my curiosity got the better of me, and I decided to take the plunge and try it out for myself. Thankfully, Jennings had published some helpful [resources](https://github.com/jenningsanderson/aws-athena-workshop) on setting up Athena, which provided me with a starting point and a better understanding of navigating this platform.

This blog post will walk you through the steps to access and work with this exciting dataset (similar to how I did it). Even if you're new to Geographic Information Systems (GIS), fear not – I've got you covered with simple instructions to help you get started. So, let's dive in!

**Step 1: Create an AWS Account**

First things first, head over to [Amazon Web Services (AWS)](https://aws.amazon.com/?nc2=h_lg) and create your free AWS account if you haven't already. It's quick and easy – just follow the on-screen instructions to set up your account.

**Step 2: Set your region to `us-west-2`**

Overture's pre-processed data resides in the us-west-2 region of AWS. So, make sure to set your region accordingly. This way, you'll be all set to access the dataset seamlessly.

![athena_region](/static/images/athena_region.png)

**Step 3: Create your own S3 Bucket (Optional)**

Setting up Athena was a bit confusing for me, especially when it came to an additional step that was essential before I could start querying the database. I felt a little stuck at this point. But don't worry, I'm here to share my experience and help you through it!

The crucial step I'm talking about is configuring the query result settings. It's an important part of the setup process, allowing you to effectively work with query results. To access this setting, you'll need to navigate to Settings > Manage. Once you're there, you'll be able to customize the settings to your preference and ensure a smoother querying experience (you need to add your preferred S3 bucket and AWS account ID here).

![athena_settings](/static/images/athena_settings.png)

![athena_manage_settings](/static/images/athena_manage_settings.png)

And, to make things more organized, creating your own Amazon S3 bucket is a good idea. This is where your query outputs will be saved. Remember to set the bucket in a region similar to where the source data lives (us-west-2 in this case). Check out this [documentation](https://docs.aws.amazon.com/AmazonS3/latest/userguide/create-bucket-overview.html) about creating a bucket.

**Step 4: Set Up the Database in Athena**

Now, let's get down to business! Set up your database in AWS Athena. Thankfully, Overture provides a helpful query and [resource](https://github.com/OvertureMaps/data/tree/main) as part of their setup. There are four available datasets to choose from: [admins](https://github.com/OvertureMaps/data/blob/main/athena_setup_queries.sql#L20), [transportation](https://github.com/OvertureMaps/data/blob/main/athena_setup_queries.sql#L107), [places](https://github.com/OvertureMaps/data/blob/main/athena_setup_queries.sql#L77), and [buildings](https://github.com/OvertureMaps/data/blob/main/athena_setup_queries.sql#L51). You can set them up one by one to get started.

To guide you, copy the code block from each category and paste it into the query editor. Similar to this:

![athena_setuptable](/static/images/athena_setuptable.png)

**Step 5: Load Partitions for your tables**

Before running specific queries, we need to load partitions for the tables. In the Athena query editor, run the following command:

```
MSCK REPAIR TABLE `places`
```

![athena_load_partitions1](/static/images/athena_load_partitions1.png)

Alternatively, you can choose "Load Partitions" from the table options menu.

![athena_load_partitions2](/static/images/athena_load_partitions2.png)

**Step 6: Run queries on your tables**

This is where the fun begins! You can now run queries on your tables. For example, let's say you're interested in exploring data for the Philippines. You can run a query like the one below:

```
SELECT
    *,  ST_GeomFromBinary(geometry)
FROM
    places
WHERE
        bbox.minX >  114.1036921
    AND bbox.maxX <  126.803083
    AND bbox.minY >  4.3833333
    AND bbox.maxY <  21.321928
```

The output query looks like this:

![athena_results](/static/images/athena_results.png)

Feel free to customize your queries **(especially the bounding box, be careful with the x/y/lat/lon because I, too, got confused at first 😅)** to discover the information you're interested in.

**Step 7: Download your data**

Once you've obtained the desired data from your query results, you can download it for further analysis. If you prefer working with CSV files, simply use the download button to save the data in that format.

**Step 8: Open data in GIS Software**

Now that you have the data, you can open it using any GIS software. Various user-friendly GIS tools, both free and paid, will enable you to visualize and analyze the data.

Sample results imported to QGIS:

![athena_sample_ph](/static/images/athena_sample_ph.png)

**So yay! You've _“easily”_ accessed recently released data from Overture on AWS and navigated through the cloud database. _Remember, data exploration should be an exciting journey, not a daunting one._**

Feel free to experiment, analyze, and gain insights from the rich dataset you now have at your fingertips. Happy exploring!

_In case anyone else is interested in exploring the same data, I'm sharing my Google Drive link [here](https://drive.google.com/drive/folders/11iFT4dM-CRtzhJOlrEq9WyFMGtEj1eSH?usp=sharing). Check it out if you need the datasets for your own projects. I hope this additional resource comes in handy for you!_
