import React, { Component, Fragment } from 'react';
import { Modal } from 'react-bootstrap';
import HeaderLogo from '../../blocks/logo/HeaderLogo';
import SearchForm from '../form/SearchForm';
import Actions from '../../blocks/actions/Actions';

class SearchModal extends Component {

    constructor( context ) {
        super( context );

        this.state = {
            showModal: false
        };

        this.open = this.open.bind( this );
        this.close = this.close.bind( this );
    }

    open() {
        this.setState( { showModal: true }, function () {
        } );
    }

    close() {
        this.setState( { showModal: false } );
    }

    render() {
        return (
            <Fragment>
                <div className="search-toggle">
                    <button onClick={ this.open.bind( this ) } type="button" className="btn btn-lg btn-before-dot btn-link border-0 p-0 min-w-auto" data-toggle="modal" data-target="#search-modal">search</button>
                </div>

                <Modal className="search-modal"
                       id="search-modal"
                       show={ this.state.showModal }
                       onHide={ this.close }
                       backdrop={ false }
                       aria-labelledby="search-modal"
                       aria-hidden="true"
                       dialogClassName="modal-full"
                       ref={ node => this.chart = node }>
                    <div className="wrapper">
                        <div className="modal-content">
                            <div className="modal-header modal-header-top">
                                <div className="header-content d-flex justify-content-between w-100">
                                    <div className="header-left align-self-center">
                                        <div className="links">
                                            <div className="links-items">
                                                <div className="links-item">
                                                    <a href={ process.env.PUBLIC_URL + "/" }
                                                       className="btn btn-lg btn-before-dot btn-link border-0 p-0 min-w-auto">home</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="header-center align-self-center">
                                        <HeaderLogo logoColor="light" />
                                    </div>

                                    <div className="header-right d-flex justify-content-end">
                                        <div className="d-flex align-items-center">
                                            <div className="search-close-toggle">
                                                <button onClick={ this.close } type="button" className="btn btn-lg btn-before-dot btn-link border-0 p-0 min-w-auto" data-dismiss="modal" aria-label="Close">Close search
                                                </button>
                                            </div>
                                        </div>

                                        <Actions />
                                    </div>
                                </div>
                            </div>

                            <div className="modal-body modal-body-centered">
                                <SearchForm />
                            </div>
                        </div>
                    </div>
                </Modal>
            </Fragment>
        );
    }
}

export default SearchModal;
