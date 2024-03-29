import React from 'react'
import imagenImg from '../images/exercise.png'
import ciruleImg from '../images/circles.png'
import './styles/Card.css'
class Card extends React.Component{
    constructor(props){
        super(props)

        this.state ={
            title: "hola",
            description: "hola",
            img: "https://yt3.ggpht.com/a/AGF-l78RPDz6kkJiG3mBizFdLtIFz3pCPxNGSIOV3w=s48-c-k-c0xffffffff-no-rj-mo"
        }
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({
                img: this.props.img
            })
        }, 5000)
    }

    render(){
        const {title, description, img, leftColor, rightColor} = this.props
        return (
            <div className="card mx-auto Fitness-Card"
                style={{
                    backgroundImage: `url(${ciruleImg}), linear-gradient(to right, ${leftColor}, ${rightColor})`
                }}
            >
                <div className="card-body">
                    <div className="row center">
                        <div className="col-6">
                            <img src={img} className="float-right"/>
                        </div>
                        <div className="col-6 Fitness-Card-Info">
                            <h1>{title}</h1>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;