import { Component, ComponentInterface, Prop, h, State, Host } from '@stencil/core';

@Component({
  tag: 'chuck-norris-joke',
  styleUrl: 'chuck-norris-joke.css',
  shadow: true,
})
export class ChuckNorrisJoke implements ComponentInterface {

  @State() joke: string;
  @Prop() firstName: string;
  @Prop() lastName: string;

  async componentDidLoad(){
    let params: Array<String> = [];

    if(this.firstName) {
      params.push(`firstName=${this.firstName}`);
    }
    if(this.lastName) {
      params.push(`lastName=${this.lastName}`);
    }
    return fetch(`https://api.icndb.com/jokes/random?${params.join('&')}`)
      .then(res => res.json())
      .then((json) => {
        this.joke = json && json.value && json.value.joke;
      })

  }

  render() {
    return (
      <Host>{this.joke}</Host>
    );
  }
}
