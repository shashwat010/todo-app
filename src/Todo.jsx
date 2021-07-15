import React from 'react';

const Todo = (props) => {
    
    return (<>
        
        <li className="list-group-item"><button className="btn" onClick={()=>{props.onSelect(props.id)}}><i class="fas fa-times-circle"></i></button>{props.text}</li>
    </>
    )

}

export default Todo;