const users = [];

const add_user = ({id, name, room}) => {
    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();

    const existingUser = users.find((user) => user.room === room && user.name === name);

    if(existingUser) {
        return { error: 'Username already exists!'};
    }

    const user = {id, name, room};

    users.push(user);

    return {user};
}

const remove_user = (id) => {
    const index = users.findIndex((user) => user.id === id);

    if(index !== -1) {
        return users.splice(index, 1)[0];
    }
}

const get_user = (id) => users.find((user) => user.id === id);

//const get_users_in_room = (room) => users.filter((user) => user.room === room);

module.exports = {add_user, remove_user, get_user};