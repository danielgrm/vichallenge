import { Component, Host, h , Prop} from '@stencil/core';

@Component({
  tag: 'vi-component-1',
  styleUrl: 'vi-component-1.css',
  shadow: true,
})
export class ViComponent1 {
  @Prop() text: string;

  render() {
    return (
      <button class="btn" type="button">
        {this.text}
      </button>
    );
  }

}
