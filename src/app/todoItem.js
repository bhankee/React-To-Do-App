var React = require('react');
require('./css/todoItem.css');

var TodoItem = React.createClass({
    render:function(){
        return(
            <li>
                <div className="todo-item">
                    <span className="item-name">{this.props.item}</span>
                    <span className="item-delete" onClick={this.handleDelete}>x</span>
                </div>
            </li>

        );
    },//render

    //Custom functions
    handleDelete:function(){
        this.props.onDelete(this.props.item)

    }//video #8 (or 11)


});

module.exports = TodoItem;
