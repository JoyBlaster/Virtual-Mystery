Link to GITHUB page is here
https://github.com/JoyBlaster/Virtual-Mystery.git

Virtual-Mystery
The intended user audience is youths who do not understand digital literacy.
Our project which is Virtual-Mystery is a learning site about the digital space for youths with visual novels aspects for the user to work towards
Once they have finished enough lessons they are able to get a ending which will give them a trophy depending on what they do during their learning session

Design Process
We thought and discussed for a long time about who would use a site eventually settling on youths
These are some of the user stories we made before creating the website
•	As a child, I want an easy and entertaining way to learn
•	As a 3D Designer, I need to sort out some source images for 3d modelling on trophies
•As a programmer for this website, I want to learn how to implement dialogues in the style of Visual novels
•As a 3D designer, I want to create the models for the ending trophies
•As a 3D Designer, I need to sort out some source images for 3d modelling on trophies
•As the Storyboard Writer,I want my narrative to be engaging to the audience
• As a general user, I want an incentive to continue using the website
•As a logo Designer, I want the logo for this brand to stand out.

Now after these user stories here are some links to the figma prototypes we used before creating the website

Low-Fidel prototype:
https://www.figma.com/file/pkZAmIqAfQ2oudH3jFudLl/Integrated-Projects-Prototype?type=design&node-id=143%3A2&mode=design&t=VvQH0vQmnME8cUQK-1

High-Fidel prototype:
https://www.figma.com/file/WLQz5EhPlCTDybBP3WK0c3/IP_AD_mobile_Prototype?type=design&node-id=2%3A8&mode=design&t=55DfSJpOUbDR26dO-1
Unfortunately we do not have figma files to put into the project
and we could not follow exactly to what we put on the high fidelity prototype due to many technical issues we have encountered during the process

Features
We have implemented many features while creating the site
Existing features
•Feature 1- We have a nav bar for the homepage
•Feature 2 visual novel styling for the stories which allows users to use on computer and on mobile
•Feature 3 contains quizzes in the lesson page which users can score well in to earn a trophy or more stories



Technologies Used

We used the base html for most of the website along with css for the styling of the pages and js to run things like the visual novel aspect and the quizzes

The original visual novel source code was taken from online at https://app.qoom.io/tutorials/vnengine/guide.md

The javascipt uses asynchronouse functions to handle "page turning" and loading the data for the visual novel code.

We also created a special button that can be clicked to "turn the page" without the need for an arrow key press. This is to compensate for the users using mobile, or any other devices without a right arrow key.

The quiz form pages were also taken from an online code at https://youthsforum.com/programming/php/how-to-make-a-multiple-choice-quiz-using-html-css-and-javascript/

The css was created using our existing css pages. 

The code uses the eventlisteners to detect a click on the quiz submission button, which starts a function to check if the selected answers match up to the answer sheet. A score is then displayed based on the number of matching answers.

A part of the code that we added was that if the score is 8 or higher, it will give words of praise, as well as show a link to a corresponding story scene. It will also tally up the number of completed quizzes.

The End Session button will use the tallied up number of completed quizzes and give an ending based on the result.
The current progress will also be shown in the lessons page.

Testing
1 Quizzes
i. go to quiz and check if the wrong and right answers work as intended
ii.check if all the questions are positioned correctly

2 lessons page
i. go to lessons and see if all the links work as intended
ii.Check that all the links lead into the place where it is supposed to go

3 stories page
i. check if the story and dialouge work as intended for the project

4 alternative special conditions testing file
i. used to check on code/learn to create code without the need of using the main code and potentially making the code too confusing
ii. we used it to create the code for hiding of elements until something is done
iii we also used it to learn how button eventlisteners and sessionStorage works.

The project looks relatively fine on mobile the quizzes in pc look a bit janky but it works and serves its purpose no matter what size it is as it was designed that way with the CSS

Some interesting bugs that were encoutered was the css not working while testing the site although no changes were made to css
it eventually fixed itself somehow though which is good

Credits
although content credits is shown in each lesson page I will also put it here

Online privacy(lesson1) links:
https://staysafeonline.org/resources/online-safety-privacy-basics/

https://veepn.com/blog/what-is-online-privacy/

Identifying scams(lesson 2) links:
https://www.imda.gov.sg/how-we-can-help/anti-scam-measures?utm_source=google&utm_medium=cpc&utm_campaign=202308_IMDA_AlwaysOn_2023&utm_content=public_antiscam

https://www.scamalert.sg/types-of-scams

Virus and malware(lesson 3):
https://www.techtarget.com/searchsecurity/definition/malware

Copyright Law and plagiarism(Lesson 4):
https://copyrightalliance.org/differences-copyright-infringement-plagiarism/

https://www.scribbr.com/plagiarism/how-to-avoid-plagiarism/

Cyberbullies(lesson 5):
https://www.unicef.org/end-violence/how-to-stop-cyberbullying

Fact checking(lesson 6)
https://abqlibrary.org/fakenews/factcheck

https://libguides.cmich.edu/web_research/craap#:~:text=The%20test%20provides%20a%20list,Authority%2C%20Accuracy%2C%20and%20Purpose.

Researching Questions and Tools(lesson 7):
https://www.scribbr.com/research-process/research-questions/

https://www.monash.edu/library/help/assignments-research/developing-research-questions

https://www.scribbr.com/research-process/research-question-examples/

Source Evaluation(lesson 8):
https://libguides.cmich.edu/web_research/craap#:~:text=The%20test%20provides%20a%20list,Authority%2C%20Accuracy%2C%20and%20Purpose.

Citing sources(lesson 9):
Havard style of citation
https://np-sg.libguides.com/c.php?g=846507&p=6053701

APA style of citation
https://np-sg.libguides.com/c.php?g=846507&p=6053700

Decomposition(lesson 10):
https://online.york.ac.uk/what-is-computational-thinking/

https://www.learning.com/blog/decomposition-in-computational-thinking/#:~:text=Decomposition%20in%20computational%20thinking%20is,can%20more%20easily%20be%20addressed.

Pattern recognition(lesson 11):
https://equip.learning.com/pattern-recognition-computational-thinking/#:~:text=As%20it%20sounds%2C%20pattern%20recognition,study%20the%20different%20decomposed%20problems.&text=Through%20analysis%2C%20students%20recognize%20patterns,pieces%20of%20the%20larger%20problem.

https://www.learning.com/blog/pattern-recognition-in-computational-thinking/

Abstraction(lesson 12):
https://www.learning.com/blog/abstraction-in-computational-thinking/#:~:text=In%20computational%20thinking%2C%20decomposition%20and,and%20identifying%20what's%20most%20important.

Media used:
Privacy online(Lesson 1 image):
https://www.tripwire.com/sites/default/files/2022-11/5-Myths-About-Online-Privacy.jpg

lesson 2 image:
https://simpletexting.com/wp-content/uploads/2019/09/text-message-scamsv2-768x433.jpg

lesson 3 image:
https://www.csoonline.com/wp-content/uploads/2023/06/cso_security_threat_virus_malicious_binary_code_bluebay2014_gettyimages-983223752_2400x1600-100801546-orig.jpg?quality=50&strip=all

Lesson 4 image:
[https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nea.org%2Fprofessional-excellence%2Fstudent-engagement%2Ftools-tips%2Fhelping-students-deal-cyberbullies&psig=AOvVaw3iqCrdRorvNlu6oBeNYL8M&ust=1707595803781000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCPCE3ZyIn4QDFQAAAAAdAAAAABAE](https://images.businessnewsdaily.com/app/uploads/2022/04/04081341/1554242441.jpeg)

lesson 5 image:
https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nea.org%2Fprofessional-excellence%2Fstudent-engagement%2Ftools-tips%2Fhelping-students-deal-cyberbullies&psig=AOvVaw3iqCrdRorvNlu6oBeNYL8M&ust=1707595803781000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCPCE3ZyIn4QDFQAAAAAdAAAAABAE


lesson 6 image:
https://www.publicsource.org/wp-content/uploads/2023/06/fact-checking-lead.jpg

lesson 7 image:
https://www.freepik.com/free-photos-vectors/online-research

lesson 8 image:
https://mindthegraph.com/blog/wp-content/uploads/2023/08/evaluating-sources-blog.jpg

lesson 9 image:
https://k5tech-storage.s3.amazonaws.com/wp-content/uploads/2023/04/04132706/Slide1-2.png

lesson 10 image:
https://codevidhya.com/wp-content/uploads/2021/06/decomposition-1024x615.png

lesson 11 image:
https://www.eduspec.co.th/img/ComputationalThinking/PatternImg.png

lesson 12 image:
https://letstalkscience.ca/sites/default/files/styles/medium/public/2020-10/Abstraction%20.png?itok=ux2VCOc-

The images used during the story and in the home page

mansion exterior bg
<a href="https://www.freepik.com/free-ai-image/beautiful-castle-architecture_64312025.htm#query=mansion%20night%20bg&position=0&from_view=search&track=ais_ai_generated&uuid=46941a79-84fa-4c22-b3f1-518efd1ddcdf">Image By freepik</a>

mansion interior bg
<a href="https://www.freepik.com/free-ai-image/beautiful-castle-architecture_64312050.htm#query=mansion%20indoors%20night&position=14&from_view=search&track=ais_ai_generated&uuid=a5a5ee53-996d-4021-b2c7-bb53c6012226">Image By freepik</a>

computer room bg
<a href="https://www.freepik.com/free-photo/empty-office-with-analytics-diagrams-screen-running-economy-statistics-computers-business-space-startup-company-with-research-plans-charts-late-night-handheld-shot_52544938.htm#query=computer%20room&position=16&from_view=search&track=ais&uuid=619452e3-2dbb-47e7-8e08-3de008447199">Image by DC Studio on Freepik</a>

Home office bg
<a href="https://www.freepik.com/free-photo/3d-renders-computers-living-room_136747928.htm#query=home%20office%20night&position=29&from_view=search&track=ais&uuid=b95aa040-7140-4b03-aaaa-880c7856585e">Image by DC Studio on Freepik</a>


Library bg
<a href="https://www.freepik.com/free-photo/cafe-frankfurt-germany_33211454.htm#query=library&position=5&from_view=search&track=sph&uuid=11a640a0-509a-449c-8f3e-fed6c10cd73f">Image by frimufilms on Freepik</a>

Security room bg
<a href="https://www.freepik.com/free-photo/data-center-with-server-racks-corridor-room-3d-render-digital-data-cloud-technology_20668653.htm#page=3&query=security&position=17&from_view=search&track=sph&uuid=b9e236cc-064e-4708-8480-aafdaf327437">Image by DC Studio on Freepik</a>

About  us banner
<a href="https://www.freepik.com/free-photo/city-committed-education-collage-concept_36295566.htm#query=digital%20literacy&position=38&from_view=search&track=ais&uuid=485054e9-8fb0-4e9b-97af-6f50d96729f6">Freepik</a>

detective office
<a href="https://www.freepik.com/free-photo/private-detective-empty-workplace-with-crime-case-evidences-board-hanging-desk-police-investigator-office-surrounded-with-murder-scene-photos-clues-night-time_40061973.htm#query=detective%20office&position=1&from_view=search&track=ais&uuid=7d3e49b5-cee6-4c65-84f6-c9e21d5b307c">Image by DC Studio</a> on Freepik

Acknowledgements
The idea of having different endings based on your actions was based on Undertale. Having multiple endings gives the website more replayability.

The visual novel-styled murder mystery was based on the Ace Attorney series. The visual novel-style makes the story-telling easier, and also makes the website stand out more.
