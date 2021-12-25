type StringOrNum = string | number;
type UserObject  = { name: string, uuid: StringOrNum };

const getUser = (user: UserObject) => {
    console.log(`User name: ${user.name}, user uuid: ${user.uuid}`);
}

const simpe = (anyType: StringOrNum) => {
    console.log(anyType);
}
