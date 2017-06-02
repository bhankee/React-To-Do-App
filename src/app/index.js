
var React = require('react');
var ReactDOM = require('react-dom');
import { Router, Route, browserHistory, Link } from 'react-router';

//Module requires
var TodoItem = require('./todoItem');
var AddItem = require('./addItem');
var About = require('./about');

//CSS requires
require('./css/index.css');

var App = React.createClass({
    render: function(){
        return(
            <Router history={browserHistory}>
                <Route path={"/"} component={TodoComponent}></Route>
                <Route path={"/about"} component={About}></Route>
            </Router>
        );
    }
});


//Create component
var TodoComponent = React.createClass({
    getInitialState:function(){
        return {//list out props
            todos: ['wash up', 'eat some cheese', 'take a nap','buy flowers'],
            age:30
        }
    },

    // renders to HTML page!!!!!
    render: function(){
        var todos = this.state.todos; // makes copy of above todos array
        todos = todos.map(function(item, index){
            return (
                <TodoItem item ={item} key={index} onDelete={this.onDelete}/> //item matches item which is actually todo content.index still index of content.
            )
        }.bind(this));


        return(//render
            <div id="todo-list">
                <p>The busiest people have the most leisure...</p>
                <p>{this.state.age}</p>
                <ul>{todos}</ul>
                <AddItem onAdd={this.onAdd} />

            </div>
        );//the mapped todos above.
    },//render

    //Custom functions
    onDelete: function(item){ // todos is the array todos in getInitialState.
        var updatedTodos = this.state.todos.filter(function(val, index){
            return item !== val;//keep item in array if doesn'y equal clicked 'x'.
        });

        this.setState({
            todos:updatedTodos
        });
    },// pass this to component TodoItem above where TodoItem is nested. Then handleDelete can access it!

    onAdd: function(item){
        var updatedTodos = this.state.todos;
        updatedTodos.push(item);
        this.setState({
            todos: updatedTodos
        })
    }
});//end component

//Create TodoItem component that is nested in TodoComponent.


//put component on HTML page
ReactDOM.render(<App />, document.getElementById('todo-wrapper'))
