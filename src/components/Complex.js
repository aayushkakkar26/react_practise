const initialData = {
    users: [
        {
            id: 1,
            name: 'Alice',
            age: 25,
            address: {
                street: '123 Main St',
                city: 'Wonderland',
                zip: 12345
            },
            hobbies: ['reading', 'gardening', 'gaming']
        },
        {
            id: 2,
            name: 'Bob',
            age: 30,
            address: {
                street: '456 Maple St',
                city: 'Treeville',
                zip: 67890
            },
            hobbies: ['sports', 'programming', 'traveling']
        },
        {
            id: 3,
            name: 'Charlie',
            age: 28,
            address: {
                street: '789 Oak St',
                city: 'Riverwood',
                zip: 13579
            },
            hobbies: ['music', 'photography', 'painting']
        }
    ],
    settings: {
        theme: 'dark',
        language: 'English',
        notifications: true
    }
};

export default function Complex() {
}