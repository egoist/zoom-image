import { render, Component } from 'preact'
import zoom from '../src/zoom'
import '../css/zoom-image.css'

class App extends Component {
  componentDidMount() {
    zoom(this.img)
  }

  render() {
    return (
      <div class="app">
        <h1>Just tap the image!</h1>
        <img width="200" ref={ img => this.img = img } src="https://ooo.0o0.ooo/2017/02/11/589ecad7083f4.png" />
      </div>
    )
  }
}

render(<App />, document.body)
