import {Component, Prop, State, Method, h} from '@stencil/core';

@Component({
  tag: 'vi-collapse',
  styleUrl: 'vi-collapse.css'
})
export class CollapsiblePanel {
  @Prop() title: string;
  @State() collapsed: boolean;

  @Method()
  toggle() {
      this.collapsed = !this.collapsed;
  }

  render() {
    return (
        <div>
            <div id="header" onClick={this.toggle.bind(this)}>
                <span>{this.title}</span>
            </div>
            <div id="content" hidden={this.collapsed}>
                <slot />
            </div>
        </div>
    );
  }
}