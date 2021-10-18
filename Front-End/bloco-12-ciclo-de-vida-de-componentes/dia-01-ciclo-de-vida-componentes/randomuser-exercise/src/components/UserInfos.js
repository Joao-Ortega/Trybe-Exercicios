import React from "react";

class UserInfos extends React.Component {
  constructor() {
    super();
    this.fetchRandomUser = this.fetchRandomUser.bind(this);
    this.state = {
      loading: true,
      responseObj: undefined,
    }
  }

  componentDidMount() {
    this.fetchRandomUser();
  }

  async fetchRandomUser() {
    this.setState({ loading: true, }, async () => {
      const URL_REQUEST = 'https://api.randomuser.me/';
      const RESPONSE = await fetch(URL_REQUEST);
      const OBJ_RETURN = await RESPONSE.json();
      this.setState({
        loading: false,
        responseObj: OBJ_RETURN,
      })
    })
  }

  render() {
    const { loading, responseObj } = this.state;
    const LOADING_TAG = <h1>Loading...</h1>
    return (
      <div>
        { loading ? LOADING_TAG : 
         responseObj.results.map(({ name: { first, last }, email, dob: { age }, picture: { medium } }) => {
           return (
             <div key={ first }>
               <img src={ medium } alt={ first } />
               <h4>Name: { first } { last }</h4>
               <h5>Email: { email }</h5>
               <h5>Age: { age }</h5>
             </div>
           )
         })
         }
      </div>
    )
  }
}

export default UserInfos;
