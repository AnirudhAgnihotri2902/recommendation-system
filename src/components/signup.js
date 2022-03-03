
import './signup.css';


function Signup() {
  return (
    <div>
      <div className='title'><h1>Recommendation System</h1></div>  
      <br></br>    
      <form>
      <label>
        <input type="text" name="name" placeholder='Name' required/>
      </label>
      <br></br>
      <label>
        <input type="text" name="username" placeholder='Username'required/>
      </label>
      <br></br>
      <label>
        <input type="email" name="email" placeholder='E-mail'required />
      </label>
      <br></br>
      <label>
        <input type="password" name="name" placeholder='Password'required />
      </label>
      <br></br>
      <label>
        <input type="password" name="name" placeholder='Confirm Password'required />
      </label>
      <br></br>
      <input type="submit" value="Submit" />
    </form>
    </div>
  );
}

export default Signup;