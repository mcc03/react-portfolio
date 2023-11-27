import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

const TodoItem = (props) => {

    return(
        <ListGroup.Item>
            {(props.todo.done) ? (
                <>
                    <Button onClick={() => props.deleteTodo(props.todo.id)} variant="danger" className="float-end">Delete</Button>
                    <span className="done">{props.todo.text}</span>
                    <span className="float-end">&#128077;</span>
                </>
            ) : (
                <>
                    {props.todo.text}
                    <Button onClick={() => props.deleteTodo(props.todo.id)} variant="danger" className="float-end">Delete</Button>
                    <Badge onClick={() => props.markAsDone(props.todo.id)} pill bg="success" className="float-end">&#10003;</Badge>
                </>
            )}
        </ListGroup.Item>
    );
};

export default TodoItem;