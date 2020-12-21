// https://react-bootstrap.github.io/components/spinners/
import {Spinner} from "react-bootstrap";

const Processing = () => {
    return (
        <Spinner animation="border" variant="success" size="sm" role="status">
            <span className="sr-only">Loading...</span>
        </Spinner>
    )
}

export default Processing;