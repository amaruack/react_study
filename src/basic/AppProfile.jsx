import logo from '../logo.svg';
import './App.css';
import {Profile} from "./component/Profile";
import {Avatar} from "./component/Avatar";

export default function AppProfile() {

    const clickHandle = (event) => {
        console.log(event);
        alert("clicked");
    }

    return (
        <>
            <button onClick={clickHandle} >button</button>
            <Profile
                image='https://images.unsplash.com/photo-1683115763606-43dd57a47712?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
                name='Son ss'
                title={'신입 개발자'}
                isNew={true}
            />
            <Profile
                image='https://images.unsplash.com/photo-1683115763606-43dd57a47712?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
                name='Son ss'
                title={'백엔드 개발자'}
                isNew={false}
            />
            <Profile
                image='https://images.unsplash.com/photo-1683115763606-43dd57a47712?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
                name='Son ss'
                title={'프론트엔드 개발자'}
                isNew={false}
            />
            <Avatar
                image={'https://images.unsplash.com/photo-1683115763606-43dd57a47712?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'}
                isNew={true}
            />
        </>
    );
}
