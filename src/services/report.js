import {db} from './firebase'

export const getResponderById = (userId) => {
    return new Promise(function (resolve) {
        db.collection("responders").doc(userId).get().then(res => {  
            console.log(res)          
            let user = res.data();            
            resolve(user);
        });
    })
};

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