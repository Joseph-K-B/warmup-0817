import React, { Component } from 'react';

class App extends Component {
    render() {
      return (
        <section className='app'>
          <BrowserRouter>
          <Header />
            <Switch>
              <Route path='/dogs' component={PokeInfo}></Route>
              <Route path='/cats' component={PokemonPage}></Route>
              <Route path='/' component={Home} />
            </Switch>
          </BrowserRouter>
        </section>
      );
    }
  }