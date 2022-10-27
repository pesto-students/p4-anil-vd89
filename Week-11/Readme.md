
## Week 11 - Assignment [Total Time ~ 6 hrs]

In this Assignment, you will need to deploy your URL shortener to a web serverDeploy a production build to web server of your choice. You can choose any free deployment solution.

The web application should be accessible by a hostname. Example: [ShortLinkApp](https://shrtco.de/bsrv56) the workflows should work as expected.


### Benchmarks:
1. Before deployment, do performance benchmarking(checking reder cycles and memory consumption).
2. Try to reduce render cycles as much as possible with optimization techniques like using pure components
3. Create a .ReadME file with all the commands for prod deployment
4. The application should be running on a cloud web server.
5. Include the hostname of the deployed web application in the readMe file.
6. Push the readMe to the github repo


## Redux Exercise 1:

Use the below CodeSandBox [link](https://codesandbox.io/s/github/dceddia/plain-react-state-lightswitch)
It’s a plain React app displaying a “Room” with a light switch. Clicking the button toggles the state, which turns the light on and off.

The task is to add Redux to this app, and move the light switch state out of the React component and into Redux.

Once you’re done, clicking the button should dispatch an action, and the reducer should return the updated light switch state.

You can leave everything in one file, or split out the Room component into its own file if you like.

If you do leave it all in index.js, you won’t need to export the connected Room component. Instead, save it in a separate variable, like const ConnectedRoom =connect(mapStateToProps)(Room)– and update theReactDOM.render call to render the ConnectedRoom.

### Guidelines:
1. Add Redux into the application.
2. Wire Redux with the React App using built in methods.
3. The Action, Dispatchers and Reducer files should have been created.
4. Bonus for creating separate files for each.
5. The Action - Dispatch - Reducer - Store flow should work as expected.


### ReduxExercise2:

Create a brand new React project with [Create ReactApp](https://shrtco.de/4W5Ps6) or [CodeSandboxDelete](https://shrtco.de/ZumZyi) the boilerplate code from index.js and start fresh.

Add Redux to the project as you’ve done before.

There’s just one component here: the StepCounter. It should have 2 buttons, one“Add Step” and one “Reset Steps”, as shown above. Clicking “Add Step” should increment the step counter by 1, and “Reset Steps” should clear it. (think: how many actions will you need?)

For each action, create an action constant and an action creator. UsemapDispatchToProps to pass the actions in as props to the StepCountercomponent. Try out the object form of mapDispatch as well as the function form.

You can break the project up into files if you like, or keep it all in one file. If you want a suggestion, try for an index.js with the createStore + reducer, a StepCounter.js with the component and any necessary connect() setup, and an actions.js with the actions (don’t forget to export them!).


### Guidelines:
1. Add Redux into the application.
2. Wire Redux with the React App using built in methods.
3. The Action, Dispatchers and Reducer files should have been created.
4. Bonus for creating separate files for each.
5. Bonus for adding styles to the application.
6. The Action - Dispatch - Reducer - Store flow should work as expected.