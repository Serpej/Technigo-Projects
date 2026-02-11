# Happy Thoughts

In this assignment I was tasked with making a UI for an already set up backend. Basically making it able for the user to post new thoughts, like them and see what posts has already been made and when. There was a picture with the end result design which we were supposed to follow aswell. 

1. I sketched on paper how I wanted to structure my code and realized I needed a parent component under APP to store the different useStates I needed. 
2. I made the components and and started with HappyThoughtList component, that way I could get a fecth of the API to get me on the right track.
3. Then I made the ThoughtInput logic and wrote the logic for the Postrequest. 
4. All while making everything in #2 and #3 I alternated going up a level to HappyThoughtParent and added things I needed for the children.
5. When the logic was done, and I got the like button to work and update, I started styling the project according to the prefered design.
6. Last but not least i added responsiveness to the design for it to work on phones aswell as laptops.

If I had even more time I would try and reach some of the stretch goals, such as making a character counter for the ThoughtInput component that turns red when the user uses too few or to many letters in a post.    


You can run the project locally by installing the dependencies and then running it in dev mode.

```bash
npm i && code . && npm run dev
```

## View it live

