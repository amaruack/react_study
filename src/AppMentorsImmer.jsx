import './AppXY.css';
import {useReducer} from "react";
import personReducer from "./reducer/persion-reducer";
import {useImmer} from "use-immer";

export default function AppMentorsImmer(props) {

    const [person, updatePerson] = useImmer(initialPerson);

    const changeMentorName = () => {
        const id = prompt(`who is id change?`);
        const name = prompt(`what's name?`);
        updatePerson( person => {
            person.mentors.find(value => value.id===id).name = name;
        })
    };

    const addMentor = () => {
        const id = prompt(`what's id?`);
        const name = prompt(`what's name?`);
        const title = prompt(`what's title?`);
        updatePerson( person => {
            person.mentors.push({id, name, title});
        })
    };

    const removeMentor = () => {
        const id = prompt(`what's id?`);
        updatePerson( person => {
            const index = person.mentors.findIndex(value => value.id===id);
            person.mentors.splice(index, 1);
        })
    };

    return (
        <div>
            <h1>{person.name}는 {person.title}</h1>
            <p>{person.name}의 멘토는
                {
                    person.mentors.map((mentor, index) => (
                    <li key={mentor.id}>
                        {mentor.name} ({mentor.title})
                    </li>
                    ))
                }
            </p>
            <button onClick={changeMentorName}>멘토 이름 바꾸기</button>
            <button onClick={addMentor}>멘토 추가</button>
            <button onClick={removeMentor}>멘토 삭제</button>
        </div>
    );
}

const initialPerson = {
    name : 'son',
    title : '주니어',
    mentors : [
        {
            id : 'id1',
            name : 'b1',
            title : '시니어'
        },
        {
            id : 'id2',
            name : 'b2',
            title : '시니어'
        }
    ]
}