import React, { Fragment, Component } from 'react';
import { render } from 'react-dom';
import './Header.css'

//class component
class Header extends Component {

    constructor() {
        super();

        this.state = {
            title: "Edureka September Course",
            keyword: "User text here"
        }

    }

    handleChange = (event) =>{
        console.log(event.target.value);
        this.setState({keyword:event.target.value?event.target.value:"User Text here"});
        this.props.userText(event.target.value);
    }

    render() {

        return (
            <Fragment>
                {/*Option 3: From external CSS*/}
                <header>
                    <div className='logo'>{this.state.title}</div>
                    <center>
                        <input type="" onChange={this.handleChange}/>
                        {/*inline style JSX way)*/}
                        <div style={{color:'#fff'}}>{this.state.keyword}</div>
                    </center>
                    <hr />
                </header>
            </Fragment>
        )
    }

}

//functional component
// const Header = () =>{
// return(
//     <Fragment>
//         <center>
//             <h1>Edureka</h1>
//          </center>
//         <hr/>
//      </Fragment>

// )

// }

export default Header;