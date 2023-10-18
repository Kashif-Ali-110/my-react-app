import React from 'react'
import ReactDOM from 'react-dom'
import bootstrap from 'react-bootstrap'




function GitHubUserSearch () {
    
   // const UserList = [];
    
    const githuburl = "https://api.github.com/search/users?q=";

    const [UserList, setUserList ] = React.useState([]);

    function  GetUserFromGitHub(el){
        el.preventDefault();
        const form = el.target;
        const input = el.target[0];
        fetch(githuburl + input.value)
        .then((response) => response.json())
        .then((data ) => {
            console.log(data);
            setUserList(data.items);
            console.log(UserList);
        })
        form.reset();

    }

    function OpenParticularUser(){

    }

    

    function Item( {item}, {OpenParticularUser}){

        return (
            <li>
                <img src={item.avatar_url} alt='no pic'/>
                {item.login}
            </li>
        )
    }
  
    
    return  (
        <>
            <div>
                <h1>Project 5: GitHub user search </h1>
                <div>
                   <h3 >My Search</h3>
                   
                    <div>
                        <form onSubmit={GetUserFromGitHub}>
                            <input type='text'  id='add' key={"asdf"} ></input>
                            <button  id='send'>Search</button>
                        </form>
                    </div>
                    <ul>

                    { UserList.map((item, index) => (
                            <Item item={item} />) )}
                    </ul>
                   
                </div>
            </div>
        </>
        )  

    
}



export default GitHubUserSearch


