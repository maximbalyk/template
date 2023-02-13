import React from 'react';

class Benefit extends React.Component {
    state = {
        logoUrl: this.props.logoUrl,
        benefitName: this.props.benefitName,
        description: this.props.description,
    }
    render() {
        const {logoUrl,benefitName,description} = this.state
        return (
            <div className="benefit">
                <img
                    src={logoUrl}
                    alt="Benefit benefitDesign"
                    className="benefit__logo"
                />
                <h2 className="benefit__title">{benefitName}</h2>
                <p className="benefit__text"
                >
                    {description}
                </p>
            </div>
        );
    }
}

export default Benefit;