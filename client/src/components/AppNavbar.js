import React,{Component } from 'react';
import{
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
 }from 'reactstrap';

 class AppNavbar extends Component{
     state = {
         isOpen :false
     }
     toggle= ()=>{
         this.setState({
             isOpen:!this.state.isOpen
         }) ;
     }

     render(){
         <div>
             <Navbar color="dark" dark expand ="sm" className="mb-5">
                 <Container>
                     <NavbarBrand href = "/">ShoppingList</NavbarBrand>
                     <NavbarToggler onclick= {this.togggle}/>
                     <Collapse isOpen ={this.state.isOpen}navbar>
                     <Nav className='ml-auto' navbar>
                         <NavItem>
                             <NavLink href="https://github.com/timothyAgevi">Github</NavLink>
                         </NavItem>
                     </Nav>
                     </Collapse>
                 </Container>
             </Navbar>
         </div>
     }
 }
     
         
       

 
export default AppNavbar;