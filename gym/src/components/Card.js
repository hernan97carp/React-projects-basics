import React from "react";
import exerciseImg from "../images/exercise.png"
import circleImg from "../images/circles.png"
import './styles/Card.css'
class Card extends React.Component{
  render(){




    return (
    <div className="card mx-auto Fitness-Card"
    style={{
      backgroundImage: `url(${circleImg}), linear-gradient(to right, #A74CF2, #617BFB)`
    }}
    >
        <div className="card-body">
           <div className="row center">
              <div className="col-6">
                  <img src={exerciseImg} className="float-right"/>
                    </div>
                  <div className="col-6 Fitness-Card-Info">
              <h1>{this.props.title}</h1>
            <p>{this.props.description}</p>
          </div>
       </div>     
     </div>         
   </div>          
    

    )
  }
}


export default Card
