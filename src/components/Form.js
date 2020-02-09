import React,{Component} from 'react';

class Form extends Component{

  constructor(props){
    super(props);
    this.state={
        usrename:"",
        email:"",
        password:"",
        value:"Macedonia",
        selectedOption: '',
        isChecked: false,
        adress:'',
        phone:''
  };
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleRadio = this.handleRadio.bind(this);
    this.handleChecked = this.handleChecked.bind(this)
  }
  handleChange(evt){
    this.setState({[evt.target.name]:evt.target.value});
  }

  handleSubmit(evt){
    evt.preventDefault();
    console.log(`You User Name: ${this.state.name}`)
    console.log(`You Adress : ${this.state.adress}`)
    console.log(`You Phone : ${this.state.phone}`)
    console.log(`You Email: ${this.state.email}`)
    console.log(`You Password: ${this.state.password}`)
    console.log(`You Contry: ${this.state.value}`)
    console.log(`Yor Gender: ${this.state.selectedOption}`)

  }
  handleRadio(evt) {
  this.setState({
      selectedOption: evt.currentTarget.value
    });
  }
  handleChecked () {
      this.setState({isChecked: !this.state.isChecked});
    }
  render(){
        let txt;
          if (this.state.isChecked) {
              txt = 'checked'
          } else {
              txt = 'unchecked'
          }
    return(
      <div>
        <h1>Form demo</h1>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>Name :
               <input type="text" name="name" value={this.state.name}
              onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <label>Adress :
               <input type="text" name="adress" value={this.state.adress}
              onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <label>Phone :
               <input type="number" name="phone" value={this.state.phone}
              onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <label>Email :
                <input type="email" name="email" value={this.state.email}
                onChange={this.handleChange}/>
            </label>
          </p>
          <p>
            <label>Password :
                <input type="password" name="password" value={this.state.password}
                onChange={this.handleChange}/>
            </label>
          </p>
          <p>
            <label>
              <input type="checkbox" onChange={ this.handleChecked }/>{txt} box
            </label>
          </p>
            <input type="radio"
                 value="Male"
                 checked={this.state.selectedOption === "Male"}
                 onChange={this.handleRadio} />Male

            <input type="radio"
                 value="Female"
                 checked={this.state.selectedOption === "Female"}
                 onChange={this.handleRadio}/>Female

          <p>
            <label>Select Country :
              <select  value={this.state.value} name="value" onChange={this.handleChange }>
                <option value="Macedonia">Macedonia</option>
                <option value="Austria">Austria</option>
                <option value="Belgium">Belgium</option>
                <option value="Canada">Canada</option>
              </select>
            </label>
          </p>
          <button>submit</button>
        </form>
      </div>
    )
  }
}
export default Form;
