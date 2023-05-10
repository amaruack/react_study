import React, {useState} from 'react';

export const AppForm = (props) => {

    const [form, setForm] = useState({name:'', email:''});

    const handleSummit = (e) => {
        e.preventDefault();
        console.log(form);
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm(prevState => ({...prevState, [name]:value}))
        // if(name === 'name') {
        //     setForm(prevState => ({...prevState, name:value}))
        // } else if (name === 'email') {
        //     setForm(prevState => ({...prevState, email:value}))
        // }
    }

    return (
        <form onSubmit={handleSummit}>
            <label htmlFor={'name'}>이름</label>
            <input type='text' id='name' name={'name'} value={form.name} onChange={handleChange}/>
            <label htmlFor={'email'}>이메일</label>
            <input type='email' id='email' name={'email'} value={form.email} onChange={handleChange}/>
            <button>Submit</button>
        </form>
    );
};