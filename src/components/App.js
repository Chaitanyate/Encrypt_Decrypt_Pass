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
	const[encryptedKey, setEncryptedKey] = useState("");
  
  const handleSubmit = (evt) => {
      evt.preventDefault();
	   console.log(encPass);
  }
  const newhandleSubmit = (ev) => {
	ev.preventDefault();
	console.log(decPass);
}
		var a= web3.eth.accounts.create();
		var walletprivate = a["privateKey"];
		// var setPass = name;
		// var decPass ='hello';
		var keystore;
		

	const createwallet=()=>{
		a= web3.eth.accounts.create();
		setPrivateKey(a.privateKey);
		console.log("Waller is created");
		console.log('PrivateKey',privateKey);
	
	}
	const generateCrypt=()=>{
		keystore = web3.eth.accounts.encrypt(privateKey, encPass);
		setEncryptedKey(keystore);
		console.log("encrypted",keystore);

	}
	const generateDecrypt=()=>{
		var decrpt= web3.eth.accounts.decrypt(encryptedKey, decPass);
		console.log("De-crypted:",decrpt);

	}
	return (
		
	<div>
		{/* <form onSubmit={handleSubmit}>
  <label>
    Password:
    <input type="Password" value={encPass} onChange={e=>setEncPass(e.target.value)} />
  </label>
  <button >Encrypt</button>
  
</form><br/> */}

{/* <form onSubmit={ newhandleSubmit} >
  <label>
    Dec Password:
    <input type="Password" value={decPass} onChange={f=>setDecPass(f.target.value)} />
	

  </label>
  <button onClick={gendecrypt}>Decrypt</button>
  
  
</form><br/>
<br></br> */}
<div className="encryption-container">
	<label htmlFor="password">Password</label>
	<input id="password" type="" value={encPass} onChange={e=>setEncPass(e.target.value)}></input>
	<button onClick={generateCrypt}>Encrypt</button>
</div> <br/>
<div className="decryption-container">
<label htmlFor="re-enter-password">Re-Enter Password</label>
	<input id="re-enter-password" type="" value={decPass} onChange={e=>setDecPass(e.target.value)}></input>
	<button onClick={generateDecrypt}>Decrypt</button>
</div>
		
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


