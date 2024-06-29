import {Component} from 'react'
import './App.css'

class App extends Component{
  state = {
   soat:0,
   minut:0,
   secund:0
  }



  render() {
    setInterval(() => {
      this.setState({
        soat: new Date().getHours(),
        minut: new Date().getMinutes(),
        secund: new Date().getSeconds()
      })
    }, 1000)
    return(
     <div className='clock'>
      <div className='soat'>{this.state.soat} </div> <div> : </div>
      <div className='minut'> {this.state.minut} </div> <div> : </div>
      <div className='secund'> {this.state.secund}</div>
     </div>
    );
  }
}
export default App;
