import React, { useState, useEffect } from 'react';
import { BrowserRouter, Link, NavLink, Route, Switch } from 'react-router-dom';
import queryString from "query-string";

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <h1>App10</h1>
                <h2>새로고침 있고 URL 변경</h2>
                <ul>
                    <li><a href="/about/">about</a></li>
                    <li><a href="/about/company/">about company</a></li>
                    <li><a href="/profile/">profile</a></li>
                    <li><a href="/blog/">blog</a></li>
                </ul>
                <h2>새로고침 없고 URL 변경(react-router-dom)</h2>
                <ul>
                    <li><NavLink exact to="/about/" activeStyle={navActiveStyle}>about</NavLink></li>
                    <li><NavLink exact to="/about/company/" activeStyle={navActiveStyle}>about company</NavLink></li>
                    <li><NavLink to="/profile/" activeStyle={navActiveStyle}>profile</NavLink></li>
                    <li><NavLink to="/weblog/" activeStyle={navActiveStyle}>weblog</NavLink></li>
                    <li><NavLink to="/hello/" activeStyle={navActiveStyle}>hello</NavLink></li>
                </ul>
                <Switch>
                    <Route exact path="/about/" component={AboutPage}/>
                    <Route exact path="/about/company/" component={AboutCompanyPage}/>
                    <Route path="/profile/" component={ProfilePage}/>
                    <Route path="/weblog/:post_id/" component={PostDetail}/>
                    <Route path="/weblog/" component={PostList}/>
                    <Route component={RouteNoMatch}/>
                </Switch>
            </div>
        </BrowserRouter>
    )
};

const RouteNoMatch = ({location}) => {
    return (
        <div>
            잘못된 경로입니다. ({location.pathname})
        </div>
    )
}

const navActiveStyle = {
    fontWeight: 'bold',
    backgroundColor: 'yellow',
};

// /about/
const AboutPage = () => (
        <div>
            <h2>AboutPage</h2>
        </div>
);

// /about/company
const AboutCompanyPage = () => (
        <div>
            <h2>AboutCompanyPage</h2>
        </div>
);

// /profile/
const ProfilePage = ({location}) => {
    const { token } = queryString.parse(location.search);
    return (
        <div>
            <h2>ProfilePage</h2>
            token : {token}
        </div>
    )
};

// /weblog/
const PostList = ({match}) => {
    return (
        <div>
            <h2>PostList</h2>
            <ul>
                <li><Link to={`${match.url}100/`}>100번 포스팅</Link></li>
                <li><Link to={`${match.url}101/`}>101번 포스팅</Link></li>
            </ul>
        </div>
    )
};

// /post/
const PostDetail = ({ match }) => {
    const { params: { post_id },} = match;

    const [post, setPost] = useState();

    useEffect(() => {
        console.log(`get post detail api 호출: ${post_id}`);
        setPost({title: `포스팅 ${post_id}`, content: `포스팅 ${post_id} 내용`});
    }, [post_id]);

    return (
        <div>
            <h2>PostDetail #{post_id}</h2>
            {JSON.stringify(post)}
        </div>
    )
};

export default App;