const Question = (props) => {
    const {question} = props;
    return(
        <div>
            <h1>Category : {question.category}</h1>
            <h2>Points :</h2>
            <h2>Answer :</h2>
            
        </div>
    )
}




export default Question;