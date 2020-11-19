import React from 'react'
import './Contact.css'

export default class ContactForm extends React.Component {

    constructor(props) {
        super(props)
    
        this.state = {
            name: '',
            email: '',
            mobile: '',
            message: ''
        }
    }

    // handle Inputs
    onNameChange(event) {
        this.setState({name: event.target.value})
    }

    onEmailChange(event) {
        this.setState({email: event.target.value})
    }
    onMobileChange(event) {
        this.setState({mobile: event.target.value})
    }
    onMsgChange(event) {
        this.setState({message: event.target.value})
    }

    // submitEmail(e){
    //     e.preventDefault();
    //     axios({
    //       method: "POST", 
    //       url: "/send", 
    //       data:  this.state
    //     }).then((response)=>{
    //       if (response.data.status === 'success'){
    //           alert("Message Sent."); 
    //           this.resetForm()
    //       } else if(response.data.status === 'fail'){
    //           alert("Message failed to send.")
    //       }
    //     })
    // }
    
    resetForm(){
            this.setState({name: '', email: '', mobile:'', message: ''})
    }

    render() {
        return (
            <div className="contact-form">
                <form method="" action="">
                    <div className="form-group">
                        <input 
                            type="text" 
                            name="" 
                            className="form-control" 
                            placeholder="Name" 
                            value={this.state.name}
                            onChange={this.onNameChange.bind(this)}
                            />
                    </div>
                    <div className="form-group">
                        <input 
                            type="text" 
                            name="" 
                            className="form-control" 
                            placeholder="Email" 
                            value={this.state.email}
                            onChange={this.onEmailChange.bind(this)}
                            />
                    </div>
                    <div className="form-group">
                        <input 
                            type="text" 
                            name="" 
                            className="form-control" 
                            placeholder="Mobile" 
                            value={this.state.mobile}
                            onChange={this.onMobileChange.bind(this)}
                            />
                    </div>
                    <div className="form-group msg">
                        <input 
                            type="text" 
                            name="" 
                            className="form-control" 
                            placeholder="Message..." 
                            value={this.state.message}
                            onChange={this.onMsgChange.bind(this)}
                            />
                    </div>
                    <div className="form-group buttons">
                        <button className="form-btn">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}
