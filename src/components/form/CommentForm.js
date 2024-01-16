import React, { Component } from 'react';
import axios from 'axios';

class CommentForm extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            values: {
                comment: '',
                author: '',
                email: '',
                url: ''
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
            alertTimeout: setTimeout( function () {
                    var element = document.querySelector( '#alert' );
                    element.classList.remove( 'fadeIn' );
                    element.classList.add( 'fadeOut' );

                    setTimeout( function () {
                        element.remove()
                    }, 900 )
                }, this.state.delay
            )
        } );
    };

    callAlert = ( message, type ) => {
        if ( !document.querySelector( '#alert' ) ) {
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

            var element = document.querySelector( '#commentform' );

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
            <form onSubmit={ this.submitForm } id="commentform" className="comment-form">
                <div className="form-group form-group-lg">
                    <p className="comment-notes">Your email address will not be published. Required fields are marked <span className="required">*</span></p>
                </div>

                <div className="form-group form-group-lg">
                    <label className="form-label-lg before after mb-0" htmlFor="comment">Comment</label>

                    <textarea id="comment"
                              name="comment"
                              value={ this.state.values.comment }
                              onChange={ this.handleInputChange }
                              cols="45"
                              rows="4"
                              placeholder="Your comment here *"
                              required="required"></textarea>
                </div>

                <div className="form-group form-group-lg">
                    <label className="form-label-lg before after mb-0" htmlFor="comment-author">Name</label>

                    <input id="comment-author"
                           name="author"
                           value={ this.state.values.author }
                           onChange={ this.handleInputChange }
                           type="text" placeholder="Your name here *"
                           required="required" />
                </div>

                <div className="form-group form-group-lg">
                    <label className="form-label-lg before after mb-0" htmlFor="comment-email">Email</label>

                    <input id="comment-email"
                           name="email"
                           value={ this.state.values.email }
                           onChange={ this.handleInputChange }
                           type="email"
                           placeholder="Your email here *"
                           required="required" />
                </div>

                <div className="form-group form-group-lg">
                    <label className="form-label-lg before after mb-0" htmlFor="comment-url">Website</label>

                    <input id="comment-url"
                           name="url"
                           value={ this.state.values.url }
                           onChange={ this.handleInputChange }
                           placeholder="Your website here"
                           type="url" />
                </div>

                <div className="form-group form-group-lg">
                    <p className="comment-form-cookies-consent custom-control custom-checkbox before">
                        <input id="wp-comment-cookies-consent" className="custom-control-input" name="wp-comment-cookies-consent" type="checkbox" value="yes" />

                        <label className="custom-control-label" htmlFor="wp-comment-cookies-consent">Save my name, email, and website in this browser for the next time I comment.</label>
                    </p>
                </div>

                <div className="form-submit">
                    <input name="submit" type="submit" className="btn btn-outline-secondary" defaultValue="Post Comment" />
                </div>
            </form>
        );
    }
}

export default CommentForm;
