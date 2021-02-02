import React, { Component } from 'react';
class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            submitted: false, 
            formData: {
                firstName: "",
                lastName: "",
                email: ""
            }
        }
    }
    handleChange = (event) => {
        let formData = this.state.formData;
        formData[event.target.name] = event.target.value;
        this.setState({formData});
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            submitted: true
        })
    }
    resetForm = (event) => {
        this.setState({
            submitted: false,
            formData: {
                firstName: "",
                lastName: "",
                email: ""
            }
        })
    }
    render() {
        
        if(this.state.submitted){
            return (
                <div>
                    Thank you, {this.state.formData.firstName}, for submitting the form <br/>
                    <button onClick={this.resetForm}>Reset Form</button>
                </div>
            )
        }
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>First Name:</label>
                        <input onChange={this.handleChange} type="text" name="firstName" value={this.state.formData.firstName} />
                    </div>
                    <div>
                        <label>Last Name:</label>
                        <input onChange={this.handleChange} type="text" name="lastName" value={this.state.formData.lastName} />
                    </div>
                    <button>Submit Form</button> <br/>
                    {this.state.formData.firstName}
                    <br/>
                    {this.state.formData.lastName}
                </form>
            </div>
        );
    }
}
export default Contact;
