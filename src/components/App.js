import React,{useEffect,useState} from "react";
import web3 from "./web";

import BitcoinFunction from './bitcoin';


const App=()=>{

	useEffect(()=>{
		createwallet();
	
	},[])
	// useEffect(()=>{
		
	// 	BitcoinFunction()
		
	// },[])
	const [encPass,setEncPass] = useState("");
	const [decPass,setDecPass] = useState("");
	const[privateKey,setPrivateKey] = useState("");
	const[encryptedKey, setEncryptedKey] = useState("");
	const[isError,setIsError]=useState("");
	const[isError1,setIsError1]=useState("");
	const[isError2,setIsError2]=useState("");



	


		

//	console.log(setIsError)
  const handleSubmit = (evt) => {
      evt.preventDefault();
		// genencrypt()
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
		console.log("Wallet is created");
		console.log('PrivateKey',privateKey);
	
	}
	const callpass=()=>{
		if (encPass.length!==0){
			generateCrypt()
			BitcoinFunction(encPass,'encryption')
		}
		
		else{
			// <Text>NO password</Text>
			//alert("Password fields cannot be empty")
			setIsError("Password fiels should not be empty")
			
			
		}
		
	}
	const newCallpass=()=>{
		if (decPass!==encPass){
			setIsError2("Password is not matching")
		}
		else if (decPass.length!==0){
			generateDecrypt()
			BitcoinFunction(decPass,'decryption')
		}
		 

		else{
			setIsError1("Password fiels should not be empty")
			
		}
		
	}
	// if(encPass!==decPass){
	// 	alert("Password Mismatch")
	// }
	
	const generateCrypt=()=>{
		console.log("PrivateKey", privateKey);
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
		
<div>
	
</div>
<div className="encryption-container">
	<label htmlFor="password">Password</label>
	<input id="password" type="password" value={encPass} onChange={e=>setEncPass(e.target.value)}></input>
	
	
	
	<button onClick={callpass}>Encrypt</button>
	{isError}
	
</div> <br/>
<div className="decryption-container">
<label htmlFor="re-enter-password">Re-Enter Password</label>
	<input id="re-enter-password" type="password" value={decPass} onChange={e=>setDecPass(e.target.value)}></input>

	<button onClick={newCallpass}>Decrypt</button>
	{isError1}
	{isError2}
	
	

</div>
		
  
  <br></br>
  
  <br></br>

  <br/>
</div>

	)
}
export default App;


