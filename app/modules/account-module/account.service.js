import { learnGeekDB } from '../../../assets/js/init-firebase.js';

export function AccountService() {

    let collection = learnGeekDB.collection("accounts");

    return {
        getAll: () => {
            
        },

        getOne: (id) => {
            return collection
                .doc(id)
                .get();
        },

        insert: (account) => {
            return collection
                .doc(account.username)
                .set(Object.assign({}, account))
        },

        delete: (id) => {

        },
        
        update: (account) => {
            return collection
                .doc(account.username)
                .set(Object.assign({}, account), { merge: true })
        }
    };
}
