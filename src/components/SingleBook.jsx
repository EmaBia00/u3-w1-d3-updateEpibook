import { Component } from "react";
import { Card } from "react-bootstrap";

// PRIMA DEL SELECTED
// const SingleBook = ({ book }) => {
//   return (
//     <Card className="card-custom">
//       <Card.Img variant="top" src={book.img} alt={book.title} />
//       <Card.Body>
//         <Card.Title>{book.title}</Card.Title>
//         <Card.Text>
//           <strong>Price:</strong> ${book.price}
//         </Card.Text>
//       </Card.Body>
//     </Card>
//   );
// };

// export default SingleBook;

// DOPO AVER AGGIUNTO IL SELECTED:

class SingleBook extends Component {
  state = {
    selected: false
  };

  handleSelect = () => {
    this.setState((prevState) => ({
      selected: !prevState.selected
    }));
  };

  render() {
    const { book } = this.props;
    const { selected } = this.state;

    return (
      <Card className={`card-custom ${selected ? "border-danger border-3" : ""}`} onClick={this.handleSelect}>
        <Card.Img variant="top" src={book.img} alt={book.title} style={{ cursor: "pointer" }} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>
            <strong>Price:</strong> ${book.price}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
