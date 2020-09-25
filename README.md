configuration of data.json file to update the app

**new article objects should be added to the top!!** 

as all the functions read from 0 to array.length
*************************************************
I have added a blank object 
https://github.com/djnosey/Blog-Rodrigo/blob/master/src/NEWARTICLE.json
so you can test witout having to type the entire object out. just fill in the details, copy it and paste it as the first item in the array of data.json
****************************************

if you clone this repo you will need to install the dependencies by running
**npm install**

********************************
**list of keys and their purpose**

******************************

*************************************
id : always a unique ID is required as react REQUIRES a unique KEY for every list or automatically generated component (it doesnt have to be in any order as long as its unique)
*************************************
image : TOP MEDIA//shown at top of article and in the article card on homepage (it has to be a url)
**************************************
secondImage : will render an image in the middle of article or an empty string for no image (it has to be a url)
**************************************
title: will render on homepage "card" and in the article page
**************************************
date : will render on homepage "card" and in the article page
**************************************
author : only renders on the article page
**************************************
iframe : will render a youtube video in the article page or an empty string for no video (it has to be a url)
***************************************
tablemiddle: if "true" is entered it renders the table mid article, else it renders the table at the bottom of article
**************************************
headline : will render on homepage "card" and in the article page
**************************************

paragraphs 1-20 : self explanatory

***************************************

category : should be filled with article category if a filter widget is to be made
