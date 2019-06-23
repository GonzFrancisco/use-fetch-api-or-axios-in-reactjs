import React, { Component, Fragment } from 'react';

class Content extends Component {
    render() {
        const { list } = this.props;

        return (
            <Fragment>
                <div className="container p-3">
                    <div className="row">
                        <ul className="list-unstyled">
                            {

                                list.map((u, i) => (
                                    <li key={i} className="media">
                                        <img src={u.picture.medium} style={ styles.images } className="mr-3" alt="algo" />
                                        <div className="media-body">
                                        <h5 className="mt-0 mb-1"> { `${u.name.first.charAt(0).toUpperCase() + u.name.first.slice(1)}  ${u.name.last.charAt(0).toUpperCase() + u.name.last.slice(1)}` } </h5>
                                        <ul>
                                            <li> <b> Phone: </b> { u.phone } </li>
                                            <li> <b> Email: </b> { u.email } </li>
                                        </ul>
                                        </div>
                                    </li>
                                ))

                            }
                        </ul>                           
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Content;

const styles = {
    images: {
        width:64,
        height:64,        
    }
}