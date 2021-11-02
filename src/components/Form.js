import React, { Component } from 'react';

class Form extends Component {
    state = {
        spell: "",
        house: "",
        animal: "",
        year: "",
    };

    magicHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
        };

    render() {
        return (
            <div>
                <input type="text" name="spell" onChange={this.magicHandler} />
                <input type="text"  name="house" onChange={this.magicHandler} />
                <input type="text"  name="animal" onChange={this.magicHandler} />
                <input type="text" name="year"  onChange={this.magicHandler} />
                    <p>Spell: {this.state.spell}</p>
                    <p>House: {this.state.house}</p>
                    <p>Animal: {this.state.animal}</p>
                    <p>Year: {this.state.year}</p>
            </div>
        );
    }
}

export default Form;