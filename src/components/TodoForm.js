import React from "react";

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            taskText: "",
        };
    }

    handleChanges = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        // update state
        this.props.addTask(this.state.taskText);
        this.setState({
            taskText: "",
        });
    };

    handleClear = (e) => {
        e.preventDefault();
        this.props.clearTask()
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="taskText"
                        value={this.state.taskText}
                        onChange={this.handleChanges}
                    />
                </form>
                <button onClick={this.handleSubmit}>Add Todo</button>  
                <button onClick={this.handleClear}>Clear Completed</button>
            </div>
        );
    }
}

export default TodoForm; 