import { Bounce, toast } from "react-toastify";

const getStoredData = () => {
    const storedPlayer = localStorage.getItem('player-id')
    if(storedPlayer){
        const storedList = JSON.parse(storedPlayer)
        return storedList;
    }else{
        return [];
    }
}

const setStoredData = (id) => {
    const storedList = getStoredData()
    if(storedList.includes(id)){
        console.log(id , 'already exist');
        toast.warn('🦄 Wow so easy!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
    }else{
        storedList.push(id)
        const storedListStr = JSON.stringify(storedList)
        localStorage.setItem('player-id' , storedListStr);
        toast.success('🦄 Wow so easy!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
    }
}

export { setStoredData  , getStoredData}