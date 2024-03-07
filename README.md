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
   <br>
   <span style="color:red;">To resolve this problem, considering that I am not ready to work with backend tools,
   I will use a JSON array
   at the moment, I am not sure that during the executation of the session, this array will
   retain or not. <span style="text-decoration:underline;" >Update: After implementing, it was revealed that this idea does not work. </span></span>
   - <span style="color:green;">I just asked review on discord community (reactiflux), and they guide me to lift tasksJSON and addTask up. Then, that works! </span>

2. <span style="color:green;">When tasks are added, and the list grow, it will overlap the footer and also beyond it. to resolve this 
   problem I had to add some scrolling feature to the related component. 
   This challenge was resolved by adding an overflow property to .tasks-list class with its value being set to auto.</span>

3. I have a problem to set onChange event of checkboxes, sync with completed feature of tasks list array obj.
   This was solved by modifying checked as follows:
      checked = {tasksObj.completed}
   having struggle with this challege, few modifications were implemented, which the most important was 
   substituing the JSON array tasksJSON with an object array called tasks. All of the relavent names are changed in the code.
   Because of this modification, the tasksJsonObj parameter will be unused, so it is removed.
   The variable names before and after this modification are as follows:
   |Before         | After     |
   |:--------------|:----------|
   |tasksJSON		 | tasks     |
   |setTasksJSON	 | setTasks  |
   |tasksJsonObj	 | tasksObj  |

4. The other challenge was that I can't hide the items according to the selected filter. I proceed the same approach as the previous challenge finding, but does not work here.
   This problem was because of the way I used to update the tasksObj values. 
   |My Code snippet for filter functions: | The modified Version (Immutable update approach)|
   |:-------------------------------------|:-----------------------------------------------:|
   |function filterAll() {                |function filterAll() {                           |
   | tasks.forEach( (element) => {        |    setTasks((prevTasks) =>                      |
   |   element.show = true;               |      prevTasks.map((task) =>                    |
   | })                                   |                  ({ ...task, show: true }))     |
   | setTasks( () => tasks);              |   );                                            |
   |} */                                  |  }                                              |

    

## Required Functionalities
1. When user push Add button (beside the input), the context inside input bar must be added to
   tasksJSON, and shown in the tasks list. <span style="color:green;">Done</span>
2. When each task checkbox is selected, it must be highligted as completed. and tasksJSON completed field must be updated as true.  <span style="color:green;">Done</span>
3. When user filter all, all of the tasks must be shown.<span style="color:green;">Done</span>
4. When user filter Active, all of the tasks wich are not completed (false) must be shown.<span style="color:green;">Done</span>
5. When user filter Completed, all of the tasks wich are completed (false) must be shown.<span style="color:green;">Done</span>
6. When user click the search icon, a search box window must be shown and let the user to search for task <span style="color:red;">Omitted from the project</span>
7. When user clicl the + icon, a task add window must be shown and let the user to add a new task<span style="color:red;">Omitted from the project</span>
8. The status bar must always shows the number of not completed tasks<span style="color:red;">Omitted from the project</span>

## Implementation Process:
1. Add Components
2. Implement layout
3. Style Components 
4. Implement functionality 
5. Test and Review
6. Publish

## Special Notes and Modifications:
1. In the initial design I called a component, SearchBar, while actually it is not for seach. So I will change it to 
   InputBar
   |Before         | After       |
   |:--------------|:------------|
   |SearchBar.css	 | InputBar.css|
   |search-bar	    | input-bar   |
   |SearchBar.jsx	 | InputBar.jsx|

   		
		
		