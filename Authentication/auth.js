const sessionIdToUserMap=new Map();

export function setUser(id,user){
    sessionIdToUserMap.set(id,user);
    //console.log(sessionIdToUserMap);
}

export function getUser(id){
    //console.log(sessionIdToUserMap);
    return sessionIdToUserMap.get(id);
}

