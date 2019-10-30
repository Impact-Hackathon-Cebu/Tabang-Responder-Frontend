import {db} from './firebase'

export const getResponderById = (cb) => {
    return new Promise(function (resolve) {
        var query = db.collection("responders")
        query.onSnapshot((querySnapshot) => {
            const reports = []
            querySnapshot.forEach(doc => {
                
                const id = doc.id
                const report = doc.data() 

                reports.push({...report, id})
            })
            cb(null, reports)
        })
    })
};

export const sendResponder = (cb, form) => {
    console.log('form', form)
    // db.collection("responders")
    //     query.onSnapshot((querySnapshot) => {
    //         const reports = []
    //         querySnapshot.forEach(doc => {
                
    //             doc.collection("reports").add({reportReference: form.id})

    //         })
    //         cb(null, reports)
    //     })
}

export const getReports = (cb) => {
    var query = db.collection("hospitals").doc("Ffv7QjIh6VbiLiYTl8An").collection("reports")
    query.onSnapshot((querySnapshot) => {
        const reports = []
        querySnapshot.forEach(doc => {
            const report = doc.data()                        
            reports.push(report)
        })
        cb(null, reports)
    })
}


// export const getResponderById = (userId) => {
//     return new Promise(function (resolve) {
//         db.collection("responders").doc(userId).get().then(res => {  
//             console.log(res)          
//             let user = res.data();            
//             resolve(user);
//         });
//     })
// };