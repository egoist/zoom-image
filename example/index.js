import { render, Component } from 'preact'
import zoom from '../src/zoom'
import '../css/zoom-image.css'
import './style.css'

class App extends Component {
  componentDidMount() {
    zoom(this.img)
  }

  render() {
    return (
      <div class="app">
        <h1>Just tap the image!</h1>
        <p>
          <a href="https://github.com/egoist/zoom-image">egoist/zoom-image</a>
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt distinctio alias minus culpa rerum vel in corporis laborum omnis animi, aspernatur quod, impedit dignissimos nostrum cum labore assumenda, quo nemo!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil obcaecati hic neque alias deserunt suscipit natus optio totam, explicabo blanditiis. Est, cupiditate libero perspiciatis distinctio accusantium molestias corporis dolore expedita.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil obcaecati hic neque alias deserunt suscipit natus optio totam, explicabo blanditiis. Est, cupiditate libero perspiciatis distinctio accusantium molestias corporis dolore expedita.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil obcaecati hic neque alias deserunt suscipit natus optio totam, explicabo blanditiis. Est, cupiditate libero perspiciatis distinctio accusantium molestias corporis dolore expedita.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil obcaecati hic neque alias deserunt suscipit natus optio totam, explicabo blanditiis. Est, cupiditate libero perspiciatis distinctio accusantium molestias corporis dolore expedita.
        </p>
        <img width="200" ref={ img => this.img = img } src="https://ooo.0o0.ooo/2017/02/11/589ecad7083f4.png" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil obcaecati hic neque alias deserunt suscipit natus optio totam, explicabo blanditiis. Est, cupiditate libero perspiciatis distinctio accusantium molestias corporis dolore expedita.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil obcaecati hic neque alias deserunt suscipit natus optio totam, explicabo blanditiis. Est, cupiditate libero perspiciatis distinctio accusantium molestias corporis dolore expedita.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil obcaecati hic neque alias deserunt suscipit natus optio totam, explicabo blanditiis. Est, cupiditate libero perspiciatis distinctio accusantium molestias corporis dolore expedita.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum dolores, dolore dolor sed molestiae animi amet eligendi dignissimos exercitationem ratione excepturi a nisi tenetur. Rerum suscipit delectus quos, vel consequuntur?
        </p>
      </div>
    )
  }
}

render(<App />, document.body)
