const onChangeHandler = (e) => {
  const errorLog ={ }

  const {value, title,name} = e.targe
  console.log("e",e)
  if(name === 'connName'){
    setInputForm({name: value})
  }
}

const [inputForm,setInputForm] = useState({
  name:'',
  description:'',
})

