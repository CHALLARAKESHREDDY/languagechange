import {Component} from 'react'
import Header from './component/Header'
import FirstItem from './component/FirstItem'
import './App.css'

class App extends Component{
  state={activeLanguage:"EN"}

  changeOption=(language)=>{
    this.setState({activeLanguage:language})
  }

  render(){
    const {activeLanguage}=this.state
    return(
      <>
      <Header activeLanguage={activeLanguage} changeOption={this.changeOption} />
      <FirstItem activeLanguage={activeLanguage} />
      </>
    )
  }
}



export default App;
