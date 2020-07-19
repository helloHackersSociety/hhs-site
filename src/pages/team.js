import React, { Component }  from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import TwitterLink from '../components/Links/TwitterLink';
import GitHubLink from '../components/Links/GitHubLink';
import WebsiteLink from '../components/Links/WebsiteLink';

export default class TeamPage extends Component {

    state = {
        teamMembers:[
            {
                id:0,
                position: "Chair",
                name:"Fahad Quraishi",
                github:"https://github.com/FahadQ",
                picture:"https://avatars3.githubusercontent.com/u/30301004?s=460&v=4",
            },
            {
                id:1,
                position: "Vice chair",
                name:"Tom Misson",
                github:"https://github.com/tomMisson",
                picture:"https://avatars0.githubusercontent.com/u/9392830?s=460&v=4",
                twitter:"https://twitter.com/thomas_misson",
            },
            {
                id:2,
                position: "Chair",
                name:"Iqrah Nadeem",
                github:"https://github.com/iiqrah",
                picture:"https://avatars2.githubusercontent.com/u/21157720?s=460&v=4",
                twitter:"https://twitter.com/i_iqrah",
            },
            {
                id:3,
                position: "Tresurer",
                name:"Alex Papadimitriou",
                github:"https://github.com/Sukido",
                picture:"https://avatars2.githubusercontent.com/u/44062624?s=460&u=10acd1ff134f5107477b6e8c9f7578bcbac6832f&v=4",
            },
        ]
    }

    render() {
        return (
            <Layout>
                <SEO title="Meet the team"/>
                <h1><span role="img" aria-label="family emoji">👨‍👨‍👦‍👦</span>The Team</h1>
                <br/>
                <p>Bringing you events such as ManMetHacks, talks and workshops, the helloHackers commitee work tirelessly to make sure your hacking experience is a great one! <span role="img" aria-label="party popper emoji"></span>🎉 </p>
                <br/>
                <div className="teamWrapper">
                {
                    this.state.teamMembers.map((profile) => 
                    
                        <article key={profile.id} className="profile">
                            <img src={profile.picture} alt={profile.name} height="200" width="200"></img>
                            <h3>{profile.name}</h3>
                            <h4>{profile.position}</h4>
                            <div className="links">
                                <TwitterLink link={profile.twitter}/>
                                <GitHubLink link={profile.github}/>
                                <WebsiteLink link={profile.website}/>
                            </div>
                        </article>
                    )         
                    
                }
                </div>
            </Layout>
        )
    }
}
