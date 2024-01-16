import React, { Component } from 'react';
import axios
    from 'axios';

class ContactForm extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            values: {
                name: '',
                services: '',
                phone: '',
                email: '',
                message: '',
                date: ''
            },
            successMessage: "Sender's message was sent successfully",
            warningMessage: 'Fill up the form, please!',
            errorMessage: 'Something go wrong. Try again later!',
            alertClass: '',
            responseMessage: '',
            alertTimeout: '',
            delay: 5000
        };
    }

    submitForm = async e => {
        e.preventDefault();

        if ( document.querySelector( '#alert' ) ) {
            document.querySelector( '#alert' ).remove();
        }

        this.setState( { isSubmitting: true } );

        axios.post( 'https://store.adveits.com/API/form.php', this.state.values, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json; charset=UTF-8'
            },
        }, ).then( response => {
            if ( response.data.status === 'success' ) {
                this.setState( { responseMessage: this.state.successMessage } );
            }

            if ( response.data.status === 'warning' ) {
                this.setState( { responseMessage: this.state.warningMessage } );
            }

            if ( response.data.status === 'error' ) {
                this.setState( { responseMessage: this.state.errorMessage } );
            }

            this.callAlert( this.state.responseMessage, response.data.status )
        } ).catch( error => {
            this.callAlert( this.state.errorMessage, 'error' )
        } );
    };

    removeAlert = () => {
        clearTimeout( this.state.alertTimeout );
        this.setState( {
            alertTimeout: setTimeout( function() {
                    var element = document.querySelector( '#alert' );
                    element.classList.remove( 'fadeIn' );
                    element.classList.add( 'fadeOut' );
                    setTimeout( function() {
                        element.remove()
                    }, 900 )
                }, this.state.delay
            )
        } );
    };

    callAlert = ( message, type ) => {
        if ( ! document.querySelector( '#alert' ) ) {
            if ( type === 'success' ) {
                this.setState( { alertClass: 'success' } )
            }

            if ( type === 'error' ) {
                this.setState( { alertClass: 'danger' } )
            }

            if ( type === 'warning' ) {
                this.setState( { alertClass: 'warning' } )
            }

            var alert = '<div id="alert" class="animated fadeIn alert alert--shadow alert-' + this.state.alertClass + '">' + message + '</div>';

            var element = document.querySelector( '#cf-1' );

            element.insertAdjacentHTML( 'beforeend', alert );

            this.removeAlert();
        }
    };

    handleInputChange = e =>
        this.setState( {
            values: {
                ...this.state.values,
                [e.target.name]: e.target.value
            }
        } );

    render() {
        return (
            <form method="post" onSubmit={ this.submitForm } id="cf-1" className="contact-form">
                <div className="form-group form-group-lg">
                    <p className="input-group gutter-width-sm no-space">
                        <span className="gutter-width">
                            <label className="form-label-lg before after mb-0" htmlFor="cf-1-name-surename">Name and Surename *</label>

                            <input name="name"
                                   value={ this.state.values.name }
                                   onChange={ this.handleInputChange }
                                   type="text"
                                   id="cf-1-name-surename"
                                   placeholder="Your name here"
                                   required="required"/>
                        </span>

                        <span className="gutter-width">
                            <label className="form-label-lg before after mb-0" htmlFor="cf-1-services">Choose a service *</label>

                            <select name="services"
                                    id="cf-1-services"
                                    value={ this.state.values.services }
                                    onChange={ this.handleInputChange }>
                                <option value="hair-treatments">Hair Treatments</option>
                                <option value="face-and-body">Face & Body</option>
                                <option value="hands-feets">Hands & Feets</option>
                                <option
                                    value="haircuts-for-men">Haircuts for Men</option>
                            </select>
                        </span>
                    </p>
                </div>

                <div className="form-group form-group-lg">
                    <p className="input-group gutter-width-sm no-space">
                        <span className="gutter-width">
                            <label className="form-label-lg before after mb-0" htmlFor="cf-1-phone">Your phone number *</label>

                            <input name="phone"
                                   value={ this.state.values.phone }
                                   onChange={ this.handleInputChange }
                                   type="text"
                                   id="cf-1-phone"
                                   placeholder="Your phone here"
                                   required="required"/>
                        </span>

                        <span className="gutter-width">
                            <label className="form-label-lg before after mb-0" htmlFor="cf-1-date">Choose an appointment date</label>
                            <input name="date"
                                   value={ this.state.values.date }
                                   onChange={ this.handleInputChange }
                                   type="text"
                                   id="cf-1-date"
                                   placeholder="dd/mm/yyyy"/>
                        </span>
                    </p>
                </div>

                <div className="form-group form-group-lg">
                    <label className="form-label-lg before after mb-0" htmlFor="cf-1-message">Message</label>

                    <textarea name="message"
                              value={ this.state.values.message }
                              onChange={ this.handleInputChange }
                              id="cf-1-message"
                              placeholder="Your message here"></textarea>
                </div>

                <div className="form-group form-group-lg mb-0">
                    <button type="submit" className="btn btn-outline-secondary">Book Now</button>
                </div>
            </form>
        );
    }
}

export default ContactForm;
