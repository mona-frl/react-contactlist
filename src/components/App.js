import React from "react";
import contacts from "../contacts";
import Avatar from "./Avatar.jsx";
import Card from "./Cards.jsx"


function App() {
  return (
    <div>
      <h1 className="heading">My Contact List</h1>
      <Avatar img="https://www.surprisefactory.nl/media/44904/alpaca-6-pixabay.jpg?anchor=center&mode=crop&width=600&height=400&quality=90&token=O9OxQOw9MO" />
      {contacts.map(contact => {

        return (<Card
          key={contact.id}
          name={contact.name}
          img={contact.imgURL}
          tel={contact.phone}
          email={contact.email} />
        )
      })}
    </div>
  );
}


export default App;
