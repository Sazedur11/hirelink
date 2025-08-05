const getStoredJobList = () =>{
    const storedListStr = localStorage.getItem('job-list');
    if(storedListStr){
        const storedList = JSON.parse(storedListStr)
        return storedList;
    }
    else{
        return []
    }
}
const addToStoredJobList = (id) =>{
    const storedList = getStoredJobList();
    if(storedList.includes(id)){
        alert('already exist')
    }
    else{
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('job-list', storedListStr)
    }
}

export {addToStoredJobList, getStoredJobList}