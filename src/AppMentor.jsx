import './AppXY.css';
import {useState} from "react";

export default function AppMentor(props) {

    const [person, setPerson] = useState({
        name : 'son',
        title : '주니어',
        mentor : {
            name : 'bob',
            title : '시니어'
        }
    });

    return (
        <div>
            <h1>{person.name}는 {person.title}</h1>
            <p>{person.name}의 멘토는 {person.mentor.name} / {person.mentor.title}</p>
            <button onClick={() => {
                const name = prompt(`what's name?`);
                setPerson(prevState => ({...prevState, mentor: {...prevState.mentor, name:name}}))
            }}>
                멘토 이름 바꾸기
            </button>
            <button onClick={() => {
                const title = prompt(`what's title?`);
                setPerson(prevState => ({...prevState, mentor: {...prevState.mentor, title:title}}))
            }}>
                멘토 타이틀 바꾸기
            </button>
        </div>
    );
}
