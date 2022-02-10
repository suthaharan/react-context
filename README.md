#### Topics

* Global State & Context API
* Lifting up the State
* Prop drilling
* Creating the Context
* useContext hook


#### useContext Hook
Ref 1 [YouTube Video](https://www.youtube.com/watch?v=lnL6gRkQ5g8)

> Helps create global state that is accessible from all the siblings

![useContext Overview](./gitassets/example-overview.jpg "useContext Folder Organization and Output")

#### useReducer Hook
> The useReducer(reducer, initialState) hook accept 2 arguments: the reducer function and the initial state. The hook then returns an array of 2 items: the current state and the dispatch function.
- The ***initial state*** is the value the state is initialized with.
- An ***action object*** is an object that describes how to update the state.
- The ***dispatch*** is a special function that dispatches an action object.
- The ***reducer*** is a pure function that accepts 2 parameters: the current state and an action object. Depending on the action object, the reducer function must update the state in an immutable manner, and return the new state.

```js
const initialState = 0;
const reducer = (state, action) => {
    switch(action){
        case true:
            return state + 1;
        case false:
            return 0;
        default:
            return state;
    }
}

const Home = () => {

const [loggedIn, dispatch] = useReducer(reducer, initialState);

...

```