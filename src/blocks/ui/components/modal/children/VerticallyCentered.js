import React, { Component } from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';
import { Modal } from 'react-bootstrap';

class VerticallyCentered extends Component {

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
            <div id="vertically-centered">
                <h5>Vertically centered</h5>
                <p>Add <code>.modal-dialog-centered</code> to <code>.modal-dialog</code> to vertically center the modal.
                </p>

                <Modal id="exampleModalCenter"
                       show={ this.state.showModal }
                       onHide={ this.close }
                       backdrop={ false }
                       dialogClassName="modal-dialog modal-dialog-centered"
                       className="modal fade"
                       tabIndex="-1"
                       role="dialog"
                       aria-labelledby="exampleModalCenterTitle"
                       aria-hidden="true"
                       style={ { "display": "none" } }>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalCenterTitle">Modal title</h5>
                            <button onClick={ this.close } type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                        </div>
                        <div className="modal-footer">
                            <button onClick={ this.close } type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button onClick={ this.close } type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </Modal>

                <Modal id="exampleModalCenteredScrollable"
                       show={ this.state.showModal }
                       onHide={ this.close }
                       backdrop={ false }
                       dialogClassName="modal-dialog modal-dialog-scrollable modal-dialog-centered"
                       className="modal fade"
                       tabIndex="-1"
                       role="dialog"
                       aria-labelledby="exampleModalCenteredScrollableTitle"
                       aria-hidden="true"
                       style={ { "display": "none" } }>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalCenteredScrollableTitle">Modal title</h5>
                            <button onClick={ this.close } type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                        </div>
                        <div className="modal-footer">
                            <button onClick={ this.close } type="button" className="btn btn-secondary" data-dismiss="modal">Close
                            </button>
                            <button onClick={ this.close } type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </Modal>

                <div className="bd-example">
                    <button onClick={ this.open.bind( this ) } type="button" className="btn btn-primary " data-toggle="modal" data-target="#exampleModalCenter">Vertically centered modal</button>
                    <button onClick={ this.open.bind( this ) } type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenteredScrollable">Vertically centered scrollable modal</button>
                </div>
                <PrismCode
                    code={ '<div id="exampleModalCenter" className="modal fade" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">\n' +
                    '  <div className="modal-dialog modal-dialog-centered" role="document">\n' +
                    '    <div className="modal-content">\n' +
                    '      <div className="modal-header">\n' +
                    '        <h5 className="modal-title" id="exampleModalCenterTitle">Modal title</h5>\n' +
                    '          <button type="button" className="close" data-dismiss="modal" aria-label="Close">\n' +
                    '            <span aria-hidden="true">×</span>\n' +
                    '          </button>\n' +
                    '        </div>\n' +
                    '        <div className="modal-body">\n' +
                    '          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>\n' +
                    '        </div>\n' +
                    '        <div className="modal-footer">\n' +
                    '          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>\n' +
                    '           <button type="button" className="btn btn-primary">Save changes</button>\n' +
                    '        </div>\n' +
                    '    </div>\n' +
                    '  </div>\n' +
                    '</div>\n' +
                    '\n' +
                    '<div id="exampleModalCenteredScrollable" className="modal fade" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenteredScrollableTitle" aria-hidden="true">\n' +
                    '  <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered" role="document">\n' +
                    '    <div className="modal-content">\n' +
                    '      <div className="modal-header">\n' +
                    '        <h5 className="modal-title" id="exampleModalCenteredScrollableTitle">Modal title</h5>\n' +
                    '        <button type="button" className="close" data-dismiss="modal" aria-label="Close">\n' +
                    '          <span aria-hidden="true">×</span>\n' +
                    '        </button>\n' +
                    '      </div>\n' +
                    '      <div className="modal-body">\n' +
                    '        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>\n' +
                    '        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>\n' +
                    '        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>\n' +
                    '        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>\n' +
                    '        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>\n' +
                    '      </div>\n' +
                    '      <div className="modal-footer">\n' +
                    '        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>\n' +
                    '        <button type="button" className="btn btn-primary">Save changes</button>\n' +
                    '      </div>\n' +
                    '    </div>\n' +
                    '  </div>\n' +
                    '</div>\n' +
                    '\n' +
                    '<div className="bd-example">\n' +
                    '  <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">\n' +
                    '    Vertically centered modal\n' +
                    '  </button>\n' +
                    '  <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenteredScrollable">\n' +
                    '    Vertically centered scrollable modal\n' +
                    '  </button>\n' +
                    '</div>'
                    }
                    language="html"
                    plugins={ ["line-numbers"] }
                />

            </div>
        );
    }
};

export default VerticallyCentered;
