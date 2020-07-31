import React,{Component} from 'react';
const UserContext=React.createContext();
class UserProvider extends Component {
 state={
    users:[
      {
        id:1,
        userName:"Ufuk Oral",
        department:"Software Engineering"
      },
      {
        id:2,
        userName:"Emre Çorbacı",
        department:"Data Science"
      }
    ]
   }
 render(){
    return (
        <UserContext.Provider value={this.state}>
            {this.props.children}
        </UserContext.Provider>
    )
 }
}
export default UserProvider;