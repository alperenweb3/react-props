Props are a way to pass data and functionality between React components. Here are some examples of how to use props in React:

### Example 1: Passing props to a child component

In this example, we have a parent component called `App` that renders a child component called `Child`. We pass a prop called `name` to the `Child` component, which is then displayed on the screen.

```
javascriptCopy code// App.js

import React from 'react';
import Child from './Child';

function App() {
  return (
    <div>
      <Child name="John" />
    </div>
  );
}

export default App;

// Child.js

import React from 'react';

function Child(props) {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
    </div>
  );
}

export default Child;

```

Explanation: In the `App` component, we pass the prop `name` to the `Child` component by including it as an attribute on the `Child` component. In the `Child` component, we access the prop value through the `props` object, and then display it on the screen using JSX.

### Example 2: Dynamically rendering a list of items

In this example, we have a parent component called `App` that renders a child component called `List`. We pass an array of strings as a prop called `items` to the `List` component, which is then used to dynamically render a list of items.

```
javascriptCopy code// App.js

import React from 'react';
import List from './List';

function App() {
  const items = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <div>
      <List items={items} />
    </div>
  );
}

export default App;

// List.js

import React from 'react';

function List(props) {
  const items = props.items.map((item) => <li key={item}>{item}</li>);

  return (
    <div>
      <ul>{items}</ul>
    </div>
  );
}

export default List;

```

Explanation: In the `App` component, we define an array of strings called `items`. We then pass this array as a prop to the `List` component. In the `List` component, we use the `map` method to iterate over the `items` array and create a new array of `li` elements. We also set the `key` prop on each `li` element to ensure React can efficiently update the list. Finally, we render the `ul` element with the `items` array passed to it.

### Example 3: Customizing reusable components

In this example, we have a reusable `Button` component that can be customized with different colors and sizes. We pass props to the `Button` component to specify its appearance.

```
javascript// Button.js

import React from 'react';

function Button(props) {
  const styles = {
    backgroundColor: props.color,
    fontSize: props.size === 'large' ? '24px' : '16px',
    padding: props.size === 'large' ? '12px 24px' : '8px 16px',
  };

  return (
    <button style={styles} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Button;

```

Explanation: In the `Button` component, we use props to specify the button's color, size, and onClick event handler. We use the `color` prop to set the background color of the button, and the `size` prop to set the font size and padding. We also pass the `onClick` event handler to the button so that the parent component can handle click events. Finally, we render the button with the `children` prop, which contains the content inside the button.

### Example 4: Passing data between nested components

In this example, we have a parent component called `App` that renders a `List` component, which in turn renders multiple `ListItem` components. We pass data to the `ListItem` component through props to display each item's name and description.

```
javascript// App.js

import React from 'react';
import List from './List';

function App() {
  const items = [
    { name: 'Item 1', description: 'This is item 1' },
    { name: 'Item 2', description: 'This is item 2' },
    { name: 'Item 3', description: 'This is item 3' },
  ];

  return (
    <div>
      <List items={items} />
    </div>
  );
}

export default App;

// List.js

import React from 'react';
import ListItem from './ListItem';

function List(props) {
  const items = props.items.map((item) => (
    <ListItem key={item.name} name={item.name} description={item.description} />
  ));

  return <ul>{items}</ul>;
}

export default List;

// ListItem.js

import React from 'react';

function ListItem(props) {
  return (
    <li>
      <h2>{props.name}</h2>
      <p>{props.description}</p>
    </li>
  );
}

export default ListItem;

```

Explanation: In the `App` component, we define an array of objects called `items`, where each object contains a `name` and `description` property. We then pass this array as a prop to the `List` component, which maps over each item and creates a new `ListItem` component for each one. We pass the `name` and `description` properties of each item as props to the `ListItem` component, which then displays them on the screen.

### Example 5: Dynamic routing with props

In this example, we have a `Router` component that dynamically renders different components based on the current URL. We pass a `page` prop to each component to specify its content.

```
javascriptCopy code// Router.js

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <Home page="home" />} />
        <Route exact path="/about" render={() => <About page="about" />} />
        <Route exact path="/contact" render={() => <Contact page="contact" />} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;

// Home.js

import React from 'react';

function Home(props) {
  return <h1>Welcome to the {props.page} page!</h1>;
}

export default Home;

// About.js

import React from 'react';

function About(props) {
  return <h1>About the {props.page} page</h1>;
}

export default About;

// Contact.js

import React from 'react';

function Contact(props) {
  return <h1>Contact {props.page}</h1>;
}

export default Contact;

```

Explanation: In the `Router` component, we use the `BrowserRouter` and `Switch` components from `react-router-dom` to handle dynamic routing. We define three routes for the home, about, and contact pages, each of which renders a different component with a `page` prop that specifies its content. In each component, we use the `props.page` value to display the appropriate heading.

### Example 6: Conditionally rendering components with props

In this example, we have a `User` component that displays different content based on the user's role. We pass a `role` prop to the component to specify which content to display.

```
javascriptCopy code// User.js

import React from 'react';
import AdminPanel from './AdminPanel';
import UserProfile from './UserProfile';

function User(props) {
  return (
    <div>
      {props.role === 'admin' ? (
        <AdminPanel />
      ) : (
        <UserProfile username={props.username} />
      )}
    </div>
  );
}

export default User;

// AdminPanel.js

import React from 'react';

function AdminPanel() {
  return (
    <div>
      <h1>Admin Panel</h1>
      <p>Welcome admin! You have access to sensitive data.</p>
    </div>
  );
}

export default AdminPanel;

// UserProfile.js

import React from 'react';

function UserProfile(props) {
  return (
    <div>
      <h1>User Profile</h1>
      <p>Welcome {props.username}! Your profile information is displayed here.</p>
    </div>
  );
}

export default UserProfile;

```

Explanation: In the `User` component, we use a conditional statement to render either the `AdminPanel` component or the `UserProfile` component based on the value of the `props.role` prop. If the user is an admin, we render the `AdminPanel` component, and if the user is a regular user, we render the `UserProfile` component with a `username` prop that specifies the user's name.

### Example 7: Handling events with props

In this example, we have a `Button` component that can be customized with different text and click handlers. We pass a `text` prop and a `handleClick` prop to the component to specify its text and click handler, respectively.

```
javascriptCopy code// Button.js

import React from 'react';

function Button(props) {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  );
}

export default Button;

// App.js

import React from 'react';
import Button from './Button';

function App() {
  const handleButtonClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div>
      <Button text="Click me!" handleClick={handleButtonClick} />
    </div>
  );
}

export default App;

```

Explanation: In the `Button` component, we use the `props.handleClick` function as the `onClick` handler for the button. We also use the `props.text` value to display the appropriate text for the button. In the `App` component, we define a `handleButtonClick` function that logs a message to the console when the button is clicked. We pass this function as the `handleClick` prop to the `Button` component.

### Example 8: Styling components with props

In this example, we have a `Box` component that can be customized with different background colors. We pass a `color` prop to the component to specify its background color.

```
javascriptCopy code// Box.js

import React from 'react';
import './Box.css';

function Box(props) {
  return (
    <div className="box" style={{ backgroundColor: props.color }}>
      {props.children}
    </div>
  );
}

export default Box;

// App.js

import React from 'react';
import Box from './Box';

function App() {
  return (
    <div>
      <Box color="red">This box is red</Box>
      <Box color="blue">This box is blue</Box>
      <Box color="green">This box is green</Box>
    </div>
  );
}

export default App;

```

Explanation: In the `Box` component, we use the `props.color` value to set the `backgroundColor` style property of the box. We also use the `props.children` value to display any child components inside the box. In the `App` component, we render three `Box` components with different background colors and child text.

### Example 9: Rendering lists with props

In this example, we have a `List` component that renders a list of items. We pass an `items` prop to the component to specify the list of items to render.

```
javascriptCopy code// List.js

import React from 'react';

function List(props) {
  const items = props.items.map((item) => (
    <li key={item.id}>{item.text}</li>
  ));

  return (
    <ul>
      {items}
    </ul>
  );
}

export default List;

// App.js

import React from 'react';
import List from './List';

function App() {
  const items = [
    { id: 1, text: 'Item 1' },
    { id: 2, text: 'Item 2' },
    { id: 3, text: 'Item 3' },
  ];

  return (
    <div>
      <List items={items} />
    </div>
  );
}

export default App;

```

Explanation: In the `List` component, we use the `props.items` array to render a list of `li` elements with the `text` property of each item. We use the `key` property with a unique identifier to ensure React can efficiently update the list when it changes. In the `App` component, we define an `items` array of objects and pass it as the `items` prop to the `List` component.

### Example 10: Conditional rendering with props

In this example, we have a `User` component that renders a user's name and age. We pass a `user` prop to the component to specify the user to render. If the user is over 18, we display their name and age. If they are under 18, we display a message saying they are not old enough.

```
javascriptCopy code// User.js

import React from 'react';

function User(props) {
  const { name, age } = props.user;

  if (age >= 18) {
    return (
      <div>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
      </div>
    );
  } else {
    return (
      <div>
        <p>{name} is not old enough</p>
      </div>
    );
  }
}

export default User;

// App.js

import React from 'react';
import User from './User';

function App() {
  const user1 = { name: 'Alice', age: 25 };
  const user2 = { name: 'Bob', age: 15 };

  return (
    <div>
      <User user={user1} />
      <User user={user2} />
    </div>
  );
}

export default App;

```

Explanation: In the `User` component, we use an `if` statement to conditionally render different content based on the `age` property of the `props.user` object. If the user is over 18, we display their name and age. If they are under 18, we display a message saying they are not old enough. In the `App` component, we define two `user` objects and pass them as the `user` prop to the `User` component.