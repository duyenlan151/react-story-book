import React, { Component } from "react";


// class Book extends Component {
//     render() {
//         const { title, description, index } = this.props;
//         return (
//             <div class="book-item">
//                 <img src="https://source.unsplash.com/WLUHO9A_xik/190x230" />
//                 <p>{title}</p>
//                 <p>{description}</p>
//             </div>
//         );
//     }
// }

function Book(props){
    const { title, description, index } = props;
    return (
            <div class="book-item">
                <img src="https://source.unsplash.com/WLUHO9A_xik/190x230" />
                <p>{title}</p>
                <p>{description}</p>
            </div>
        );
}

export default Book;