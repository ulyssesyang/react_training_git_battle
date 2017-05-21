var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');

var listName = [
    { name: 'Tyler', friend: true },
    { name: 'Ryan', friend: true },
    { name: 'Michael', friend: false },
    { name: 'Mikenzi', friend: false },
    { name: 'Jessica', friend: true },
    { name: 'Dan', friend: false } ];

class Users extends React.Component {
  render() {
      var friendList = this.props.list.filter(function (friend) {
          return friend.friend === true;
      });
      var nonfriendList = this.props.list.filter(function (nonfriend) {
          return nonfriend.friend === false;
      });
    return (
      <div>
        <h1>Friends</h1>
        <ul>
          {
              friendList.map(function (user,index) {
                  return <li key = {user.name}>{user.name}</li>
              })
          }
        </ul>
        
        <hr />
        
        <h1> Non Friends </h1>
        <ul>
          {
              nonfriendList.map(function (user,index) {
                  return <li key = {user.name}>{user.name}</li>
              })
          }
        </ul>        
      </div>
    )
  }
}

ReactDOM.render(
  <Users list= {listName}
  />,
  document.getElementById('app')
);