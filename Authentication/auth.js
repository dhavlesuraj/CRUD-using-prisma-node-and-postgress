const sessionIdToUserMap=new Map();

export function setUser(id,user){
    sessionIdToUserMap.set(id,user);
}

export function getUser(id,user){
   return sessionIdToUserMap.get(id,user);
}

