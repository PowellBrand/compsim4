// import React, { Component } from 'react';
// import axios from 'axios';
// import { getUser} from '../../ducks/reducer';
// import { connect } from 'react-redux';
// import {bindActionCreators} from 'redux';


// class View1 extends Component {
//     constructor() {
//         super();

//         this.state = {
//             userInfo: []
//         }

//     }

//     componentDidMount() {
//         axios.get('/api/getUser').then(res => {
//             this.setState({
//                 getUser: res.data
//             })
//         })
//     }
    
//     render() {
//         let users = this.state.getUser.map(user =>
//             <div className="userCont" key={user.id}>
//                 <p className="userData">{user.name}</p>
//                 <p className="userData">{user.password}</p>
//             </div>
//         )
//         return (
//             <div className="main">
//                 {user}
              

//             </div>
//         );
//     }
// }

// function mapDispatchToProps(dispatch){
//     return{
//         actions: bindActionCreators({
//             getUser
//         }, dispatch)
//     }
// }
// export default connect(mapDispatchToProps)(View1)