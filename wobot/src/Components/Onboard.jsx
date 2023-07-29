import React,{useEffect, useState} from 'react'
import './Onboard.css'
import formlogo from './utils/formlogo.jpg'

const Onboard = () => {
    const [inputs, setInputs] = useState({});
    const[size,setSize]=useState("");
    const[bgColor,setbgColor]=useState({backgroundColor:'rgb(240, 240, 240)',color:'black'});
    const[bgColor1,setbgColor1]=useState({backgroundColor:'rgb(240, 240, 240)',color:'black'});
    const[bgColor2,setbgColor2]=useState({backgroundColor:'rgb(240, 240, 240)',color:'black'})
    const[bgColor3,setbgColor3]=useState({backgroundColor:'rgb(240, 240, 240)',color:'black'})
    const[bgColor4,setbgColor4]=useState({backgroundColor:'rgb(240, 240, 240)',color:'black'})

    

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({...values,["companysize"]:size, [name]: value }))
       
  } 

  const handleSubmit = (event) => {
    event.preventDefault();
     
     console.log(inputs)
     setInputs({...inputs,name:'',industry:'',CompanyName:''});
     setbgColor({backgroundColor:'rgb(240, 240, 240)',color:'black'});
     setbgColor1({backgroundColor:'rgb(240, 240, 240)',color:'black'});
     setbgColor2({backgroundColor:'rgb(240, 240, 240)',color:'black'});
    setbgColor3({backgroundColor:'rgb(240, 240, 240)',color:'black'});
    setbgColor4({backgroundColor:'rgb(240, 240, 240)',color:'black'});
     
     alert("Form Submitted succeful")
  }
  useEffect(()=>{
    setInputs({...inputs,["companysize"]:size});
  },[size])
  return (
    <div className='onboard-main'>
        <div style={{position:'fixed'}}><img src="https://wobot.ai/wobot_logo_blue.svg" alt="" /></div>
    <div className='message-main' style={{overflowX:'hidden'}}>
        <form className='form-main'  >
            <span className='form-heading'>
                <img className='form-logo-img' src={formlogo} alt="" />
                <h3>It's a delight to have you onboard</h3>
                <h5>Help us know you better</h5>
                <p>(this is how we optimise wobot as per your business needs)</p>
            </span>
            <span className='input-span'><h4>Your name</h4> <input  name='name' type="text" placeholder='e.g. John Smith' required='true' value={inputs.name}  onChange={handleChange}/></span>
             <span className='input-span'><h4>Company name</h4><input name='CompanyName' type="text"  placeholder='e.g. Alpha Inc.' required='true' value={''||inputs.CompanyName} onChange={handleChange}/></span>
              <span className='input-span'><h4>Industry</h4><select className='industry-select' name="industry" onChange={handleChange} value={'IT'||inputs.industry}>
                <option value="IT">IT</option>
                <option value="Pharma">Pharma</option>
                <option value="Agriculture">Agriculture</option>
                </select></span>
                <span className='location'>
                    <h4>Number of locations</h4>
                    <span className='location-part1'>
                        <label style={bgColor} className='1-20' onClick={(e)=>{ e.preventDefault();setbgColor({backgroundColor:'blue',color:'white'});setSize("1-20");
                        
                         setbgColor1({backgroundColor:'rgb(240, 240, 240)',color:'black'});
                         setbgColor2({backgroundColor:'rgb(240, 240, 240)',color:'black'});
                         setbgColor3({backgroundColor:'rgb(240, 240, 240)',color:'black'});
                         setbgColor4({backgroundColor:'rgb(240, 240, 240)',color:'black'});
                     }}>1-20</label>
                         <label style={bgColor1} className='21-50' onClick={(e)=>{e.preventDefault();setbgColor1({backgroundColor:'blue',color:'white'}); setSize("21-50");
                         
                        setbgColor({backgroundColor:'rgb(240, 240, 240)',color:'black'});
                        setbgColor2({backgroundColor:'rgb(240, 240, 240)',color:'black'});
                        setbgColor3({backgroundColor:'rgb(240, 240, 240)',color:'black'});
                        setbgColor4({backgroundColor:'rgb(240, 240, 240)',color:'black'});
                        }} >21-50</label>
                          <label style={bgColor2} className='51-200' onClick={(e)=>{e.preventDefault();setbgColor2({backgroundColor:'blue',color:'white'}); setSize("51-200")
                        setbgColor({backgroundColor:'rgb(240, 240, 240)',color:'black'});
                        setbgColor1({backgroundColor:'rgb(240, 240, 240)',color:'black'});
                        setbgColor3({backgroundColor:'rgb(240, 240, 240)',color:'black'});
                        setbgColor4({backgroundColor:'rgb(240, 240, 240)',color:'black'});
                        }}>51-200</label>
                          <label style={bgColor3} className='201-500' onClick={(e)=>{e.preventDefault();setbgColor3({backgroundColor:'blue',color:'white'}); setSize("201-500")
                        setbgColor1({backgroundColor:'rgb(240, 240, 240)',color:'black'});
                        setbgColor2({backgroundColor:'rgb(240, 240, 240)',color:'black'});
                        setbgColor({backgroundColor:'rgb(240, 240, 240)',color:'black'});
                        setbgColor4({backgroundColor:'rgb(240, 240, 240)',color:'black'});
                        }}>201-500</label>
                    <label style={bgColor4} className='500+' onClick={(e)=>{e.preventDefault();setbgColor4({backgroundColor:'blue',color:'white'}); setSize("500+")
                setbgColor1({backgroundColor:'rgb(240, 240, 240)',color:'black'});
                setbgColor2({backgroundColor:'rgb(240, 240, 240)',color:'black'});
                setbgColor3({backgroundColor:'rgb(240, 240, 240)',color:'black'});
                setbgColor({backgroundColor:'rgb(240, 240, 240)',color:'black'});
                }}>500+</label></span>
                </span>
             <button className='below-btn' onClick={handleSubmit}>Get Started</button>
        </form>
    </div>
    </div>
  )
}

export default Onboard