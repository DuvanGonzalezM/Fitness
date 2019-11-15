import React from 'react'
import Card from '../components/Card'
import AddButtom from '../components/AddButtom'

class ExercisesLis extends React.Component{
    render(){
        return (
            <div>
                {
                    this.props.exercises.map((exercise) => {
                        return(
                            <Card 
                                key= {exercise.id}
                                title= {exercise.title}
                                description= {exercise.description}
                                img= {exercise.img}
                                leftColor= {exercise.leftColor}
                                rightColor= {exercise.rightColor}
                            />
                        )
                    })
                }
                <AddButtom />
            </div>
        )
    }
}

export default ExercisesLis;