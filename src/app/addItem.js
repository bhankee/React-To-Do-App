var React = require('react');
var ReactDOM = require('react-dom');
require('./css/addItem.css');

var AddItem = React.createClass({
    render:function(){
        return(
        <form id="add-todo" onSubmit={this.handleSubmit}>
            <input type="text" required ref="newItem" />
            <input type="submit" value="Hit me"/>
        </form>
        );


    },//render

    //Custom functions
    handleSubmit: function(e){
        e.preventDefault(); //Prevents from autoreload of page after submit is hit.
        this.props.onAdd(this.refs.newItem.value);
    }

});

module.exports = AddItem;
