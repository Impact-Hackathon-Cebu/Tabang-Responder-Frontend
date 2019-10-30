import {db} from './firebase'

export const getAllResponder = (cb) => {
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

export const sendResponder = (data, cb) => {    
    data.check.forEach( uid => {        
        db.collection("responders").doc(uid).collection("reports").add({
            "reportReference": db.doc(data.id)
        }).then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
    })
    
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