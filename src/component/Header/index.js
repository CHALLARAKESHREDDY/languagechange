const langOptions = [
  {id: 1, value: 'EN', language: 'English'},
  {id: 2, value: 'HI', language: 'हिंदी'},
  {id: 3, value: 'TE', language: 'తెలుగు'},
]


const Header=(props)=>{

    const {changeOption,activeLanguage}=props

    const onChangeOption=(event)=>{
        changeOption(event.target.value)
    }

    return(
    <nav>
        <h1>Choose your Language</h1>
        <select value={activeLanguage} onChange={onChangeOption}>
            {langOptions.map(eachItem=>(<option value={eachItem.value}>{eachItem.language}</option>))}
        </select>
    </nav>
    )
}

export default Header