import React, { Component } from 'react';
import { Container} from "reactstrap";
import { Nav } from './components/Nav';
import { Header } from './components/Header';
import { Code } from './components/Code';
import { Design } from './components/Design';
import { Tools } from './components/Tools';
import { AboutMe } from './components/AboutMe';
import { Footer } from './components/Footer';
import ScrollNav from "./components/ScrollNav";

// Floating Overwatch Side Nav 
import OverwatchSideNav from 'overwatch-side-nav/lib';


class App extends Component {
  render() {

const items = [
  
  {
      label: 'Code Projects',
      id: 'code',
      icon:  '<img src="https://i.imgur.com/gsp0Vs2.png" alt="Code icon" /> ',
  },

  {
    label: 'Design Samples',
    id: 'design',
    icon:  '<img src="https://i.imgur.com/U4OhEvQ.png" alt="Toolkit" style="margin-top: 2px;" />',
},
  
  {
    label: 'Toolkit',
    id: 'skills',
    icon:  '<img src="https://i.imgur.com/U4OhEvQ.png" alt="Toolkit" style="margin-top: 2px;" />',
},

  {
      label: 'me',
      id: 'me',
      icon:  '<img src="https://i.imgur.com/SFAKn3i.png" alt="User icon" style="margin-top: 2px;" />',
  },
  {
      label: 'Home',
      id: 'top',
      icon:  '<img src="https://i.imgur.com/JN2i07H.png" alt="home" style="margin-top: 2px;" />',
  }
]

const Sections = () => <div>{[...Array(items.length)].map((_, index) =>
    <section id={items[index].id} key={index}>
        {`${index + 1}`}
    </section>)
}
</div>

    return (
      <Container>
                <Nav />

                <Header />

                  <ScrollNav
                    distance={290}
                  >
                      <OverwatchSideNav items={items} />
                  </ScrollNav>

                <Code />

                <Design />

                <Tools />

                <AboutMe />

                <Footer />

</Container>
    );
  }
}

export default App;
