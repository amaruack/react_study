import React from 'react';

export const AppCard = () => {
    return (
        <div>
            <Card>
                <Avatar
                    image='https://images.unsplash.com/photo-1683115763606-43dd57a47712?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
                    name='son'
                    size={200}
                />
                <p>안녕하세요</p>
            </Card>
            <Card>
                <h1>Card1</h1>
            </Card>
            <Card>
                <h1>Card1</h1>
            </Card>
        </div>
    );
};

const Card = ({children}) => {

    return (
        <div style={{
            backgroundColor : 'black',
            borderRadius: '20px',
            color: 'white',
            minHeight: '200px',
            maxWidth: '200px',
            margin: '1rem',
            padding: '1rem',
            textAlign: 'center'

        }}>
            {children}
        </div>
    )
}

const Avatar = (pros) => {
    return (
        <div>
            <img
                src={pros.image}
                width={pros.size}
                height={pros.size}
                style={{borderRadius:'50%'}}
            />
        </div>
    )
}