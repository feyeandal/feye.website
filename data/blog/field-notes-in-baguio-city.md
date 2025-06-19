---
title: 'Open Mapping in Baguio City: Field Notes from the Road'
date: '2025-06-19'
tags: ['Open Mapping', 'Street-Level Images', 'Mapillary', 'UPRI']
images: ['/static/images/school_sign.png']
draft: false
summary: 'In places where data on critical infrastructure is hard to access, street-level imagery offers a low-cost and verifiable alternative. By building on tools like Mapillary, we explore how visual cues, like school signs or facility names, can support disaster resilience through open, community-led data collection.'
---

Early this month, I went on a fieldwork trip to Baguio City with two good friends (who are also alumni of the UPRI YouthMappers) and some GoPro 13 cameras. One of us was on a motorcycle, another on a car, and I was coordinating the routes, assessing the data, and just trying to keep us on track (and dry). We were there for a project called **ABRRAM**, which stands for _A development of Basic Resource Recognition and Allocation Model for Disaster Response and Planning_.

As part of this project, we’re exploring how open data, street-level imagery and computer vision can help local governments prepare better for disasters. We’re trying to answer a big question: **how can we use freely available tools and community-led data collection to make cities more resilient?** But more specifically, we’re also asking: **can we detect critical facilities—like schools and evacuation centers—using street-level imagery, the same way Mapillary detects traffic signs?**

## **Why This Matters**

In the Philippines, **access to data—especially on critical infrastructure—is often limited**. You usually need to submit formal letters just to get data on schools, hospitals, or evacuation centers. And even then, it’s not always shared. This becomes a huge challenge for planners, responders, and mappers who just want to help.

That’s where Mapillary comes in. It’s a tool for uploading and sharing street-level imagery, and it uses computer vision to identify features like street signs, buildings, and road markings. Unlike platforms that keep data closed, Mapillary integrates with OpenStreetMap and makes everything accessible to the public.

So we thought: why not contribute?

And more importantly: **why not explore whether we can extend this same concept—of detecting visual features from imagery—for something more thematic and urgent, like disaster resilience?**

Many critical facilities in the Philippines, like schools, barangay halls, and health centers, often have visible signage at street-level but are hard to identify from satellite images. These are micro features that are easily missed from above, especially in dense or vegetated areas. But they rarely change, which makes them ideal targets for community-led mapping.

This approach adds value by offering a low-cost, verifiable, and replicable way to identify infrastructure that satellites can’t see and official data won’t always share. It grounds the idea of resilience in visibility, and it opens the door for local governments and communities to build datasets that are truly their own.

## **Our Mapping Strategy**

We split up the city into two zones:

![field](/static/images/field_strat.JPG)

<center>_We focused on collecting images along major roads that previously had no Mapillary coverage._</center>

- The **car** covered major roads like **Marcos Highway, Asin Road, and Kennon Road** (we mapped that on the way in).
- The **motorcycle** navigated tighter, busier streets—**the city center, routes to the Igorot Stone Kingdom and The Mansion**.

We also met with the **local government units of Baguio City**, who welcomed the initiative but requested a Memorandum of Understanding (MOU) to formalize the partnership. It was a good reminder that even open data efforts benefit from local buy-in and institutional trust.

Of course, things didn’t always go smoothly.

Baguio’s weather is notoriously unpredictable. When we entered the city, it was bright and clear—but by afternoon, the rain came in fast. Some of our images had visible raindrops on the lens, especially in the Saint Louis University loop, so we had to revisit that route the next day. The motorcycle team also had to stop mid-route because of sudden weather changes. Between the steep roads and shifting skies, Baguio really kept us on our toes.

![rain](/static/images/rain_drops.JPEG)

<center>_Sample image showing raindrops on the lens due to sudden rainfall._</center>

## **Reflections from the Field**

- **Community mapping helps fill the gaps.** When public datasets are locked behind bureaucracy, we can contribute our own data, make it accessible, and empower others to build on it.
- **Street-level imagery has real value.** It provides context that satellite data alone can’t capture: signages, entrances, condition of infrastructure, and visibility from the street. For local governments, it offers a ground-level view that supports planning, monitoring, and public service delivery.
- **Mapillary’s detection features sparked our idea.** The platform can already recognize traffic signs, shops, and advertisements through computer vision. That inspired us to explore whether similar techniques could be adapted to detect schools and other facilities—especially in the Philippines, where signs like “elementary school” are often painted on gates or walls.

![school](/static/images/school_sign.png)

<center>_Example of a school with its name visibly painted on the gate that can be useful for facility detection._</center>

- **Computer vision is powerful, but it needs ground truth.** Many public facilities in the Philippines don’t have standardized signage, or they’re hidden behind walls, or they can’t be simply captured along the main road. Imagery alone won’t catch everything—but with local context and manual verification, the potential is huge.
- **You don’t need much to make an impact.** A GoPro, two volunteers, and a weekend on the road already gave us visibility on dozens of kilometers (_we navigated 110km of roads and collected more than 15K photos, btw_) of infrastructure. When shared openly, that data becomes something bigger; something others can use, build on, or learn from.

![baguio_mapillary](/static/images/baguio_mapillary.png)

<center>_Completed Mapillary coverage of major roads in Baguio City._</center>

## **What’s Next**

We have uploaded all collected images to Mapillary, and now, we are updating the critical facilities using OSM, and preparing a dataset to train computer vision models that can detect public infrastructure. This will be part of the larger ABRRAM goal—to help local governments respond faster and plan better using data they can actually access and use.

I hope this inspires more people to explore what’s possible with open tools and shared knowledge. Because in a country where data is often locked behind red tape, mapping does not only help provide data, but it is also about making sure no one, and no place, is left unseen.
