---
title: 'Mapping for Turkey and Syria – what is it like?'
date: '2023-02-15'
tags: ['OSM', 'YouthMappers', 'community', 'disasters']
images: ['/static/images/upri-mapathon-turkey.jpg']
draft: false
summary: 'As an OSM volunteer, I know the significance of assisting communities during these critical times. Through YouthMappers, we supported the disaster activation efforts of Yer Cizenler by conducting regular mapathons.'
---

A powerful earthquake struck Southern Turkey west of Gaziantep last 6 February 2023 at 04:17 AM TRT (01:17 UTC), causing widespread damages in Turkey and Syria. With a maximum Mercalli intensity of IX (Violent) and a magnitude of 7.8 Mww, it is tied with the 1939 Erzincan earthquake as the strongest earthquake to hit Turkey in recorded history. More than 41,000 people are known to have been killed, and more than 6,300 were injured.

Through the years, disasters demonstrated the need for collaborative geospatial data (_like OpenStreetMap_) to help local communities and disaster responders better understand the catastrophes we face. Readily available crowdsourced maps are crucial in informing and preparing the general public.

As an OSM volunteer, I know the significance of assisting communities during these critical times. When I read the news on Twitter, I was shocked at the extent of the damage it brought. I have colleagues from Turkey like [Can Unen](https://twitter.com/canunen) and [Said Turksever](https://twitter.com/asturksever), so I reached out to them, asking if they needed help from us.

From there on, I have been part of the international coordinating team led by [Yer Cizenler](https://yercizenler.org/en/home/). After super typhoon Haiyan struck the Philippines last 2013, I think this is the most extensive disaster activation I have been involved in.

Through [UPRI YouthMappers](https://www.facebook.com/UPRIYouthMappers), I started organizing [mapathons](https://www.facebook.com/photo/?fbid=190767463562545&set=a.187740433865248) to help map the affected areas in southern Turkey. I also invited all local chapters of YouthMappers in the Philippines to join the first mapathon we hosted to get all the help and support needed. I was glad that the student mappers and volunteers were available to help when I called for the urgent mapathon.

I am also grateful that our chapter adviser, [Dr. Mahar Lagmay](https://twitter.com/nababaha), understands the importance of disaster mitigation and the urgent need for a response. He requested we conduct an [internal mapathon](https://twitter.com/UPRIYouth/status/1625393541039128576) at UP Resilience Institute and mobilize our in-house mappers to help map the affected areas.

![upri-mapathon](/static/images/upri-mapathon-turkey.jpg)

<center>_Internal mapathon with the UPRI staff and UPRI YouthMappers members_</center>

I have observed and learned the following throughout my involvement:

**What works well?**

- The international response team led by Yer Cizenler is growing! Various organizations are working on supporting the disaster response and operations, like Meta, Humanitarian OpenStreetMap Team (HOT), YouthMappers, MSF/Missing Maps, UP42, OCHA, UNHCR, Esri, Kontir Inc, Kaart, Help.NGO, etc.

- Each organization aims to improve the open geodata infrastructure in the affected region and support the humanitarian response in the scope of mapping. For instance, YouthMappers and its local chapters are supporting disaster activation efforts through online, hybrid, and face-to-face mapathons, and information dissemination (especially the HOT Tasking Manager tasks, Maproulette challenges).

- The coordination within the international response team is very organized. Project tracking, ongoing activities, OSM data use, and useful links are tracked and documented to help the organizations streamline their activities and efforts, and to keep everyone aligned with the progress of the activities.

- Resources are shared and made easily available such as open-source satellite images and drone images, damage assessment and analysis.

**Challenges**

- Mapping with AI

      Most of the HOT projects involving mapping for Turkey and Syria are set-up with the RapiD editor. It allows us to add AI-predicted buildings and roads quickly. But, throughout the mapathons we facilitated, we have experienced some challenges regarding the data from RapiD:

      - Not all areas have AI-detected buildings and roads (like in Syria), so manual mapping of the structures is still needed. *I only learned about this while running the internal mapathon at UPRI. I wondered why the RapiD editor was not activated in some TM projects, so I messaged the international coordinating team about this. Can confirmed that there is no coverage of AI in Syria 🙁*
      - There is relatively good coverage of AI-detected buildings and roads in Turkey, especially in the rural areas. However, the quality degrades in urban areas/cities.

      ![using-RapiD](/static/images/rapid-urban.jpg)

  <center>_AI-detected buildings are misaligned from the satellite imagery so rectification is required. Resizing/reshaping of each building footprint is also needed._</center>
      
      - If you are an experienced user using MapwithAI plugin on JOSM, transferring the AI data to the OSM data layer is possible. However, I have noticed that we can only select and transfer at most 10 objects. This can be a bit annoying since this becomes counter-productive.

      ![using-JOSM](/static/images/rapid-10selected.gif)

<center>_Not all objects can be selected at once, which slows down the mapping/validation process_</center>

> **Some notes for mappers:**
>
> - MapwithAI is a powerful and helpful tool for OSM mapping, but human intervention is essential. **MapwithAI learns from us by (un)approving their AI detections.**
> - While we know it is very tedious to check each structure (_mainly the building footprint!_), **but patience is gold**. It is important to check and verify each structure instead of selecting all AI-detected structures and importing them directly to OSM.
> - As for the roads; OSM values the connection of the road network. **AI-detected roads are not connected to existing OSM road data by default, so efforts on connecting them to the existing OSM road network is required.** Also, most AI-detected roads are tagged as residential roads in some areas. We have to do some re-tagging, especially if these roads are in the mountains (can be tracks, footpaths, etc.).

- Validations needed

  Open geospatial data is vital during disaster response. However, it is essential to note that **quality** geospatial data is more important. During these massive disaster activations, there is a need for immense contributions from the OSM community. But still, we have to recognize **there is an unequal ratio of beginner, intermediate, and advanced OSM mappers.** We do not want to exhaust our validators, **so we need to make efforts to build our beginner mappers' skills so that they can also help validate OSM data.**

_If you want to contribute to our mapping efforts, you can start by checking these resources:_ - [How is the data being used via Pete Masters](https://www.openstreetmap.org/user/pedrito1414/diary/400944) - [Join a mapathon - in person and online](https://osmcal.org/) - [Daily livestream of Yer Cizenler](https://www.youtube.com/playlist?list=PLABZHYqgKg3i5pDE_vCpQkRolqxTCCNyc) - [OSM wiki page with full details](https://wiki.openstreetmap.org/wiki/2023_Turkey_Earthquakes#Mapping_Tips_and_Advice_for_this_Activation) - [Beginner & Experienced Users Guide for using RapiD editor](https://docs.google.com/document/d/1CBiMJWQZ2b6_9mnVBxA4VNPDhTVrqDKCC7VSAVzHV1w/edit)
