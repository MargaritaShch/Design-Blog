# :pencil: Project Design-Blog (test assigment):
# Task

Deploy a VUE3 (composition api) application using Vite build tools, specifying all necessary parameters from the main stack when deploying the project.

## Main Routes of the Application:
- Home Page (App.vue)
- Posts List Page (PostsListView.vue)
- Single Post Page (SinglePostView.vue)

## Visual Components:
At your discretion. Predominantly made with CSS as SACC/SCSS was not studied.

### Home Page:
The home page should have a block with the main site navigation. The navigation should contain links (or buttons) to the following routes:
- Our Posts Page (App.vue) - Button: "OUR POSTS"

### Posts List Page:
Contains a "breadcrumbs" block with an active link to the home page and the current page displayed.
Structure: Home / Posts List

Contains a block of post lists.
Clicking on a post in the list should navigate to the post page. Right-clicking on a post should remove it from the list (without a server request).

### Single Post Page:
Contains a "breadcrumbs" block with active links to the home page, the posts list page, and the current page (SinglePostView.vue).
Structure: Home / Posts List / Post № {postnumber}

Contains a block with the post body, including:
- Post Title
- Post Body
- "About the Author" Block

In the author block, obtain user information based on the userId field in the post via the endpoint https://jsonplaceholder.typicode.com/users/{userId} and display it in the following structure:
- User Name
- Email
- Phone
- Website

All page data should be obtained from the service https://jsonplaceholder.typicode.com/, and the retrieved entity should be typed.If any custom styles are used on the page, they should be written exclusively using modular scss. Common styles may only be used for browser style resets or loading custom fonts. Component-level styles should only use modular styles.

## :hammer_and_wrench: Tools:
  ### - Vue3; 
  ### - TypeScript;
  ### - Vite;
  ### - SCSS.
 


### View link: [Design-blog](https://margaritashch.github.io/Design-Blog/)



