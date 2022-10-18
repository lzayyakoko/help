import React, {createContext, useState} from "react";

export const GContext = createContext();

export const GContextProvieder = ({children}) =>{

    const [ alluserList, setAlluserList] = useState([])
    const [ clickedresult, setClickedResult] = useState([])
    const [ clickindex, setClickIndex] = useState();

    const [ currentIndex, setCurrentIndex] = useState();

    const GettingUserList = () =>{
        fetch(`http://54.250.169.56/api/users`,{
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-type": "application/json",
                "Authorization": `Bearer 279|6wpT0Ngu2zGHdgjLoR8ZkMDXfnfRMDORwS4z5wDT`
            }
        })
        .then((res) =>{
            return res.json()
        })
        .then((data) =>{
          if(data && data.message === 'Unauthenticated.'){
            console.log("token exp")
          } else if(data && data.status ==="success"){
            setAlluserList(data.users)
            } else if(data && data.status === "error") {
                console.log(data.error)
            }
          console.log(data.message)
        })
        .catch((error) => console.log("user list error",error))
    
    }

    // call when scroll end
    const onScrollEnd = () => {
        console.log('end',alluserList[alluserList.length-1].id)
        fetch(`http://54.250.169.56/api/users?start_user_id=${alluserList[alluserList.length-1].id}`,{
          method: "GET",
          headers: {
            "Accept": "application/json",
              "Content-type": "application/json",
              "Authorization": `Bearer 279|6wpT0Ngu2zGHdgjLoR8ZkMDXfnfRMDORwS4z5wDT`
          }
      })
      .then((res) =>{
          return res.json()
      })
      .then((data) =>{
        if(data && data.message === 'Unauthenticated.'){
          console.log("token exp")
        } else if(data && data.status ==="success"){
          setAlluserList(alluserList.concat(data.users))
          } else if(data && data.status === "error") {
              console.log('all user list error')
           
          }
      })
      .catch((error) => console.log("user list error",error))
    
      }

    const backandNext = (clickedIndex) =>{
      const result = [alluserList[clickedIndex-1],alluserList[clickedIndex], alluserList[clickedIndex+1]]
      setClickedResult(result)
      console.log(clickedIndex)
    }


    return(
        <GContext.Provider
        value={{
            GettingUserList,
            alluserList,
            clickedresult,
            onScrollEnd,
            clickindex,
            setClickIndex,
            backandNext,
            setCurrentIndex,
            currentIndex,
        }}
        >
            {children}
        </GContext.Provider>
    )
}