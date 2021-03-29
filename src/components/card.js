import * as React from "react"
import PropTypes from "prop-types"
import "./index_layout.scss"

// import Image from './images_component'

class CardItem extends React.Component{

    state = {
        isCardCollapsed: true,
        
    };
    handleCardClick = (event) => {
        if (!this.state.isCardCollapsed){
            this.setState({
                isCardCollapsed: true,
            })
        }
        else{
            this.setState({
                isCardCollapsed: false,
            })
        }
    };

    render(){
        
       
    //    return (<div className={ `card ${this.state.isCardCollapsed ? "is-collapsed" : "is-expanded"} `}>
    //                 <div class="card__inner [ js-expander ]" onClick={this.handleCardClick.bind(this)} style={{backgroundImage: `url(${this.props.logoImage})`, backgroundRepeat: `no-repeat`, backgroundSize: `cover`}}>
    //                     <span>{this.props.brandName}</span>
    //                     {/* <i class="fa fa-folder-o"></i> */}
    //                 </div>
    //                 <Image alt="Gatsby in Space" filename={this.props.logoImage} />
    //                 <div class="card__expander">
    //                     {/* <i class="fa fa-close [ js-collapser ]"></i> */}
    //                     {this.props.logoStory}
    //                 </div>
    //             </div>
    //    )}
        return <div className={ `card ${this.state.isCardCollapsed ? "is-collapsed" : "is-expanded"} `}>
                    <div class="card__inner [ js-expander ]" onClick={this.handleCardClick.bind(this)} style={{backgroundImage: `url(${this.props.logoImage})`, backgroundRepeat: `no-repeat`, backgroundSize: `cover`}}>
                        <span>{this.props.brandName}</span>
                        {/* <i class="fa fa-folder-o"></i> */}
                    </div>
                    <div class="card__expander">
                        {/* <i class="fa fa-close [ js-collapser ]"></i> */}
                        {this.props.logoStory}
                    </div>
                </div>
        }
}

CardItem.propTypes = {
    logoImage: PropTypes.string,
    brandName: PropTypes.string,
    logoStory: PropTypes.string
  }

export default CardItem