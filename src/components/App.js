import React,{useEffect,useState} from "react";
import web3 from "./web";
const App=()=>{

	const[store,newStore]=useState([]);
	const[dec,newDec]=useState([]);
	useEffect(()=>{
		createwallet();
	},[])
	const [encPass,setEncPass] = useState("");
	const [decPass,setDecPass] = useState("");
	const[privateKey,setPrivateKey] = useState("");
  
  const handleSubmit = (evt) => {
      evt.preventDefault();
		genencrypt()
	   console.log(encPass);
	//  console.log(encrypti());
      //alert(`Submitting Name ${name}`)
  }
  const newhandleSubmit = (ev) => {
	ev.preventDefault();
  //   var b = encrypti()
  //   console.log(b);
	gendecrypt()
	console.log(decPass);
	//alert(`Submitting Name ${name}`)
}
		var a= web3.eth.accounts.create();
		var walletprivate = a["privateKey"];
		// var setPass = name;
		// var decPass ='hello';
		var keystore;
		

	const createwallet=()=>{
		a= web3.eth.accounts.create();
		setPrivateKey(a.privateKey);
		console.log(a);
		console.log(a.privateKey);
		console.log('PrivateKey',privateKey);
	
	}
	const genencrypt=()=>{
		keystore = web3.eth.accounts.encrypt(privateKey, encPass);
		console.log(keystore);

	}
	const gendecrypt=()=>{
		var decrpt= web3.eth.accounts.decrypt(keystore, decPass);
		//const newData1 =decrpt.json()
		console.log('The decrypted private key is:'+decrpt.privateKey);
		//newDec(decrpt.privateKey);

	}
	return (
		
	<div>
		<form onSubmit={handleSubmit}>
  <label>
    Password:
    <input type="Password" value={encPass} onChange={e=>setEncPass(e.target.value)} />
  </label>
  <button >Encrypt</button>
  
</form><br/>
<form onSubmit={ newhandleSubmit} >
  <label>
    Dec Password:
    <input type="Password" value={decPass} onChange={f=>setDecPass(f.target.value)} />
	

  </label>
  <button onClick={gendecrypt}>Decrypt</button>
  
  
</form><br/>
<br></br>

		
  {/* <button onClick={createwallet}>create and Encrypt</button> */}
  <br></br>
  
  <br></br>

  <br/>
  

  
  

		{/* {store.address} */}
		{/* <h2>
			{
			store.map((i)=>{
				return i.cyphertext

			})}
		</h2> */}
  

	</div>
	)
}
export default App;


