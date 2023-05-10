export default function personReducer(person, action){

    switch (action.type) {
        case 'updated': {
            const {id, name} = action;
            return {
                ...person,
                mentors: person.mentors.map((mentor) => {
                    if(mentor.id === id) {
                        return {...mentor, name:name};
                    }
                    return mentor;
                })
            }
        }
        case 'added' : {
            const {id, name, title} = action;
            const mentor = {
                id,
                name,
                title
            }
            return {
            ...person,
                // mentors: prevState.mentors.concat(mentor)
                mentors: [...person.mentors, mentor]
            }
        }
        case 'deleted' : {
            const {id} = action;
            return  {
                ...person,
                mentors: person.mentors.filter(m => m.id !== id)
            }
        }

        default:{
            throw Error(`알수없는 액션 타입이다. : ${action.type}`)
        }

    }
}
