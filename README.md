- Welbsite Link: https://andrefls.github.io/Workshop-task-6/

## THIS WORKSHOP IS A FORKING WORK FROM mzhu933. Original notes will be at the end of the page after title "ORIGINAL WORK BELOW"

-
-
## Synopsis

- When I began working on this workshop task, I had a clear idea of what I wanted to do. Since everything related to data tends to be complicated for me, especially using spreadsheets. I decided to focus my task on this area. I aimed to challenge myself and learn in the process.

## Summary/Problem-solving

- I started the task by using the provided example as a learning opportunity regarding data. I tweaked a few details and became familiar with the codes that were used in the lecture.

- I visited https://github.com/ and tried to add as many classmates as I could find on our Canvas page. Once I added them, I came across a project that I could use.

- The project I selected was at https://mzhu933.github.io/workshop5/. I liked this classmate's idea because it developed a concept I have been pondering about in my art. I have always wanted to capture the emotions or moods that people experience when they look at a painting.

- I began by reading her idea and reviewing her code.

- After watching the class video from 

- https://canvas.auckland.ac.nz/courses/121821/pages/week-1-overview?module_item_id=2435967, 

- I decided to start my task by copying her code into my VScodium. However, I started struggling with some errors that appeared on my screen.

- I reached out to our lecturer for help with those errors. After some time spent trying to resolve the issues, I realized that the main reason for the problems was my misunderstanding of some syntax my classmate had used. 

- Following the lecturer's advice, I deleted all the code and started again. This time, I used my basic exercise from the previous workshop, which worked correctly.

- Slowly, I began adding my classmate's images and modifying her idea to make it more straightforward. 

- I ended up using the lecturer's examples of dropdown options and adjusting her concept to suit this approach.

- Unfortunately, after a long attempt, the images kept disappearing whenever I selected a new option. I asked Leo, our lecturer, about this, and he explained that functions can be called as many times as we want, which I did not know.

- After calling the function again, that resolved the problem.

- Once that was sorted out, I applied RiTa, which was straightforward as I followed the lecture's example closely.

- However, I encountered complications when trying to incorporate the other RiTa example.

- I wanted to ensure that if RiTa did not find a word that rhymed with the phrase, it would find a word that sounded similar.

- I followed the lecturer's instructions and after a few trials, I got the new function to work.

- Then I wanted to replace the button with an image. This aspect was somewhat challenging, as it wasn't covered in class.

- To tackle this,

- I visited

- https://editor.p5js.org/emmajaneculhane/sketches/WKwR76epN

- and https://editor.p5js.org/kjhollen/sketches/dHOoxK_hD

- for additional guidance. I got my project very close to what I envisioned, but I needed to clarify something because the button size was incorrect.

- I looked up button styles on Google and found a solution (image below).

- Finally, I managed to get my project working. It looks cool, and I challenged myself while practising this data topic.

## Future development

- I would love to learn how to capture live data and represent it using moving objects from my paintings.

## Conclusion

- In conclusion, no matter how much you struggle with something, it’s important to give it a second try.

- I hope my classmates appreciate the approach I took in my work.

-
-
-
-
-

# ORIGINAL WORK BELOW

- # workshop5 data and visualisation
- # URL: https://mzhu933.github.io/workshop5/


## note:
![截屏2025-01-19_下午8 42 59](https://github.com/user-attachments/assets/dc895f2b-a6a8-44e7-8546-71fbfc8efcb5)
![截屏2025-01-19_下午8 45 19](https://github.com/user-attachments/assets/11c3013e-85be-467a-8bd1-ded8a1b90383)

## learning in p5 documentation
- https://p5js.org/reference/p5/p5.Table/ 
<img width="1057" alt="截屏2025-01-19 下午9 07 31" src="https://github.com/user-attachments/assets/5974c363-a0a8-4432-87da-462f7216c00d" />

## - plan: 

![未命名作品 4](https://github.com/user-attachments/assets/22dabe84-a8ba-4e5f-bfe3-0adc590766c5)

1. Color Mood Tracker
2. each color can refer a mood of a period of time
3. white - calm, orange - energetic, navy blue - stress, light pink - optimistic
4. each mood can connect to a image

<img width="578" alt="截屏2025-01-19 下午9 12 25" src="https://github.com/user-attachments/assets/8a56794d-afd8-4a45-afcd-7928eed27485" />


- edit csv file
- "select button" - Increase interactivity

## process
- preload table and images first
- Dropdown menu for week selection
<img width="545" alt="截屏2025-01-19 下午9 18 54" src="https://github.com/user-attachments/assets/27943681-949b-45ae-be7f-e8b13668a374" />

- redraw
<img width="544" alt="截屏2025-01-19 下午9 21 28" src="https://github.com/user-attachments/assets/86636f86-6675-4a59-95da-db0a8125ac03" />
-  Trigger redraw on selection


<img width="1035" alt="截屏2025-01-19 下午9 22 52" src="https://github.com/user-attachments/assets/9b9716a5-1314-4b92-8040-64fcb2f5b49d" />

- reference in p5.table
-  Display images based on mood values
-  Margin to avoid images touching canvas edges

<img width="438" alt="截屏2025-01-19 下午9 27 12" src="https://github.com/user-attachments/assets/29739a64-6e8b-47d0-9e11-b07c3c40c516" />

## conclusion
In this workshop, I learned how to create a table in p5.js, as well as how to integrate images and link them with a CSV file for better data visualization. I also explored inserting text and adding a select box to enhance interactivity. The theme was based on my own data, reflecting my mood during weeks 1-5, with the mood connected to images, providing a clear and intuitive presentation. A new feature I experimented with was adjusting the font style, using textAlign(CENTER) and textFont('serif') to refine the overall design.






