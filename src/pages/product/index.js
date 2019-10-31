import React, { Component } from 'react';

import './style.css';

import api from '../../services/api';

export default class Product extends Component {
    state = {
        product: {}
    }

    async componentDidMount() {
        const { id } = this.props.match.params;

        const response = await api.get(`/products/${id}`)

        this.setState({ product: response.data });
    }

    render() {
        const { product } = this.state;

        return (
            <div className="product-info">
                <h1>{product.title}</h1>
                <h1>{product.description}</h1>
                <p>
                    URL: <a href={product.url}>{product.url}</a>
                </p>
            </div>
        );
    }
}