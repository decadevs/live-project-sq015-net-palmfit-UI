import React from 'react'

function useApiRequest() {

    async function post(endPoint, payLoad) {
        return await api("POST", endpoint, payload)
    }
    
    
    async function deleteRes(endPoint, payLoad) {
        return await api("DELETE", endpoint, payload)
    }

    
    async function put(endPoint, payLoad) {
        return await api("PUT", endpoint, payload)
    }
    
    
    async function patch(endPoint, payLoad) {
        return await api("PATCH", endpoint, payload)
        
    }

    async function get(endpoint, payload) {
        return await api("GET", endpoint, payload)
    }

    async function api(method, endpoint, payload) { 
         const res = await fetch(`https://palmfit-test.onrender.com/${endPoint}`, {
            method: method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payLoad)
        })
        const data = await res.json()
        return data
    }



  return (
    {post, get, put, deleteRes, patch }
  )
}

export default useApiRequest