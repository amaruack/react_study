import './AppXY.css';
import {memo, useCallback, useMemo, useReducer} from "react";
import personReducer from "./reducer/persion-reducer";

export default function AppMentorsButton(props) {

    const [person, dispatch] = useReducer(personReducer, initialPerson);

    const changeMentorName = useCallback(() => {
        const id = prompt(`who is id change?`);
        const name = prompt(`what's name?`);
        dispatch({type:'updated', id:id, name:name});
    },[]);

    const addMentor = useCallback(() => {
        const id = prompt(`what's id?`);
        const name = prompt(`what's name?`);
        const title = prompt(`what's title?`);
        dispatch({type:'added', id, name, title});
    }, []);

    const removeMentor = useCallback(() => {
        const id = prompt(`what's id?`);
        dispatch({type:'deleted', id});
    },[]);

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
            <Button text='멘토 이름 바꾸기'onClick={changeMentorName}></Button>
            <Button text='멘토 추가'onClick={addMentor}></Button>
            <Button text='멘토 삭제'onClick={removeMentor}></Button>
        </div>
    );
}

const Button = memo(({text, onClick}) => {
    // 무언가 무거운 일을 하고 useMemo를 사용하여 해당 로직을 1번만
    const result = useMemo(() => calculateSomething(),[]);
    return (
        <button onClick={onClick}
        style={{
            backgroundColor: "black",
            color: "white",
            borderRadius: '20px',
            margin:'0.4rem'
        }}>
            {text} {result}
        </button>
    )
})

function calculateSomething() {
    for (let i = 0; i < 10000 ; i++) {
        // console.log()
    }
    return 10;
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