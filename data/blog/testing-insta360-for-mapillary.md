---
title: 'Testing Insta360 for Mapillary Captures in Leyte, Philippines'
date: '2023-10-24'
tags: ['Mapillary', 'Data', 'Community']
images: ['/static/images/mapillary_leyte.png']
draft: false
summary: "With a clear and simple goal in mind - to enhance Mapillary's coverage in the Philippines - I started on an exciting journey equipped with my newly acquired Insta360 camera. My destination was the quiet streets of Leyte, where I was scheduled to conduct a YouthMappers UpSkilling Series across four universities. Check out my Mapillary story in Leyte."
---

[Mapillary](https://www.mapillary.com/) is a forward-thinking app that rekindled my interest. I had previously used it with my GoPro, but I later shifted my focus to other mobile apps for data collection. However, my attention was reignited due to Mapillary's progress and the emergence of 360 cameras.

Motivated by a clear and simple goal - to enhance Mapillary's coverage in the Philippines - I started on an exciting journey equipped with my newly acquired Insta360 camera. My destination was the quiet streets of Leyte, where I was scheduled to conduct a YouthMappers UpSkilling Series across four universities. My interactions with the Mapillary team were instrumental, as they provided me with essential training materials and shared their insights on image capture and data export using the Insta360 camera.

This blog post documents my recent journey using the Insta360 camera for Mapillary mapping in the Philippines and the challenges I encountered along the way.

![leyte_mapillary_coverage](/static/images/mapillary_leyte.png)

<center>_Coverage of Mapillary in Leyte, Philippines (dated Oct 5, 2023)_</center>

Prior to my trip, I meticulously planned my itinerary, ensuring that it covered areas with gaps in Mapillary's coverage. With my camera mounted in a car, I set off to capture the necessary data. My ultimate destination was the universities where I would be conducting training sessions. While the Leyte capture was a side-trip, it turned out to be incredibly useful in advancing my mission to improve Mapillary's representation of the Philippines.

![leyte_itinerary](/static/images/leyte-route.png)

<center>_Planned itinerary in Leyte using [OSRM](http://map.project-osrm.org/?z=10&center=10.759786,124.944763&loc=11.248971,125.006529&loc=11.306361,124.670105&loc=11.005294,124.609075&loc=10.265418,125.176917&loc=10.745887,124.794771&loc=11.243621,125.007954&hl=en&alt=0&srv=0)_</center>

To add more context, I used the following **workflow**:

- **Camera Setup**

  - Attach the Insta360 camera via a selfie stick for walking captures.
  - Mount the camera on the car for mobile captures.

- **Data Recording**

  - Record images and GPS data using Insta360.
  - Initially use Insta360 for GPS tracking.
  - Later, switch to Osmand for more precise GPS data.

- **Data Extraction**

  - Use Insta360 Studio to extract both MP4 video and GPX files.

- **Alternative GPX Extraction**

  - Develop a script to extract GPS data from the camera's raw files if GPX data from Insta360 is unreliable.

- **Upload to Mapillary**
  - Share the captured images and GPS data on Mapillary to enhance Mapillary's coverage in the Philippines.

## The Initial Hurdles

My enthusiasm was met with a few roadblocks, mainly stemming from Insta360's lack of native GPS capability, relying instead on a connected smartphone. Here are some of the challenges I encountered:

### 1. Beta Uploader Quirks

I began testing my Insta360 camera at my university, UP Diliman, in preparation for my trip to Leyte for the UpSkilling Series. I decided to mount the device in my bag and walked around the campus while capturing images. However, when I tried to upload the MP4 and GPS tracks from Insta360 Studio using the beta uploader, I faced an error. Thankfully, my frustration was alleviated when I contacted [Said](https://twitter.com/asturksever) from Mapillary/Meta. He uploaded the data effortlessly using a Beta uploader version that was perfectly compatible with my dataset.

**In the context of the beta uploader, it offers support for Insta360 timelapse videos. This means it allows you to upload and synchronize both GPX and MP4 files through Mapillary.**

<center>![up_mapillary_failed](/static/images/up_mapillary_failed.png)</center>

<center>_First attempt of uploading via the Beta Uploader_</center>

### 2. Offset GPS Tracks

Another test took me inside a moving vehicle. Since my triple suction car mount hadn't arrived during this time, I had to improvise by seating in the passenger seat, and extending the selfie stick outside the window, and started capturing around the campus again. In this instance, I observed a significant issue – the GPS tracks were offset by a few meters, rendering them unsuitable for mapping. This offset raised questions about the accuracy of my contributions.

<center>![up_mapillary_failed_vehicle](/static/images/up_diliman_mapillary_vehicle.png)</center>

<center>_Recorded GPS tracks in a moving vehicle (UP Diliman). Was I pondering whether the trees were the cause of the GPS data inconsistency?_</center>

### 3. Lighting and Unforeseen Delays

I initially planned to kick off my side-trip capture from Tacloban to Ormoc, covering the northern loop and the western side of Leyte. However, my plans took an unexpected turn when unforeseen circumstances delayed my travel. Moreover, the lighting conditions at the time were far from ideal for capturing high-quality Mapillary imagery. Given these challenges, I made the pragmatic decision to postpone this segment, reserving it for future testing when conditions would be more favorable for successful Mapillary contributions.

### 4. Offset GPX Tracks Persist

As we traveled from Ormoc to Sogod in Southern Leyte for my third leg of UpSkilling Series in SLSU, I kept testing my camera. It was securely mounted on the car's roof, and the battery lasted for two hours. However, I was disappointed to see that the GPS data still had an offset issue, despite my efforts. It didn't provide the precision I had hoped for.

I also took advantage of the rainy weather during the drive to check the camera's water resistance. Glad that it was still safe, despite the weather conditions.

<center>![sogod_mapillary_test](/static/images/ormoc_sogod_test.png)</center>

<center>_Recorded GPS tracks in a moving vehicle (Ormoc to Sogod). At this point, I was confident that there were no major obstructions, such as trees, affecting the reliability of the GPX track._</center>

Also, during my training at the universities, I allowed students to use the Insta360 for GPS tracking and Mapillary image capture. Surprisingly, the offset problem persisted, reinforcing the need for a solution to this recurring issue.

<center>![slsu_mapillary_test](/static/images/sogod_test.png)</center>

<center>_Recorded GPS tracks while walking (SLSU). Again, no obstructions, but still unreliable GPS data._</center>

### 5. The OsmAnd GPS Solution

On our trip from Sogod to Baybay for the fourth and final leg of my UpSkilling Series, I decided to use my Android smartphone and the OsmAnd app to record GPS data. The app recorded the GPS tracks perfectly. And to my relief, when I uploaded the MP4 from Insta360 Studio and GPX from OsmAnd, it worked seamlessly using a new beta uploader (v4.1.4) provided by Said. However, an unexpected hurdle emerged – [image synchronization issues](https://www.mapillary.com/app/user/feyeandal?lat=10.397690691649231&lng=124.98637014183669&z=14.329109363297835&pKey=1527237244684235) that required further investigation.

<center>![sogod-baybay-osmand](/static/images/sogod_to_baybay_osmand.png)</center>

<center>_The recorded GPS tracks from OsmAnd_</center>

<center>![sogod_mapillary_issue](/static/images/sogod_mapillary_issue.png)</center>

<center>_Uploaded images with GPX on Mapillary. However, you might have observed that the captures appeared shorter in duration compared to the original GPX track. This leads me to suspect a significant issue with image synchronization._</center>

### 7. Scripting for GPX Extraction

Upon returning to Manila, I began writing a [script](https://github.com/feyeandal/mapillary_insta360/blob/main/convert_insta.py) to extract GPX data from Insta360's raw INSV files. Using this script, I was able to extract the raw GPS files from INSV file. I removed duplicated timestamps and successfully aligned the processed data with the roads and imagery. However, in some cases, this approach didn't work well due to the limited precision of the recorded GPS data. This highlighted the need for more robust data collection methods.

<center>![sogod_mapillary_gpx_code](/static/images/sogod_test_retro.png)</center>

<center>*Aligned GPS from INSV using the Python script*</center>

**Note: Prior to executing the Python script, ensure you have installed and configured [exiftool](https://exiftool.org/geotag.html). Exiftool is a tool that facilitates the extraction of metadata from INSV files. To prepare for using the Python script, follow this syntax to generate a text file containing the metadata: `exiftool -ee test_insta.insv > test_output_2.txt`. After generating the text file, utilize it as the input file for the Python script.**

## The Path Forward

My journey with Insta360 for Mapillary mapping has been a rollercoaster of challenges and discoveries. While the road ahead seems daunting, I'm determined to continue my testing and exploration. By documenting my experiences, I hope to contribute to future improvements and inspire others to join this important mission to enhance Mapillary coverage in the Philippines.

Furthermore, I'll be exploring the option of Python scripting the synchronization of MP4 and GPX files before uploading them to Mapillary. This approach will provide a workaround while I await Mapillary's full support for Insta360, ensuring our contributions continue to bridge the data gap effectively.
