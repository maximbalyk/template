import React from "react";
import benefitDesign from "../../../images/benefitDesign.png";
import benefitSpeakerSystem from "../../../images/benefitSpeakerSystem.png";
import benefitMultiroom from "../../../images/benefitMultiroom.png";
import benefitLighting from "../../../images/benefitLighting.png";
class Benefit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: benefitDesign,
        };
        this.imageMap = {
            benefitDesign: benefitDesign,
            benefitSpeakerSystem: benefitSpeakerSystem,
            benefitMultiroom: benefitMultiroom,
            benefitLighting: benefitLighting,
        };
    }
    componentDidMount() {
        this.setState({
            image: this.imageMap[this.props.logoUrl],
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps !== this.props) {
            this.setState({
                image: this.imageMap[this.props.logoUrl],
            });
        }
    }


    render() {
        return (
            <div className="benefit">
                <img
                    src={this.state.image}
                    alt="Benefit benefitDesign"
                    className="benefit__logo"
                />
                <h2 className="benefit__title">{this.props.benefitName}</h2>
                <p className="benefit__text">{this.props.description}</p>
            </div>
        );
    }
}

export default Benefit;
