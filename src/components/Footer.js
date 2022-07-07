import React from 'react';

class Footer extends React.Component{

    constructor(){
        super();
        this.changeColor = (e) => {
            e.target.style.color = 'red';
        }
    }

    render(){

        const nowYear = new Date().getFullYear();

        const changeStyle = (e) => {
            e.target.style.fontWeight = 'bold';
        }

        return (
           <footer>
                <p className='text-center' onClick={(e) => {
                    changeStyle(e);
                    this.changeColor(e);
                }}>Copyright &copy; {nowYear} by Tech2</p>
           </footer>
        );
    }

}

export default Footer;