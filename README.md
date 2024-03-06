# ToDo List
## Introduction
This project is defined to practice React and its implementation. So, initially I will define the components
that will be required. then each component will be created and styled.
The outline of the app is prepared using Figma. It can be found [here](https://www.figma.com/file/E9ALdAiWkz7cwGmUM8ycaY/Untitled?type=design&node-id=0-1&mode=design&t=2PlfZoH6orhQZ7tq-0). The following image illustrates the initial design screenshot, in FIGMA.

&nbsp;
![Figma wireframe](./Report%20assets/figma.png)

## Components
Here the list of components is provided:
1. Header
2. Search bar
   1. Search input
   2. Add button
3. Tasks List   
4. Footer
   1. Add button
   2. Search Icon
   3. Status Caption
   4. Filters (All, Active, Completed)

## Challenges
These are the main challenges I face during the development:
1. Saving and updating tasks data 
   To resolve this problem, considering that I am not ready to work with backend tools,
   I will use a JSON array
   at the moment, I am not sure that during the executation of the session, this array will
   retain or not.
   - Update: After implementing, it was revealed that this idea does not work. 


    

## Required Functionalities
1. When user push Add button (beside the input), the context inside input bar must be added to
   tasksJSON, and shown in the tasks list.
2. When each task checkbox is selected, it must be highligted as completed. and tasksJSON completed field must be updated as true.
3. When user filter all, all of the tasks must be shown.
4. When user filter Active, all of the tasks wich are not completed (false) must be shown.
5. When user filter Completed, all of the tasks wich are completed (false) must be shown.
6. When user click the search icon, a search box window must be shown and let the user to search for task
7. When user clicl the + icon, a task add window must be shown and let the user to add a new task
8. The status bar must always shows the number of not completed tasks

## Implementation Process:
1. Add Components
2. Implement layout
3. Style Components 
4. Implement functionality 
5. Test and Review
6. Publish