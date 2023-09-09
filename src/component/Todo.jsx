
const Todo = ({list,deleteClick}) => {
    
    return(
        <div>
         {
            list.map((item,index) => (
                <h2 key={index} >{item.name} <button className="btn btn-secondary" onClick={() => {deleteClick(index)}} >Delete</button></h2>
                
            ))
         }
        </div>
    )
}

export default Todo;